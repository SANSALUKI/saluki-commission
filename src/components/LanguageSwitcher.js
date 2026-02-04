import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
        aria-label="Switch to English"
      >
        ENG
      </button>
      <button 
        className={`lang-btn ${language === 'id' ? 'active' : ''}`}
        onClick={() => language !== 'id' && toggleLanguage()}
        aria-label="Switch to Indonesian"
      >
        IND
      </button>
    </div>
  );
}

export default LanguageSwitcher;