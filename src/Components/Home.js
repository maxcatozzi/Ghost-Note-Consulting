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
          <div className='servicesContainer'>
            <div className='servicesContent'>
              <div className='servicesText'>
                <h1>Services</h1>
                <ul>
                  <li>“Why, you stuck-up, half-witted, scruffy-looking nerf herder!” — Leia Organa</li>
                  <li>“The Force will be with you. Always.” — Obi-Wan Kenobi</li>
                  <li>“I find your lack of faith disturbing.” — Darth Vader</li>
                  <li>“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa</li>
                </ul>
              </div>
              <div className='servicesPic'>
                <img className='ds' alt='death star' src='https://www.centives.net/S/wp-content/uploads/2014/03/032314_0747_HowMuchWoul1.png' />
              </div>
            </div>
          </div>
          <div className='aboutMeContainer'></div>
          <div className='contactContainer'></div>
          <footer className='footer'>© 2020 by Kayax
           
          </footer>
        </div>
      </div>

    );
  }
}

export default Home;