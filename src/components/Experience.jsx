import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Data Corp',
    date: 'Jan–Apr 2025',
    tech: ['CodeIgniter 3', 'PHP', 'MySQL', 'jQuery'],
    modules: ['Plot Registration', 'Customer Management', 'Payment Tracking', 'Document Uploads']
  },
  {
    role: 'Full-Stack Development Intern',
    company: 'Open Weaver',
    date: 'Aug 2023',
    tech: ['HTML', 'CSS', 'JavaScript', 'Shopify CMS'],
    modules: []
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">EXPERIENCE</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#7C3AED]/50 to-transparent" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16">
          {/* Glowing line overlay */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#00D4FF] via-[#7C3AED] to-transparent origin-top"
          />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[21px] w-10 h-10 rounded-full bg-[#0a0f1f] border border-[#7C3AED]/50 shadow-[0_0_15px_rgba(124,58,237,0.5)] flex items-center justify-center z-10">
                <Briefcase size={16} className="text-[#00D4FF]" />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 md:p-8 relative group hover:border-white/10 transition-colors">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors">{exp.role}</h3>
                    <span className="text-lg text-gray-400 font-medium">{exp.company}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#7C3AED] font-semibold tracking-wider self-start md:self-auto">
                    {exp.date}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono text-gray-300 border-b border-gray-600 pb-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modules/Chips (if any) */}
                {exp.modules.length > 0 && (
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Core Modules Built</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.modules.map(mod => (
                        <span key={mod} className="px-3 py-1.5 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-medium rounded-md border border-[#00D4FF]/20">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
