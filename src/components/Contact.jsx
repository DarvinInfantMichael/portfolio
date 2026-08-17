import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Code, Code2, Send } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="relative w-full pt-24 pb-8 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-t from-[#00D4FF]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Contact Section */}
      <div className="w-full max-w-4xl relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 text-center border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">LET'S BUILD SOMETHING</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">Have an idea or opportunity? Let's connect.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <a href="mailto:darvininfantmichael.26it@licet.ac.in" className="flex items-center gap-3 text-gray-300 hover:text-[#00D4FF] transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00D4FF]/50 group-hover:bg-[#00D4FF]/10 transition-colors">
                <Mail size={24} />
              </div>
              <span className="font-medium tracking-wide">darvininfantmichael.26it@licet.ac.in</span>
            </a>
            
            <a href="tel:9342745599" className="flex items-center gap-3 text-gray-300 hover:text-[#7C3AED] transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#7C3AED]/50 group-hover:bg-[#7C3AED]/10 transition-colors">
                <Phone size={24} />
              </div>
              <span className="font-medium tracking-wide font-mono">9342745599</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-4 rounded-full glass-card hover:bg-white/10 hover:scale-110 transition-all text-white hover:text-[#00D4FF]">
                <Globe size={20} />
              </a>
              <a href="#" className="p-4 rounded-full glass-card hover:bg-white/10 hover:scale-110 transition-all text-white hover:text-white">
                <Code size={20} />
              </a>
              <a href="#" className="p-4 rounded-full glass-card hover:bg-white/10 hover:scale-110 transition-all text-white hover:text-[#f89f1b]">
                <Code2 size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-6xl border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white tracking-widest mb-1">DARVIN INFANT MICHAEL L</h3>
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] font-medium">Full-Stack Developer</p>
        </div>
        
        <div className="text-gray-500 text-sm">
          <p>© 2026 Darvin Infant Michael L. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center md:justify-end gap-1">Built with React <span className="text-blue-400 animate-pulse">⚛</span></p>
        </div>
      </div>

    </footer>
  );
};

export default Contact;
