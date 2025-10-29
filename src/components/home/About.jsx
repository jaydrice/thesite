import React from 'react';

// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export default function About({ scrollToSection }) {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-32 bg-white text-black">
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
              My name is Joshua Kumassi,
              <br />
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
                The more I learn, the more my portfolio grows. It’s not easy to categorize someone who can <span className="font-semibold">write compelling stories and content, direct creative projects, act, sing, host events, record engaging voiceovers, and design websites — including the one you’re viewing right now.</span> Alongside my creative pursuits, I remain deeply rooted in IT, holding several certifications across various technical disciplines. This blend of art and technology defines both my skill set and my approach to every project I take on.
              </p>

              <p className="text-lg leading-relaxed">
                So if you’re looking for someone dedicated, creative, and ready to deliver results that matter — you’ve found the right person.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <Button onClick={() => scrollToSection('resume')} size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 text-lg px-8 py-6 font-semibold">
              LET'S SEE IT
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
