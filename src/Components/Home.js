import React from 'react';
import video from '../video/record_vid.mp4'; 
import './Home.css';
import Contact from './Contact';
import yoda from '../assets/yoda.jpg';

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
          <div className='servicesContainer sectionContainer'>
            <div className='sectionContent'>
              <div className='sectionText'>
                <div className='sectionTitle'>
                  <h1>Services</h1>
                </div>
                <div className='servicesListContainer'>
                  <ul className='servicesList'>
                    <li>“Why, you stuck-up, half-witted, scruffy-looking nerf herder!” — Leia Organa</li>
                    <li>“The Force will be with you. Always.” — Obi-Wan Kenobi</li>
                    <li>“I find your lack of faith disturbing.” — Darth Vader</li>
                    <li>“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa</li>
                    <li>"Luke, I am your Father!" — Darth Vader</li>
                  </ul>
                  </div>
              </div>
              <div className='servicesPic'>
                <img className='ds' alt='death star' src='https://www.centives.net/S/wp-content/uploads/2014/03/032314_0747_HowMuchWoul1.png' />
              </div>
            </div>
          </div>
          <div className='aboutMeContainer sectionContainer'>
            <div className='sectionContent aboutMeContent'>
              <div className='aboutMeImgContainer'>
                <img className='aboutMeImg' alt='yoda' src={yoda}/>
              </div>
              <div className='sectionText aboutMeText'>
                <div className='sectionTitle'>
                  <h1>About Me</h1>
                </div>
                <div className='aboutMeDescription'>
                  <p>A really cool dude, Mark is. Many qualifications, he does have. Help you with all of your consulting needs, he will.</p>
                  <p>A really cool dude, Mark is. Many qualifications, he does have. Help you with all of your consulting needs, he will.</p>
                  <p>A really cool dude, Mark is. Many qualifications, he does have. Help you with all of your consulting needs, he will.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contactContainer'><Contact /></div>
          <footer className='footer'>© 2020 by Kayax
          </footer>
        </div>
      </div>

    );
  }
}

export default Home;