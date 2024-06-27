import React, { useState, useEffect, useRef  } from 'react';
import Slider from 'react-slick';
import '../styles/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../Component/Footer';
import { Topnavbar } from './Topnavbar';
import { Navbar } from './Navbar';


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
  
    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play();
      }
    }, []);

  const settings = {
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
  };

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
    <div className='mainmain'>
      <div className="maind">
        <Topnavbar />
        <Navbar />
        <div className="home-container">
          <div className="firstdiv">
            <DynamicHeading name={names[nameIndex]} />
            {/* <div className="contentdiv"></div> */}
            <video ref={videoRef} controls>
      <source src="lvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            <button className="getstartedbtn">Get started</button>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="firstdiv" id='services'>
            <h1 className="home-title">Complete <span className="highlight">HyperLocal Marketing</span> Services For Your Businesses</h1>
            <div className='Slider'>

              <Slider {...settings}>
                {/* <div>
                  <img src="https://www.myhoardings.com/blog/wp-content/uploads/2023/02/DOOH-Ads-India.jpg" alt="Localite" id="slider-image" />
                </div> */}
                <div>
                  <img  src="slide2.png" alt="Localite 2" id="slider-image" />
                </div>
                <div>
                  <img src="slide3.png" alt="Localite 3" id="slider-image" />
                </div>

              </Slider>
            </div>
          </div>

          <div className='whyusdiv' id="why-us">
            <h1>Why Us?</h1>
            <img src="whyus.png" alt="" />
            <div style={{ marginTop: "-40px" }} className='whycontent'>
              <h4>20 Prime Locations</h4>
              <div style={{ marginTop: '-12px' }}>
                Give your brand the power of video <br />
                at 20 high traffic areas in Juhu. <br />
                Do what the multi-national brands do.
              </div>
            </div>
            <br />
            <img src="why us 2.jpg" alt="" />
            <div style={{ marginTop: "-40px" }} className='whycontent'>
              <h4>Reach Prime customers</h4>
              <div style={{ marginTop: '-12px' }}>

                Our App is used by Juhu’s top residents.
                Take your brand to them- 3 offers a week!
              </div>
            </div>
            <br />
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
            <div>
              <img src="pen.jpg" alt="" />
              <div style={{ marginTop: '-40px' }} className='featurecontent'>
                <h4>Sign-up</h4>
                <div style={{ marginTop: '-12px' }}>
                  Become part of Juhu’s exclusive marketing
                  network that is on Localite to promote <br />
                  their businesses.
                </div>
              </div>
            </div>

            <div>
              <img src="cms.jpg" alt="" />
              <div style={{ marginTop: '-40px' }} className='featurecontent'>
                <h4>Create your Post</h4>
                <div style={{ marginTop: '-12px' }}>
                  Build your offers using our simple dashboard
                  (or let us do it for you) and your ad reaches 1000’s
                  of app users in seconds.
                </div>
              </div>
            </div>

            <div>
              <img src="dj.jpg" alt="" />
              <div style={{ marginTop: '-40px' }} className='featurecontent'>
                <h4>Create your videos</h4>
                <div style={{ marginTop: '-12px' }}>
                  Our expert team of editors will create powerful
                  videos for you using high quality
                  footage and messaging.
                </div>
              </div>
            </div>

            <div>
              <img src="https://exchange4media.gumlet.io/news-photo/132480-Signpost-Image2_12Feb24.jpg?w=480&dpr=2.6" alt="" />
              <div style={{ marginTop: '-40px' }} className='featurecontent'>
                <h4>Go live outdoors</h4>
                <div style={{ marginTop: '-12px' }}>
                  Take your brand live at 20 of the most prominent
                  locations in Juhu and reach over 50,000
                  people per day
                </div>
              </div>
            </div>

            <div>
              <img src="howitworks 4.png" alt="" />
              <div style={{ marginTop: '-40px' }} className='featurecontent'>
                <h4>Go live on Social</h4>
                <div style={{ marginTop: '-12px' }}>
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
            <h1>The LOCALITE <br /> App</h1>
            <div className='frdiv'>
              <h1>An exclusive app<br /><span className='community'>of Juhu, by Juhu,<br />for Juhu.</span></h1>
              <div className='sediv'>
                <ul>
                  <li>An exclusive app with 1000`s of offers<br />from the Juhu area.</li>
                  <br />
                  <li>Total value of offers is over <br /> Rs. 2 crores.</li>
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
              <button className='getstartedbtn'>Download App</button>
            </div>
          </div>

          <div className='faq'>
            <h1>FAQs</h1>
            <select name="" id="">
              <option value="">What is Localite?</option>
            </select>
            <select name="" id="">
              <option value="">How Do I explore this product?</option>
            </select>
            <select name="" id="">
              <option value="">How wiil I get my payments?</option>
            </select>
            <select name="" id="">
              <option value="">What are my gains/profits?</option>
            </select>
            <select name="" id="">
              <option value="">How will your product help my business?</option>
            </select>
            <select name="" id="">
              <option value="">What are the things under my control?</option>
            </select>
            <select name="" id="">
              <option value="">What if there is any issue throught the <br /> process, what to do?</option>
            </select>
            <select name="" id="">
              <option value="">How will you solve the problem?</option>
            </select>

            <div className='selling'>
              <h2>Start selling online with <br />LOCALITE</h2>
              <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" alt="" />
              <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="" />
            </div>
          </div>

        </div>
        <Footer />

        <button className="scroll-to-top" onClick={scrollToTop}>
          Scroll to Top
        </button>
      </div>


    </div>
  );
};

