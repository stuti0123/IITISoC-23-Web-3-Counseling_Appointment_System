import React, { useState } from 'react';
import './Booknow.css';
import Axios from 'axios';

const BookNowPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:5000/createUser', {
        name,
        email,
        date,
        time,
      });

      if (response.status === 200 || 201 ) {
        setBookingMessage('You have successfully booked counselling services');
      } else {
        setBookingMessage('Your booking is unsuccessful. We are sorry for the inconvenience');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setBookingMessage('Your booking is unsuccessful. We are sorry for the inconvenience');
    }

    setName('');
    setEmail('');
    setDate('');
    setTime('');
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
        {bookingMessage && (
          <p className={bookingMessage.includes('successfully') ? 'success-message' : 'error-message'}>
            {bookingMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              placeholder="Select a date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              placeholder="Select a time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowPage;
