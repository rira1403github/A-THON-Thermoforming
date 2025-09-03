// import React, { useState, useEffect } from 'react';
// import './Gallery.css';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

// const images = [
//   '/gallery/img2.png',
//   '/gallery/img2.png',
//   '/gallery/img4.png',
//   '/gallery/img5.png',
// ];

// const Gallery = () => {
//   const [index, setIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextImage = () => setIndex((index + 1) % images.length);
//   const prevImage = () => setIndex((index - 1 + images.length) % images.length);

//   return (
//     <div className="gallery-section">
//       <h2>OUR GALLERY</h2>

//       <div className="gallery-display">
//         <img
//           src={images[index]}
//           alt={`Slide ${index}`}
//           onClick={() => setIsOpen(true)}
//           className="gallery-main-image"
//         />
//         <div className="gallery-controls">
//           <button onClick={prevImage}>❮</button>
//           <button onClick={nextImage}>❯</button>
//         </div>
//       </div>

//       <div className="gallery-thumbnails">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`Thumb ${i}`}
//             className={i === index ? 'active' : ''}
//             onClick={() => setIndex(i)}
//           />
//         ))}
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[index]}
//           nextSrc={images[(index + 1) % images.length]}
//           prevSrc={images[(index + images.length) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={prevImage}
//           onMoveNextRequest={nextImage}
//         />
//       )}
//     </div>
//   );
// };

// export default Gallery;



import React, { useState, useEffect } from 'react';
import './Gallery.css';
import 'yet-another-react-lightbox/styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/gallery/img2.webp";
import img2 from "../assets/gallery/img4.webp";
import img3 from "../assets/gallery/img5.webp";

const topCards = [
    {
      icon: img1,
      title: "THERMOFORMING PARTS",
    },
    {
      icon: img2,
      title: "MACHINES",
    },
    {
      icon: img3,
      title: "TOOLING SETUP",
    },
  ];
const Gallery = () => {

   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <div className="gallery-section">
      <h2>OUR GALLERY</h2>
      <div className="gallery-cards-container desktop-only">
        {topCards.map((card, i) => (
          <div className="gallery-card" data-aos="fade-up" key={i}>
            <div className="gallery-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="gallery-mobile-only">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          loop
        >
          {topCards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-card">
                <div className="gallery-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;