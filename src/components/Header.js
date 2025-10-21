import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className="navbar" 
      style={{
        background: isHomePage 
          ? (scrolled ? 'rgba(111, 78, 55, 0.9)' : 'rgba(111, 78, 55, 0.4)')
          : 'rgba(111, 78, 55, 0.95)'
      }}
    >
      <div className="logo">Blend & Co.</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;

