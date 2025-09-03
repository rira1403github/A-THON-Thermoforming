import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current && st > 100) {
        setHidden(true); 
      } else {
        setHidden(false); 
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
        <img src="/logo-main.png" alt="A-THON Logo" />
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
          >OUR COMPANY</Link>
        </li>
        <li>
          <Link
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
            onClick={handleNavClick}
          >GALLERY</Link>
        </li>
        <li>
          <Link
            to="/machinery"
            className={location.pathname === '/machinery' ? 'active' : ''}
            onClick={handleNavClick}
          >SERVICE</Link>
        </li>
        <li className="dropdown">
          <Link
            to="/about"
            className={location.pathname.startsWith('/about') ? 'active' : ''}
            onClick={handleNavClick}
          >INDUSTRY</Link>
        </li>
        <li className="mobile-contact">
          <Link to="/contact" onClick={handleNavClick}>CONTACT US</Link>
          </li>
      </ul>

      <Link
        to="/contact"
        className="contact-btn desktop-only"
        onClick={handleNavClick}
      >GET A FREE QUOTE</Link>
    </nav>
  );
};

export default Navbar;