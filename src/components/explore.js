import React, { useEffect } from 'react';
import './explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="explore-section" id="explore">
      <div className="explore-container" data-aos="fade-up">
          <h2>Explore A-THON Thermoforming in Detail</h2>
          <p>Get a comprehensive look at our capabilities, processes, and industry expertise. 
            From in-house design to end-to-end production — everything you need to know is just one click away.</p>
          <button className="download-btn">DOWNLOAD THE BROCHURE</button>
      </div>
    </section>
  );
};

export default Explore;