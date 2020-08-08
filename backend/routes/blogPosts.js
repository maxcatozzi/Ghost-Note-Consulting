const router = require('express').Router();
let BlogPost = require('../models/blogPost.model');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');


router.get('/',(req, res) => {
  BlogPost.find()
    .then(blogPosts => res.json(blogPosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', passport.authenticate('jwt',{session : false}),(req, res) => {
  const { title, body } = req.body;
  const blogPost = new BlogPost({
    title,
    body,
  });
  blogPost.save(err => {
    if (err) {
      res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
    }
    else {
      res.status(200).json({ message: { msgBody: "Blog post has been created!", msgError: false } });
    }
  });
});

router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  BlogPost.findById(req.params.id)
    .then(blogPost => {
      const { title, body } = req.body;
      blogPost.title = title;
      blogPost.body = body;

      blogPost.save(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
        }
        else {
          res.status(201).json({ message: { msgBody: "Blog post has been updated!", msgError: false } });
        }
      });
    });
});

// router.route('/add').post((req, res) => {
//   const title = req.body.title;
//   const body = req.body.body;
//   // const date = Date.parse(req.body.date);

//   const newBlogPost = new BlogPost({
//       title,
//       body,
//       // date,
//     });
  
//   newBlogPost.save()
//     .then(() => res.json('Blog Post added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;