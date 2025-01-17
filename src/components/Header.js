// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // We'll create a separate CSS file for styling

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home-section" className="brand-logo">
            Ramesh Peshala
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home-section" className="nav-link" onClick={closeMenu}>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-section" className="nav-link" onClick={closeMenu}>
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume-section" className="nav-link" onClick={closeMenu}>
              <span>Resume</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#articles-section" className="nav-link" onClick={closeMenu}>
              <span>Articles</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#project-section" className="nav-link" onClick={closeMenu}>
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact-section" className="nav-link" onClick={closeMenu}>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;