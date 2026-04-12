import React from 'react';
import { motion } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-[#283618] pt-20">
      
      {/* BACKGROUND TEXT - Optimized for Mobile */}
      <div className="absolute top-[25%] left-0 z-0 pointer-events-none select-none">
        <h2 className="text-7xl md:text-[200px] font-black uppercase tracking-tighter text-transparent opacity-10 leading-[0.8]"
            style={{ WebkitTextStroke: "1px #DDA15E" }}>
          WEB<br/>DEVELOPER
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter text-[#FEFAE0] leading-none">
            PALLAVI<span className="text-[#DDA15E]">.</span>
          </h1>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
            <div className="hidden md:block h-[1px] w-12 bg-[#DDA15E]"></div>
            <p className="text-[#FEFAE0]/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              Full Stack Developer
            </p>
          </div>

          <div className="mt-10">
             <a href="#works" className="px-10 py-4 bg-[#DDA15E] text-[#283618] rounded-full font-black uppercase text-[10px] tracking-widest inline-block hover:scale-105 transition-transform">
               View My Projects
             </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[260px] h-[260px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 border border-[#DDA15E]/30 rounded-full animate-pulse"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#606C38] relative z-10 shadow-2xl">
              <img src={animeImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            {/* BADGE */}
            <div className="absolute -bottom-2 -right-2 md:bottom-8 md:right-8 bg-[#DDA15E] text-[#283618] w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center z-20 font-black text-[8px] md:text-[10px] uppercase text-center border-4 border-[#283618]">
              Open to<br/>Work
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;