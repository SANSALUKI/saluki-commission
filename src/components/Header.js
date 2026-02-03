import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/assets/images/profile.jpg" alt="Saluki Profile" />
        </div>
        <h1 className="title">Saluki Commission</h1>
        <p className="subtitle">Open for commission & collaboration ✨</p>
        <p className="service-type">Fanart / Illustration / Design</p>
      </div>

      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
          <i className="fab fa-twitter">𝕏</i>
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
          <i className="fab fa-whatsapp">WhatsApp</i>
        </a>
      </div>

      <div className="navigation-buttons">
        <button className="nav-btn primary" onClick={() => navigate('/about')}>
          ABOUT ME →
        </button>
        <button className="nav-btn" onClick={() => navigate('/portfolio')}>
          PORTOFOLIO →
        </button>
        <button className="nav-btn" onClick={() => navigate('/pricelist')}>
          PRICE LIST →
        </button>
        <button className="nav-btn" onClick={() => navigate('/terms')}>
          TERMS & CONDITIONS →
        </button>
      </div>

      <div className="about-section">
        <div className="about-card">
          <h3>The creator behind Saluki Commission 👋</h3>
          <p>I'm a freelance creative open for commissions and collaborations.</p>
          <p>I focus on delivering clean, aesthetic, and thoughtful work based on each client's needs.</p>
          <p>Every project is handled personally, with clear communication and attention to detail.</p>
          <p>Feel free to reach out if you'd like to work together!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
