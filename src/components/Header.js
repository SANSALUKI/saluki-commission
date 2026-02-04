import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const t = translations.header;

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <LanguageSwitcher />
        
        <div className="header-content">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img src="/assets/images/profile.jpg" alt="Saluki Profile" />
              </div>
              <div className="profile-border-animation"></div>
            </div>
            
            <div className="title-container">
              <h1 className="title">{t.title[language]}</h1>
              <p className="subtitle">{t.subtitle[language]}</p>
              <p className="service-type">{t.serviceType[language]}</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://x.com/zegl1ns" target="_blank" rel="noopener noreferrer" className="social-btn twitter" aria-label="Twitter">
              <span>𝕏</span>
            </a>
            <a href="https://wa.me/+6288299815078" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" aria-label="WhatsApp">
              <span>💬</span>
            </a>
          </div>

          <nav className="navigation-buttons">
            <button className="nav-btn primary" onClick={() => navigate('/about')}>
              {t.buttons.about[language]}
            </button>
            <button className="nav-btn" onClick={() => navigate('/portfolio')}>
              {t.buttons.portfolio[language]}
            </button>
            <button className="nav-btn" onClick={() => navigate('/pricelist')}>
              {t.buttons.pricelist[language]}
            </button>
            <button className="nav-btn" onClick={() => navigate('/terms')}>
              {t.buttons.terms[language]}
            </button>
          </nav>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Header;