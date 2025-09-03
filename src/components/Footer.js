import React, { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleAboutClick = (id) => {
    navigate("/aboutUs", { state: { sectionId: id } });
    setOpenIndex(null);
  };

  const sections = [
    {
      title: "OUR COMPANY",
      links: [
        { name: "ABOUT US", path: "/aboutUs" },
        { name: "LOCATION", path: "/weekOffer" },
      ],
    },
    {
      title: "GALLERY",
      links: [
        { name: "THERMOFORMING", path: "/proDriver" },
        { name: "MACHINES", path: "/obstacle" },
        { name: "TOOLS SETUPS", path: "/throttle" },
      ],
    },
    {
      title: "SERVICE",
      links: [
        { name: "TOOLING", path: "/eventCele" },
        { name: "CAD & CAM", path: "/eventCele" },
        { name: "THERMOFORMING", path: "/eventCor" },
        { name: "PREOVEN", path: "/eventRally" },
        { name: "CNC ROUTER", path: "/eventCele" },
        { name: "PLUG ASSIST", path: "/eventCele" },
      ],
    },
    {
      title: "INDUSTRIES",
      links: [
        { name: "MEDICAL", id: "ourStoy" },
        { name: "PACKAGING", id: "whoweare" },
        { name: "ELECTRONICS", id: "whatweare" },
        { name: "CONSUMER GOODS", id: "ourVision" },
        { name: "CUSTOMIZED PROJECTS", id: "ourVision" },
      ],
    },
  ];

  const handleToggle = (index) => {
    if (window.innerWidth <= 768) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/footer-logo.png" alt="A-THON Logo" />
          </div>
          
          <div className="footer-address">
            <FaMapMarkerAlt className="address-icon" />
            <a href="https://www.google.com/maps/search/?api=1&query=Plot+No+08,+Building+B,+Dasarahosahalli,+KIADB+Industrial+Area,+Bangarpet,+Karnataka+563114"
               target="_blank"
               rel="noopener noreferrer"
               className="address-link"
               >
                <address>
                Plot No 08, Building B, <br />
                Dasarahosahalli, <br />
                KIADB Industrial Area, <br />
                Bangarpet, Karnataka <br />
                563114
                </address>
              </a>
           </div>
         </div>

        {sections.map((col, i) => (
          <div className="footer-col" key={i}>
            <div
              className="footer-col-header"
              onClick={() => handleToggle(i)}
            >
              <h4>{col.title}</h4>
              <span className="toggle-icon">
                <FaChevronDown />
              </span>
            </div>
            <ul
              className={`footer-col-links ${
                openIndex === i ? "open" : ""
              }`}
            >
              {col.links.map((link, j) => (
                <li key={j}>
                  {link.path ? (
                    <RouterLink
                      to={link.path}
                      onClick={() => setOpenIndex(null)}
                    >
                      {link.name}
                    </RouterLink>
                  ) : (
                    <button
                      className="footer-link-btn"
                      onClick={() => handleAboutClick(link.id)}
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
         <div className="footer-copy">
        <p>
          © 2025. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.
          <br />
          CIN: U34100KA2022PTC1S1300
        </p>
      </div>

        <div className="footer-email">
          <h4>REACH US ON</h4>
          <p>atp@a-thonallterrain.com</p>
        </div>

        <div className="footer-social">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
