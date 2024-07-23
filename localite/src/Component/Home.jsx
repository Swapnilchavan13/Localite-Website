import React, { useState, useEffect, useRef  } from 'react';
import Slider from 'react-slick';
import '../styles/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { Footer } from '../Component/Footer';
import { Topnavbar } from './Topnavbar';
import { Navbar } from './Navbar';
import { useMediaQuery } from 'react-responsive';

// Custom Modal styling
Modal.setAppElement('#root'); // Ensure screen readers don't read the modal when it's open

const VideoModal = ({ isOpen, onRequestClose, videoSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true}
    >
      <button className="close" onClick={onRequestClose}>×</button>
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Modal>
  );
};

const names = [
  "Juhu",
  "Versova",
  "Vile Parle",
  "Santacruz",
  "Andheri",
  "Khar",
  "Bandra"
];;

const DynamicHeading = ({ name }) => (
  <h1>
    <span className="highlight">{name}'s</span> HyperLocal Marketing Agency
  </h1>
);

export const Home = () => {

    const videoRef = useRef(null);

    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (faqIndex) => {
      setActiveFAQ(activeFAQ === faqIndex ? null : faqIndex);
    };
  
    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play();
      }
    }, []);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);


    const isWebView = useMediaQuery({ minWidth: 768 }); // Adjust the minWidth based on what you consider a web view

    const [settings, setSettings] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      customPaging: i => (
        <button>
          <span className="custom-dot"></span>
        </button>
      ),
    });
  
    useEffect(() => {
      if (isWebView) {
        setSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 3,
        }));
      } else {
        setSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 1,
        }));
      }
    }, [isWebView]);
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex(prevIndex => (prevIndex + 1) % names.length);
    }, 2000); // Change name every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show scroll-to-top button when user scrolls down 400px
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
      if (window.scrollY > 400) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show');
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id={modalIsOpen ? 'blurred' : ''} className='mainmain'>
      <div className="maind">
        <Topnavbar />
        <Navbar />
        <div className="home-container">
          <div className="firstdiv">
            <DynamicHeading name={names[nameIndex]} />
            {/* <div className="contentdiv"></div> */}
            <video className='video' ref={videoRef} >
      <source src="LOCALITE Web.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <br />
    <a href="merchantform">
            <button className="getstartedbtn">Get started</button>
    </a>
          </div>
          <div className="firstdiv" id='services'>
            <h1 className="home-title">Complete <span className="highlight">HyperLocal Marketing</span> Services For Your Businesses</h1>
            <div className='Slider'>

              <Slider {...settings}>
                <div>
                  <img src="scrn.jpg" alt="Localite" id="slider-image" />
                </div>
              <div>
          <img
            src="slide12.jpg"
            alt="Localite 2"
            id="slider-image"
            // onClick={openModal}
            // style={{ cursor: 'pointer' }}
          />
        </div>
                <div>
                  <img src="slide3.png" alt="Localite 3" id="slider-image" />
                </div>
              </Slider>
            </div>
          </div>
          <VideoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoSrc="PhoneApp.mp4"
      />
          <div className='whyusdiv' id="why-us">
            <h1>Why Us?</h1>
<div id='whymain'>
  <div>

            <img src="whyus.png" alt="" />
            <div style={{ marginTop: "-40px" }} className='whycontent'>
              <h4>20 Prime Locations</h4>
              <div style={{ marginTop: '-12px' }}>
                Give your brand the power of video 
                at 20 high traffic areas in Juhu.
                Do what the multi-national brands do.
              </div>
            </div>
            <br />
  </div>
            <div>

            <img src="why us 2.jpg" alt="" />
            <div style={{ marginTop: "-40px" }} className='whycontent'>
              <h4>Reach Prime customers</h4>
              <div style={{ marginTop: '-12px' }}>

                Our App is used by Juhu’s top residents.
                Take your brand to them- 3 offers a week!
              </div>
            </div>
            <br />
            </div>
            <div>

            <img src="why_us 3.png" alt="" />
            <div style={{ marginTop: "-40px" }} className='whycontent'>
              <h4>Top tier team</h4>
              <div style={{ marginTop: '-12px' }}>
                Work with a team that provided social and
                marketing solutions to some of the world’s
                biggest brands.
              </div>
            </div>
            </div>
</div>
          </div>
          <br />
          <br />
          {/* <div className='Aboutus' id="about-us">
      <h1>About Us</h1>
      <img src="https://media.istockphoto.com/id/466818688/photo/blank-watercolor-textured-paper-canvas.webp?b=1&s=170667a&w=0&k=20&c=iAiByac0cBVa5Z9jShwlJHhkB9lLSRbkGIBKr8NnU8U=" alt="" />

<div className='aboutuscontent'>
  Lorem, harum dolorem laborum dicta inventore consequatur quae officia iusto ex nihil? Non incidunt voluptas.

  <br />
  <br />
  Lorem, ipsum dolor sit. dicta inventore consequatur quae officia iusto ex nihil? Non incidunt voluptas.
</div>

<div className='followus'>
  <p>Follow us:</p>
  <div className='followdiv'>
    <img src="https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png" alt="" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" />
    <img src="https://w7.pngwing.com/pngs/676/1/png-transparent-x-icon-ex-twitter-tech-companies-social-media-thumbnail.png" alt="" />
  </div>
</div>
    </div> */}
          <div className='featurediv' id="about-us">
            <h1>How it works?</h1>

            <div className='howdiv'>
            <div className='how1img'>

              <img src="1.png" alt="" />
              </div>
              
              <div className='featurecontent'>
                <div className='whycon'>
                <h4>Sign-up</h4>
                  Become part of Juhu’s exclusive marketing
                  network that is on Localite to promote
                  your business.
                </div>
              </div>
            </div>

            <div className='howdiv'>
              <div className='how2img'>

              <img src="2.png" alt="" />
              </div>
              <div className='featurecontent'>
                <div className='whycon'>
                <h4>Create your Post</h4>
                  Build your offers using our simple dashboard
                  (or let us do it for you) and your ad reaches 1000’s
                  of app users in seconds.
                </div>
              </div>
            </div>

            <div className='howdiv'>
              <div className='how3img'>

              <img src="3.png" alt="" />
              </div>
              <div  className='featurecontent'>
                <div className='whycon'>
                <h4>Create your videos</h4>
                  Our expert team of editors will create powerful
                  videos for you using high quality
                  footage and messaging.
                </div>
              </div>
            </div>

           
            <div  className='howdiv'>
              <div className='how4img'>

              <img src="https://exchange4media.gumlet.io/news-photo/132480-Signpost-Image2_12Feb24.jpg?w=480&dpr=2.6" alt="" />
              </div>
              <div className='featurecontent'>
                <div className='whycon'>
                <h4>Go live outdoors</h4>
                  Take your brand live at 20 of the most prominent
                  locations in Juhu and reach over 50,000
                  people per day
                </div>
              </div>
            </div>

            <div  className='howdiv'>
              <div className='how5img'>

              <img src="howitworks 4.png" alt="" />
              </div>
              <div className='featurecontent'>
                <div className='whycon'>
                <h4>Go live on Social</h4>
                  Our team will take you live on social using the
                  latest tools and social techniques
                  to reach the ideal audience.
                </div>
              </div>
            </div>

          </div>

          {/* <div className='advertiserdiv'>
      <h2>
        Meet our <br/> Advertisers
      </h2>

        <div className='adverdivs'>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
        </div>
    </div> */}

          <div className='sellwith' id='explore'>
            <div className='frdiv'>
            <h1 className='lh1'>The LOCALITE App</h1>
              <h1>An Exclusive App<br /><span className='community'>of Juhu, by Juhu, for Juhu.</span></h1>
              {/* <br /> */}
              <div className='sediv'>
                <ul>
                  <li>An exclusive app with 1000`s of offers from the Juhu area.</li>
                  <br />
                  <li>Total value of offers is over Rs. 2 crores.</li>
                  <br />
                  <li>The app is only for members. </li>
                  <br />
                  <li>Features include:</li>
                  <p>Explore and purcahse goods and services.</p>
                  <p>Updates on the latest discount and offers from local brands.</p>
                  <p>Stay informed about products and services available as sample for free, attracting more consumers to brands.</p>
                  <p>Create social communities and engage with like-minded people in their neighborhood, providing brands with a more engaging audience.</p>
                </ul>
              </div>
              <a href="PhoneApp.mp4">
              <button className='getstartedbtn'>View App</button>
              </a>
            </div>
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



            <div className='selling'>
              {/* <h2>Start selling online with <br />LOCALITE</h2>
              <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" alt="" />
              <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="" /> */}
            </div>
          </div>

        </div>
        <br />
        <br />
        <Footer />

        <button className="scroll-to-top" onClick={scrollToTop}>
          Scroll to Top
        </button>
      </div>


    </div>
  );
};

