import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
        <img src="localitelogo-w.png" alt="Localite Logo"  onClick={() => handleImageClick(0)}/>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode character for hamburger icon */}
        </div>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/about">About</Link>
        <Link to="/">New Trends</Link>
        <Link to="/">New Place</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

<div className="navbar-2">
    <Link to='/home'>
    <img src="https://www.freeiconspng.com/thumbs/homepage-icon-png/gallery-homepage-icon-png-2.png" alt="" 
     className={selectedImageIndex === 0 ? 'selected' : ''}
     onClick={() => handleImageClick(0)} />
     </Link>
     <Link to='/about'>
    <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0010/4751/brand.gif?itok=t8diis8v" alt="" 
    className={selectedImageIndex === 1 ? 'selected' : ''}
    onClick={() => handleImageClick(1)} />
    </Link>
    <Link to='/more'>
    <img src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-location-icon-png-image_515424.jpg" alt=""
    className={selectedImageIndex === 2 ? 'selected' : ''}
    onClick={() => handleImageClick(2)}  />
    </Link>
    <Link to='/contact'>
    <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-contact-icon-png-image_4711037.jpg" alt=""
    className={selectedImageIndex === 3 ? 'selected' : ''}
    onClick={() => handleImageClick(3)}  />
    </Link>
</div>

    </div>
  );
};
