import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      {/* Logo */}
      <h2 className="logo">zecpath</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="search"
      />

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Nav Items */}
      <div className={`nav-icons ${menuOpen ? "show" : ""}`}>

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

    </div>
  );
};

export default Navbar;
