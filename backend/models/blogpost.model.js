const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: { type: String, required: true, minlength: 1},
  body: { type: String, required:true },
  // date: { type: Date, required: false },
}, {
    timestamps: true,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;