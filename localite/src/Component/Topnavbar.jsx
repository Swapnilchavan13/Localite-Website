import React from 'react';
import '../styles/topnavbar.css';

export const Topnavbar = ({ scrollToAbout, scrollToFAQs }) => {
  return (
    <div className='topdiv'>
      <a href="/">
        <img src="w_logo.png" alt="" />
      </a>
      <div className='topdivtext'>
        <p onClick={scrollToAbout}>About Us</p>
        <p>Our Services</p>
        <p onClick={scrollToFAQs}>FAQs</p>
      </div>
    </div>
  );
};
