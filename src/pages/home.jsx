import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Mail, Linkedin, Github, ArrowDown, Sparkles, Download, FileText, Award, Briefcase, Code, Coffee } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const stats = [
    { icon: Briefcase, number: "10+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Code, number: "15+", label: "Technologies Mastered" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee" }
  ];

  const skills = [
    { name: "Creative Direction", level: 95 },
    { name: "Web Development", level: 92 },
    { name: "UI/UX Design", level: 88 },
    { name: "Copywriting", level: 90 },
    { name: "Brand Strategy", level: 85 },
    { name: "Front-end Dev", level: 93 }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 mix-blend-difference"
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold tracking-tight cursor-pointer text-white"
          >
            Joshua Kumassi
          </motion.div>
          
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
          {['Resume', 'About', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors duration-300"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Hero Section - Professional & Clean */}
      <motion.section
        id="hero"
        ref={heroRef}
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden"
      >
        {/* Professional Background Image */}
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

        <div className="relative z-10 max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-none"
            >
              Joshua Kumassi
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-4xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cyber Security Analyst • Writer • Voice Actor • IT Technician
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting digital experiences that combine design excellence with technical innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              DISCOVER MORE
            </Button>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 text-white/60 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </motion.section>

      {/* About Section - Personality Driven */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 md:px-12 py-32 bg-white text-black"
      >
        <div className="max-w-screen-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Technically all of the above,<br />
                <span className="text-gray-400">and more.</span>
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                <p className="text-xl md:text-2xl leading-relaxed">
                  But instead of skimming some elevator pitch I rewrote 487 times, why don't you just scroll down to see the type of work I've been known to make?
                </p>
                
                <p className="text-lg leading-relaxed">
                  What kind of creative starts their portfolio like this? The kind who doesn't fit into outmoded specializations, that's what.
                </p>
                
                <p className="text-lg leading-relaxed">
                  The more I learn how to do, the more I love my job. Sure, it's a challenge to categorize someone who can <span className="font-semibold">write compelling copy, direct creative projects, design interfaces, and build websites like this one</span>.
                </p>
                
                <p className="text-lg leading-relaxed">
                  But that's not my problem—it's yours. And if you want, I can solve it along with all your other problems.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <Button 
                onClick={() => scrollToSection('resume')}
                size="lg"
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 text-lg px-8 py-6 font-semibold"
              >
                YEAH OKAY LET'S SEE IT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section - Fun & Interactive */}
      <section
        id="resume"
        className="py-32 px-6 md:px-12 bg-black"
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              THE RECEIPTS
            </h2>
            <p className="text-xl text-gray-400">AKA: My resume, but make it fun</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-none p-8 text-center hover:bg-white/10 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    </motion.div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              What I'm Really Good At
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card 
              className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 p-12 text-center relative overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                animate={{
                  scale: isHovering ? 1.5 : 1,
                  rotate: isHovering ? 180 : 0,
                  opacity: isHovering ? 0.1 : 0.05
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <FileText className="w-64 h-64 text-white" />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  animate={{ y: isHovering ? -10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FileText className="w-20 h-20 mx-auto mb-6 text-white" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Want the Full Story?
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
                  Download my resume for all the boring official details (education, work history, and all that jazz)
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-xl px-10 py-7 font-bold group"
                  >
                    <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                    DOWNLOAD RESUME
                    <motion.span
                      animate={{ x: isHovering ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-3"
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 mt-6">
                  PDF • Last updated December 2024 • 2 pages of pure awesome
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Fun Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 italic">
              P.S. - If you're still here, that means you're serious. Let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Bold & Direct */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white text-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full text-center space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Sparkles className="w-16 h-16 mx-auto" />
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
              LET'S MAKE<br />SOMETHING GREAT
            </h2>
          </div>

          <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Got a project? A problem to solve? Or just want to chat about that thing you saw on the internet?
          </p>
          
          <motion.a
            href="mailto:hello@yourname.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-4xl md:text-5xl font-bold text-black hover:text-gray-600 transition-colors duration-300"
          >
            hello@yourname.com
          </motion.a>

          <div className="flex justify-center gap-8 pt-8">
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="#"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="#"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="#"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Joshua Kumassi. Built with passion and probably too much coffee.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}