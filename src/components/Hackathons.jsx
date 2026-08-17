import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Pill, Scale, Activity, Bell, UserCheck, ArrowRight } from 'lucide-react';

const flowSteps = [
  { icon: <Pill size={24} />, label: 'Medication Container' },
  { icon: <Scale size={24} />, label: 'Weight Monitoring' },
  { icon: <Activity size={24} />, label: 'Dose Detection' },
  { icon: <Bell size={24} />, label: 'Alert' },
  { icon: <UserCheck size={24} />, label: 'Caretaker Notification' }
];

const Hackathons = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 flex justify-center bg-[#0a0f1f]/80">
      <div className="w-full max-w-5xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 mb-6">
            <Trophy size={18} />
            <span className="text-sm font-bold tracking-widest uppercase">Hackathon</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Curoid</h2>
          <p className="text-xl text-[#00D4FF] font-medium">Smart Home Automation System</p>
          <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">College Level — 2022</p>
        </motion.div>

        {/* Visualization Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 relative overflow-hidden text-center border-white/10 shadow-[0_0_50px_rgba(0,212,255,0.1)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D4FF]/10 via-transparent to-transparent pointer-events-none" />
          
          <h3 className="text-2xl text-white font-semibold mb-16 relative z-10">Elderly Medication Monitoring Flow</h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 relative z-10">
            {flowSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                {/* Step Circle */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-card flex items-center justify-center bg-[#0a0f1f]/50 border-white/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/50 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 text-gray-300 group-hover:text-white">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-[#00D4FF] transition-colors max-w-[100px] leading-tight">
                    {step.label}
                  </span>
                </motion.div>

                {/* Arrow Connector */}
                {index < flowSteps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                    className="hidden lg:flex text-white/20"
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                )}
                
                {/* Mobile Connector */}
                {index < flowSteps.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 24 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                    className="lg:hidden w-[2px] bg-white/20 my-2"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hackathons;
