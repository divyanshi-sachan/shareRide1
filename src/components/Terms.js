
import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Checkbox } from 'primereact/checkbox';
import { UserButton } from '@clerk/clerk-react';
import Lottie from "lottie-react";
import { FaInfoCircle } from 'react-icons/fa';
import animationData from '../assets/animations/animation3.json'; 
import './Terms.css';

const termsData = [
  { title: 'Introduction', description: 'An overview of our terms and services.' },
  { title: 'Eligibility', description: 'Who can use our services.' },
  { title: 'User Responsibilities', description: 'Your obligations when using our platform.' },
  { title: 'Ride Sharing', description: 'Guidelines for sharing rides safely.' },
  { title: 'Cancellation Policy', description: 'How to cancel a ride and any associated fees.' },
  { title: 'Limitation of Liability', description: 'Our liability in case of issues.' },
  { title: 'Modifications to Terms', description: 'How we may change our terms.' },
  { title: 'Contact Information', description: 'How to reach us for questions or support.' }
];

const TermsAndConditionsPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [checkedPoints, setCheckedPoints] = useState(Array(termsData.length).fill(false));
  const [selectedTermIndex, setSelectedTermIndex] = useState(null);
  const toast = React.useRef(null);

  const handleCheckboxChange = (index) => {
    const updatedCheckedPoints = [...checkedPoints];
    updatedCheckedPoints[index] = !updatedCheckedPoints[index];
    setCheckedPoints(updatedCheckedPoints);
    setAcceptedTerms(updatedCheckedPoints.every(Boolean));
  };

  const handleAccept = () => {
    if (acceptedTerms) {
      toast.current.show({ severity: 'success', summary: 'Accepted', detail: 'Thank you for accepting the terms and conditions!', life: 3000 });
    } else {
      toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Please accept all terms before proceeding.', life: 3000 });
    }
  };

  return (
    <div className="terms-background">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-title">ShareRide</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-text">Your Profile</span>
          <UserButton />
        </div>
      </nav>

      <Toast ref={toast} />

      <div className="terms-gap" /> {/* Gap between navbar and terms container */}

      <div className="terms-content">
        <Card className="terms-card">
          <h1 className="terms-title">Terms and Conditions</h1>

          {termsData.map((term, index) => (
            <div key={index} className="terms-point" onClick={() => setSelectedTermIndex(index)}>
              <Checkbox
                inputId={`point${index}`}
                checked={checkedPoints[index]}
                onChange={() => handleCheckboxChange(index)}
                className="terms-checkbox"
              />
              <label htmlFor={`point${index}`}>{term.title}</label>
              <FaInfoCircle className="info-icon" />
              {selectedTermIndex === index && (
                <p className="term-description">{term.description}</p>
              )}
            </div>
          ))}

          <Button label="Accept Terms" className="accept-button" onClick={handleAccept} />
          
          <div className="animation-container">
            <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: '150px', width: '150px' }} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
