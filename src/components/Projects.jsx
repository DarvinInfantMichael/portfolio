import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Code } from 'lucide-react';
import kindlinkImg from '../assets/kindlink.png';
import skillsageImg from '../assets/skillsage.png';
import examregImg from '../assets/examreg.png';

const projects = [
  {
    id: 'kindlink',
    title: 'KindLink',
    subtitle: 'Community Donation & Pickup Platform',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    features: ['OTP-based passwordless login', 'Donation CRUD', 'Pickup booking', 'Status tracking', 'User interface', 'Admin interface', 'LocalStorage persistence'],
    styleClass: 'from-orange-500/20 to-rose-500/20 border-orange-500/30',
    img: kindlinkImg,
    demoUrl: 'https://kind-link-fawn.vercel.app'
  },
  {
    id: 'skillsage',
    title: 'SkillSage AI',
    subtitle: 'Smart Educational Support System',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RAG AI'],
    features: ['Academic support', 'Skill development', 'Placement preparation', 'REST APIs', 'MongoDB', 'Personalized AI learning insights'],
    styleClass: 'from-blue-600/20 to-purple-600/20 border-purple-500/30',
    img: skillsageImg,
    demoUrl: 'https://skill-age-ai.vercel.app/'
  },
  {
    id: 'examreg',
    title: 'Exam Registration System',
    subtitle: 'Student Examination Management Platform',
    tech: ['React', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    features: ['Exam registration', 'Exam viewing', 'User management', 'Exam scheduling', 'Admin functionality'],
    styleClass: 'from-emerald-500/20 to-cyan-500/20 border-cyan-500/30',
    img: examregImg,
    demoUrl: 'https://exam-system-frontend-djmm.vercel.app/'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center bg-[#050816]/30">
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">FEATURED PROJECTS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D4FF]/50 to-transparent" />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card flex flex-col group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 h-full relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Area */}
              <div className="relative w-full h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.styleClass} opacity-40 mix-blend-overlay z-10 group-hover:opacity-10 transition-opacity duration-500`} />
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="relative z-10 p-8 flex flex-col h-full pt-16 mt-8 border-t border-white/10 bg-black/40 backdrop-blur-sm rounded-b-xl flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{project.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 font-mono group-hover:border-white/20 group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && <span className="px-2 py-1 text-xs text-gray-500">+{project.tech.length - 4}</span>}
                </div>

                <div className="mt-auto flex items-center justify-between text-[#00D4FF] font-medium text-sm group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 p-0 relative flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Modal Visual Area */}
                <div className="relative w-full md:w-[40%] h-48 md:h-auto overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.styleClass} opacity-40 mix-blend-overlay z-10`} />
                   <img 
                     src={selectedProject.img} 
                     alt={selectedProject.title} 
                     className="w-full h-full object-cover"
                   />
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-[60%] p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-[#00D4FF] mb-8 font-medium">{selectedProject.subtitle}</p>

                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Key Features</h4>
                  <ul className="space-y-2 mb-10">
                    {selectedProject.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-[#7C3AED] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    {selectedProject.codeUrl ? (
                      <a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10 flex items-center gap-2">
                        <Code size={16} /> Code
                      </a>
                    ) : (
                      <button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10 flex items-center gap-2 opacity-50 cursor-not-allowed" title="Link not available">
                        <Code size={16} /> Code
                      </button>
                    )}
                    
                    {selectedProject.demoUrl ? (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white text-sm font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    ) : (
                      <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white text-sm font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2 opacity-50 cursor-not-allowed" title="Link not available">
                        <ExternalLink size={16} /> Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
