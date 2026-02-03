import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <h1>About Me</h1>
      <div className="about-content">
        <p>Detailed information about the artist and their work...</p>
        <p>Background, experience, and artistic philosophy.</p>
      </div>
    </div>
  );
}

export default AboutMe;
