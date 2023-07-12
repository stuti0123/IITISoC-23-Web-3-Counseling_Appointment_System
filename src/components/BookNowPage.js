import React, { useState } from 'react';
import './Booknow.css';

const BookNowPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your book now logic here
    // You can make an API request, save the booking data to the database, or perform any other /images/c11.jpg     necessary actions

    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div className='book-now-container'>
      <div className='book-now-bg'style={{
      position: 'relative',
      height: '100vh',
      background: `url('./images/c11.jpg') center/cover`,
      backgroundsize: 'cover',            backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     filter: 'blur(5px)'
    }} ></div>
    <div className="book-now-page">
      
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text" placeholder='Enter your name'
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email" placeholder='Enter your email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date" placeholder='Selct a date'
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time" placeholder='Select a time'
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit" >SUBMIT</button>
      </form>
    </div></div>
  );
};

export default BookNowPage;