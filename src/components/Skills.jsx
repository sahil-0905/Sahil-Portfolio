
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Database,
  Wrench,
} from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Programming & Frontend',
    icon: Code2,
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'React.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    category: 'AI, ML & Generative AI',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Scikit-learn',
      'PyTorch',
      'Pandas',
      'NumPy',
      'MediaPipe',
      'OpenCV',
      'Computer Vision',
      'Groq LLM',
      'Generative AI',
    ],
  },
  {
    category: 'Backend & Database',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'MongoDB',
      'MySQL',
      'Supabase',
      'REST APIs',
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Streamlit',
      'WebRTC',
      'JWT Authentication',
      'Razorpay',
      'Jitsi',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative bg-slate-500/[0.01]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />

          <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build AI-powered
            applications, machine learning solutions, and full-stack projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((cat, catIdx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.5,
                  delay: catIdx * 0.1,
                }}
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

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: skillIdx * 0.04,
                      }}
                      className="px-4 py-2 rounded-lg text-sm font-semibold
                      bg-blue-500/5 text-slate-700
                      border border-blue-500/20
                      hover:bg-blue-500 hover:text-white
                      hover:border-blue-500
                      dark:text-slate-300 dark:bg-slate-800/60
                      dark:border-slate-700
                      transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
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
