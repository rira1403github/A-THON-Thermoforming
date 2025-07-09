import React, { useEffect } from 'react';
import './pageContact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiPhone, FiMail, FiCompass } from 'react-icons/fi';
import Footer from '../components/Footer';

const PageContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="pageContact-section" id="pageContact">
      <h2 className="pageContact-title" data-aos="fade-up">TO CONNECT WITH US</h2>
      <hr className="pageContact-divider" data-aos="fade-up" data-aos-delay="100" />
      <p className="pageContact-subtext" data-aos="fade-up" data-aos-delay="200">
        Have a project in mind or need thermoforming expertise? <br /> Get in touch —
        our team is here to help you bring your ideas to life.
      </p>

      <div className="pageContact-cards">
        <div className="pageContact-card" data-aos="zoom-in">
          <FiPhone className="pageContact-icon" />
          <p style={{ fontFamily: 'monospace', fontSize: '20px', fontWeight: '50'}}>
            <a href="tel:+917698001209" style={{ textDecoration: 'none', color: 'black' }}>+91 7698001209</a></p>
        </div>
        <div className="pageContact-card" data-aos="zoom-in" data-aos-delay="150">
          <FiMail className="pageContact-icon" />
          <p><a href="mailto:atp@a-thonallterrain.com">atp@a-thonallterrain.com</a></p>
        </div>
        <div className="pageContact-card" data-aos="zoom-in" data-aos-delay="300">
          <FiCompass className="pageContact-icon" />
          <p>
            <a
              href="https://www.google.com/maps/place/A-THON+R%26D+Centre/@12.9912872,78.2230775,17z/data=!3m1!4b1!4m6!3m5!1s0x3badebb4c9ed0c2f:0xabeeac89dc14eaa7!8m2!3d12.9912872!4d78.2230775!16s%2Fg%2F11kc7km_2h?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default PageContact;
