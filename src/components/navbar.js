import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://i.pinimg.com/564x/bb/49/5b/bb495ba3db3be888b6a8b1e8f1ad7e2d.jpg"
          alt="ShareRide Logo"
          className="logo"
        />
        <h1 className="heading">ShareRide</h1>
      </div>
      <div className="navbar-right">
        <Link to="/signup">
          <button className="btn signup-btn">Sign Up</button>
        </Link>
        <Link to="/sign-in">
          <button className="btn login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
