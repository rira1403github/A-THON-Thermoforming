import React, { useEffect, useState } from 'react';
import './Industries.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/industries/car.webp';
import img2 from '../assets/industries/medical.webp';
import img3 from '../assets/industries/packaging.webp';
import img4 from '../assets/industries/electronics.webp';
import img5 from '../assets/industries/goods.webp';
import img6 from '../assets/industries/projects.webp';

const industriesData = [
  { icon: img1, title: 'AUTOMOBILE' },
  { icon: img2, title: 'MEDICAL' },
  { icon: img3, title: 'PACKAGING' },
  { icon: img4, title: 'ELECTRONICS' },
  { icon: img5, title: 'CONSUMER GOODS' },
  { icon: img6, title: 'CUSTOMIZED PROJECTS' },
];

const Industries = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 680);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="industries-section" aria-label="Industries Served">
      <h2 data-aos="fade-up">INDUSTRIES WE SERVED</h2>

      {isMobile ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="industries-swiper"
        >
          {industriesData.map((item, index) => (
            <SwiperSlide key={item.title}>
              <div
                className="industry-item"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
                aria-label={item.title}
              >
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="industries-grid">
          {industriesData.map((item, index) => (
            <div
              className="industry-item"
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              aria-label={item.title}
            >
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Industries;