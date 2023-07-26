import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the hamburger dropdown menu when a link is clicked
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <span className="navbar-logo">IITI Counselling Services</span>
        <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span className={`toggle-icon ${isMenuOpen ? 'rotate' : ''}`}></span>
          <span className={`toggle-icon ${isMenuOpen ? 'rotate' : ''}`}></span>
          <span className={`toggle-icon ${isMenuOpen ? 'rotate' : ''}`}></span>
        </button>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to= '/' onClick={handleLinkClick}>Home</Link>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#team" onClick={handleLinkClick}>Our Team</a>
        <NavLink exact to= "/activities" onClick={handleLinkClick}>Activities</NavLink>
        <NavLink exact to= "/information" onClick={handleLinkClick}>Information</NavLink>
        <a href="#FAQ" onClick={handleLinkClick}>FAQ's</a>
        <a href="#contact-details" onClick={handleLinkClick}>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
