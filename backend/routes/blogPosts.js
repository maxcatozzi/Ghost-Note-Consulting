const router = require('express').Router();
let BlogPost = require('../models/blogpost.model');
const passport = require('passport');

//gets all blog posts
router.get('/',(req, res) => {
  BlogPost.find()
    .then(blogPosts => res.json(blogPosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//allows logged in user to add a blog post
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

//allows a logged in user to update a blog post
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

//allows a logged in user to delete a blog post
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  BlogPost.findById(req.params.id)
    .then(blogPost => {
      blogPost.delete(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "An error has occured", msgError: true } });
        }
        else {
          res.status(200).json({ message: { msgBody: "Blog post has been deleted!", msgError: false } });
        }
      });
    });
});

router.delete('/deleteAll', () => {
  BlogPost.deleteMany({'title': "testTitle"}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
  });
})


module.exports = router;