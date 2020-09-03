import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Hamburger from './Hamburger.js';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


function Navbar() {
  const largeView = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [burgerColor, setBurgerColor] = useState('');
  const [navPosition, setNavPosition] = useState('');

  const toggleNav = () => {
    console.log('works');
    if (!largeView) {
      if (isNavVisible) {
        setNavPosition('');
        setBurgerColor('');
        setTimeout(() => {
          setIsNavVisible(!isNavVisible);
        }, 500);
      } else {
        setIsNavVisible(!isNavVisible);
        setTimeout(() => {
          setNavPosition('animateNav');
        }, 0);
        setBurgerColor('burgerOpen');
      }
    }
  };

  useEffect(() => {
    if (largeView === true) {
      setIsNavVisible(false);
      setBurgerColor('');
    }
  },[largeView])
  
  return (
    <header className='header'>
      <div className='titleBar'>
        <div className='logoArea'>
          <div className='logoContainer'>
            <Link to='/' className='logo' >Ghost Note Consulting</Link>
          </div>
        </div>
        <div className={`burger ${burgerColor}`}>
          <div onClick={toggleNav}> 
            <Hamburger />
          </div>
        </div>
      </div>
      
      {(largeView || isNavVisible) && (
        <nav className={`nav ${navPosition}`}>
          <div className='navArea'>
            <div> <Link to='/' onClick={toggleNav} className='navLink'>Home</Link> </div>
            <div> <Link to='/' onClick={toggleNav} className='navLink'>Services</Link> </div>
            <div><Link to='/' onClick={toggleNav} className='navLink'>About Me</Link></div>
            <div> <Link to='/' onClick={toggleNav} className='navLink'>Contact</Link> </div>
            <div> <Link to='/Blog' onClick={toggleNav} className='navLink'>Blog</Link> </div>
          </div>
        </nav>
        
      )}
    </header>
  );
}

export default Navbar;
