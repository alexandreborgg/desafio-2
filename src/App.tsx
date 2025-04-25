import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import AboutNutritionist from './components/AboutNutritionist';
import Guarantee from './components/Guarantee';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Desafio Detox em 7 Dias | Perca até 3kg em uma semana";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <AboutNutritionist />
      <Guarantee />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;