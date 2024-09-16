import React from 'react';
import '../styles/topnavbar.css';
import { Link } from 'react-router-dom';

export const Topnavbar = () => {
  return (
    <div className='topdiv'>
      <a href="/">
        <img src="w_logo.png" alt="" />
      </a>
      <div className='topdivtext'>
      <p>About Us</p>
      <p>Our Services</p>
      <p>FAQs</p>
      </div>
    </div>
  )
}
