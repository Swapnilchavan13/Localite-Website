import React, {useState, useEffect} from 'react';
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
    <span className="highlight">{name}'s</span> Hyper Local Marketing Agency
  </h1>
);

export const Home = () => {
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
    <div className="maind">
      <Topnavbar />
      <Navbar />
      <div className="home-container">
        <div className="firstdiv">
        <DynamicHeading name={names[nameIndex]} />
          <div className="contentdiv"></div>
          <button className="getstartedbtn">Get started</button>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="firstdiv">
          <h1 className="home-title">Complete <span className="highlight">Hyper Local Marketing</span> Services For Your Businesses</h1>
         <div className='Slider'>

          <Slider {...settings}>
            <div>
              <img src="https://www.myhoardings.com/blog/wp-content/uploads/2023/02/DOOH-Ads-India.jpg" alt="Image 1" className="slider-image" />
            </div>
            <div>
              <img src="https://www.mdlogistics.com/wp-content/uploads/2017/06/Mobile-App-developers.jpg" alt="Image 2" className="slider-image" />
            </div>
            <div>
              <img src="https://www.forbes.com/advisor/wp-content/uploads/2023/06/Image_-1.jpg" alt="Image 3" className="slider-image" />
            </div>
          
          </Slider>
         </div>
    </div>

    <div className='whyusdiv' id="why-us">
      <h1>Why Us?</h1>
      <img src="https://media.istockphoto.com/id/655887334/photo/why-choose-us.jpg?s=612x612&w=0&k=20&c=TJLPS91NH3rTJhdcAgB92M984kcJ80S910X-4XnTpNE=" alt="" />
      <div className='whycontent'>
         We Focus on Hyper Local Busunesses.<br/> We are Experience Marketers. <br/>We are Best In Class Resources. <br/>We are Cost Efficient.
      </div>
      <br />
      <img src="https://media.istockphoto.com/id/655887334/photo/why-choose-us.jpg?s=612x612&w=0&k=20&c=TJLPS91NH3rTJhdcAgB92M984kcJ80S910X-4XnTpNE=" alt="" />
      <div className='whycontent'>
         We Focus on Hyper Local Busunesses.<br/> We are Experience Marketers. <br/>We are Best In Class Resources. <br/>We are Cost Efficient.
      </div>
      <br />
      <img src="https://media.istockphoto.com/id/655887334/photo/why-choose-us.jpg?s=612x612&w=0&k=20&c=TJLPS91NH3rTJhdcAgB92M984kcJ80S910X-4XnTpNE=" alt="" />
      <div className='whycontent'>
         We Focus on Hyper Local Busunesses.<br/> We are Experience Marketers. <br/>We are Best In Class Resources. <br/>We are Cost Efficient.
      </div>
    </div>
<br />
<br />
    <div className='Aboutus' id="about-us">
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
    </div>
<br />
    <div className='featurediv' id='services'>
      <h1>Features</h1>
      <div>
      <img src="https://t4.ftcdn.net/jpg/00/93/85/69/360_F_93856984_YszdhleLIiJzQG9L9pSGDCIvNu5GEWCc.jpg" alt="" />
      <div className='featurecontent'>
         Lorem, ipsum dolor sit amet consectetur aprovident quisquam minima maiores harum quibusdam, ipsum autem sint quasi, id sunt soluta cumque ullam debitis.
      </div>
      </div>

      <div>
      <img src="https://t4.ftcdn.net/jpg/00/93/85/69/360_F_93856984_YszdhleLIiJzQG9L9pSGDCIvNu5GEWCc.jpg" alt="" />
      <div className='featurecontent'>
         Lorem, dolor sit amet aprovident quisquam minima maiores harum quibusdam, ipsum autem sint quasi, id sunt soluta cumque ullam debitis.
      </div>
      </div>

      <div>
      <img src="https://t4.ftcdn.net/jpg/00/93/85/69/360_F_93856984_YszdhleLIiJzQG9L9pSGDCIvNu5GEWCc.jpg" alt="" />
      <div className='featurecontent'>
         Lorem, ipsum dolor sit amet consectetur aprovident quisquam minima maiores harum quibusdam, ipsum autem sint quasi, id sunt soluta cumque ullam debitis.
      </div>
      </div>

    </div>

    <div className='advertiserdiv'>
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
    </div>

    <div className='sellwith'>
<h1>Sell With<br/> LOCALITE</h1>
<div className='frdiv'>
  <h1>To learn more<br/> join our<br/> <span className='community'>community</span>!</h1>
  <div className='sediv'>
    <ul>
    <li>Get the best out of your <br />neighborhood.</li>
    <br />
    <li>Explore and purchase goods <br /> and services</li>
    <br />
    <li>Stay informed about exciting offers,<br /> events, exhibition, workshops,<br /> product, launches, and much more!</li>
    <br />
    <li>Grow your business and connect with <br /> your customers, users etc.</li>
    </ul>
</div>
    <button className='getstartedbtn'>Download App</button>
</div>
    </div>

    <div className='faq' id='explore'>
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
  );
};

