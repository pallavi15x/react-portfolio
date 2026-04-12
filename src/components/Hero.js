import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg'; 

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallel effect for extra depth
  const textX = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-[#283618]">
      
      {/* 1. THE SPLIT BACKGROUND TEXT (Adjusted to avoid the image) */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-[35%] left-0 z-0 pointer-events-none select-none flex flex-col"
      >
        {/* Large "WEB" - Stays mostly on the left */}
        <h2 className="text-[120px] md:text-[200px] font-black uppercase tracking-tighter text-transparent opacity-10 leading-[0.8]"
            style={{ WebkitTextStroke: "1.5px #DDA15E" }}>
          WEB
        </h2>
        {/* Smaller "DEVELOPER" - Indented to stay clear of the image */}
        <h2 className="text-[80px] md:text-[140px] font-black uppercase tracking-tighter text-transparent opacity-10 ml-10 md:ml-20"
            style={{ WebkitTextStroke: "1.5px #DDA15E" }}>
          DEVELOPER
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 2. LEFT SIDE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >
          <h1 className="text-7xl md:text-[140px] font-black uppercase tracking-tighter text-[#FEFAE0] leading-none">
            PALLAVI<span className="text-[#DDA15E]">.</span>
          </h1>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="h-[1px] w-12 bg-[#DDA15E]"></div>
            <p className="text-[#FEFAE0]/60 text-[11px] font-bold uppercase tracking-[0.4em]">
              Creative Developer & Designer
            </p>
          </div>

          <div className="mt-10">
             <a href="#works" className="px-12 py-5 bg-[#DDA15E] text-[#283618] rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#FEFAE0] transition-all shadow-2xl inline-block">
               See My Works
             </a>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE: THE CIRCLE IMAGE */}
        <div className="relative flex justify-center lg:justify-end items-center">
          
          {/* Animated Decorative Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute border border-dashed border-[#DDA15E]/30 rounded-full w-[320px] h-[320px] md:w-[460px] md:h-[460px] z-0"
          />

          {/* Circle Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-[#606C38] shadow-2xl z-10"
          >
            <img 
              src={animeImg} 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Open to Work Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-4 right-4 md:bottom-10 md:right-6 bg-[#DDA15E] text-[#283618] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center z-20 shadow-2xl border-4 border-[#283618]"
          >
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-center leading-tight">
              Open to<br/>Work
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;