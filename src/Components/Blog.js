import React from 'react';
import './Blog.css';
import axios from 'axios';
import comingSoon from '../assets/comingSoon.jpg';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogPosts: [] };
  }

  // componentDidMount() {
  //   axios.get('/blogPosts')
  //     .then(response => {
  //       this.setState({ blogPosts: response.data })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  render() {
    return (
      <div className='mainBlogContainer'>
        <div className='blogPicContainer'>
          <img className='blogPic' alt='coming soon' src={comingSoon}/>
        </div>


        {/* <h1>A beautiful blog. I am.</h1>
        <div>
          {this.state.blogPosts.map(blogPost => {
            return <div key={blogPost._id}>
              <h2>{blogPost.title}</h2>
              <p>{blogPost.body}</p>
            </div>
          })}
        </div> */}
      </div>  
    )
  }
}

export default Blog;
