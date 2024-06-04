import React from 'react';
import Slider from 'react-slick';
import '../styles/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Localite!</h1>
      <Slider {...settings}>
        <div>
          <img src="https://img.freepik.com/premium-photo/indian-car-mechanic-standing-working-service-station-car-specialists-examining-lifted-car-professional-repairmen-wearing-mechanic-uniform-blue-color_255667-45739.jpg" alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1442437498/photo/owner-at-checkout-counter-in-supermarket.jpg?s=612x612&w=0&k=20&c=8NGepgYkYotdfBJhXWKc6cXmSsXYwgv5kr9f_jReWqE=" alt="Image 2" className="slider-image" />
        </div>
        <div>
          <img src="https://static1.squarespace.com/static/63c4d69d7196096ae1af7627/t/64817ab43f6c6a16fa304f62/1686207156277/Localite-placemaking.png?format=1500w" alt="Image 3" className="slider-image" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_68,w_1920,h_1080,r_0,c_crop,q_90,fl_progressive/w_500,f_auto,c_fit/ramada-plaza-palm-grove-juhu-beach-mumbai/sea-3490428_1920_1_wvdqfr" alt="Image 4" className="slider-image" />
        </div>
        <div>
          <img src="https://media.assettype.com/homegrown%2Fimport%2Fbook%2F10772-pxrhfptjwc-1542625095.jpg" alt="Image 5" className="slider-image" />
        </div>

      </Slider>
      <br />
      <p>
        Discover the best places and experiences in your local area with Localite. Whether you're looking for a new restaurant to try, a park to explore, or an event to attend, we've got you covered.
      </p>
      <p>
        Our mission is to connect you with the hidden gems in your neighborhood. We believe that the best experiences are often found close to home, and we're here to help you find them.
      </p>
      <p>
        Join our community and start exploring today. Share your own discoveries and connect with others who love to explore their local areas just like you.
      </p>
      <p>
        Stay tuned for updates, reviews, and recommendations from our team and fellow Localite users. Let's make the most of our local communities together!
      </p>
    </div>
  );
};
