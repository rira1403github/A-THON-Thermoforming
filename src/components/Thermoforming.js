import React, { useEffect } from 'react';
import './Thermoforming.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Thermoforming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="thermo-section" id="thermoforming">
      <div className="thermo-container">
        <div className="thermo-left" data-aos="fade-right">
          {/* Replace this div with actual image of video */}
          <div className="image-placeholder"></div>
        </div>
        <div className="thermo-right" data-aos="fade-left">
          <h2>A-THON THERMOFORMING</h2>
          <p>
            A-THON Plastics is a specialized division of<br /> A-THON ALLTERRAIN PVT. LTD.
          <br />
            We manufacture high-quality thermoformed plastic parts for our own utility vehicles and provide custom plastic solutions and job work services across industries like automotive, medical, and packaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Thermoforming;
