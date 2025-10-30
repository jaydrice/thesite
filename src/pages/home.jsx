import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ResumeSection from '../components/home/ResumeSection';
import Contact from '../components/home/Contact';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Add a small delay to ensure the page has fully loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* Sections (moved to components) */}
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <ResumeSection />
      <Contact />
    </div>
  );
}
