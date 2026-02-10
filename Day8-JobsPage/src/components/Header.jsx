import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">zecpath</h1>
      </div>

      {/* Desktop Navigation - shown on larger screens */}
      <nav className="desktop-nav">
        <div className="nav-icons">
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <span>
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span>
            <i className="fa-solid fa-bell"></i>
          </span>
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </nav>

      {/* Hamburger button for mobile */}
      <button 
        className="hamburger-btn" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile menu - shown when hamburger is clicked */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-icons">
          <span>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </span>
          <span>
            <i className="fa-solid fa-briefcase"></i>
            <span>Jobs</span>
          </span>
          <span>
            <i className="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </span>
          <span>
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;