import React, { useState, useEffect } from 'react';
import './Booknow.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const BookNowPage = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/getUsers');
        setListOfUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  const createUser = () => {
    const newUser = {
      name,
      email,
      date,
      time,
    };

    Axios.post('http://localhost:5000/createUser', newUser)
      .then((response) => {
        setListOfUsers([...listOfUsers, response.data]);
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setBookingStatus('YOUR BOOKING IS SUCCESSFUL');
      })
      .catch((error) => {
        console.log('Error creating user:', error);
        setBookingStatus('YOUR BOOKING IS UNSUCCESSFUL. We are sorry for the inconvenience.');
      });
  };

  return (
    <div className="book-now-container">
      <div
        className="book-now-bg"
        style={{
          position: 'relative',
          height: '100vh',
          background: `url('./images/c11.jpg') center/cover`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(5px)',
        }}
      ></div>
      <div className="book-now-page">
        <h2>Book Now</h2>
        <div className="form-group">
          <p>Name:</p>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p>Email:</p>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Date:</p>
          <input
            type="date"
            placeholder="Select a date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <p>Time:</p>
          <input
            type="time"
            placeholder="Select a time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" style={{ marginBottom: 23 }} type="submit" onClick={createUser}>
          SUBMIT
        </button>

        {bookingStatus && (
          <p style={{ color: '#540000', fontSize: '16px', marginTop: '5px', fontWeight: 500, textAlign: 'center' }}>
            {bookingStatus}
          </p>
        )}

      
        </div>
        {/* Add a button to navigate back to the homepage */}
        <div style={{ position: 'absolute', top: 10, left: 10 }}>        
          <Link to="/" className="home-button">
            BACK TO HOMEPAGE
          </Link>
      </div>
    </div>

  );
};

export default BookNowPage;
