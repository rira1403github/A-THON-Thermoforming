// import React, { useEffect, useRef, useState } from 'react';
// import './whyUS.css';

// const WhyUs = () => {
//   const sectionRef = useRef();
//   const [visible, setVisible] = useState(false);

//   // Observer to trigger animation on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Smooth scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const headingText = 'WHY-US';

//   return (
//     <section className={`whyus-section ${visible ? 'visible' : ''}`} ref={sectionRef}>
//       <h2 className="whyus-title">
//         {headingText.split('').map((char, i) => (
//           <span key={i} className="animated-letter" style={{ animationDelay: `${i * 0.1}s` }}>
//             {char}
//           </span>
//         ))}
//       </h2>

//       <div className="whyus-image-wrapper">
//         <img src="/whyUs.jpg" alt="Why Us Team" className="whyus-image" />
//       </div>

//       <p className="whyus-description">
//         A-THON Thermoforming offers end-to-end, customized solutions with advanced technology,
//         in-house tooling, and material expertise. Focused on quality, speed, and client satisfaction,
//         we deliver precision parts and lasting value—helping you build better products, faster and smarter.
//       </p>

//       <button className="cta-button" onClick={scrollToContact}>Contact Us</button>
//     </section>
//   );
// };

// export default WhyUs;











// src/components/WhyUs.js
import React, { useEffect, useRef, useState } from 'react';
import './whyUS.css';

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headingText = 'WHY-US';

  return (
    <section className={`whyus-section ${visible ? 'visible' : ''}`} ref={sectionRef}>
      <h2 className="whyus-title">
        {headingText.split('').map((char, i) => (
          <span key={i} className="animated-letter" style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <div className="whyus-image-wrapper">
        <img src="/whyUs.jpg" alt="Why Us Team" className="whyus-image" />
      </div>

      <p className="whyus-description">
        A-THON Thermoforming offers end-to-end, customized solutions with advanced technology,
        in-house tooling, and material expertise. Focused on quality, speed, and client satisfaction,
        we deliver precision parts and lasting value—helping you build better products, faster and smarter.
      </p>

      <button className="cta-button" onClick={scrollToContact}>Contact Us</button>
    </section>
  );
};

export default WhyUs;

