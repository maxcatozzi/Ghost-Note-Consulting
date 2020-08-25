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

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  
  useEffect(() => {
    if (isNavVisible) {
      setBurgerColor('burgerOpen');
    }
    else {
      setBurgerColor('');
    }
  }, [isNavVisible]);

  return (
    
    <header className='Header'>
      <Link to='/' className='Logo' >Ghost Note Consulting</Link>
      <div className={`Burger ${burgerColor}`}>
        <div onClick={toggleNav}><Hamburger className='BurgerIcon' /></div>
      </div>
      {(largeView || isNavVisible) && (
        <nav className='Nav'>
          <div> <Link to='/' className='NavLink'>Home</Link> </div>
          <div><Link to='/' className='NavLink'>About Me</Link></div>
          <div> <Link to='/Blog' className='NavLink'>Blog</Link> </div>
          <div> <Link to='/Contact' className='NavLink'>Contact Me</Link> </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
