import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Footer.css';

function Footer() {
  const { language } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  const footerText = {
    copyright: {
      id: `© ${currentYear} Saluki Commission. Semua hak cipta dilindungi.`,
      en: `© ${currentYear} Saluki Commission. All rights reserved.`
    },
    tagline: {
      id: 'Mengubah Imajinasi Menjadi Karya Seni',
      en: 'Turning Imagination into Art'
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-title">Saluki Commission</h3>
          <p className="footer-tagline">{footerText.tagline[language]}</p>
        </div>
        
        <div className="footer-social">
          <a href="https://x.com/zegl1ns" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
            <span className="social-icon">𝕏</span>
          </a>
          <a href="https://wa.me/+6288299815078" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
            <span className="social-icon">💬</span>
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>{footerText.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;