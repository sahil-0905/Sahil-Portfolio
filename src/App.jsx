import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-blue-500 overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections Layout */}
      <main className="relative flex flex-col">
        {/* Hero Banner Section */}
        <Hero />

        {/* Professional Profile Summary & Timeline */}
        <About />

        {/* Technical Competencies Category Boards */}
        <Skills />

        {/* Featured Projects Interactive Showcase */}
        <Projects />

        {/* Industrial Placement / Coursework Timelines */}
        <Experience />

        {/* Formal Institutional Academics */}
        <Education />

        {/* Validation Mail Pipeline Submission Form */}
        <Contact />
      </main>

      {/* Bottom Footer Credits & Social Quicklinks */}
      <Footer />
    </div>
  );
}
