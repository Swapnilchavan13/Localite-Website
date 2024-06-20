import React from 'react';
import '../styles/navbar.css';

export const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='navbar'>
        <div className='logodiv' onClick={() => handleScroll('about-us')}>
          <img src="About us.png" alt="About Us" />
          <p>About Us</p>
        </div>
        
        <div className='logodiv' onClick={() => handleScroll('services')}>
          <img src="Services.png" alt="Our Services" />
          <p>Our Services</p>
        </div>      
        
        <div className='logodiv' onClick={() => handleScroll('why-us')}>
          <img src="Why us.png" alt="Why Us?" />
          <p>Why Us?</p>
        </div>

        <div className='logodiv' onClick={() => handleScroll('explore')}>
          <img src="Explore.png" alt="Explore" />
          <p>Explore</p>
        </div>
      </div>

      <hr />
    </>
  );
}
