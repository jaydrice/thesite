import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 mix-blend-difference">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} className="text-lg font-bold tracking-tight cursor-pointer text-white">
              Joshua Kumassi
            </motion.div>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
          >
            <motion.span 
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} 
              className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" 
            />
            <motion.span 
              animate={{ opacity: isMenuOpen ? 0 : 1 }} 
              className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" 
            />
            <motion.span 
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} 
              className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" 
            />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -100 }} 
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? 0 : -100, 
          pointerEvents: isMenuOpen ? 'auto' : 'none' 
        }} 
        transition={{ duration: 0.4 }} 
        className="fixed inset-0 z-40 bg-black flex items-center justify-center"
      >
        <div className="text-center space-y-8">
          <Link to="/projects">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl md:text-7xl font-bold text-white hover:text-gray-400 transition-colors duration-300 mb-9"
            >
              Projects
            </motion.button>
          </Link>
          {['Resume', 'About', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: (index + 1) * 0.1 }}
              onClick={() => {
                window.location.href = `/#${item.toLowerCase()}`;
                setIsMenuOpen(false);
              }}
              className="block text-5xl md:text-7xl font-bold text-white hover:text-gray-400 transition-colors duration-300"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}