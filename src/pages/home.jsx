import React, { useState, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Mail, Linkedin, Github, ArrowDown, Sparkles, Download, FileText, Award, Briefcase, Code, Coffee } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

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
    { icon: Briefcase, number: "4+", label: "Years Experience" },
    { icon: Award, number: "20+", label: "Projects Completed" },
    { icon: Code, number: "8+", label: "Technologies Mastered" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee" }
  ];

  const skills = [
    { name: "Web Development", level: 95 },
    { name: "Technical SKills", level: 80 },
    { name: "Cisco Packet Tracer", level: 75 },
    { name: "Copywriting", level: 90 },
    { name: "Threat Analysis", level: 70 },
    { name: "Voice Acting", level: 85 }
  ];

  const certifications = [
    { title: 'Introduction To Packet Tracer', file: '_certificate_jkumass1-stu-vistula-edu-pl_9ea8211f-5953-4835-bc0a-cd751746f5dd.pdf' },
    { title: 'Introduction To IoT and Digital Transformation', file: '_certificate_jkumass1-stu-vistula-edu-pl_2488985d-45ef-49f6-9096-1071d9667966.pdf' },
    { title: 'Introduction To Data Science', file: '_certificate_jkumass1-stu-vistula-edu-pl_c634d849-35e3-4177-a397-493be7b791d7.pdf' },
    { title: 'Computer Hardware Basics', file: '_certificate_jkumass1-stu-vistula-edu-pl_666acec6-4dfc-40e1-8f1f-4188b2dcd783%20%281%29.pdf' },
    { title: 'Introduction To Cybersecurity', file: '_certificate_jkumass1-stu-vistula-edu-pl_face61ee-d20a-4408-a639-2259263b04cb%20%281%29.pdf' }
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

        <div className="relative z-10 py-24 max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-none"
            >
              Joshua T Kumassi
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-4xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cyber Security Analyst • Writer • Game Tester/Gamer • Voice Over Artist •  Actor • IT Technician • MC 
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A problem solver with a knack for finding fun and creative approaches to solutions.
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
                My name is Joshua Kumassi,<br />
                <span className="text-gray-400">Here's a brief overview of who I am and the value I bring.</span>
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                <p className="text-xl md:text-2xl leading-relaxed">
                I am currently a student at Vistula University, pursuing a Bachelor's degree in Computer Science with a specialization in Cybersecurity.

                </p>
                
                <p className="text-lg leading-relaxed">
                I am open to opportunities that enable me to grow and contribute in dynamic environments. With a strong interest in both technology and the arts, I have been dedicated to exploring the intersection of IT and creativity throughout my career. This unique combination allows me to approach challenges with both technical precision and artistic insight.
                </p>
                
                <p className="text-lg leading-relaxed">
                The more I learn, the more my portfolio grows. It’s not easy to categorize someone who can <span className="font-semibold">write compelling stories and content, direct creative projects, act, sing, host events, record engaging voiceovers, and design websites — including the one you’re viewing right now. Alongside my creative pursuits, I remain deeply rooted in IT, holding several certifications across various technical disciplines. This blend of art and technology defines both my skill set and my approach to every project I take on.</span>.
                </p>
                
                <p className="text-lg leading-relaxed">
                So if you’re looking for someone dedicated, creative, and ready to deliver results that matter — you’ve found the right person.
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
                LET'S SEE IT
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
            <p className="text-xl text-gray-400">AKA: My resume, but made fun</p>
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

          {/* Skills Section - Improved */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center px-4">
    What I'm Really Good At
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="space-y-2 p-3 md:p-0"
      >
        <div className="flex justify-between items-center">
          <span className="text-base md:text-lg font-medium">{skill.name}</span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.file}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Card className="p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div onClick={() => setSelectedCert(cert)} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Award className="w-10 h-10 text-gray-300" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg text-white">{cert.title}</div>
                        <div className="text-sm text-gray-400">View certificate (PDF)</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

{/* CERTIFICATE MODAL - FIXED */}
<motion.div
  className={`fixed inset-0 z-[100] ${
    selectedCert ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  initial={{ opacity: 0 }}
  animate={{ opacity: selectedCert ? 1 : 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Backdrop - Click to close */}
  <div 
    className="absolute inset-0 bg-black/90 backdrop-blur-lg cursor-pointer"
    onClick={() => setSelectedCert(null)}
  />
  
  {/* Modal Container - Responsive */}
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: selectedCert ? 1 : 0.9, opacity: selectedCert ? 1 : 0 }}
    transition={{ duration: 0.3, type: "spring", damping: 25 }}
    className="relative w-full h-full flex flex-col p-4"
  >
    {/* Header - Fixed height */}
    <div className="flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-white/10 rounded-t-lg">
      <h3 className="text-lg md:text-xl font-semibold text-white truncate max-w-[70%]">
        {selectedCert?.title}
      </h3>
      <button
        onClick={() => setSelectedCert(null)}
        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white hover:text-gray-300 text-lg font-bold"
      >
        ✕
      </button>
    </div>

    {/* PDF Container - Flexible height */}
    <div className="flex-1 min-h-0 bg-white rounded-b-lg">
      {selectedCert && (
        <iframe
          src={`/${selectedCert.file}`}
          className="w-full h-full border-none rounded-b-lg"
          title={selectedCert.title}
          loading="lazy"
        />
      )}
    </div>

    {/* Footer */}
    <div className="p-3 bg-black/80 backdrop-blur-sm border-t border-white/10 rounded-b-lg mt-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
        <span>PDF Certificate</span>
        <Button
          size="sm"
          className="bg-white/10 hover:bg-white/20 text-white border-0 w-full sm:w-auto"
          onClick={() => window.open(`/${selectedCert?.file}`, '_blank')}
        >
          <Download className="w-4 h-4 mr-2" />
          Open in New Tab
        </Button>
      </div>
    </div>
  </motion.div>
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
                    <a href="/JoshuaTKumassi.pdf" download>Download Resume Here</a>
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
                  PDF • Last updated July • 2 pages of pure awesome
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

{/* Contact Section - Improved Responsiveness */}
<section
  id="contact"
  className="min-h-screen flex items-center justify-center px-4 md:px-12 py-20 bg-white text-black"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl w-full text-center space-y-8 md:space-y-12"
  >
    <div className="space-y-4 md:space-y-6">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
      </motion.div>
      
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
        LET'S MAKE<br />SOMETHING GREAT
      </h2>
    </div>

    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
      Got a project? A problem to solve? A video that needs an extra kick? Or an event that needs moderation?
    </p>
    
    <motion.a
      href="mailto:kumassijoshua14@gmail.com"
      whileHover={{ scale: 1.05 }}
      className="inline-block text-xl md:text-2xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors duration-300 break-all px-4"
    >
      kumassijoshua14@gmail.com
    </motion.a>

    <div className="flex justify-center gap-6 pt-6 md:pt-8">
      {[
        { href: "https://www.linkedin.com/in/joshua-kumassi-80915b306/", icon: Linkedin },
        { href: "https://github.com/jaydrice", icon: Github },
        { href: "mailto:kumassijoshua14@gmail.com", icon: Mail }
      ].map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={index}
            whileHover={{ y: -4, scale: 1.1 }}
            href={social.href}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>
        );
      })}
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
            <a href="https://www.linkedin.com/in/joshua-kumassi-80915b306/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/jaydrice" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.instagram.com/jay.d.rice/" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}