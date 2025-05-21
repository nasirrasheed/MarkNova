import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/Websitelogo.png"} alt="Website Logo" />
        </a>
      </div>
      <button
        className={`navbar-toggle${menuOpen ? " open" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={handleToggle}
      >
        {menuOpen ? (
          <span className="navbar-toggle-close">&times;</span>
        ) : (
          <>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </>
        )}
      </button>
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        <li>
          <a href="/" className="nav-link" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#story" className="nav-link" onClick={handleLinkClick}>About us</a>
        </li>
        <li>
          <a href="/portfolio" className="nav-link nav-glow nav-portfolio" onClick={handleLinkClick}>Portfolio</a>
        </li>
        <li>
          <a href="/ai-automation-agents" className="nav-link nav-glow nav-portfolio" onClick={handleLinkClick}>AI Agents</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;