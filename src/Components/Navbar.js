import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const test = useMediaQuery({
    query: '(max-width: 800px)'
  })

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className='Header'>
      <Link to='/' className='Logo' >Ghost Note Consulting</Link>
      <div  onClick={toggleNav} className='Burger'>Buger Boi</div>
      {(!test || isNavVisible) && (
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
