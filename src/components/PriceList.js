import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './PriceList.css';

function PriceList() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const t = translations.pricelist;

  const services = [
    {
      name: t.services.headshot.name[language],
      description: t.services.headshot.description[language],
      price: t.services.headshot.price,
      priceUSD: t.services.headshot.priceUSD,
      duration: t.services.headshot.duration[language]
    },
    {
      name: t.services.bustUp.name[language],
      description: t.services.bustUp.description[language],
      price: t.services.bustUp.price,
      priceUSD: t.services.bustUp.priceUSD,
      duration: t.services.bustUp.duration[language]
    },
    {
      name: t.services.halfBody.name[language],
      description: t.services.halfBody.description[language],
      price: t.services.halfBody.price,
      priceUSD: t.services.halfBody.priceUSD,
      duration: t.services.halfBody.duration[language]
    },
    {
      name: t.services.kneeUp.name[language],
      description: t.services.kneeUp.description[language],
      price: t.services.kneeUp.price,
      priceUSD: t.services.kneeUp.priceUSD,
      duration: t.services.kneeUp.duration[language]
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="price-container">
        <LanguageSwitcher />
        
        <div className="price-content-wrapper">
          <header className="price-header">
            <h1 className="price-title">{t.title[language]}</h1>
            <p className="price-subtitle">{t.subtitle[language]}</p>
          </header>

          {/* Currency Info Card */}
          <div className="currency-info">
            <div className="currency-rate">
              <span className="currency-icon">💱</span>
              <span className="rate-text">{t.currency.rate[language]}</span>
            </div>
            <p className="currency-note">{t.currency.note[language]}</p>
          </div>

          <div className="price-list">
            {services.map((item, index) => (
              <article key={index} className="price-item">
                <div className="price-service">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="price-value">
                  <div className="price-amounts">
                    <span className="amount">{item.price}</span>
                    <span className="amount-usd">{item.priceUSD}</span>
                  </div>
                  <span className="duration">{item.duration}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="price-note">
            <h4>{t.notes.title[language]}</h4>
            <ul>
              {t.notes.items[language].map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="price-wontdo">
            <h4>{t.wontDo.title[language]}</h4>
            <div className="wontdo-items">
              {t.wontDo.items[language].map((item, index) => (
                <span key={index} className="wontdo-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="price-payment">
            <h4>{t.payment.title[language]}</h4>
            
            <div className="payment-section">
              <div className="payment-category">
                <h5 className="payment-category-title">{t.payment.methods.local.title[language]}</h5>
                <div className="payment-methods">
                  {t.payment.methods.local.items.map((method, index) => (
                    <div key={index} className="payment-badge local">{method}</div>
                  ))}
                </div>
              </div>
              
              <div className="payment-category">
                <h5 className="payment-category-title">{t.payment.methods.international.title[language]}</h5>
                <div className="payment-methods">
                  {t.payment.methods.international.items.map((method, index) => (
                    <div key={index} className="payment-badge international">{method}</div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="payment-note">{t.payment.note[language]}</p>
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

export default PriceList;