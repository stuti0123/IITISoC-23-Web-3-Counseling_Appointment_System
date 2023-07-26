import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import About from './About';
import FAQ from './FAQ';
import Membersblock from './Membersblock';
import { Link } from 'react-router-dom';

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
          zIndex:'2'
        }}
      ></div>
      <div className="name">
        <Heading />
        <div className="button-container">
          <div className="bigger" style={{ position: 'relative' }}>
            <div>
              <div className="cloud">Book an appointment and talk with your counselor now!</div>
              <button className="motion-button" onClick={handleBookNowClick}>
                <Link to="/booknow" className="button-text">
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="textcontainer">
        <p className="fade-in">
          Counselling is a helping process which aims to facilitate the process of growth and well-being. It empowers
          students with enhanced ability to solve problems, make decisions and deal more effectively with their concerns.
          <br />
          <br />
          IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a
          student wherein he/she can discuss personal issues or academic challenges and seek help from a professional
          counsellor.
        </p>
        <br />
        <div className='helpline'>
        <a href="https://mail.google.com/a/iiti.ac.in">IITI Helpline Desk</a>
        </div>
      </div>
      <About />
      <Membersblock />
      <FAQ />
    </div>
  );
}

export default Homepg;
