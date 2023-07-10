import React, { useState } from 'react';
import './Booknow.css';

const BookNowPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Add your book now logic here
    // You can make an API request, save the booking data to the database, or perform any other necessary actions

    setName('');
    setEmail('');
    setDate('');
  };

  return (
    <div className="book-now-page">
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />  </label>
          <button type="submit" className="motion-button">Book Now</button>
        </form>
      </div>
    );
  };
  
  export default BookNowPage;