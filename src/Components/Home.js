import React from 'react';
import video from '../video/record_vid.mp4'; 
import './Home.css';

class Home extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('.recordVid').style.opacity = 1; 
      document.querySelector('.greeting').style.opacity = 1;
      document.querySelector('.mainContainer').style.opacity = 1; 
    },250)
  }

  render() {
    return (
      <div className='homeContainer'>
      {/* <div className='videoContainer'>
        <video className='recordVid'autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        {/* <div className='foregroundLayer'>
        </div> */}
        {/* <div className='greeting'>
          <h1>Cool Slogan</h1>
          <h2>Another cool slogan</h2>
        </div>
      </div> */}
        <div className='videoContainer'>
          <video className='recordVid'autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <div className='greeting'>
            <h1>Cool Slogan</h1>
            <h2>Another cool slogan</h2>
          </div>
        </div>
        <div className='mainContainer'>
          <div className='aboutMeContainer'></div>
        </div>
      </div>

    );
  }
}

export default Home;