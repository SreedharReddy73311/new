import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
     "home","about", "products", "medical", 
    "careers", "partners", "testimonials", "contact"
  ];

  // Helper to format URLs
  const getPath = (link) => link === "Home" ? "/" : `/${link.toLowerCase()}`;

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-icon">v</div>
          <span className="logo-text">VIGASI</span>
        </Link>

        {/* Hamburger Icon (Three Lines) */}
        <div className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => {
            const path = getPath(link);
            const isActive = location.pathname === path;

            return (
              <li key={index} className={isActive ? "active-link" : ""}>
                <Link to={path} onClick={closeMenu}>
                  {link}
                </Link>
              </li>
            );
          })}
          
          <li className="mobile-only-btn">
            <button className="get-started-btn">Get Started</button>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="nav-actions">
          <span className="signin-link">Sign In</span>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;