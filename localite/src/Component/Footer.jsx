import React from 'react';
import '../styles/footer.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Footer = () => {
  const { pathname } = useLocation();

  // Scroll to top whenever the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <p>Copyright © Localite. All Rights Reserved.</p>
          <div>
            <a href="https://www.instagram.com/localite.india?igsh=bXA4M243eXhqMnI0" target='_blank'>
              <img src="int.png" alt="" />
            </a>
            <img src="fb.png" alt="" />
            <a href="https://www.linkedin.com/company/103767681/admin/dashboard/" target='_blank'>
              <img src="in.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
