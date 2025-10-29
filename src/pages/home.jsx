import React, { useState } from 'react';

// eslint-disable-next-line
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ResumeSection from '../components/home/ResumeSection';
import Contact from '../components/home/Contact';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 mix-blend-difference">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-lg font-bold tracking-tight cursor-pointer text-white">Joshua Kumassi</motion.div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 group">
            <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
            <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
            <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -100, pointerEvents: isMenuOpen ? 'auto' : 'none' }} transition={{ duration: 0.4 }} className="fixed inset-0 z-40 bg-black flex items-center justify-center">
        <div className="text-center space-y-8">
          {['Resume', 'About', 'Contact'].map((item, index) => (
            <motion.button key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }} transition={{ delay: index * 0.1 }} onClick={() => scrollToSection(item.toLowerCase())} className="block text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors duration-300">{item}</motion.button>
          ))}
        </div>
      </motion.div>

      {/* Sections (moved to components) */}
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <ResumeSection />
      <Contact />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 Joshua Kumassi. Built with passion and probably too much coffee.</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="https://www.linkedin.com/in/joshua-kumassi-80915b306/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/jaydrice" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.instagram.com/jay.d.rice/" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
