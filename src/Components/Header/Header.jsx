import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h4>SR-EState</h4>
      </div>
      <nav className="nav-links">
        <a href="#">Residencies</a>
        <a href="#">Our Value</a>
        <a href="#">Contact Us</a>
        <a href="#">Get Started</a>
        <button className="contact-btn">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
