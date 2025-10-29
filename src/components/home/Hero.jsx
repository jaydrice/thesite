import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowDown } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <motion.section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')",
          filter: 'grayscale(100%) blur(2px)'
        }}
      />

      <div className="relative z-10 py-24 max-w-5xl w-full text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <motion.h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-none">Joshua T Kumassi</motion.h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="space-y-6">
          <p className="text-2xl md:text-4xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">Cyber Security Analyst • Writer • Game Tester/Gamer • Voice Over Artist •  Actor • IT Technician • MC</p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">A problem solver with a knack for finding fun and creative approaches to solutions.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-16">
          <Button onClick={() => scrollToSection('about')} size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-6 font-semibold">DISCOVER MORE</Button>
        </motion.div>
      </div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} onClick={() => scrollToSection('about')} className="absolute bottom-12 text-white/60 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2">
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </motion.section>
  );
}
