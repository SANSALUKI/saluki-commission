import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Terms.css';

function Terms() {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <h1>Terms & Conditions</h1>
      <div className="terms-content">
        <h3>Commission Guidelines:</h3>
        <ul>
          <li>Payment must be made upfront</li>
          <li>No refunds after work has started</li>
          <li>Estimated delivery time: 1-2 weeks</li>
          <li>Revisions allowed: 2 major changes</li>
        </ul>
      </div>
    </div>
  );
}

export default Terms;
