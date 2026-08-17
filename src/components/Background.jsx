import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050816]">
      {/* Dark Secondary Background Layer */}
      <div className="absolute inset-0 bg-[#0A0F1F]/40" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      
      {/* Vignette fade for grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/50 to-[#050816]" />

      {/* Subtle Blue Glow (Top Left) */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#00D4FF]/10 blur-[150px]" />
      
      {/* Subtle Purple Glow (Center Right) */}
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#7C3AED]/10 blur-[150px]" />

      {/* Subtle Cyan Glow (Bottom Left) */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
    </div>
  );
};

export default Background;
