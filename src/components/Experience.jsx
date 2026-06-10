import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const EXPERIENCE_DATA = [
  {
    role: 'SAP Trainee',
    duration: '2025 - Present',
    organization: 'Enterprise Resource Planning Division',
    description: 'Training in modern SAP frameworks, enterprise configurations, and cloud deployment pipelines.',
    bullets: [
      'Gaining hands-on knowledge in SAP Analytics dashboards and transaction monitoring.',
      'Integrating database schemas and analytics widgets into responsive dashboards.',
      'Studying SAP system architectures, client configurations, and data migration flows.'
    ]
  },
  {
    role: 'Full Stack Development Learner',
    duration: '2024 - Present',
    organization: 'Independent Tech Training & Open Source',
    description: 'Deepened expertise in JavaScript ecosystems, standard databases, and responsive layouts.',
    bullets: [
      'Engineered and launched multi-component full stack web apps (JWT auth, MongoDB posts).',
      'Configured custom Node.js and Express servers with RESTful routing patterns.',
      'Used Git/GitHub for code version control, merging, branching, and workspace hosting.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-500/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="flex flex-col gap-10">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 text-left relative overflow-hidden"
            >
              {/* Corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-blue-500" />
                    {exp.role}
                  </h3>
                  <h4 className="text-base text-slate-500 dark:text-slate-400 font-semibold mt-1">
                    {exp.organization}
                  </h4>
                </div>
                
                <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full text-blue-500 bg-blue-500/10 border border-blue-500/20 w-max h-max">
                  <Calendar size={14} />
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                {exp.description}
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
