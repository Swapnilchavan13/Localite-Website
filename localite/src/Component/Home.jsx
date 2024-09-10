import React, { useState, useRef } from 'react';
import '../styles/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Topnavbar } from './Topnavbar';


export const Home = () => {

  const videoRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (faqIndex) => {
    setActiveFAQ(activeFAQ === faqIndex ? null : faqIndex);
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='mainmain'>
      <div className="maind">
        <Topnavbar />
        <div className="home-container">
          <div className='introdiv'>
            <div>
            <h1>Introducing</h1>
            <div>
              <h1>Localite</h1>
              <p>Localite ia a hyper local platform for local businesses to sell their products and services online.</p>
            </div>
            <div className='videoandbtn'>
              <h2>Watch video</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
            </div>
            </div>

            <div>
              <img width='50%' src="gradient_balls.png" alt="" />
            </div>

          </div>


          <div className="firstdiv">
            <video className='video' ref={videoRef} autoPlay loop muted>
              <source src="LOCALITE Web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br />
            <a href="merchantform">
              <button className="getstartedbtn">Get started</button>
            </a>
          </div>



          <div className='faq'>
            <h1>FAQs</h1>
            <h4 onClick={() => toggleFAQ(1)}>What is Localite?</h4>
            {activeFAQ === 1 && (
              <p>Localite is one of its kind, members-only hyperlocal community app designed to
                connect high-end local residents with hyperlocal SME brands in catchment
                specific areas, offering a marketplace for products &amp; services, special deals &amp;
                offers, events, pre-loved items, networking and much more.</p>
            )}

            <h4 onClick={() => toggleFAQ(2)}>How can I sign up for Localite?</h4>
            {activeFAQ === 2 && (
              <p>To sign up, download the Localite app from the App Store or Google Play, fill the
                membership registration form, and submit the required verification to confirm you
                are a bona fide resident or business of that specific community.</p>
            )}

            <h4 onClick={() => toggleFAQ(3)}>Is there a fee to use Localite?</h4>
            {activeFAQ === 3 && (
              <p>No, Localite is absolutely free to download and use for the verified residents.</p>
            )}

            <h4 onClick={() => toggleFAQ(4)}>How can my business benefit from joining Localite?</h4>
            {activeFAQ === 4 && (
              <p>By joining Localite, your business gains visibility among local high-end residents,
                allowing you to promote your products and services directly to a targeted
                audience, participate in hyperlocal events, offer promotions, and build customer
                loyalty within the community.</p>
            )}

            <h4 onClick={() => toggleFAQ(5)}>What types of businesses can join Localite?</h4>
            {activeFAQ === 5 && (
              <p>Localite welcomes businesses across various sectors including but not limited to
                food and beverage, retail, personal and professional services, health and wellness,
                home improvement, and many more.</p>
            )}

            <h4 onClick={() => toggleFAQ(6)}>How do I list my business on Localite?</h4>
            {activeFAQ === 6 && (
              <p>To list your business, complete the Merchant Registration form from here or fill
                the form available on our Localite app, submit the required documents for
                verification, and once approved, you can start customizing your business profile.</p>
            )}

            <h4 onClick={() => toggleFAQ(7)}>Is there a commission or fee for sales made through Localite?</h4>
            {activeFAQ === 7 && (
              <p>Localite charges a small fee for listings. Currently, there is NO commission
                charged on sales at this point. However, future updates regarding any changes will
                be communicated in advance to all registered businesses.</p>
            )}

            <h4 onClick={() => toggleFAQ(8)}>How can I promote my business on Localite?</h4>
            {activeFAQ === 8 && (
              <p>You can promote your business by posting special offers, participating in app-
                exclusive events, and utilizing advertising features available through Localite to
                enhance your visibility and attract more customers.</p>
            )}

            <h4 onClick={() => toggleFAQ(9)}>What kind of promotions can I run on Localite?</h4>
            {activeFAQ === 9 && (
              <p>You can offer discounts, bundle deals, exclusive products, or loyalty rewards. Our
                team is available to help you set up these promotions effectively.</p>
            )}

            <h4 onClick={() => toggleFAQ(10)}>Who do I contact if I have technical problems with the app?</h4>
            {activeFAQ === 10 && (
              <p>For technical support, please contact our support team
                at localite@alittleworld.com or through the app's built-in help feature.</p>
            )}

            <h4 onClick={() => toggleFAQ(11)}>Can I track the performance of my business on Localite?</h4>
            {activeFAQ === 11 && (
              <p>Yes, Localite provides a dashboard for business owners where you can track
                views, sales, and engagement statistics for your listings and promotions.</p>
            )}

            <h4 onClick={() => toggleFAQ(12)}>How is customer data handled on Localite?</h4>
            {activeFAQ === 12 && (
              <p>Customer privacy is paramount. All data is handled in strict compliance with data
                protection regulations to ensure user information is securely managed and not
                shared without consent.</p>
            )}




          </div>

        </div>
        <br />
        
        <button onClick={scrollToTop}>
          Scroll to Top
        </button>
      </div>


    </div>
  );
};

