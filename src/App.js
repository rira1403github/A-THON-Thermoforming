import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Thermoforming from './components/Thermoforming';
import Industries from './components/Industries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyUs from './components/whyUS';
import ProjectSection from './components/ProjectSection';
import Explore from './components/explore';
import ScrollToTop from "./components/ScrollToTop"; 

import Product from './pages/Product';
import Machinery from './pages/Machinery';
import About from './pages/About';
import PageContact from './pages/pageContact';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Thermoforming />
              <ProjectSection />
              <WhyUs />
               <Industries />
              <Gallery />
              <Explore />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Product />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </div>
  );
}

export default App;
