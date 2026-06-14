import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

const EDUCATION_DATA = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science & Engineering',
  duration: '2023 - 2027',
  institution: 'State Technical University',
  description: 'Studying core computation principles, software structures, and modern systems architecture. Participated in multiple coding projects and hackathons.',
  subjects: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming',
    'Operating Systems & Networks',
    'Software Engineering & Design Patterns'
  ]
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-500">Education</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Education Details Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 text-left relative"
        >
          {/* Top Info Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/20 dark:border-slate-800/20 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {EDUCATION_DATA.degree}
                </h3>
                <h4 className="text-base sm:text-lg text-blue-500 dark:text-blue-400 font-semibold mt-0.5">
                  {EDUCATION_DATA.field}
                </h4>
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full text-blue-500 bg-blue-500/10 border border-blue-500/20 w-max h-max shrink-0">
              <Calendar size={14} />
              {EDUCATION_DATA.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {EDUCATION_DATA.description}
          </p>

          {/* Key Coursework */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-500" />
              Core Coursework
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {EDUCATION_DATA.subjects.map((subject, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/10 dark:border-slate-800/10"
                >
                  <Award size={16} className="text-blue-500 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {subject}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
