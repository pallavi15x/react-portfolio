import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 flex flex-col items-center gap-4">
      {/* LOGO - NO DOT */}
      <div className="text-[#FEFAE0] font-black tracking-[0.3em] text-xl uppercase">
        PALLAVI
      </div>
      
      <p className="text-[#FEFAE0]/20 text-[10px] uppercase tracking-[0.5em]">
        © 2026 Designed for the future
      </p>
    </footer>
  );
};
export default Footer;