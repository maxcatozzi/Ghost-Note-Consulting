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

//gets all users
router.get('/',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//adds new user
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

//allows user to login
router.post('/login', passport.authenticate('local',{session : false}),(req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
});
  
//allows user to log out
router.get('/logout', passport.authenticate('jwt',{session : false}),(req, res) => {
  res.clearCookie('access_token');
  res.json({ user: { username: "" }, success: true });
});

//allows user to update username and password
router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const { username, password } = req.body;
      user.username = username;
      user.password = password;

      user.save(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
        }
        else {
          res.status(201).json({ message: { msgBody: "User info has been updated!", msgError: false } });
        }
      });
    });
});

//allows user to delete their account
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.delete(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
        }
        else {
          res.status(200).json({ message: { msgBody: "Your account has been deleted!", msgError: false } });
        }
      });
    });
});

module.exports = router;