import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 🔁 Get current path

  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current && st > 100) {
        setHidden(true); // Scroll down → hide navbar
      } else {
        setHidden(false); // Scroll up → show navbar
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="navbar-logo">
        <img src="/logo512.svg" alt="A-THON Logo" />
        <span className="logo-title">
          A-THON<br />
          <small>THERMOFORMING</small>
        </span>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={handleNavClick}
          >HOME</Link>
        </li>
        <li>
          <Link
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
            onClick={handleNavClick}
          >PRODUCT & SERVICES</Link>
        </li>
        <li>
          <Link
            to="/machinery"
            className={location.pathname === '/machinery' ? 'active' : ''}
            onClick={handleNavClick}
          >MACHINERY</Link>
        </li>
        <li className="dropdown">
          <Link
            to="/about"
            className={location.pathname.startsWith('/about') ? 'active' : ''}
            onClick={handleNavClick}
          >ABOUT US </Link>
        </li>
        <li className="mobile-contact">
          <Link to="/contact" onClick={handleNavClick}>CONTACT US</Link>
          </li>
      </ul>

      {/* CONTACT Button for desktop */}
      <Link
        to="/contact"
        className="contact-btn desktop-only"
        onClick={handleNavClick}
      >CONTACT US</Link>
    </nav>
  );
};

export default Navbar;

