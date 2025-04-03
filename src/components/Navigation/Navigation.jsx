import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    // Only add the event listener if the nav is open
    if (isNavOpen) {
      document.addEventListener('click', closeNav);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('click', closeNav);
    };
  }, [isNavOpen]);

  return (
    <nav className="navigation">
      <div className="nav-container" onClick={(e) => e.stopPropagation()}>
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Caleb Yinusa
          </Link>
        </h1>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeNav}>Home</Link>
          <Link to="/expertise" onClick={closeNav}>Expertise</Link>
          <Link to="/projects" onClick={closeNav}>Projects</Link>
          <Link to="/reachout" onClick={closeNav}>Reach Out</Link>
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