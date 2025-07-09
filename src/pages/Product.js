import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import './Product.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="products-section" id="products">
        <div className='products-title-container'>
          <h2 className="products-title" data-aos="fade-up">PRODUCTS & SERVICES</h2>
        </div>

        <div className="products-grid">
          <div className="product-brief">
            {/* <h3>OUR SERVICES</h3> */}
            <p>
              At A-THON Thermoforming, we offer a full spectrum of thermoforming services and technical support to meet diverse industry requirements.
              From design to delivery, our advanced equipment and experienced team ensure precision, reliability, and speed in every project.
            </p>
          </div>

           <div className="product-text-head" >
              <h2>THERMOFORMING PROCESSES</h2>
              </div>

          <div className="product-card two-column" data-aos="fade-up">
            
            <div className="product-img">
              <img src="/Products&Services/TP.jpeg" alt="Thermoforming" />
            </div>
            <div className="product-text">
              <h3>VACUUM FORMING</h3>
              <p>Vacuum forming is a key thermoforming process where heated plastic sheets are shaped over molds using vacuum pressure. It is ideal for creating lightweight, durable, and cost-effective plastic parts with consistent quality and detail—perfect for both prototypes and large-scale production.</p>
              <h3>DRAPE FORMING</h3>
              <p>Drape forming involves heating a plastic sheet and manually draping it over a mold to achieve complex curves and contours. This method is ideal for producing smooth, seamless parts with minimal tooling, often used in medical, aerospace, and display applications.</p>
              <h3>FREE FLOW FORMING</h3>
              <p>Free flow forming allows heated plastic sheets to naturally sag or flow into a mold without vacuum or pressure. This technique is perfect for creating organic, smooth shapes with uniform thickness—commonly used in lighting, domes, and artistic applications.</p>
            </div>
          </div>

           <div className="product-text-head" >
              <h2>CUSTOM PARTS & TOOLING</h2>
              </div>

          <div className="product-card two-column reverse" data-aos="fade-up" data-aos-delay="100">
            <div className="product-img">
              <img src="/Products&Services/CPP.jpeg" alt="Custom Plastic Parts" />
            </div>
            <div className="product-text">
              <h3>CUSTOM PLASTIC PARTS</h3>
              <p>We specialize in designing and manufacturing custom plastic components tailored to your exact specifications. From concept to final product, we offer complete flexibility in shape, size, and material to meet unique industry requirements with precision and reliability.</p>
             </div>
          </div>
          <div className="product-card two-column reverse" data-aos="fade-up" data-aos-delay="100">
            <div className="product-text">
              <h3>PROTO-TOOLING & ALUMINIUM TOOLING</h3>
              <p>Proto-tooling enables quick, cost-effective prototyping and low-volume production for rapid design validation. Aluminium tooling offers durable, high-precision molds ideal for medium to high-volume manufacturing, delivering consistent quality, faster cycles, and excellent thermal performance.</p>
            </div>
            <div className="product-img">
              <img src="/Products&Services/PT&AT.jpeg" alt="Custom Plastic Parts" />
            </div>
          </div>

          <div className="product-text-head" >
              <h2>PRODUCTION & SUPPORT SERVICES</h2>
              </div>

          <div className="product-card two-column" data-aos="fade-up" data-aos-delay="200">
            <div className="product-img">
              <img src="/Products&Services/SP.jpeg" alt="Series Production" />
            </div>
            <div className="product-text">
              <h3>SERIES PRODUCTION</h3>
              <p>We offer reliable series production for thermoformed plastic parts, ensuring consistent quality across small, medium, or large volumes. Our streamlined processes and advanced equipment allow for efficient scaling while maintaining precision and timely delivery.</p>
            </div>
          </div>
          <div className="product-card two-column" data-aos="fade-up" data-aos-delay="200">
            <div className="product-text">
              <h3>ASSEMBLY & PACKAGING</h3>
              <p>We provide complete assembly and packaging solutions to streamline your supply chain. From component fitting to custom packaging, we ensure that your thermoformed parts are delivered ready for use—saving you time, effort, and resources.</p>
              </div>
            <div className="product-img">
              <img src="/Products&Services/A&P.jpeg" alt="Series Production" />
            </div>
          </div>
          <div className="product-card two-column" data-aos="fade-up" data-aos-delay="200">
            <div className="product-img">
              <img src="/Products&Services/MSG.jpg" alt="Series Production" />
            </div>
            <div className="product-text">
              <h3>MATERIAL SELECTION GUIDANCE</h3>
              <p>Choosing the right material is crucial for performance and cost-efficiency. We offer expert guidance on selecting the best plastic materials based on your product’s strength, flexibility, temperature resistance, and aesthetic needs.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
