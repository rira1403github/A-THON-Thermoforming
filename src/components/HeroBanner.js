import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ imageSrc, altText, overlayText }) => {
  return (
    <div className="hero-banner">
      <img src={imageSrc} alt={altText} className="hero-image" />
      <div className="hero-overlay">
        <h1>{overlayText}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;