// src/pages/Machineries.js
import React, { useEffect } from 'react';
import './Machinery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const Machineries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const machines = [
    {
      img: '1.png',
      title: 'Thermoforming machine (2000x2000 mm)',
      desc: 'Our state-of-the-art thermoforming machine delivers precision, speed, and versatility across a wide range of industrial parts.',
    },
    {
      img: '2.png',
      title: 'CNC Router (3000x2000 mm)',
      desc: 'Our 5-Axis CNC router offers flexible, precise trimming—ideal for complex shapes and high-volume production.',
    },
    {
      img: '3.png',
      title: 'Pre Drying Oven',
      desc: 'Removes moisture before forming to ensure improved finish, reduced defects, and enhanced durability of parts.',
    },
    {
      img: '4.png',
      title: 'Plug Assist',
      desc: 'Enhances material distribution during thermoforming, improving detail accuracy and part strength.',
    },
    {
      img: '5.png',
      title: 'CAD & CAM Services',
      desc: 'From 3D modeling to tooling, our CAD/CAM services drive design precision and production efficiency.',
    },
    {
      img: '6.png',
      title: 'Toolroom',
      desc: 'Our in-house toolroom enables custom mold development with fast turnaround and high-quality results.',
    },
  ];

  return (
    <>
      <section className="manufacturing-section" id="manufacturing">
        <h2 className="manufacturing-title" data-aos="fade-up">
          Manufacturing Capabilities
        </h2>

        <div className="manufacturing-grid">
          {machines.map((item, index) => (
            <div
              className="manufacturing-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Machineries;
