import { useState } from "react";
import React from "react";
import "./index.css";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    alert("Welcome to ZecPath, start applying now");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">ZecPath</h1>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>Home</li>
          <li>About</li>
          <li>Find Jobs</li>
          <li>Companies</li>
          <li>Signup</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find your dream job here</h2>
        <p>Connecting skill with opportunity</p>
        <button onClick={handleClick}>Get Started</button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="card">
          <h3>Verified Jobs</h3>
          <p>Apply only to trusted and verified companies</p>
        </div>

        <div className="card">
          <h3>Easy Apply</h3>
          <p>Apply to your dream jobs with just one click</p>
        </div>

        <div className="card">
          <h3>Career Growth</h3>
          <p>Find roles that match your skills and goals</p>
        </div>
      </section>

      {/* About Us */}
      <section className="about">
        <h2 className="about-title">About Us</h2>

        <p className="about-desc">
          Zecser Business is an innovative firm based in Kerala, India, committed
          to advancing business through technology, training, and transformation.
          We bring together developers, trainers, and consultants with one
          mission: to empower you with the tools and skills to succeed.
        </p>

        <div className="about-container">
          <div className="about-box">
            <h3>Our Vision</h3>
            <p>
              To be a trusted technology and training partner for startups, SMEs,
              and professionals by delivering quality, reliability, and
              future‑ready services.
            </p>
          </div>

          <div className="about-box">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting‑edge digital solutions and equip
              individuals with technical and soft skills, creating sustainable
              success stories in the modern digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ZecPath. All rights reserved.</p>
      </footer>
    </div>
  );
}