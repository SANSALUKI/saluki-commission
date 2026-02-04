import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './AboutMe.css';

function AboutMe() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const t = translations.about;

  return (
    <div className="page-wrapper">
      <div className="aboutme-container">
        <LanguageSwitcher />
        
        <div className="aboutme-content-wrapper">
          <header className="aboutme-header">
            <h1 className="aboutme-title">{t.title[language]}</h1>
            <p className="aboutme-description">{t.description[language]}</p>
          </header>

          <div className="aboutme-content">
            {/* Intro Card Section */}
            <div className="aboutme-card intro-card">
              <h2 className="intro-title">{t.introCard.title[language]}</h2>
              <p>{t.introCard.text1[language]}</p>
              <p>{t.introCard.text2[language]}</p>
              <p>{t.introCard.text3[language]}</p>
              <p>{t.introCard.text4[language]}</p>
            </div>

            {/* Main Content Card */}
            <div className="aboutme-card">
              <section className="aboutme-section">
                <h3>{t.whoIAm.title[language]}</h3>
                <p>{t.whoIAm.text1[language]}</p>
                <p>{t.whoIAm.text2[language]}</p>
              </section>

              <section className="aboutme-section">
                <h3>{t.approach.title[language]}</h3>
                <p>{t.approach.text1[language]}</p>
                <p>{t.approach.text2[language]}</p>
              </section>

              <section className="aboutme-section">
                <h3>{t.skills.title[language]}</h3>
                <div className="aboutme-skills">
                  {t.skills.items[language].map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </section>

              <section className="aboutme-section">
                <h3>{t.whyChoose.title[language]}</h3>
                <ul className="aboutme-list">
                  {t.whyChoose.items[language].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
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

export default AboutMe;