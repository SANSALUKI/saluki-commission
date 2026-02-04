import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switcher-container">
      {/* Language Switcher */}
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

      {/* Theme Switcher */}
      <div className="theme-switcher">
        <button 
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => theme !== 'light' && toggleTheme()}
          aria-label="Switch to Light Mode"
        >
          ☀️
        </button>
        <button 
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => theme !== 'dark' && toggleTheme()}
          aria-label="Switch to Dark Mode"
        >
          🌙
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;