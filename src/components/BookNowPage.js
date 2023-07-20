import React, { useState, useEffect } from 'react';
import './Booknow.css';
import Axios from 'axios';

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
        <div className="form-group">
          
        </div>

        <h2>Book Now</h2>

        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="date"
          placeholder="Select a date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          placeholder="Select a time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button className="submit-button" type="submit" onClick={createUser}>
          SUBMIT
        </button>

        {bookingStatus && <p>{bookingStatus}</p>}
      </div>
    </div>
  );
};

export default BookNowPage;
