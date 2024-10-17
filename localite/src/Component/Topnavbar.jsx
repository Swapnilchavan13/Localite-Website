import React, { useState } from 'react';
import '../styles/topnavbar.css';

export const Topnavbar = ({ scrollToAbout, scrollToFAQs, scrollToServices }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='topdiv'>
      <a href="/">
        <img src="w_logo.png" alt="Logo" />
      </a>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Dropdown menu */}
      <div className={`dropdown-menu ${isOpen ? 'dropdown-active' : 'dropdown-not'}`}>
        <button className='navreg' onClick={() => window.open("https://localite.services/merchantform")}>Register Now!</button>
        <p onClick={scrollToServices}>Our Services</p>
        <p onClick={scrollToFAQs}>Testimonials</p>
        <p onClick={scrollToAbout}>About Us</p>
      </div>
    </div>
  );
};
