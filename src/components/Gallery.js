import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.png',
  '/gallery/img4.png',
  '/gallery/img5.png',
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="gallery-section">
      <h2>OUR GALLERY</h2>

      <div className="gallery-display">
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          onClick={() => setIsOpen(true)}
          className="gallery-main-image"
        />
        <div className="gallery-controls">
          <button onClick={prevImage}>❮</button>
          <button onClick={nextImage}>❯</button>
        </div>
      </div>

      <div className="gallery-thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumb ${i}`}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </div>
  );
};

export default Gallery;
