import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

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

  // navigation uses anchors with absolute hashes; clicks close the mobile menu via `closeNav`

  return (
    <nav className="navigation">
      <div className="nav-container" onClick={(e) => e.stopPropagation()}>
        <h1>
          <a href="/" onClick={closeNav} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            Caleb Yinusa
          </a>
        </h1>

        {/* Hamburger Menu */}
        <div
          className="hamburger"
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleNav(); }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
  <div className={`nav-links ${isNavOpen ? 'active' : ''}`} role="navigation" aria-label="Main Navigation" aria-hidden={!isNavOpen && window.innerWidth <= 768}>
          <a href="/" onClick={closeNav} aria-current={location.pathname === '/' && !location.hash ? 'true' : undefined}>Home</a>
          <a href="/#expertise" onClick={closeNav} aria-current={location.hash === '#expertise' ? 'true' : undefined}>Expertise</a>
          <a href="/#projects" onClick={closeNav} aria-current={location.hash === '#projects' ? 'true' : undefined}>Projects</a>
          <a href="/#reachout" onClick={closeNav} aria-current={location.hash === '#reachout' ? 'true' : undefined}>Reach Out</a>
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