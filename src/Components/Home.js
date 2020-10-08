import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import video from '../video/record_vid.mp4'; 
import './Home.css';
import Contact from './Contact';
import mark from '../assets/Mark Patton.jpg';
import ygt from '../assets/ygt_small.jpg';


function Home() {

  const location = useLocation();

  useEffect(() => {
    // finds and scrolls to page element that correlates to nav link
    let elem;
    if (location.hash) {
      elem = document.getElementById(location.hash.slice(1));
    } else {
      elem = document.getElementById('video');
    }
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      document.querySelector('.recordVid').style.opacity = 1; 
      document.querySelector('.greeting').style.opacity = 1;
      document.querySelector('.mainContainer').style.opacity = 1; 
    },250)
  }, [location])

  return (
    <div className='homeContainer'>
      <div id='video' className='videoContainer'>
        <video className='recordVid' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className='greeting'>
          <h1>Real consulting</h1>
          <h2>for Real musicians</h2>
        </div>
      </div>
      <div className='mainContainer'>
        <section id='aboutMe' className='aboutMeContainer sectionContainer'>
          <div className='sectionContent aboutMeContent'>
            <div className='aboutMeImgContainer'>
              <img className='aboutMeImg' alt='Mark Patton' src={mark}/>
            </div>
            <div className='sectionText aboutMeText'>
              <div className='sectionTitle'>
                <h1>About Me</h1>
              </div>
              <div className='aboutMeDescription'>
                <p>My name is Mark Patton, and I am a licensed Marriage and Family Therapist practicing in California. I have a deep appreciation for music and those who make it happen, including musicians, roadies, managers, producers and all involved in the process of bringing live music to the public. I understand that travelling music industry professionals struggle with many personal and emotional stressors, from missing loved ones to the basic challenges that come with the lifestyle.</p>

                <p>I was inspired to begin my consulting services by the New Orleans Jazz and Heritage Festival, which I religiously attended annually since before the Katrina disaster and before COVID-19. My passion is to help those that bring the life to live music.</p>

                <p>I have been practicing in Northern California (Morgan Hill area) since 2013 and I'm interested in improving the well-being of all those with like minded, creative and musically inspired minds!</p>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='servicesContainer sectionContainer'>
          <div className='sectionContent'>
            <div className='sectionText'>
              <div className='sectionTitle'>
                <h1>Services</h1>
              </div>
              <div className='servicesListContainer'>
                <ul className='servicesList'>
                  <li>Provides one-on-one consulting services for individuals and families in the music industry that are impacted by elements of travel stress, COVID-19 related issues, or other basic human stressors</li>

                  <li>Support available on-line to accommodate those on the road or stuck at home</li>

                  <li>Utilizes Doxy.me to provide confidential video sessions</li>
                </ul>
                </div>
            </div>
            <div className='servicesPic'>
              <img className='ds' alt='you got this' src={ygt} />
            </div>
          </div>
        </section>

        <section id='contact' className='contactContainer sectionContainer'><Contact /></section>
        <footer className='footer'>© 2020 by Kayax
        </footer>
      </div>
    </div>

  );
}

export default Home;