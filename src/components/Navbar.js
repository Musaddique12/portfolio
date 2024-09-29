import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';


const Navbar = (page) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">My Portfolio</h1>
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li>
            <Scroll to="/"  smooth={true} duration={500}>Home</Scroll>
          </li>
          <li>
            <Scroll to="about-me"  smooth={true} duration={500}>About Me</Scroll>
          </li>
          <li>
            <Scroll to="skills"  smooth={true} duration={500}>Skills</Scroll>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Scroll to="contact"  smooth={true} duration={500}>Contact</Scroll>
          </li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line1 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`line2 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`line3 ${isOpen ? 'toggle' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
