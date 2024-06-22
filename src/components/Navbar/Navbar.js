// Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" /> Greedy Aces
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Tournaments</button>
        <button className="navbar-button">Achievements</button>
        <button className="navbar-button">Contact</button>
        <button className="navbar-button">About</button>
      </div>
    </nav>
  );
};

export default Navbar;
