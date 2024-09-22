
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './ContactPage.css'; 
// import { Card } from 'primereact/card';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { FaUser, FaEnvelope, FaPhone, FaComments, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Lottie from "lottie-react";
// import { UserButton } from '@clerk/clerk-react';
// import * as animationData from '../assets/animations/animation2.json';
// import { Toast } from 'primereact/toast';
// import { TabView, TabPanel } from 'primereact/tabview';
// import { Accordion, AccordionTab } from 'primereact/accordion';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const toast = React.useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send('service_n6qikxp', 'template_mhzpx8j', formData, 'ttkrzP7CQGHfZ0FGI')
//       .then((response) => {
//         toast.current.show({ severity: 'success', summary: 'Success', detail: 'Mail has been sent successfully!', life: 3000 });
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
//       }, (error) => {
//         toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send mail. Please try again later.', life: 3000 });
//       });
//   };

//   return (
//     <div className="contact-page-container">
//       <nav className="navbar">
//         <div className="navbar-left">
//           <span className="navbar-title">ShareRide</span>
//         </div>
//         <div className="navbar-right">
//           <span className="navbar-text">Your Profile</span>
//           <UserButton />
//         </div>
//       </nav>

//       <Toast ref={toast} />

//       <div className="contact-form-section">
//         <div className="lottie-container">
//           <Lottie animationData={animationData} height={200} width={200} />
//         </div>
//         <Card className="contact-card">
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <FaUser className="input-icon" />
//               <InputText 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 placeholder="Your Name" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaEnvelope className="input-icon" />
//               <InputText 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 placeholder="Your Email" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaPhone className="input-icon" />
//               <InputText 
//                 name="phone" 
//                 value={formData.phone} 
//                 onChange={handleChange} 
//                 placeholder="Your Phone" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaComments className="input-icon" />
//               <InputTextarea 
//                 name="message" 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 placeholder="Your Message" 
//                 required 
//                 rows={5} 
//                 className="custom-input-textarea"
//               />
//             </div>
//             <Button type="submit" label="Send Message" className="send-button" />
//           </form>
//         </Card>
//       </div>

//       <div className="map-container">
//         <h2>Our Location</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097045!2d144.95373531531584!3d-37.81627997975191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d1f7%3A0x5045675218ce6e0!2sMelbourne%20Victoria!5e0!3m2!1sen!2sau!4v1615197585760!5m2!1sen!2sau"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       <div className="social-media-container">
//         <h2>Follow Us</h2>
//         <div className="social-icons">
//           <FaFacebook />
//           <FaTwitter />
//           <FaInstagram />
//         </div>
//       </div>

//       <div className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <Accordion>
//           <AccordionTab header="What services do you offer?">
//             <p>We offer ride-sharing services to help you connect with others going the same way.</p>
//           </AccordionTab>
//           <AccordionTab header="How can I book a ride?">
//             <p>You can book a ride through our website or mobile app.</p>
//           </AccordionTab>
//           <AccordionTab header="What is your cancellation policy?">
//             <p>You can cancel your ride up to 30 minutes before the scheduled time without any charge.</p>
//           </AccordionTab>
//         </Accordion>
//       </div>

//       <div className="testimonials-section">
//         <h2>Testimonials</h2>
//         <TabView>
//           <TabPanel header="User A">
//             <p>"Great service! Highly recommended!"</p>
//           </TabPanel>
//           <TabPanel header="User B">
//             <p>"Had an amazing experience!"</p>
//           </TabPanel>
//         </TabView>
//       </div>

//       <div className="newsletter-section">
//         <h2>Subscribe to our Newsletter</h2>
//         <InputText placeholder="Your Email" className="newsletter-input" />
//         <Button label="Subscribe" className="subscribe-button" />
//       </div>

//       <div className="contact-info">
//         <h2>Contact Information</h2>
//         <p>Email: support@shareride.com</p>
//         <p>Phone: +1 234 567 890</p>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './ContactPage.css'; 
// import { Card } from 'primereact/card';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { FaUser, FaEnvelope, FaPhone, FaComments, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Lottie from "lottie-react";
// import { UserButton } from '@clerk/clerk-react';
// import * as animationData from '../assets/animations/animation2.json';
// import { Toast } from 'primereact/toast';
// import { TabView, TabPanel } from 'primereact/tabview';
// import { Accordion, AccordionTab } from 'primereact/accordion';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const toast = React.useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send('service_n6qikxp', 'template_mhzpx8j', formData, 'ttkrzP7CQGHfZ0FGI')
//       .then((response) => {
//         toast.current.show({ severity: 'success', summary: 'Success', detail: 'Mail has been sent successfully!', life: 3000 });
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
//       }, (error) => {
//         toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send mail. Please try again later.', life: 3000 });
//       });
//   };

//   return (
//     <div className="contact-page-container">
//       <nav className="navbar">
//         <div className="navbar-left">
//           <span className="navbar-title">ShareRide</span>
//         </div>
//         <div className="navbar-right">
//           <span className="navbar-text">Your Profile</span>
//           <UserButton />
//         </div>
//       </nav>

//       <Toast ref={toast} />

//       <div className="contact-form-section">
//         <div className="lottie-container">
//           <Lottie animationData={animationData} height={200} width={200} />
//         </div>
//         <Card className="contact-card">
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <FaUser className="input-icon" />
//               <InputText 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 placeholder="Your Name" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaEnvelope className="input-icon" />
//               <InputText 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 placeholder="Your Email" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaPhone className="input-icon" />
//               <InputText 
//                 name="phone" 
//                 value={formData.phone} 
//                 onChange={handleChange} 
//                 placeholder="Your Phone" 
//                 required 
//                 className="custom-input"
//               />
//             </div>
//             <div className="input-group">
//               <FaComments className="input-icon" />
//               <InputTextarea 
//                 name="message" 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 placeholder="Your Message" 
//                 required 
//                 rows={5} 
//                 className="custom-input-textarea"
//               />
//             </div>
//             <Button type="submit" label="Send Message" className="send-button" />
//           </form>
//         </Card>
//       </div>

//       <div className="map-container">
//         <h2>Our Location</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097045!2d144.95373531531584!3d-37.81627997975191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d1f7%3A0x5045675218ce6e0!2sMelbourne%20Victoria!5e0!3m2!1sen!2sau!4v1615197585760!5m2!1sen!2sau"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       <div className="social-media-container">
//         <h2>Follow Us</h2>
//         <div className="social-icons">
//           <FaFacebook />
//           <FaTwitter />
//           <FaInstagram />
//         </div>
//       </div>

//       <div className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <Accordion>
//           <AccordionTab header="What services do you offer?">
//             <p>We offer ride-sharing services to help you connect with others going the same way.</p>
//           </AccordionTab>
//           <AccordionTab header="How can I book a ride?">
//             <p>You can book a ride through our website or mobile app.</p>
//           </AccordionTab>
//           <AccordionTab header="What is your cancellation policy?">
//             <p>You can cancel your ride up to 30 minutes before the scheduled time without any charge.</p>
//           </AccordionTab>
//         </Accordion>
//       </div>

//       <div className="testimonials-section">
//         <h2>Testimonials</h2>
//         <div className="testimonial-cards">
//           <Card className="testimonial-card">
//             <h3>User A</h3>
//             <p>"Great service! Highly recommended!"</p>
//           </Card>
//           <Card className="testimonial-card">
//             <h3>User B</h3>
//             <p>"Had an amazing experience!"</p>
//           </Card>
//           <Card className="testimonial-card">
//             <h3>User C</h3>
//             <p>"Fantastic app for finding rides."</p>
//           </Card>
//         </div>
//       </div>

//       <div className="newsletter-section">
//         <h2>Subscribe to our Newsletter</h2>
//         <InputText placeholder="Your Email" className="newsletter-input" />
//         <Button label="Subscribe" className="subscribe-button" />
//       </div>

//       <div className="contact-info">
//         <h2>Contact Information</h2>
//         <p>Email: support@shareride.com</p>
//         <p>Phone: +1 234 567 890</p>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css'; 
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { FaUser, FaEnvelope, FaPhone, FaComments, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Lottie from "lottie-react";
import { UserButton } from '@clerk/clerk-react';
import * as animationData from '../assets/animations/animation2.json';
import { Toast } from 'primereact/toast';
import { Accordion, AccordionTab } from 'primereact/accordion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [subscribed, setSubscribed] = useState(false);
  const toast = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_n6qikxp', 'template_mhzpx8j', formData, 'ttkrzP7CQGHfZ0FGI')
      .then((response) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Mail has been sent successfully!', life: 3000 });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send mail. Please try again later.', life: 3000 });
      });
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    toast.current.show({ severity: 'success', summary: 'Subscribed', detail: 'You have subscribed successfully!', life: 3000 });
  };

  return (
    <div className="contact-page-container">
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

      <div className="contact-form-section">
        <div className="lottie-container">
          <Lottie animationData={animationData} height={200} width={200} />
        </div>
        <Card className="contact-card">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <InputText 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
                className="custom-input"
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <InputText 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                required 
                className="custom-input"
              />
            </div>
            <div className="input-group">
              <FaPhone className="input-icon" />
              <InputText 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Your Phone" 
                required 
                className="custom-input"
              />
            </div>
            <div className="input-group">
              <FaComments className="input-icon" />
              <InputTextarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                required 
                rows={5} 
                className="custom-input-textarea"
              />
            </div>
            <Button type="submit" label="Send Message" className="send-button" />
          </form>
        </Card>
      </div>

      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097045!2d144.95373531531584!3d-37.81627997975191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d1f7%3A0x5045675218ce6e0!2sMelbourne%20Victoria!5e0!3m2!1sen!2sau!4v1615197585760!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="social-media-container">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion>
          <AccordionTab header="What services do you offer?" className="faq-item">
            <p>We offer ride-sharing services to help you connect with others going the same way.</p>
          </AccordionTab>
          <AccordionTab header="How can I book a ride?" className="faq-item">
            <p>You can book a ride through our website or mobile app.</p>
          </AccordionTab>
          <AccordionTab header="What is your cancellation policy?" className="faq-item">
            <p>You can cancel your ride up to 30 minutes before the scheduled time without any charge.</p>
          </AccordionTab>
        </Accordion>
      </div>

      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <Card className="testimonial-card">
            <h3>User A</h3>
            <p>"Great service! Highly recommended!"</p>
          </Card>
          <Card className="testimonial-card">
            <h3>User B</h3>
            <p>"Had an amazing experience!"</p>
          </Card>
          <Card className="testimonial-card">
            <h3>User C</h3>
            <p>"Fantastic app for finding rides."</p>
          </Card>
        </div>
      </div>

      <div className="newsletter-section">
        <h2>Subscribe to our Newsletter</h2>
        <InputText placeholder="Your Email" className="newsletter-input" />
        <Button label="Subscribe" className="subscribe-button" onClick={handleSubscribe} />
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <Card className="contact-info-card">
          <p>Email: support@shareride.com</p>
          <p>Phone: +1 234 567 890</p>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
