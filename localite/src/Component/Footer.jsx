// Footer.js
import React from 'react';
import '../styles/home.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <img className='whitelogo' src="White_logo.png" alt="" />
            <hr className='footerline' />
            <div className="footer-content">
                <p>Empowering  SMEs with Hyper Local visibility, <br />comprehensive solution and innovative features and help SMEs thrive in Local Market.</p>
                <div className='twodivs'>

                    <div className="footer-section links">

                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#about">Community</a></li>
                            <li><a href="#about">Career</a></li>
                            <li><a href="#about">Terms</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section follow">
                        {/* <p>Follow Us:</p> */}
                        <img className='img1' src="https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png" alt="" />
                        <br />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" /><br />
                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /><br />
                        <img src="https://w7.pngwing.com/pngs/676/1/png-transparent-x-icon-ex-twitter-tech-companies-social-media-thumbnail.png" alt="" />
                    </div>
                </div>
                <div className="footer-section newsletter">
                    <h1>NEWSLETTER</h1>
                    <p><span className='community'>Subscribe</span> to our newsletter to get the latest <br /> updates and offers.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button className='submit' type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Localite Website | All Rights Reserved</p>
            </div>
        </footer>
    );
}


