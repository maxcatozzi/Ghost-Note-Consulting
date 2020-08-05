const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  title: { type: String, required: true, minlength: 1},
  description: { type: String, required:true },
  date: { type: Date, required: true },
}, {
    timestamps: true,
});

const BlogPost = mongoose.model('Exercise', blogPostSchema);

module.exports = BlogPost;