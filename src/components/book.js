
import React, { useState ,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaCar, FaIdCard, FaCalendarAlt, FaDollarSign, FaStar, FaComment } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'react-toastify/dist/ReactToastify.css';
import './book.css';
const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            className={`star ${starIndex <= rating ? 'active' : ''}`}
            onClick={() => onRatingChange(starIndex)}
          />
        );
      })}
    </div>
  );
};

const BookPage = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requests: '',
  });
  const toast = useRef(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.current.show({
      severity: 'success',
      summary: 'Booking Successful',
      detail: 'Your booking request has been submitted.',
      life: 3000, 
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/send-booking-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       const data = await response.json(); 
  //       if (data.success) {
  //         alert('Booking request sent successfully! Please check your email.');
  //       } else {
  //         alert('Failed to send booking request.');
  //       }
  //     } else {
  //       alert('Failed to send booking request. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending booking request:', error);
  //     alert('Error sending booking request.');
  //   }
  // };
  if (!ride) {
    return <p>No ride information available.</p>;
  }

  return (
    <>
       <Toast ref = {toast}/>
      <nav className="navbar">
        <div className="logo">RideShare</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="book-page-container">
          <motion.div
            className="car-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={ride.car.imageURL} alt={ride.car.carBrand} className="car-image" />
          </motion.div>

          <div className="ride-details-container">
            <div className="ride-details">
              <h1><FaCalendarAlt /> Book Your Ride</h1>
              <div className="detail-item">
                <FaUser /> <span>Driver's Name: {ride.name}</span>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt /> <span>Start Location: {ride.startLocation}</span>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt /> <span>End Location: {ride.endLocation}</span>
              </div>
              <div className="detail-item">
                <FaCar /> <span>Car: {ride.car.carBrand}</span>
              </div>
              <div className="detail-item">
                <FaIdCard /> <span>Driving License:</span>
                <img src={ride.car.drivingLicense} alt="Driving License" className="car-license-image" />
              </div>
              <div className="detail-item">
                <FaDollarSign /> <span>Fare: ${ride.fare}</span>
              </div>
              <div className="detail-item">
                <FaStar /> <span>Rate the Ride:</span>
                <StarRating rating={rating} onRatingChange={handleRatingChange} />
              </div>
              <div className="detail-item">
                <FaComment /> <span>Leave a Comment:</span>
                <input
                  type="text"
                  placeholder="Write your review..."
                  value={comment}
                  onChange={handleCommentChange}
                  className="comment-input"
                />
              </div>
            </div>

            <motion.div
              className="booking-form-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 123 456 7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Special Requests:
                  <textarea
                    name="requests"
                    placeholder="Any special requests or instructions?"
                    value={formData.requests}
                    onChange={handleInputChange}
                  ></textarea>
                </label>
                <button type="submit" className="submit-button">Request Booking</button>
              </form>

              {rating > 0 && (
                <div className="review-summary">
                  <p><strong>Your Rating:</strong> {rating} stars</p>
                  <p><strong>Your Comment:</strong> {comment}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookPage;



