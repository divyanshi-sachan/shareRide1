// components/CreateNewRideForm.js
import React, { useState } from 'react';

const CreateNewRideForm = ({ onAddRide }) => {
  const [rideDetails, setRideDetails] = useState({
    name: '',
    dateTime: '',
    startLocation: '',
    endLocation: '',
    carBrand: '',
    licensePlate: '',
    noOfSeats: '',
    fare: '',
    drivingLicenseImage: '',
    carImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails({ ...rideDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRide(rideDetails);
    setRideDetails({
      name: '',
      dateTime: '',
      startLocation: '',
      endLocation: '',
      carBrand: '',
      licensePlate: '',
      noOfSeats: '',
      fare: '',
      drivingLicenseImage: '',
      carImage: '',
    });
  };

  return (
    <form className="create-ride-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Your Name" value={rideDetails.name} onChange={handleChange} required />
      
      <label>Date and Time</label>
      <input type="datetime-local" name="dateTime" value={rideDetails.dateTime} onChange={handleChange} required />
      
      <label>Start Location</label>
      <input type="text" name="startLocation" placeholder="Start Location" value={rideDetails.startLocation} onChange={handleChange} required />
      
      <label>End Location</label>
      <input type="text" name="endLocation" placeholder="End Location" value={rideDetails.endLocation} onChange={handleChange} required />
      
      <label>Car Brand</label>
      <input type="text" name="carBrand" placeholder="Car Brand" value={rideDetails.carBrand} onChange={handleChange} required />
      
      <label>License Plate</label>
      <input type="text" name="licensePlate" placeholder="License Plate" value={rideDetails.licensePlate} onChange={handleChange} required />
      
      <label>Number of Seats</label>
      <input type="number" name="noOfSeats" placeholder="Number of Seats" value={rideDetails.noOfSeats} onChange={handleChange} required />
      
      <label>Fare</label>
      <input type="number" name="fare" placeholder="Fare" value={rideDetails.fare} onChange={handleChange} required />
      
      <label>Driving License Image URL</label>
      <input type="url" name="drivingLicenseImage" placeholder="Driving License Image URL" value={rideDetails.drivingLicenseImage} onChange={handleChange} required />
      
      <label>Car Image URL</label>
      <input type="url" name="carImage" placeholder="Car Image URL" value={rideDetails.carImage} onChange={handleChange} required />
      
      <button type="submit">Create Ride</button>
    </form>
  );
};

export default CreateNewRideForm;

