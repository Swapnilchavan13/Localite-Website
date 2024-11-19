import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/login.css'; // Import the CSS file
// import { Footer } from './Footer';

export const Prelogin = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/merchantlogin');
    };
  
    // const handleSignupClick = () => {
    //   navigate('/merchantform');
    // };


  return (
    <div className="login-container" style={{ 
      backgroundImage: "url('/bg2.png')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
        <img width="52%" src="Registration_pg.png" alt="" />
      <div id='centreimgdiv'>
        <div className='weldiv'>
      <h2>Welcome to</h2>
      <img className='loginpinimg' src="w_logo.png" alt="" />
        </div>
      {/* <img className='loginpinimg2' width="100px" src="/blue-logo.png" alt="" /> */}
      <p className='ptaglogin'>The trusted hyperlocal marketing partner for your business.
      </p>
      <br />
      </div>
      {/* <br /> */}
      {/* <br /> */}

      
      <button id='loginbtn' onClick={handleLoginClick}>Login</button>
      {/* <p>(For already registered businesses)</p> */}
      <br />
{/* 
      <button id='signupbtn' onClick={handleSignupClick}>Sign up</button>
      <p>(For listing your business)</p> */}
      
      {/* <Footer /> */}
    </div>
  );
};
