import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  // State to manage the visibility of the navigation links
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation links
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1>Caleb Yinusa</h1>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleNav}>Home</Link>
          <Link to="/expertise" onClick={toggleNav}>Expertise</Link>
          <Link to="/projects" onClick={toggleNav}>Projects</Link>
          <Link to="/reachout" onClick={toggleNav}>Reach Out</Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://x.com/calebyinusaa" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/calebyinusa/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/caleb-yinusa-3ab3442b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;