import React from 'react'
import '../styles/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footermain'>

    <div className='footer'>
        <img src="w_logo.png" alt="" />
        <div className='allfooter'>
  <div>
    <Link to='/'>
      <h3>Home</h3>
    </Link>
    <Link to='/about'>
      <h3>About us</h3>
    </Link>
    <Link to='/terms'>
      <h3>Terms</h3>
    </Link>
    <Link to='/privacy'>
      <h3>Privacy</h3>
    </Link>
  </div>
  <div>
    <Link to='/careers'>
      <h3>Careers</h3>
    </Link>
    <Link to='/contactus'>
      <h3>Contact us</h3>
    </Link>
    <Link to='/shipping'>
      <h3>Shipping</h3>
    </Link>
    <Link to='/return'>
      <h3>Return & Refund</h3>
    </Link>
  </div>
</div>


<div className='footernews'>
    <div>
        <h2>Sign up to our newsletter</h2>
        <p>Get the latest news, updates and offers.</p>
    </div>
    <div className='indiv'>
        <input type="text" placeholder='Enter your email'/>
        <button>Subscribe</button>
    </div>
</div>
<hr />
<div className='lastline'>
    <p>@ 2024 Localite website | All rights reserved.</p>
    <div>
        <img src="insta.png" alt="" />
        <img src="fb.png" alt="" />
        <img src="in.png" alt="" />
        <img src="twitter.png" alt="" />
    </div>
</div>
    </div>

    </div>
  )
}
