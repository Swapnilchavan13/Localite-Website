import React from 'react';
import { Footer } from './Footer';
import { Topnavbar } from './Topnavbar';

const ContactUs = () => {
  return (
    <>
        <Topnavbar />
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! If you have any questions or need assistance, please reach out to us through the following methods:</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Phone</h2>
        <p>You can call us at: <a href="tel:7715973851">7715973851</a></p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Email</h2>
        <p>Feel free to email us at: <a href="mailto:localite@alittleworld.com">localite@alittleworld.com</a></p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Address</h2>
        <p>Localite Office, <br/>Juhu, Anand 1st Floor <br/> Near Of Iskon Temple, Mumbai, India</p>
      </div>
    </div>
    <br />
    <br />
      <Footer />
    </>
  );
};

export default ContactUs;
