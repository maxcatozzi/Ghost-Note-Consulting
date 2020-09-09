import React from 'react';
import './Blog.css';
import axios from 'axios';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogPosts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogPosts')
      .then(response => {
        this.setState({ blogPosts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='mainBlogContainer'>
        <h1>A beautiful blog. I am.</h1>
        <div>
          {this.state.blogPosts.map(blogPost => {
            return <div key={blogPost._id}>
              <h2>{blogPost.title}</h2>
              <p>{blogPost.body}</p>
            </div>
          })}
        </div>
      </div>  
    )
  }
}

export default Blog;
