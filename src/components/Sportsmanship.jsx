import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Shield, Activity } from 'lucide-react';

import sports1 from '../assets/sports1.jpg';
import sports2 from '../assets/sports2.jpg';
import sports3 from '../assets/sports3.jpg';
import sports4 from '../assets/sports4.jpg';

const Sportsmanship = () => {
  return (
    <section id="sportsmanship" className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">Sportsmanship</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-orange-500/50 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Captain */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8 border border-white/10 hover:border-orange-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-colors duration-500" />
            <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/10 relative group/img flex-shrink-0">
              <img src={sports3} alt="Football Team Captain" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 shadow-lg">
                <Shield className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Football Team Captain</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Led the football team at <span className="text-gray-200 font-semibold">Loyola-ICAM College of Engineering and Technology</span>, fostering teamwork and strategic gameplay.
            </p>
          </motion.div>

          {/* District Rep */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 md:p-8 border border-white/10 hover:border-orange-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-colors duration-500" />
            <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/10 relative group/img flex-shrink-0">
              <img src={sports2} alt="District Representative" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 shadow-lg">
                <Activity className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">District Representative</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Proudly represented the <span className="text-gray-200 font-semibold">Chennai District</span> twice in competitive tournaments, showcasing excellence on the field.
            </p>
          </motion.div>

          {/* State Level */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 md:p-8 border border-white/10 hover:border-orange-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-colors duration-500" />
            <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/10 relative group/img flex-shrink-0">
              <img src={sports4} alt="State Level Match Winners" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 shadow-lg">
                <Trophy className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">State Level Match Winners</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Conquered the <span className="text-gray-200 font-semibold">SNU State Level Match</span> held at SSN, bringing home the championship trophy.
            </p>
          </motion.div>

          {/* Zone 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 md:p-8 border border-white/10 hover:border-orange-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-colors duration-500" />
            <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/10 relative group/img flex-shrink-0">
              <img src={sports1} alt="Zone Three Representators" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 shadow-lg">
                <Medal className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Zone Three Representators</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Selected to represent <span className="text-gray-200 font-semibold">Zone Three</span>, playing against top-tier regional opponents.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sportsmanship;
