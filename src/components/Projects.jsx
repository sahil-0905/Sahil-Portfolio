import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: props.size || 24, height: props.size || 24 }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = ['All', 'Full Stack', 'Frontend'];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'CrowdFunding Platform',
    description: 'Developed a full-stack Crowdfunding Platform that enables users to create fundraising campaigns, contribute securely to projects, and track campaign progress in real time. The platform provides a seamless and user-friendly experience for both campaign creators and donors.',
    features: ['JWT Authentication', 'Login and Register', 'MongoDB Integration, Razorpay Integration, EmailJS, '],
    image: '/crowdFunding.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Full Stack',
    github: 'https://github.com',
    demo: 'https://crowd-funding-puce-kappa.vercel.app/',
  },
  {
    id: 2,
    title: 'Quick Chat',
    description: 'Developed a real-time Chat Application using the MERN stack and Socket.IO, enabling instant messaging with seamless bidirectional communication between users. The application provides a fast, responsive, and secure messaging experience with real-time message delivery and user authentication.',
    features: ['Real-time messaging powered by Socket.IO', 'Instant message delivery without page refresh', 'MongoDB database integration for message and user data storage', 'RESTful APIs for user and chat management'],
    image: '/QuickChat.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind','Socket.io'],
    category: 'Full Stack',
    github: 'https://github.com/sahil-0905/QuickChat',
    demo: 'https://quick-chat-hj4h.vercel.app/login',
  },
  {
    id: 3,
    title: 'Scoobi',
    description: 'Developed Scoobi, an AI-powered conversational assistant inspired by Gemini, built using React.js. The application provides an intuitive and interactive chat interface that allows users to communicate with an AI model, receive intelligent responses, and access information in a seamless real-time experience.',
    features: ['AI-powered conversational interface', 'Real-time chat experience', 'Fast and interactive user experience', 'API integration for AI-generated responses'],
    image: '/Scoobi.png',
    tags: ['React', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/sahil-0905/Gemini-Clone',
    demo: 'https://gemini-clone-mu-two.vercel.app/',
  },
  {
    id: 4,
    title: 'CarRental',
    description: 'Developed a modern and responsive Car Rental Website using React.js, designed to provide users with an intuitive platform for exploring and booking rental vehicles. The application features a clean user interface, detailed vehicle listings, and a seamless browsing experience optimized for both desktop and mobile devices.',
    features: ['Responsive and mobile-friendly design', 'Detailed car information and specifications', 'Modern and interactive user interface', 'Reusable React components'],
    image: '/CarRental.png',
    tags: ['React', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/sahil-0905/Car-rental',
    demo: 'https://car-rental-ruddy-seven.vercel.app/',
  },
 
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          
          {/* Filtering Tabs */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'glass hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card flex flex-col rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 group h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden border-b border-slate-200/20 dark:border-slate-800/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-transform duration-200 scale-90 group-hover:scale-100"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-transform duration-200 scale-90 group-hover:scale-100"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-500 dark:text-blue-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Bullet features */}
                  <div className="flex flex-col gap-1.5 mb-5">
                    {project.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500/80 rounded-full" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200/30 dark:border-slate-800/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
