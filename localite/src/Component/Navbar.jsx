import React from 'react';
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='logodiv'>
      <img src="About us.png" alt="" />
      <p>About Us</p>
      </div>
      
      <div className='logodiv'>
      <img src="Services.png" alt="" />
      <p>Our Services</p>
      </div>      
      
      <div className='logodiv'>
      <img src="Why us.png" alt="" />
      <p>Why Us?</p>
      </div>

      <div className='logodiv'>
      <img src="Explore.png" alt="" />
      <p>Explore</p>
      </div>

    </div>

    <hr />
    </>
  )
}
