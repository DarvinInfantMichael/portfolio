import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12 lg:px-24">
      
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-[60%] flex flex-col justify-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Badge */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold tracking-widest backdrop-blur-md"
          >
            AVAILABLE FOR DEVELOPMENT OPPORTUNITIES
          </motion.div>
          
          <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-lg md:text-xl mb-2 font-light"
          >
            Hi, I'm
          </motion.h3>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-tight leading-tight text-white"
          >
            DARVIN INFANT <br/> MICHAEL L
          </motion.h1>

          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl md:text-4xl font-semibold mb-6 tracking-wide"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]">
              FULL-STACK DEVELOPER
            </span>
          </motion.h2>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light mb-10"
          >
            Building responsive, scalable and user-focused web applications with modern frontend, backend, database and AI technologies.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group relative px-8 py-3.5 rounded-full overflow-hidden flex items-center justify-center gap-2 font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 flex items-center gap-2">View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center gap-2 font-medium text-white transition-all hover:scale-105">
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side (Visuals) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="w-full md:w-[40%] h-[50vh] md:h-full mt-12 md:mt-0 relative flex items-center justify-center"
      >
        {/* We use the portrait, but surround it with abstract floating tech badges as requested */}
        <div className="relative w-64 h-80 md:w-80 md:h-[28rem] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,212,255,0.15)]">
          <img 
            src={profileImg} 
            alt="Darvin" 
            className="w-full h-full object-cover object-center opacity-90 contrast-[1.1] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
        </div>

        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] md:-left-[10%] glass-card px-4 py-2 text-sm text-[#00D4FF] font-semibold font-mono"
        >
          React.js
        </motion.div>
        
        <motion.div 
          animate={{ y: [10, -10, 10] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[0%] md:-left-[5%] glass-card px-4 py-2 text-sm text-[#7C3AED] font-semibold font-mono"
        >
          Node.js
        </motion.div>

        <motion.div 
          animate={{ y: [-5, 15, -5] }} 
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute top-[30%] right-[5%] md:-right-[10%] glass-card px-4 py-2 text-sm text-green-400 font-semibold font-mono"
        >
          MongoDB
        </motion.div>

        <motion.div 
          animate={{ y: [15, -5, 15] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] md:-right-[5%] glass-card px-4 py-2 text-sm text-yellow-400 font-semibold font-mono"
        >
          JavaScript
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
