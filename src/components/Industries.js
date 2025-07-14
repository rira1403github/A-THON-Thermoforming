import React, { useEffect, useState } from 'react';
import './Industries.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const industriesData = [
  { icon: '/icons/automobile.png', title: 'AUTOMOBILE' },
  { icon: '/icons/medical.png', title: 'MEDICAL' },
  { icon: '/icons/packaging.png', title: 'PACKAGING' },
  { icon: '/icons/electronics.png', title: 'ELECTRONICS' },
  { icon: '/icons/consume.png', title: 'CONSUMER GOODS' },
  { icon: '/icons/custom.png', title: 'CUSTOMIZED PROJECTS' },
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
