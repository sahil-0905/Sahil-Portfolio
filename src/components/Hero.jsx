import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const ROLES = ["SAP Trainee", "Full Stack Developer", "Problem Solver"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const activeWord = ROLES[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(60);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(120);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Custom Particle Overlay */}
      <ParticleBackground />

      {/* Floating Radial Ambient Orbs */}
      <div className="glow-bubble glow-bubble-1" />
      <div className="glow-bubble glow-bubble-2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left text section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-6 w-max uppercase">
            Open For Opportunities
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400">Sahil Kumar</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6 h-10 flex items-center">
            I'm a&nbsp;
            <span className="text-blue-500 dark:text-blue-400 font-semibold cursor-blink">
              {currentText}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
            A technology enthusiast working at the intersection of enterprise solutions and modern web technologies. I specialize in SAP systems and Full Stack web applications, bridging data and design to create high-impact products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <a
              href="/Sahil_Kumar_Resume.pdf"
              download="Sahil_Kumar_Resume.pdf"
              className="px-6 py-3.5 glass hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right profile graphic section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Neon Accent Glow Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full blur-xl opacity-35 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
           {/* Portrait Border Frame */}
<div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-950">
 <img
  src="/profile.png"
  alt="Sahil Kumar Profile Photo"
  className="w-full h-full object-cover scale-90 object-center transition-transform duration-700 group-hover:scale-95"
/> 
</div>
            
            {/* Bubble Badge overlay */}
            <div className="absolute bottom-2 -right-2 glass shadow-lg border border-gray-200/10 px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-slate-800 dark:text-white">Active Learner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
