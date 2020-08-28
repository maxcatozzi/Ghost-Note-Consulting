import React from 'react';
import video from '../video/record_vid.mp4'; 
import './Home.css';
import { useMediaQuery } from 'react-responsive';


function Home() {

  // const largeView = useMediaQuery({
  //   query: '(min-width: 800px)'
  // })

  // const extraLargeView = useMediaQuery({
  //   query: '(min-width: 800px)'
  // })


  return (
    <div>
      <div>
        <div className='videoContainer'>
          <video className='recordVid'autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <div className='foregroundLayer'>
          </div>
          <div className='greeting'>
            <h1>Cool Slogan</h1>
            <h2>Another cool slogan</h2>
          </div>
        </div>
      </div>
      {/* <div className='videoOverlay'></div>
      <div>Hi</div> */}
    </div>
  );
}

export default Home;
