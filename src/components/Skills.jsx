import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Wrench, Palette } from 'lucide-react';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code2 size={24} className="text-[#00D4FF]" />,
    skills: ['JavaScript', 'Java']
  },
  {
    category: 'Frontend',
    icon: <Monitor size={24} className="text-[#7C3AED]" />,
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js']
  },
  {
    category: 'Backend',
    icon: <Server size={24} className="text-cyan-400" />,
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Database',
    icon: <Database size={24} className="text-green-400" />,
    skills: ['MongoDB']
  },
  {
    category: 'Tools',
    icon: <Wrench size={24} className="text-orange-400" />,
    skills: ['Git', 'Android Studio', 'Flutter']
  },
  {
    category: 'Other',
    icon: <Palette size={24} className="text-pink-400" />,
    skills: ['UI/UX Design']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center bg-[#050816]/50">
      <div className="w-full max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">TECHNICAL SKILLS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D4FF]/50 to-transparent" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300 border border-white/5 hover:border-white/10"
            >
              {/* Subtle hover glow background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#00D4FF]/5 to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{group.category}</h3>
                </div>
                
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map(skill => (
                    <li 
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/[0.03] border border-white/5 rounded-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
