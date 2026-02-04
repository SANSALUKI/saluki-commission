import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './Portfolio.css';

function Portfolio() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const t = translations.portfolio;
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, image: '/assets/images/work1.jpg', alt: '東卍FA Gokurakugai 極楽街' },
    { id: 2, image: '/assets/images/work2.jpg', alt: '東卍FA LifeMakeOver' },
    { id: 3, image: '/assets/images/work3.jpg', alt: '東卍FA GACHIAKUTA' },
    { id: 4, image: '/assets/images/work4.jpg', alt: '東卍FA 終末のワルキューレ RecordofRagnarok' },
    { id: 5, image: '/assets/images/work5.jpg', alt: '東卍FA enjin GACHIAKUTA ガチアクタ' },
    { id: 6, image: '/assets/images/work6.jpg', alt: '東卍FA' },
    { id: 7, image: '/assets/images/work7.jpg', alt: '東卍FA 鬼滅の刃 DemonSlayer' },
    { id: 8, image: '/assets/images/work8.jpg', alt: '東卍FA' },
    { id: 9, image: '/assets/images/work9.jpg', alt: '東卍FA GenshinImpact venti genshinimpactfanart' },
    { id: 10, image: '/assets/images/work10.jpg', alt: '東卍FA' },
    { id: 11, image: '/assets/images/work11.jpg', alt: '東卍FA' },
    { id: 12, image: '/assets/images/work12.jpg', alt: '東卍FA' },
    { id: 13, image: '/assets/images/work13.jpg', alt: '東卍FA' },
    { id: 14, image: '/assets/images/work14.jpg', alt: '東卍FA' },
    { id: 15, image: '/assets/images/work15.jpg', alt: '東卍FA' },
    { id: 16, image: '/assets/images/work16.jpg', alt: '東卍FA' },
    { id: 17, image: '/assets/images/work17.jpg', alt: '東卍FA' },
    { id: 18, image: '/assets/images/work18.jpg', alt: '東卍FA' },
    { id: 19, image: '/assets/images/work19.jpg', alt: '東卍FA' },
    { id: 20, image: '/assets/images/work20.jpg', alt: '東卍FA' }
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page-wrapper">
      <div className="portfolio-container">
        <LanguageSwitcher />
        
        <div className="portfolio-content-wrapper">
          <header className="portfolio-header">
            <h1 className="portfolio-title">{t.title[language]}</h1>
            <p className="portfolio-description">{t.description[language]}</p>
          </header>

          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <article key={item.id} className="portfolio-card">
                <div className="portfolio-image-container">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="portfolio-image"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <button 
                      className="view-details-btn"
                      onClick={() => handleImageClick(item)}
                      aria-label={`View ${item.alt} in full size`}
                    >
                      {t.viewDetails[language]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="back-btn-container">
            <button className="back-btn" onClick={() => navigate('/')}>
              {translations.header.buttons.back[language]}
            </button>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleCloseModal} aria-label="Close modal">
                ×
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.alt}
                className="modal-image"
              />
              <p className="modal-caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;