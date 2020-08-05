const router = require('express').Router();
let BlogPost = require('../models/blogPost.model');

router.route('/').get((req, res) => {
  BlogPost.find()
    .then(blogPosts => res.json(blogPosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  // const date = Date.parse(req.body.date);

  const newBlogPost = new BlogPost({
      title,
      body,
      // date,
    });
  
  newBlogPost.save()
    .then(() => res.json('Blog Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;