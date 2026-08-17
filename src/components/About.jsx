import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Code, Database, Smartphone, Lightbulb } from 'lucide-react';

const coreCompetencies = [
  { name: 'Full-Stack Development', icon: <Layers size={20} className="text-[#00D4FF]" /> },
  { name: 'AI Integration', icon: <Cpu size={20} className="text-[#7C3AED]" /> },
  { name: 'REST APIs', icon: <Code size={20} className="text-cyan-400" /> },
  { name: 'Database Development', icon: <Database size={20} className="text-green-400" /> },
  { name: 'Responsive UI', icon: <Smartphone size={20} className="text-pink-400" /> },
  { name: 'Problem Solving', icon: <Lightbulb size={20} className="text-yellow-400" /> },
];

const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Internships', value: '2' },
  { label: 'Graduate', value: '2026' },
  { label: 'Core Stack', value: 'MERN' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="w-full max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">ABOUT ME</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h3 className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl leading-relaxed">
            I build modern web applications from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] font-medium">frontend to backend.</span>
          </h3>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            
            {/* Left: Competencies */}
            <div className="w-full md:w-[60%]">
              <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-6 font-semibold">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreCompetencies.map((comp, idx) => (
                  <motion.div 
                    key={comp.name}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                      {comp.icon}
                    </div>
                    <span className="text-gray-200 font-medium">{comp.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div className="w-full md:w-[40%] flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <span className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      {stat.value}
                    </span>
                    <span className="text-sm text-[#00D4FF] font-medium tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
