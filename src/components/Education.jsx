import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Terminal, Smartphone } from 'lucide-react';

import loyolaImg from '../assets/loyola.jpg';

const Education = () => {
  return (
    <section id="education" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      
      {/* Education Section */}
      <div className="w-full max-w-5xl mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">EDUCATION</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-56 h-64 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative group/img">
              <img 
                src={loyolaImg} 
                alt="Loyola College" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 shadow-lg">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Information Technology</h3>
              <p className="text-lg text-gray-400 mb-6 font-medium">Loyola-ICAM College of Engineering and Technology</p>
              
              <div className="flex flex-wrap gap-4 md:gap-8">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">Duration</span>
                  <span className="text-white font-mono bg-white/5 px-3 py-1 rounded">2022–2026</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">CGPA</span>
                  <span className="text-blue-400 font-mono bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded font-bold">7.5</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">HSC</span>
                  <span className="text-white font-mono bg-white/5 px-3 py-1 rounded">76.5%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">SSLC</span>
                  <span className="text-white font-mono bg-white/5 px-3 py-1 rounded">73.6%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Workshops Section */}
      <div className="w-full max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">WORKSHOPS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/5 hover:border-emerald-500/30 transition-all group"
          >
            <Terminal className="text-emerald-400 mb-4" size={28} />
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">UI Automation</h4>
            <p className="text-sm text-gray-400">Selenium testing and automated user interactions.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/5 hover:border-emerald-500/30 transition-all group"
          >
            <BookOpen className="text-emerald-400 mb-4" size={28} />
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Microsoft Power Apps</h4>
            <p className="text-sm text-gray-400">Low-code applications and automated workflows.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/5 hover:border-emerald-500/30 transition-all group"
          >
            <Smartphone className="text-emerald-400 mb-4" size={28} />
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Mastering Flutter</h4>
            <p className="text-sm text-gray-400">Flutter + Android Studio cross-platform development.</p>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Education;
