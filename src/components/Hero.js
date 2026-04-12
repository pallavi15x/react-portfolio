import React from 'react';
import { motion } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg'; 

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-[#283618] pt-20">
      
      {/* BACKGROUND TEXT - Optimized for Visibility */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute top-[20%] md:top-[25%] left-0 w-full z-0 pointer-events-none select-none flex flex-col items-center lg:items-start lg:pl-10"
      >
        <h2 className="text-6xl md:text-[180px] font-black uppercase tracking-tighter text-transparent leading-[0.85] text-center lg:text-left"
            style={{ WebkitTextStroke: "1px #DDA15E" }}>
          WEB <br className="md:hidden" /> DEVELOPER
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10 md:mt-0">
        
        {/* TEXT CONTENT */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h1 variants={itemVars} className="text-6xl md:text-[120px] font-black uppercase tracking-tighter text-[#FEFAE0] leading-none">
            PALLAVI<span className="text-[#DDA15E]">.</span>
          </motion.h1>
          
          <motion.div variants={itemVars} className="flex items-center justify-center lg:justify-start gap-4 mt-6">
            <div className="h-[1px] w-12 bg-[#DDA15E]"></div>
            <p className="text-[#FEFAE0]/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="mt-12 md:mt-10">
             <a href="#works" className="px-10 py-4 bg-[#DDA15E] text-[#283618] rounded-full font-black uppercase text-[10px] tracking-widest inline-block hover:scale-110 transition-transform active:scale-95 shadow-xl">
               See My Works
             </a>
          </motion.div>
        </motion.div>

        {/* IMAGE AREA */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[240px] h-[240px] md:w-[450px] md:h-[450px]"
          >
            {/* Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] border border-dashed border-[#DDA15E]/20 rounded-full"
            ></motion.div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#606C38] relative z-10 shadow-2xl">
              <img src={animeImg} alt="Profile" className="w-full h-full object-cover scale-110" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 md:bottom-8 md:right-8 bg-[#DDA15E] text-[#283618] w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center z-20 font-black text-[8px] md:text-[10px] uppercase text-center border-4 border-[#283618] shadow-xl"
            >
              Open to<br/>Work
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );

};


export default Hero;