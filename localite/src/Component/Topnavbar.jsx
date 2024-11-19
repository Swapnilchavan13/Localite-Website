import React, { useState } from 'react';
import '../styles/topnavbar.css';
import { Link, useLocation } from 'react-router-dom';

export const Topnavbar = ({ scrollToAbout, scrollToFAQs, scrollToServices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of paths for which we want to show only the logo and "Register Now"
  const restrictedPaths = [
    '/terms', 
    '/privacy', 
    '/careers', 
    '/contactus', 
    '/shipping', 
    '/return'
  ];

  // Check if the current page is one of the restricted paths
  const isRestrictedPage = restrictedPaths.includes(location.pathname);

  return (
    <div className='topdiv'>
      {/* Show only the logo and Register Now on restricted pages */}
      {isRestrictedPage ? (
        <>
          <a href="/">
            <img src="w_logo.png" alt="Logo" />
          </a>
          <button className='navreg' onClick={() => window.open("https://localite.services/login", "_blank", "noopener,noreferrer")}>
            Register Now!
          </button>
        </>
      ) : (
        <>
          <a href="/">
            <img src="w_logo.png" alt="Logo" />
          </a>

          {/* Hamburger icon */}
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          {/* Dropdown menu */}
          <div className={`dropdown-menu ${isOpen ? 'dropdown-active' : 'dropdown-not'}`}>
          <button
  className="navreg animated-button"
  onClick={() => window.open("https://localite.services/login", "_blank", "noopener,noreferrer")}
>
  Register Now!
</button>

            <p onClick={scrollToServices}>Our Services</p>
            <p onClick={scrollToFAQs}>Testimonials</p>
            <p onClick={scrollToAbout}>About Us</p>
            <Link to='/contactus'>
              <p>Contact Us</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
