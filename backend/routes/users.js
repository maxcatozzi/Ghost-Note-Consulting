const router = require('express').Router();
let User = require('../models/user.model');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');

const signToken = userID => {
  return JWT.sign({
    iss: "GoblinKing",
    sub: userID
  }, "GoblinKing", {expiresIn: "3h"});
}

router.get('/',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',(req, res) => {
  
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
    }
    if (user) {
      res.status(400).json({ message: { msgBody: "That username is already taken", msgError: true } });
    }
    else {
      const newUser = new User({ username, password });
      newUser.save(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
        }
        else {
          res.status(201).json({ message: { msgBody: "Account has been created!", msgError: false } });
        }
      });
    }
  });
});

router.post('/login', passport.authenticate('local',{session : false}),(req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
});
  
router.get('/logout', passport.authenticate('jwt',{session : false}),(req, res) => {
  res.clearCookie('access_token');
  res.json({ user: { username: "" }, success: true });
});
  
module.exports = router;