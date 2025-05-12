import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/websitelogo.png"} alt="Website Logo" />
        </a>
      </div>
      <button
        className={`navbar-toggle${menuOpen ? " open" : ""}`}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        <li>
          <a href="/" className="nav-link" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#story" className="nav-link" onClick={handleLinkClick}>About us</a>
        </li>
        <li>
          <a href="/ai-automation-agents" className="nav-link nav-glow" onClick={handleLinkClick}>AI Agents</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;