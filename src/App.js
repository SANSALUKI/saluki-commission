import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PriceList from './components/PriceList';
import Terms from './components/Terms';
import './App.css';

// Language Context
export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('id'); // 'id' or 'en'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;