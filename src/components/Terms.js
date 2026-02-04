import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './Terms.css';

function Terms() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const t = translations.terms;

  return (
    <div className="page-wrapper">
      <div className="terms-container">
        <LanguageSwitcher />
        
        <div className="terms-content-wrapper">
          <header className="terms-header">
            <h1 className="terms-title">{t.title[language]}</h1>
            <p className="terms-subtitle">{t.subtitle[language]}</p>
            <div className="commission-status">
              <span className="status-badge">{t.commissionOpen[language]}</span>
            </div>
          </header>

          <div className="terms-content">
            <section className="terms-section">
              <h3>{t.process.title[language]}</h3>
              <ul>
                {t.process.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="terms-section">
              <h3>{t.payment.title[language]}</h3>
              <ul>
                {t.payment.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="terms-section">
              <h3>{t.revisions.title[language]}</h3>
              <ul>
                {t.revisions.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="terms-section">
              <h3>{t.timeline.title[language]}</h3>
              <ul>
                {t.timeline.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="terms-section">
              <h3>{t.rights.title[language]}</h3>
              <ul>
                {t.rights.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="terms-section">
              <h3>{t.wontDraw.title[language]}</h3>
              <ul>
                {t.wontDraw.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="terms-warning">
            <h4>{t.warning.title[language]}</h4>
            <p>{t.warning.text1[language]}</p>
            <p style={{ marginTop: '12px' }}>{t.warning.text2[language]}</p>
          </div>

          <div className="back-btn-container">
            <button className="back-btn" onClick={() => navigate('/')}>
              {translations.header.buttons.back[language]}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;