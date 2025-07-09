// About.js
import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroBanner
        imageSrc="/whyUs.jpg"
        altText="About Banner"
        overlayText='"Precision Formed. Future Ready"'
      />

      <section className="about-section" id="about">
        <div className="about-title" data-aos="fade-up">
          <h2>Engineering Shape, Empowering Innovation.</h2>
        </div>

        {/* Vision */}
        <div className="about-card" data-aos="fade-up">
          <div className="about-image">
            <img src="/About/About-img1.jpeg" alt="Vision" />
          </div>
          <div className="about-text">
            <h3>VISION</h3>
            <p>
              To be a trusted leader in the thermoforming industry by continuously advancing our technology, expanding our capabilities, and offering sustainable solutions that shape the future of plastic manufacturing.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="about-card reverse" data-aos="fade-up">
          <div className="about-image">
            <img src="/About/About-img2.jpeg" alt="Mission" />
          </div>
          <div className="about-text">
            <h3>MISSION</h3>
            <p>
              To deliver high-quality, precision-engineered thermoformed plastic parts that meet the diverse
              needs of our clients across various industries, while maintaining a strong commitment to innovation,
              efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
