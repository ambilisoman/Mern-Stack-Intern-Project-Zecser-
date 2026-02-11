// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MERN Stack Project</h1>
      </div>
      
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#day9">Day 9 Task</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="navbar-actions">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;