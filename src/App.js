import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portofolio from './components/Portofolio';
import PriceList from './components/PriceList';
import Terms from './components/Terms';
import './App.css';

// Language Context
export const LanguageContext = createContext();

// Theme Context
export const ThemeContext = createContext();

function App() {
  const [language, setLanguage] = useState('id'); // 'id' or 'en'
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/portofolio" element={<Portofolio />} />
              <Route path="/pricelist" element={<PriceList />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
        </Router>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;