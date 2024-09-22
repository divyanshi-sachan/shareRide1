import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import NotFoundAnimation from '../assets/animations/animation4.json'; // Import your Lottie file
import { UserButton } from '@clerk/clerk-react'; // Assuming you're using Clerk for user authentication
import './Error.css';

const NotFoundPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-title">ShareRide</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-text">Your Profile</span>
          <UserButton />
        </div>
      </nav>

      <div className="not-found-container">
        <div className="animation-container">
          <Lottie animationData={NotFoundAnimation} loop={true} className="lottie-animation" />
        </div>
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-button">Back to Home</Link>
      </div>
    </>
  );
};

export default NotFoundPage;

