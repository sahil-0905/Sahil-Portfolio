import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Calendar, BookOpen } from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '2026',
    title: 'SAP Trainee',
    organization: 'Enterprise Solutions Training',
    description: 'Specializing in enterprise application workflows, data monitoring, and modern SAP analytics dashboards.',
    icon: Award,
  },
  {
    year: '2025',
    title: 'Full Stack Development',
    organization: 'Self-Directed Learning & Projects',
    description: 'Built multiple end-to-end web applications using React, Node.js, Express, and MongoDB/MySQL database systems.',
    icon: User,
  },
  {
    year: '2022 - 2027',
    title: 'Bachelor of Technology',
    organization: 'Computer Science & Engineering',
    description: 'Studied core engineering subjects, software architecture, databases, and algorithm designs.',
    icon: BookOpen,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="glow-bubble glow-bubble-3 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Objective & Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-card p-8 rounded-2xl text-left border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <User className="text-blue-500" size={20} />
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
               A motivated and enthusiastic Software Developer with a passion for Full Stack Development, AI technologies, and enterprise applications. Experienced in building responsive web applications and solving real-world problems through clean, scalable, and efficient code. Committed to continuous learning and creating innovative digital solutions that enhance user experiences.
              </p>
              {/* <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                With a background in Computer Science, I bring a solid understanding of data structures, database designs, and system architectures, allowing me to build efficient, scalable application pipelines.
              </p> */}
            </div>

            <div className="glass-card p-8 rounded-2xl text-left border border-slate-200/50 dark:border-slate-800/50 bg-blue-500/[0.02] dark:bg-blue-500/[0.01]">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Seeking opportunities to apply my technical knowledge and development skills in a dynamic environment where I can contribute to impactful projects, grow as a software professional, and help organizations achieve their goals through innovative technology solutions.
              </p>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="text-blue-500" size={22} />
              My Journey
            </h3>

            {/* Timeline Tree */}
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 flex flex-col gap-8 ml-2">
              {TIMELINE_EVENTS.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Node Dot / Icon */}
                    <div className="absolute -left-[37px] top-1 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-500 shadow-md">
                      <IconComponent size={14} />
                    </div>

                    {/* Timeline card */}
                    <div className="glass-card p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                      <span className="text-xs font-semibold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        {event.year}
                      </span>
                      <h4 className="text-lg font-bold mt-2 text-slate-900 dark:text-white">
                        {event.title}
                      </h4>
                      <h5 className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {event.organization}
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
