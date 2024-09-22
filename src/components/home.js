
import React, { useState, useEffect } from 'react';
import { UserButton } from '@clerk/clerk-react';
import Select from 'react-select';
import { motion } from 'framer-motion';  
import RideCard from '../components/RideCard';
import './home.css';

const Home = () => {

  const [cities, setCities] = useState([
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Bengaluru', label: 'Bengaluru' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Jaipur', label: 'Jaipur' },
    { value: 'Agra', label: 'Agra' }
  ]);
  const [options, setOptions] = useState(cities);
  const [searchTerm, setSearchTerm] = useState('');
  const [rides, setRides] = useState([
    {
      "rideID": 1,
      "name": "john_doe",
      "dateTime": "2024-09-15T08:00:00Z",
      "startLocation": "Connaught Place, New Delhi, India",
      "endLocation": "India Gate, New Delhi, India",
      "car": {
        "carBrand": "Toyota",
        "licensePlate": "XYZ 1234",
        "noOfSeats": 5,
        "availableSeats": 3,
        "imageURL": "https://i.pinimg.com/564x/cc/dc/30/ccdc30ff759560ae7dbde96aa0be4015.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 20.00
    },
    {
      "rideID": 2,
      "name": "jane_smith",
      "dateTime": "2024-09-16T15:00:00Z",
      "startLocation": "Chennai Airport, Chennai, India",
      "endLocation": "Tidel Park, Chennai, India",
      "car": {
        "carBrand": "Honda",
        "licensePlate": "ABC 5678",
        "noOfSeats": 4,
        "availableSeats": 2,
        "imageURL": "https://i.pinimg.com/564x/9c/f8/ff/9cf8ffec717d8b5ce6b02ec5348fe40b.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/9d/5f/82/9d5f82014a531d716834bc836cf4d773.jpg"
      },
      "fare": 30.00
    },
    {
      "rideID": 3,
      "name": "alice_wonder",
      "dateTime": "2024-09-17T19:00:00Z",
      "startLocation": "Gateway of India, Mumbai, India",
      "endLocation": "Marine Drive, Mumbai, India",
      "car": {
        "carBrand": "Ford",
        "licensePlate": "DEF 9012",
        "noOfSeats": 6,
        "availableSeats": 4,
        "imageURL": "https://i.pinimg.com/564x/3d/bd/5e/3dbd5ebfef96f0dcadbe85214913ea88.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 25.00
    },
    {
      "rideID": 4,
      "name": "bob_jones",
      "dateTime": "2024-09-18T10:00:00Z",
      "startLocation": "Hampi, Karnataka, India",
      "endLocation": "Badami, Karnataka, India",
      "car": {
        "carBrand": "Chevrolet",
        "licensePlate": "GHI 3456",
        "noOfSeats": 7,
        "availableSeats": 5,
        "imageURL": "https://i.pinimg.com/564x/0b/71/7d/0b717d09e98623b544942d9d9687bf3d.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/32/66/99/3266992094db3e77da8cc4d4fa38b7d7.jpg"
      },
      "fare": 35.00
    },
    {
      "rideID": 5,
      "name": "carol_martin",
      "dateTime": "2024-09-19T11:00:00Z",
      "startLocation": "Bengaluru, Karnataka, India",
      "endLocation": "Mysuru, Karnataka, India",
      "car": {
        "carBrand": "Nissan",
        "licensePlate": "JKL 7890",
        "noOfSeats": 5,
        "availableSeats": 3,
        "imageURL": "https://i.pinimg.com/564x/95/3a/ce/953acef4bead7ca8ca91a57f5907fcb7.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 18.00
    },
    {
      "rideID": 6,
      "name": "david_clark",
      "dateTime": "2024-09-20T09:00:00Z",
      "startLocation": "Kolkata, West Bengal, India",
      "endLocation": "Howrah Bridge, Kolkata, India",
      "car": {
        "carBrand": "Hyundai",
        "licensePlate": "MNO 2345",
        "noOfSeats": 4,
        "availableSeats": 2,
        "imageURL": "https://i.pinimg.com/564x/94/60/80/9460809ac483e99c59bb96d3af9f229c.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5b/bb/87/5bbb8741cbdf2c1d2d93155f4d0a0fb5.jpg"
      },
      "fare": 15.00
    },
    {
      "rideID": 7,
      "name": "emma_wilson",
      "dateTime": "2024-09-21T12:00:00Z",
      "startLocation": "Hyderabad, Telangana, India",
      "endLocation": "Charminar, Hyderabad, India",
      "car": {
        "carBrand": "Kia",
        "licensePlate": "PQR 6789",
        "noOfSeats": 5,
        "availableSeats": 3,
        "imageURL": "https://i.pinimg.com/564x/20/2d/41/202d41f3974e43d393f2eabb787a9cf6.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 22.00
    },
    {
      "rideID": 8,
      "name": "frank_wright",
      "dateTime": "2024-09-22T14:00:00Z",
      "startLocation": "Pune, Maharashtra, India",
      "endLocation": "Shaniwarwada, Pune, India",
      "car": {
        "carBrand": "BMW",
        "licensePlate": "STU 9012",
        "noOfSeats": 4,
        "availableSeats": 2,
        "imageURL": "https://i.pinimg.com/564x/f3/78/6d/f3786d6e52d006ab37102e1a8f59a71e.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/2e/d4/55/2ed455bf80ca3ba28ddb30d87e0a06ff.jpg"
      },
      "fare": 40.00
    },
    {
      "rideID": 9,
      "name": "grace_miller",
      "dateTime": "2024-09-23T20:00:00Z",
      "startLocation": "Jaipur, Rajasthan, India",
      "endLocation": "Hawa Mahal, Jaipur, India",
      "car": {
        "carBrand": "Audi",
        "licensePlate": "VWX 3456",
        "noOfSeats": 5,
        "availableSeats": 4,
        "imageURL": "https://i.pinimg.com/564x/04/00/50/0400506b5b2f513212ccf2c10a60d8e3.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 28.00
    },
    {
      "rideID": 10,
      "name": "henry_taylor",
      "dateTime": "2024-09-24T18:00:00Z",
      "startLocation": "Agra, Uttar Pradesh, India",
      "endLocation": "Taj Mahal, Agra, India",
      "car": {
        "carBrand": "Mazda",
        "licensePlate": "YZA 4567",
        "noOfSeats": 4,
        "availableSeats": 2,
        "imageURL": "https://i.pinimg.com/564x/12/35/b5/1235b5dd4fc5b638c8eedb9e63c50616.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/9d/5f/82/9d5f82014a531d716834bc836cf4d773.jpg"
      },
      "fare": 27.00
    },
    {
      "rideID": 11,
      "name": "isabella_adams",
      "dateTime": "2024-09-25T16:00:00Z",
      "startLocation": "Delhi, India",
      "endLocation": "Qutub Minar, Delhi, India",
      "car": {
        "carBrand": "Tesla",
        "licensePlate": "BCD 6789",
        "noOfSeats": 5,
        "availableSeats": 3,
        "imageURL": "https://i.pinimg.com/564x/12/61/6e/12616e0fed2d3c65169b2ced7a7e7ef7.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 50.00
    },
    {
      "rideID": 12,
      "name": "jack_smith",
      "dateTime": "2024-09-26T10:00:00Z",
      "startLocation": "Chennai, India",
      "endLocation": "Marina Beach, Chennai, India",
      "car": {
        "carBrand": "Volkswagen",
        "licensePlate": "EFG 3456",
        "noOfSeats": 5,
        "availableSeats": 4,
        "imageURL": "https://i.pinimg.com/564x/4e/ae/c5/4eaec59348c30b85ec5dbf3895dd683b.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 23.00
    },
    {
      "rideID": 13,
      "name": "lucas_johnson",
      "dateTime": "2024-09-27T08:00:00Z",
      "startLocation": "Mumbai, India",
      "endLocation": "Bandra-Worli Sea Link, Mumbai, India",
      "car": {
        "carBrand": "Jaguar",
        "licensePlate": "GHI 7890",
        "noOfSeats": 4,
        "availableSeats": 2,
        "imageURL": "https://i.pinimg.com/564x/54/ad/6f/54ad6f351eee6dd61d8871a2fd6c90ff.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/1f/f7/5f/1ff75f6450dccfc924062cbec9f613b0.jpg"
      },
      "fare": 55.00
    },
    {
      "rideID": 14,
      "name": "mia_jones",
      "dateTime": "2024-09-28T13:00:00Z",
      "startLocation": "Bengaluru, India",
      "endLocation": "Cubbon Park, Bengaluru, India",
      "car": {
        "carBrand": "Land Rover",
        "licensePlate": "JKL 4567",
        "noOfSeats": 7,
        "availableSeats": 5,
        "imageURL": "https://i.pinimg.com/564x/ba/4c/44/ba4c443c895db6687bcb5ce9506493c9.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 32.00
    },
    {
      "rideID": 15,
      "name": "noah_davis",
      "dateTime": "2024-09-29T17:00:00Z",
      "startLocation": "Hyderabad, India",
      "endLocation": "Golconda Fort, Hyderabad, India",
      "car": {
        "carBrand": "Audi",
        "licensePlate": "MNO 6789",
        "noOfSeats": 5,
        "availableSeats": 4,
        "imageURL": "https://i.pinimg.com/736x/f7/4a/34/f74a3444d103f845f976b44639eb097b.jpg",
        "drivingLicense": "https://i.pinimg.com/736x/76/9a/de/769aded8efee3b6bcf7c87fc7bd375d1.jpg"
      },
      "fare": 24.00
    },
    {
      "rideID": 16,
      "name": "emma_wilson",
      "dateTime": "2024-09-21T12:00:00Z",
      "startLocation": "Hyderabad, Telangana, India",
      "endLocation": "Charminar, Hyderabad, India",
      "car": {
        "carBrand": "Kia",
        "licensePlate": "PQR 6789",
        "noOfSeats": 5,
        "availableSeats": 3,
        "imageURL": "https://i.pinimg.com/564x/20/2d/41/202d41f3974e43d393f2eabb787a9cf6.jpg",
        "drivingLicense": "https://i.pinimg.com/564x/5f/69/9a/5f699a13817aca189f3d530b77ed9b48.jpg"
      },
      "fare": 22.00
    }
  ]);
  const [filteredRides, setFilteredRides] = useState(rides);

  useEffect(() => {
    const filterRides = () => {
      if (searchTerm) {
        setFilteredRides(rides.filter(ride =>
          ride.startLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ride.endLocation.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      } else {
        setFilteredRides(rides);
      }
    };

    filterRides();
  }, [searchTerm, rides]);

  const handleInputChange = (selectedOption) => {
    setSearchTerm(selectedOption ? selectedOption.value : '');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-title">ShareRide</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-text">Your Profile</span>
          <UserButton />
        </div>
      </nav>
      <div className="content">
        <h1 className='h1'>Which place do you wanna go?</h1>

        <Select
          options={options}
          onChange={handleInputChange}
          placeholder="Select a city..."
        />

        <h2 className='h2'>Available Rides</h2>
        <div className="rides-container">
          {filteredRides.map(ride => (
            <motion.div
              key={ride.rideID}
              className="ride-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RideCard ride={ride} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
