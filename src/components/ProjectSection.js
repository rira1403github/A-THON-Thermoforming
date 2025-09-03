import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";

import img1 from "../assets/project/production.png";
import img2 from "../assets/project/design.png";
import img3 from "../assets/project/tool.png";
import img4 from "../assets/project/expert.png";
import img5 from "../assets/project/percent.png";
import img6 from "../assets/project/satisfaction.png";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const topCards = [
    {
      icon: img1,
      title: "PRODUCTION",
      desc: "Streamlined production ensures consistent quality and fast turnaround at scale.",
    },
    {
      icon: img2,
      title: "INHOUSE DESIGNS",
      desc: "From concept to CAD, we design every part for precision and performance.",
    },
    {
      icon: img3,
      title: "TOOLING",
      desc: "We build high-quality molds and fixtures in-house for full control and speed.",
    },
  ];

  const bottomStats = [
    { icon: img4, title: "2+", desc: "Years Experience" },
    { icon: img5, title: "99+", desc: "Projects Completed" },
    { icon: img6, title: "100%", desc: "Client Satisfaction" },
  ];

  return (
    <section className="project-section">
      <div className="project-header">
        <div className="project-overlay">
          <h2>Have an Upcoming Project?</h2>
          <p>
            Got a new project? <br />
            A-THON is here to turn your ideas into reality with our expertise
            and advanced solutions.
          </p>
        </div>
        <button className="quote-btn">Get a Free Quote</button>
      </div>

      <div className="project-cards-container desktop-only">
        {topCards.map((card, i) => (
          <div className="project-card" data-aos="fade-up" key={i}>
            <div className="project-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="mobile-only">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {topCards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="project-card">
                <div className="project-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="stats-container">
        {bottomStats.map((stat, i) => (
          <div className="stat-card" data-aos="zoom-in" key={i}>
            <div className="stat-icon">
              <img src={stat.icon} alt={stat.title} />
            </div>
            <h3>{stat.title}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;