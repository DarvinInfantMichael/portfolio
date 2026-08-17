import React from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Hackathons from './Hackathons';
import Sportsmanship from './Sportsmanship';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Global Background Layer */}
      <Background />
      
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        
        {/* Quote Section (Legacy inclusion to bridge intro) */}
        <section className="relative w-full py-16 flex items-center justify-center bg-black/40 border-y border-white/5">
          <div className="text-center text-white/70 max-w-3xl px-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wide leading-relaxed">
              "The journey begins when you're really self-motivated."
            </h3>
            <p className="mt-4 text-white/40 uppercase tracking-widest text-sm font-semibold">— DIM</p>
          </div>
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Hackathons />
        <Sportsmanship />
        <Contact />
      </main>
    </div>
  );
};

export default LandingPage;
