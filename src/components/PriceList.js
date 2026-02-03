import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PriceList.css';

function PriceList() {
  const navigate = useNavigate();

  const prices = [
    { service: 'Character Illustration', price: '$50' },
    { service: 'Full Scene', price: '$150' },
    { service: 'Chibi Style', price: '$30' },
  ];

  return (
    <div className="price-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <h1>Price List</h1>
      <div className="price-list">
        {prices.map((item, index) => (
          <div key={index} className="price-item">
            <h3>{item.service}</h3>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceList;
