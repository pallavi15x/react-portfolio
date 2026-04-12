import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#1b2610] border-t border-[#FEFAE0]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-[#FEFAE0] font-black text-xl tracking-tighter">
            PALLAVI<span className="text-[#DDA15E]">.</span>
          </div>
          <p className="text-[#FEFAE0]/20 text-[9px] font-bold uppercase tracking-[0.3em]">
            © 2026 All Rights Reserved
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-8 text-[#FEFAE0]/40 text-[10px] font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-[#DDA15E] transition-colors">About</a>
          <a href="#works" className="hover:text-[#DDA15E] transition-colors">Works</a>
          <a href="#contact" className="hover:text-[#DDA15E] transition-colors">Contact</a>
        </div>

        {/* Back to Top Button */}
        <a 
          href="#home" 
          className="w-12 h-12 rounded-full border border-[#FEFAE0]/10 flex items-center justify-center text-[#FEFAE0]/30 hover:text-[#DDA15E] hover:border-[#DDA15E] transition-all duration-500"
        >
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;