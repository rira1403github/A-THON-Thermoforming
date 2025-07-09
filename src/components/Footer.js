// import React, { useEffect, useRef } from 'react';
// import './Footer.css';
// import { FaInstagram, FaLinkedin, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
//   const footerRef = useRef();

//   // Slide-in on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           footerRef.current.classList.add('footer-visible');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (footerRef.current) {
//       observer.observe(footerRef.current);
//     }

//     return () => {
//       if (footerRef.current) observer.unobserve(footerRef.current);
//     };
//   }, []);

//   return (
//     <footer className="footer" ref={footerRef}>
//       <div className="footer-divider" />
//       <div className="footer-content">
//         <div className="footer-left">
//           <div className="footer-logo">
//             <img src="/logo512.svg" alt="A-THON Logo" />
//             <span className="brand-title">
//               A-THON<br />
//               <small>THERMOFORMING</small>
//             </span>
//           </div>
//           <p>© 2025. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.</p>
//           <p>CIN: U34100KA2022PTC1S1300</p>
//         </div>

//         <div className="footer-middle">
//           <h4>REACH US ON</h4>
//           <p>atp@a-thonallterrain.com</p>
//         </div>

//         <div className="footer-right">
//           <a href="#" className="tooltip" data-tooltip="Twitter"><FaXTwitter /></a>
//           <a href="#" className="tooltip" data-tooltip="Instagram"><FaInstagram /></a>
//           <a href="#" className="tooltip" data-tooltip="YouTube"><FaYoutube /></a>
//           <a href="#" className="tooltip" data-tooltip="LinkedIn"><FaLinkedin /></a>
//           <a href="#" className="tooltip" data-tooltip="Facebook"><FaFacebookF /></a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// src/components/Footer.js
import React, { useEffect, useRef } from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const target = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('footer-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-divider" />
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo512.svg" alt="A-THON Logo" />
            <span className="brand-title">
              A-THON<br />
              <small>THERMOFORMING</small>
            </span>
          </div>
          <p>© 2025. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.</p>
          <p>CIN: U34100KA2022PTC1S1300</p>
        </div>

        <div className="footer-middle">
          <h4>REACH US ON</h4>
          <p>atp@a-thonallterrain.com</p>
        </div>

        <div className="footer-right">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="Twitter"><FaXTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="Instagram"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="YouTube"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="LinkedIn"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="Facebook"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;