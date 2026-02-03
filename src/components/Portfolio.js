import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  const navigate = useNavigate();

  const portfolioItems = [
    { id: 1, title: 'Project 1', image: '/assets/images/work1.jpg' },
    { id: 2, title: 'Project 2', image: '/assets/images/work2.jpg' },
    { id: 3, title: 'Project 3', image: '/assets/images/work3.jpg' },
  ];

  return (
    <div className="portfolio-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
