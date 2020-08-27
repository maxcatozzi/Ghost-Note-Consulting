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
  const [burgerColor, setBurgerColor] = useState('burgerClosed');
  const [navPosition, setNavPosition] = useState('animateNav');

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  
  useEffect(() => {
    if (isNavVisible) {
      setBurgerColor('burgerOpen');
      setNavPosition('animateNav');
    }
    else {
      setBurgerColor('');
      setNavPosition('');
    }
  }, [isNavVisible]);

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
            <Hamburger className='burgerIcon' />
          </div>
        </div>
      </div>
      
      {(largeView || isNavVisible) && (
        <nav className={`nav ${navPosition}`}>
          <div className='navArea'>
            <div> <Link to='/' className='navLink'>Home</Link> </div>
            <div><Link to='/' className='navLink'>About Me</Link></div>
            <div> <Link to='/Blog' className='navLink'>Blog</Link> </div>
            <div> <Link to='/Contact' className='navLink'>Contact Me</Link> </div>
          </div>
        </nav>
        
      )}
    </header>
  );
}

export default Navbar;
