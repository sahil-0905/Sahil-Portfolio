import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    category: 'Tools & ERP',
    icon: Wrench,
    skills: [
      { name: 'SAP Ecosystem', level: 75 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-500/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-6 text-left"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200/20 dark:border-slate-800/20">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Items */}
                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-blue-500 dark:text-blue-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Custom animated progress bar */}
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.05, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
