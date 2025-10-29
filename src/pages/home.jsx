import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ResumeSection from '../components/home/ResumeSection';
import Contact from '../components/home/Contact';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

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
