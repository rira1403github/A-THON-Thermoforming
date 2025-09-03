import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "./whyUS.css";

import img1 from "../assets/whyUs/tooling.webp";
import img2 from "../assets/whyUs/cad.webp";
import img3 from "../assets/whyUs/thermoforming.webp";
import img4 from "../assets/whyUs/plug.webp";
import img5 from "../assets/whyUs/router.webp";
import img6 from "../assets/whyUs/oven.webp";

const steps = [
  { id: "01", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
  { id: "02", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
  { id: "03", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
  { id: "04", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
  { id: "05", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
  { id: "06", text: "At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process. We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications And Exceed Customer Expectations." },
];

const WhyusSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const topCards = [
    { icon: img1, title: "PRODUCTION" },
    { icon: img2, title: "INHOUSE DESIGNS" },
    { icon: img3, title: "THERMOFORMING" },
    { icon: img4, title: "PLUG ASSIST" },
    { icon: img5, title: "CNC ROUTER" },
    { icon: img6, title: "OVEN FORMING" },
  ];

  return (
    <section className="whyUs-section">\
      <div className="whyUs-header">
        <h2>WHY CHOOSE US</h2>
        <p>
          Choosing A-THON means choosing innovation, quality, and trust. With advanced technology and expert craftsmanship, we create solutions that are precise, durable, and tailored to your needs — ensuring every project exceeds expectations.
        </p>
      </div>

      <h2 className="cards-container-title">OUR CAPABILITIES</h2>

      <div className="cards-container desktop-only">
        <div className="cards-grid">
          {topCards.map((card, i) => (
            <div className="card" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
              <div className="icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <div className="card-title">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-only">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {topCards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="card">
                <div className="icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="process-container">
        <h2 className="process-container-title" data-aos="fade-down">OUR PROCESS</h2>
        <h3 className="process-container-subtitle" data-aos="fade-up">QUALITY AND CONSISTENCY</h3>
        <p className="process-container-description" data-aos="fade-up">
          At A-THON Thermoforming, Quality Is Built Into Every Stage Of Our Process.
          We Are Committed To Delivering Precision-Formed Parts That Meet Exact Specifications
          And Exceed Customer Expectations.
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <span className="step-number">{step.id}</span>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-container" data-aos="fade-up">
          <button className="cta-btn">GET A QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default WhyusSection;