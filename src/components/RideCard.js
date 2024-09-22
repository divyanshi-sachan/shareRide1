import React from 'react';
import { motion } from 'framer-motion'; 
import './RideCard.css'; 
import { useNavigate } from 'react-router-dom'; 

const RideCard = ({ ride }) => {
  const navigate = useNavigate(); 
  const handleBookNow = (ride) => {
    navigate('/book', { state: { ride } }); 
  };
  return (
    <motion.div
      className="ride-card-content"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img src={ride.car.imageURL} alt={ride.car.carBrand} className="car-image" />
      <div className="ride-details">
        <h2><strong>Name:</strong> {ride.name}</h2>
        <p><strong>Date & Time:</strong> {new Date(ride.dateTime).toLocaleString()}</p>
        <p><strong>From:</strong> {ride.startLocation}</p>
        <p><strong>To:</strong> {ride.endLocation}</p>
        <p><strong>Car:</strong> {ride.car.carBrand}</p>
        <div className="fare-container">
          <p><strong>Fare:</strong> ${ride.fare.toFixed(2)}</p>
          <button onClick={() => handleBookNow(ride)} className="book-now-button">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default RideCard;
