// import React from 'react';
// import  Lottie from "lottie-react";
// import { Card } from 'primereact/card';
// import { Avatar } from 'primereact/avatar';
// import './AboutPage.css';

// const AboutPage = () => {
//   const events = [
//     { status: 'Founded', date: '2020', icon: 'pi pi-flag' },
//     { status: 'Reached 100k users', date: '2021', icon: 'pi pi-users' },
//     { status: 'Expanded globally', date: '2022', icon: 'pi pi-globe' }
//   ];

//   return (
//     <div className="about-page-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-left">
//           <span className="navbar-title">ShareRide</span>
//         </div>
//         <div className="navbar-right">
//           <span className="navbar-text">Your Profile</span>
//           <button className="UserButton">Profile</button>
//         </div>
//       </nav>
//       <div className="hero-section">
//         <div className="hero-text">
//           <h1>Welcome to ShareRide</h1>
//           <p>Where sustainable transportation meets community.</p>
//         </div>
//       </div>
//       <div className="about-section">
//         <h2>About ShareRide</h2>
//         <Card className="about-card">
//           <p>
//             At ShareRide, we are dedicated to making commuting easier, affordable, and environmentally friendly by connecting drivers and riders for shared journeys.
//           </p>
//         </Card>
//       </div>
//       <div className="mission-section">
//         <h2>Our Mission</h2>
//         <div className="mission-cards">
//           <Card className="mission-card hover-grow">
//             <Avatar icon="pi pi-car" className="mission-icon" size="large" />
//             <h3>Convenience</h3>
//             <p>We simplify your commute with our easy-to-use platform.</p>
//           </Card>
//           <Card className="mission-card hover-grow">
//             <Avatar icon="pi pi-user" className="mission-icon" size="large" />
//             <h3>Sustainability</h3>
//             <p>Carpooling helps reduce the carbon footprint of every journey.</p>
//           </Card>
//           <Card className="mission-card hover-grow">
//             <Avatar icon="pi pi-dollar" className="mission-icon" size="large" />
//             <h3>Cost Efficiency</h3>
//             <p>Save money by sharing rides and reducing transportation costs.</p>
//           </Card>
//         </div>
//       </div>
//       <div className="section journey-section">
//         <h2>Our Journey</h2>
//         <div className="journey-events">
//           <div className="journey-item">
//             <Avatar icon="pi pi-flag" className="journey-icon" />
//             <div className="journey-text">
//               <h4>Founded</h4>
//               <p>2020</p>
//             </div>
//           </div>
//           <div className="journey-item">
//             <Avatar icon="pi pi-users" className="journey-icon" />
//             <div className="journey-text">
//               <h4>Reached 100k users</h4>
//               <p>2021</p>
//             </div>
//           </div>
//           <div className="journey-item">
//             <Avatar icon="pi pi-globe" className="journey-icon" />
//             <div className="journey-text">
//               <h4>Expanded globally</h4>
//               <p>2022</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer className="footer">
//         <p>© 2024 ShareRide - All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };
// export default AboutPage;




import React from 'react';
import Lottie from "lottie-react";
import { Card } from 'primereact/card';
import animationData from '../assets/animations/animation.json';
import { Avatar } from 'primereact/avatar';
import './AboutPage.css';

const AboutPage = () => {
  const events = [
    { status: 'Founded', date: '2020', icon: 'pi pi-flag' },
    { status: 'Reached 100k users', date: '2021', icon: 'pi pi-users' },
    { status: 'Expanded globally', date: '2022', icon: 'pi pi-globe' }
  ];

  return (
    <div className="about-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-title">ShareRide</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-text">Your Profile</span>
          <button className="UserButton">Profile</button>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to ShareRide</h1>
          <p>Where sustainable transportation meets community.</p>
        </div>
      </div>
      {/* Animation Section */}
      <div className="animation-section">
        <Lottie animationData={animationData} loop={true} style={{ width: '150px', height: '150px' }} />
      </div>
      {/* About Section */}
      <div className="about-section">
        <h2>About ShareRide</h2>
        <Card className="about-card">
          <p>
            At ShareRide, we are dedicated to making commuting easier, affordable, and environmentally friendly by connecting drivers and riders for shared journeys.
          </p>
        </Card>
      </div>
      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <div className="mission-cards">
          <Card className="mission-card hover-grow">
            <Avatar icon="pi pi-car" className="mission-icon" size="large" />
            <h3>Convenience</h3>
            <p>We simplify your commute with our easy-to-use platform.</p>
          </Card>
          <Card className="mission-card hover-grow">
            <Avatar icon="pi pi-user" className="mission-icon" size="large" />
            <h3>Sustainability</h3>
            <p>Carpooling helps reduce the carbon footprint of every journey.</p>
          </Card>
          <Card className="mission-card hover-grow">
            <Avatar icon="pi pi-dollar" className="mission-icon" size="large" />
            <h3>Cost Efficiency</h3>
            <p>Save money by sharing rides and reducing transportation costs.</p>
          </Card>
        </div>
      </div>
      {/* Journey Section */}
      <div className="section journey-section">
        <h2>Our Journey</h2>
        <div className="journey-events">
          <div className="journey-item">
            <Avatar icon="pi pi-flag" className="journey-icon" />
            <div className="journey-text">
              <h4>Founded</h4>
              <p>2020</p>
            </div>
          </div>
          <div className="journey-item">
            <Avatar icon="pi pi-users" className="journey-icon" />
            <div className="journey-text">
              <h4>Reached 100k users</h4>
              <p>2021</p>
            </div>
          </div>
          <div className="journey-item">
            <Avatar icon="pi pi-globe" className="journey-icon" />
            <div className="journey-text">
              <h4>Expanded globally</h4>
              <p>2022</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 ShareRide - All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
