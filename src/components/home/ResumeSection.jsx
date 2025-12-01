import React, { useState } from 'react';

// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ArrowRight, Download, FileText, Award, Briefcase, Code, Coffee } from 'lucide-react';

export default function ResumeSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const stats = [
    { icon: Briefcase, number: '4+', label: 'Years Experience' },
    { icon: Award, number: '20+', label: 'Projects Completed' },
    { icon: Code, number: '8+', label: 'Technologies Mastered' },
    { icon: Coffee, number: '∞', label: 'Cups of Coffee' }
  ];

  const skills = [
    { name: 'Web Development', level: 95 },
    { name: 'Technical SKills', level: 80 },
    { name: 'Cisco Packet Tracer', level: 75 },
    { name: 'Copywriting', level: 90 },
    { name: 'Threat Analysis', level: 70 },
    { name: 'Voice Acting', level: 85 }
  ];

  const certifications = [
    { title: 'Introduction To Packet Tracer', file: '_certificate_jkumass1-stu-vistula-edu-pl_9ea8211f-5953-4835-bc0a-cd751746f5dd.pdf' },
    { title: 'Introduction To IoT and Digital Transformation', file: '_certificate_jkumass1-stu-vistula-edu-pl_2488985d-45ef-49f6-9096-1071d9667966.pdf' },
    { title: 'Introduction To Data Science', file: '_certificate_jkumass1-stu-vistula-edu-pl_c634d849-35e3-4177-a397-493be7b791d7.pdf' },
    { title: 'Computer Hardware Basics', file: '_certificate_jkumass1-stu-vistula-edu-pl_666acec6-4dfc-40e1-8f1f-4188b2dcd783%20%281%29.pdf' },
    { title: 'Introduction To Cybersecurity', file: '_certificate_jkumass1-stu-vistula-edu-pl_face61ee-d20a-4408-a639-2259263b04cb%20%281%29.pdf' }
  ];

  return (
    <section id="resume" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">THE RECEIPTS</h2>
          <p className="text-xl text-gray-400">AKA: My resume, but made fun</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="bg-white/5 border-none p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Icon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center px-4">What I'm Really Good At</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="space-y-2 p-3 md:p-0">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div key={cert.file} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
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

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 p-12 text-center relative overflow-hidden" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <motion.div animate={{ scale: isHovering ? 1.5 : 1, rotate: isHovering ? 180 : 0, opacity: isHovering ? 0.1 : 0.05 }} transition={{ duration: 0.5 }} className="absolute inset-0 flex items-center justify-center">
              <FileText className="w-64 h-64 text-white" />
            </motion.div>

            {/* Modal */}
            <motion.div className={`fixed inset-0 z-[100] ${selectedCert ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} initial={{ opacity: 0 }} animate={{ opacity: selectedCert ? 1 : 0 }} transition={{ duration: 0.3 }}>
              <div className="absolute inset-0 bg-black/90 backdrop-blur-lg cursor-pointer" onClick={() => setSelectedCert(null)} />

              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: selectedCert ? 1 : 0.9, opacity: selectedCert ? 1 : 0 }} transition={{ duration: 0.3, type: 'spring', damping: 25 }} className="relative w-full h-full flex flex-col p-4">
                <div className="flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-white/10 rounded-t-lg">
                  <h3 className="text-lg md:text-xl font-semibold text-white truncate max-w-[70%]">{selectedCert?.title}</h3>
                  <button onClick={() => setSelectedCert(null)} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white hover:text-gray-300 text-lg font-bold">✕</button>
                </div>

                <div className="flex-1 min-h-0 bg-white rounded-b-lg">
                  {selectedCert && <iframe src={`/${selectedCert.file}`} className="w-full h-full border-none rounded-b-lg" title={selectedCert.title} loading="lazy" />}
                </div>

                <div className="p-3 bg-black/80 backdrop-blur-sm border-t border-white/10 rounded-b-lg mt-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
                    <span>PDF Certificate</span>
                    <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border-0 w-full sm:w-auto" onClick={() => window.open(`/${selectedCert?.file}`, '_blank')}>
                      <Download className="w-4 h-4 mr-2" />
                      Open in New Tab
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative z-10">
              <motion.div animate={{ y: isHovering ? -10 : 0 }} transition={{ duration: 0.3 }}>
                <FileText className="w-20 h-20 mx-auto mb-6 text-white" />
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold mb-4">Want the Full Story?</h3>
              <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">Download my resume for all the boring official details (education, work history, and all that jazz)</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-xl px-10 py-7 font-bold group">
                  <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                  <a href="/JoshuasNewCV.pdf" download>Download Resume Here</a>
                  <motion.span animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.3 }} className="ml-3">→</motion.span>
                </Button>
              </motion.div>

              <p className="text-sm text-gray-500 mt-6">PDF • Last updated July • 2 pages of pure awesome</p>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="text-center mt-16">
          <p className="text-gray-500 italic">P.S. - If you're still here, that means you're serious. Let's talk.</p>
        </motion.div>
      </div>
    </section>
  );
}
