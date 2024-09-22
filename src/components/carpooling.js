
import React from 'react';
import Slider from 'react-slick';
import { FaMoneyBillWave, FaHandHoldingHeart, FaLeaf, FaCar, FaDollarSign, FaRoute } from 'react-icons/fa'; // Importing Icons
import './carpool.css'; 
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carpool = () => {
  const destinations = [
    { url: 'https://i.pinimg.com/564x/64/41/c9/6441c96465b5007d4acd151917f11b40.jpg', name: 'Destination 1' },
    { url: 'https://i.pinimg.com/564x/9b/bf/49/9bbf4918ce2d13a899fee90dc3fadedf.jpg', name: 'Destination 2' },
    { url: 'https://i.pinimg.com/564x/55/fd/19/55fd196857679bc2d4e2cc416a4ee007.jpg', name: 'Destination 3' },
    { url: 'https://i.pinimg.com/564x/c4/58/58/c45858a9fcefb8f4e5eec6a99819b1b3.jpg', name: 'Destination 4' },
    { url: 'https://i.pinimg.com/564x/a0/6d/b2/a06db2c93668b1ef3f212d8947a8fed6.jpg', name: 'Destination 5' },
    { url: 'https://i.pinimg.com/736x/64/1f/3b/641f3bfbef97004c7e1f2c35c1e7ff8b.jpg', name: 'Destination 6' },
    { url: 'https://i.pinimg.com/564x/0c/d3/9d/0cd39df71f8306c9751fbc85b33df276.jpg', name: 'Destination 7' },
    { url: 'https://i.pinimg.com/736x/24/96/a2/2496a2a7084c4cffc3afcf3648e4f4bd.jpg', name: 'Destination 8' },
    { url: 'https://i.pinimg.com/564x/dc/cf/fa/dccffa1493ebe4a64cbac74446f93e76.jpg', name: 'Destination 9' },
    { url: 'https://i.pinimg.com/564x/52/d7/54/52d754b579b3053651b658cda1ed87af.jpg', name: 'Destination 10' },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <div className="carpool-container">
      <div className="background-image">
        <div className="overlay">
          <h1 className="carpool-heading">Welcome to ShareRide</h1>
          <p className="carpool-description">
            Your trusted partner for carpooling. Join a community of drivers and riders who share the journey and reduce their carbon footprint.
          </p>
        </div>
      </div>

      <div className="grid-container">
        <h2 className="grid-heading">Some Famous Destinations</h2>
        <Slider {...sliderSettings}>
          {destinations.map((dest, index) => (
            <div key={index} className="grid-item">
              <img src={dest.url} alt={dest.name} />
              <h3>{dest.name}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="why-carpool-section">
        <h2 className="why-heading">Why Carpool?</h2>
        <div className="why-carpool-cards">
          <div className="card">
            <FaMoneyBillWave className="icon" />
            <h3>Save Money</h3>
            <p>Carpooling is a cost-effective solution for commuting and traveling.</p>
          </div>
          <div className="card">
            <FaHandHoldingHeart className="icon" />
            <h3>Build Community</h3>
            <p>Meet new people and create a better sense of community through carpooling.</p>
          </div>
          <div className="card">
            <FaLeaf className="icon" />
            <h3>Go Green</h3>
            <p>Reduce your carbon footprint and contribute to a cleaner environment.</p>
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="how-carpool-cards">
          <div className="card">
            <FaCar className="icon" />
            <h3>Find a ride or offer one</h3>
            <p>Search for rides or offer a ride. If you're a driver, set your own price. If you're a rider, choose the price that works for you.</p>
          </div>
          <div className="card">
            <FaDollarSign className="icon" />
            <h3>Set the price</h3>
            <p>Drivers set the price for each seat in their car. Riders choose the price that works for them. The average price range for a ride is $5–10.</p>
          </div>
          <div className="card">
            <FaRoute className="icon" />
            <h3>Enjoy the ride</h3>
            <p>Meet at the pickup location and enjoy the ride. Payment is automatically transferred after the ride is completed.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h3>Join Us in Carpooling!</h3>
          <p>Connect with fellow riders and drivers, save costs, and contribute to a greener planet.</p>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms of Service</a>
            {/* <a href="/privacy">Privacy Policy</a> */}
          </div>
        </div>
        <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
      </footer>
    </div>
  );
};

export default Carpool;






