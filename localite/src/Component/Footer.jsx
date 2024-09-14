import React from 'react'
import '../styles/footer.css';

export const Footer = () => {
  return (
    <div className='footermain'>

    <div className='footer'>
        <img src="w_logo.png" alt="" />
        <div className='allfooter'>
            <h3>Home</h3>
            <h3>About us</h3>
            <h3>Terms</h3>
            <h3>Privacy</h3>
            <h3>Careers</h3>
            <h3>Contact us</h3>
            <h3>Shipping</h3>
            <h3>Return & Refund</h3>
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
