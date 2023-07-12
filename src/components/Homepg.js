import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import About from './About';
import FAQ from './FAQ';
import Membersblock from './Membersblock';
import Login from './Login';
import { Link } from 'react-router-dom';
import Booknow from './BookNowPage';

function Homepg() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showBookNow, setShowBookNow] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  const handleBookNowClick = () => {
    setShowBookNow(true);
  };

  const handleBookNowClose = () => {
    setShowBookNow(false);
  };


  const handleLoginSubmit = () => {
    // Perform any login logic or redirect to a different page after successful login
    navigate('/dashboard');
  };

  return (
    <div className="containerhome" id="home">
      <div
        className="home-content"
        style={{
          backgroundImage: `url('./images/c11.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          opacity: 0.6,
        }}
      ></div>
      <div className="name">
        <Heading />
        <div className="button-container">
          <div style={{ position: 'relative' }}>
            <div>
              <div className="cloud">
                Book an appointment and talk with your counselor now!
              </div>
              <button className="motion-button" onClick={handleBookNowClick}>
  <Link to="/booknow" className="button-text">Book Now</Link>
</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-container">
        <p className="fade-in">
          Counselling is a helping process which aims to facilitate the process
          of growth and well-being. It empowers students with enhanced ability
          to solve problems, make decisions and deal more effectively with
          their concerns.
          <br />
          <br />
          IIT-Indore has a Student Counselling Centre in place that offers
          supportive and conducive environment for a student wherein he/she can
          discuss personal issues or academic challenges and seek help from a
          professional counsellor.
        </p>
        <br />
        <button className="login-button" onClick={handleLoginClick}>
  <Link to="/login" className="button-text">STUDENT LOG IN</Link>
</button>

      </div>
      <About />
      <Membersblock />
      <FAQ />

      {showLogin && <Login onClose={handleLoginClose} onSubmit={handleLoginSubmit} />}
    </div>
  );
}

export default Homepg;
