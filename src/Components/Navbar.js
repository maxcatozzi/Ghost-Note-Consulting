import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Ghost Note Consulting</Link>
      <div>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/Blog">Blog</Link> </li>
          <li> <Link to="/Contact">Contact Me</Link> </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
