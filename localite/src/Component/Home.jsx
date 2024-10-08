import React, { useState, useRef, useEffect } from 'react';
import '../styles/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Topnavbar } from './Topnavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from './Footer';

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const faqSer = useRef(null);


  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFAQs = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };

   const scrollToServices = () => {
    faqSer.current.scrollIntoView({ behavior: 'smooth' });
  };

  const videoRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (faqIndex) => {
    setActiveFAQ(activeFAQ === faqIndex ? null : faqIndex);
  };


  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='mainmain'>
      <div className="maind">
      <Topnavbar scrollToAbout={scrollToAbout} scrollToFAQs={scrollToFAQs} scrollToServices={scrollToServices} />
        <div className="home-container">
          <h1 className='intoline'>Introducing</h1>
          <div className='introdiv'>
            <div>
              <div className='headcon' data-aos="slide-right">
                <h1>Localite</h1>
                <p>Introducing a hyperlocal marketing agency that helps local businesses sell online, connect with their community, and grow their local presence.</p>
                <div className='videoandbtn'>
                  {/* <h2>Watch video</h2> */}
                  <img
                    data-aos="slide-up"
                    className='vbtn1'
                    src="Group 2812.png"
                    alt=""
                    onClick={() => window.open("https://apps.apple.com/in/app/localite-shop-win-connect/id6670195737", "_blank")}
                  />
                  <img 
                  data-aos="slide-up" 
                  className='vbtn2' 
                  src="Group 2734.png" 
                  alt="" 
                  onClick={() => window.open("https://youtu.be/RTGAEjDli1I?si=TT2Ybhxu7qPiazup", "_blank")}
                  />
                </div>
              </div>

            </div>
            <div>
              <img className='handmobile' data-aos="slide-left" width='100%' src="1st_imgn.png" alt="" />
              {/* <img className='balls' src="gradient_balls.png" alt="" /> */}
            </div>
          </div>


          <div className="firstdiv">

            <div class="movingline">
              <h1 class="scrolling-text">
              Empowering Local Businesses, Connecting Local Communities! Empowering Local Businesses, Connecting Local Communities!
              </h1>
            </div>

            <div className='digitaldiv'>
            <h1 ref={faqSer} className='intoline'>Our Services</h1>
              <h1 className='borderh'>Outdoor Advertising</h1>
            </div>
            <h1 className='lmarket'>Your Local Marketplace, Right On The Screen</h1>

           <video data-aos="zoom-in" className='video' ref={videoRef} autoPlay loop muted>
              <source src="LOCALITE Web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br />
          </div>

          <div className='threedivs'>
            <div data-aos="slide-left">
              <h3>Boost Your Visibility</h3>
              <p>Attract new customers with eye-catching digital displays that command attention and drive engagement.</p>
            </div>
            <div data-aos="slide-up">
              <h3>Targeted Local Reach</h3>
              <p>Connect with your targeted audience and drive traffic to your store.</p>
            </div>
            <div data-aos="slide-right">
              <h3>Cost-efficient Promotions</h3>
              <p>Affordable advertising and marketing to maximize impact and engagement.</p>
            </div>
          </div>

          <div className='about' ref={aboutRef}>
            {/* <h1>About Localite</h1> */}
            <h1 className='borderh'>A Hyperlocal App</h1>

            <div className='aboutdiv'>
              <div data-aos="zoom-in" className='aboutfirstdiv'>
                <h2>Shocases brand's offers & promotion.</h2>
                <h2>List your Event workshops, music events, exhibition, etc.</h2>
                <h2>Connects with your local residents & communities.</h2>
                <h2>Ensure maximum visibility for hyperlocal suburban users.</h2>
                {/* <h2>We are dedicated to bring together local businesses and customers in one easy-to-use platform, encouraging community growth and convenient local shopping.</h2> */}
                  <h2>
        <span 
          className="watch-video" 
          style={{ cursor: 'pointer' }} 
          onClick={() => window.open("https://youtu.be/RTGAEjDli1I?si=D4DXhBQbq1Gr8sU-", "_blank")}
        >
          Watch Video <img id='playbtn' src="play.png" alt="" />
        </span>
      </h2>
              </div>
              <div data-aos="flip-right"><img className='aboutimg' src="about.png" alt="" /></div>
            </div>

          </div>

          <div className='featurediv'>
              <img className='features' src="Features1.png" alt="" />
            </div>
         

         <div className='socialmedia'>
         <h1 className='borderh'>Social Media Management</h1>
          <div className='mddiv'>
            <img data-aos="slide-right" className='mediaimg' src="https://scopemastery.com/wp-content/uploads/2023/10/Trusted-Social-Media-Management-service-in-Toronto-2048x1365.webp" alt="" />
            {/* <img data-aos="slide-right" className='mediaimg' src="https://umnico-cdn.com/production/landing/en-article16-3e771beffe6c1925452bc9f6d3c88424.jpg" alt="" /> */}
            <h2 data-aos="slide-left">An experienced team to develop your social media plan, videos and images. We craft best quality videos and content for social.</h2>
          </div>
         </div>

          <div className='threecolordivmain'>
          <h1 className='intoline'>Benefits Of Localite</h1>

            <div className='threecolordiv'>
              <div data-aos="zoom-in">
                <h3>Online Storefront</h3>
                <div className='threesinglediv'>
                  <img src="Ellipse 32 .png" alt="" />
                  <p>Showcase your products and services with high-quality images, detailed description, and customer review.</p>
                </div>
              </div>
              <div data-aos="zoom-in">
                <h3>Increase Customer Reach</h3>
                <div className='threesinglediv'>
                  <img src="Ellipse 33 .png" alt="" />
                  <p>Expand your customer base by reaching a wider audience through digital screen and app promotion.</p>
                </div>
              </div>
              <div data-aos="zoom-in">
                <h3>Boost Brand Awareness</h3>
                <div className='threesinglediv'>
                  <img src="Ellipse 34 .png" alt="" />
                  <p>Enhance brand visibility and recognition with targeted digital advertising on street corners and in high-traffic locations.</p>
                </div>
              </div>
            </div>
          </div>


          <div className='sellwithus'>
            <h1>Advertise Your Brand!</h1>
            <p>Want to grow your local business?</p>
            <p>List your products or services, select your location <br /> and start advertising</p>
            <button className='sellbutton' onClick={() => window.open("https://localite.services/merchantform")}>Register Now</button>
          </div>

          <div data-aos="zoom-in" className='getstart'>
            <h1>How To Get Started</h1>

            <div className='fourgetstart'>
              <div data-aos="slide-left" data-aos-delay="0" className='image-container'>
                <img src="1htgs.png" alt="" />
                {/* <h3>Sign Up</h3>
              <p>Create an account on the Localite app.</p> */}
              </div>
              <div data-aos="slide-left" data-aos-delay="500" className='image-container'>
                <img src="2htgs.png" alt="" />
                {/* <h3>Set Up Your Store</h3>
              <p>Add your business information, products and services.</p> */}
              </div>
              <div data-aos="slide-left" data-aos-delay="1000" className='image-container'>
                <img src="3htgs.png" alt="" />
                {/* <h3>Login</h3>
              <p>Add your latest offers or deals and product images.</p> */}
              </div>
              <div data-aos="slide-left" data-aos-delay="1500" className='image-container'>
                <img src="no.4.png" alt="" />
                {/* <h3>Start Selling</h3>
              <p>Product posts will be created and added on the app by the localite team.</p> */}
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className='connect'>
            <h1>Connect With Your Neighbour!</h1>
            <p>Want to learn more about your locality?</p>
            <p>Explore nearby brands, events,<br /> offers and news connect with like-minded people <br /> and much more!</p>
            <a href="https://youtu.be/DAxHfPn9PHY?si=GM_w82Ncoxe2Zpcw" target="_blank" rel="noopener noreferrer">
               <p className='pcolor'>Sneak Peek <img id='playbtn' src="play.png" alt="" /></p>
            </a>

            <br />
            <p>Explore more than 20+ brands from your locality</p>
            <button className='sellbutton' onClick={() => window.open("https://apps.apple.com/in/app/localite-shop-win-connect/id6670195737", "_blank")}>Download App</button>
          </div>


<div className='six'>
          <div className='siximages'>
            <img data-aos="slide-right" className='oneimg' src="Rectangle 105.png" alt="" />
            <div>
              <img data-aos="slide-left" className='twoimg' src="Rectangle 103.png" alt="" />
              <br />
              <img data-aos="slide-right" className='threeimg' src="Rectangle 104.png" alt="" />
            </div>
            <img data-aos="slide-left" className='fourimg' src="Rectangle 101.png" alt="" />
            <div>
              <img data-aos="slide-right" className='fiveimg' src="Rectangle 100.png" alt="" />
              <br />
              <img data-aos="slide-left" className='siximg' src="Rectangle 102.png" alt="" />
            </div>
          </div>

</div>

          <img className='teamandinfra' src="about_us.png" alt="" />

          <img data-aos="slide-up" className='gradientimg' src="gradient_bar.png" alt="" />


          <div className='faq'>
            <div className='faqdiv' ref={faqRef}>

              <h1>FAQs</h1>
              <h4 onClick={() => toggleFAQ(1)}>
              <span>
             <img className={`pbimg ${activeFAQ === 1 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                What is Localite?</h4>
              {activeFAQ === 1 && (
                <p>Localite is one of its kind, members-only hyperlocal community app designed to
                  connect high-end local residents with hyperlocal SME brands in catchment
                  specific areas, offering a marketplace for products &amp; services, special deals &amp;
                  offers, events, pre-loved items, networking and much more.</p>
              )}

              <h4 onClick={() => toggleFAQ(2)}>
              <span>
             <img className={`pbimg ${activeFAQ === 2 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                How can I sign up for Localite?</h4>
              {activeFAQ === 2 && (
                <p>To sign up, download the Localite app from the App Store or Google Play, fill the
                  membership registration form, and submit the required verification to confirm you
                  are a bona fide resident or business of that specific community.</p>
              )}

              <h4 onClick={() => toggleFAQ(3)}>
              <span>
             <img className={`pbimg ${activeFAQ === 3 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                Is there a fee to use Localite?</h4>
              {activeFAQ === 3 && (
                <p>No, Localite is absolutely free to download and use for the verified residents.</p>
              )}

              <h4 onClick={() => toggleFAQ(4)}>
              <span>
             <img className={`pbimg ${activeFAQ === 4 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                How can my business benefit from joining Localite?</h4>
              {activeFAQ === 4 && (
                <p>By joining Localite, your business gains visibility among local high-end residents,
                  allowing you to promote your products and services directly to a targeted
                  audience, participate in hyperlocal events, offer promotions, and build customer
                  loyalty within the community.</p>
              )}

              <h4 onClick={() => toggleFAQ(5)}>
              <span>
             <img className={`pbimg ${activeFAQ === 5 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                What types of businesses can join Localite?</h4>
              {activeFAQ === 5 && (
                <p>Localite welcomes businesses across various sectors including but not limited to
                  food and beverage, retail, personal and professional services, health and wellness,
                  home improvement, and many more.</p>
              )}

              <h4 onClick={() => toggleFAQ(6)}>
              <span>
             <img className={`pbimg ${activeFAQ === 6 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                How do I list my business on Localite?</h4>
              {activeFAQ === 6 && (
                <p>To list your business, complete the Merchant Registration form from here or fill
                  the form available on our Localite app, submit the required documents for
                  verification, and once approved, you can start customizing your business profile.</p>
              )}

              <h4 onClick={() => toggleFAQ(7)}>
              <span>
             <img className={`pbimg ${activeFAQ === 7 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                Is there a commission or fee for sales made through Localite?</h4>
              {activeFAQ === 7 && (
                <p>Localite charges a small fee for listings. Currently, there is NO commission
                  charged on sales at this point. However, future updates regarding any changes will
                  be communicated in advance to all registered businesses.</p>
              )}

              <h4 onClick={() => toggleFAQ(8)}>
              <span>
             <img className={`pbimg ${activeFAQ === 8 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                How can I promote my business on Localite?</h4>
              {activeFAQ === 8 && (
                <p>You can promote your business by posting special offers, participating in app-
                  exclusive events, and utilizing advertising features available through Localite to
                  enhance your visibility and attract more customers.</p>
              )}

              <h4 onClick={() => toggleFAQ(9)}>
              <span>
             <img className={`pbimg ${activeFAQ === 9 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                What kind of promotions can I run on Localite?</h4>
              {activeFAQ === 9 && (
                <p>You can offer discounts, bundle deals, exclusive products, or loyalty rewards. Our
                  team is available to help you set up these promotions effectively.</p>
              )}

              <h4 onClick={() => toggleFAQ(10)}>
              <span>
             <img className={`pbimg ${activeFAQ === 10 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                Who do I contact if I have technical problems with the app?</h4>
              {activeFAQ === 10 && (
                <p>For technical support, please contact our support team
                  at localite@alittleworld.com or through the app's built-in help feature.</p>
              )}

              <h4 onClick={() => toggleFAQ(11)}>
              <span>
             <img className={`pbimg ${activeFAQ === 11 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                Can I track the performance of my business on Localite?</h4>
              {activeFAQ === 11 && (
                <p>Yes, Localite provides a dashboard for business owners where you can track
                  views, sales, and engagement statistics for your listings and promotions.</p>
              )}

              <h4 onClick={() => toggleFAQ(12)}>
              <span>
             <img className={`pbimg ${activeFAQ === 12 ? 'rotate' : ''}`} src="pb.png" alt="" />
             </span>
                How is customer data handled on Localite?</h4>
              {activeFAQ === 12 && (
                <p>Customer privacy is paramount. All data is handled in strict compliance with data
                  protection regulations to ensure user information is securely managed and not
                  shared without consent.</p>
              )}

            </div>
          </div>

        </div>
        <Footer />
        <br />

        {showScrollTop && (
  <button className='top' onClick={scrollToTop}>🔝</button>
)}
      </div>


    </div>
  );
};

