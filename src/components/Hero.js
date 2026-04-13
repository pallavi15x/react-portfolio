import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaArrowDown, FaCode, FaRocket, FaGlobe } from 'react-icons/fa6';
import animeImg from '../assets/Anime.jpeg'; 

const Hero = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);

  // --- 1. 3D PERSPECTIVE MOUSE ANIMATION ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f0a] pt-20 px-6 cursor-default"
    >
      
      {/* BACKGROUND ANIMATED MESH */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#DDA15E] rounded-full blur-[120px]"
        />
      </div>

      {/* CONTINUOUS MARQUEE BACKGROUND TEXT */}
      <div className="absolute top-1/4 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-[20vw] font-black uppercase"
        >
          <span className="mr-20">FullStack Developer</span>
          <span className="mr-20">FullStack Developer</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#DDA15E]/10 border border-[#DDA15E]/20">
            <motion.div 
              animate={{ scale: [1, 1.5, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-2 w-2 rounded-full bg-[#DDA15E]" 
            />
            <span className="text-[#DDA15E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Evolution in Progress</span>
          </motion.div>

          <motion.h1 variants={itemVars} style={{ y: yText }} className="text-8xl md:text-[150px] font-black uppercase tracking-tighter text-[#FEFAE0] leading-[0.8]">
            PALLAVI<span className="text-[#DDA15E] animate-pulse">.</span>
          </motion.h1>
          
          <motion.p variants={itemVars} className="text-[#FEFAE0]/60 text-lg md:text-xl max-w-xl leading-relaxed italic">
            "Merging <span className="text-[#FEFAE0] not-italic font-bold">aesthetic minimalism</span> with brute-force performance."
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#works" 
              className="group relative px-12 py-6 bg-[#FEFAE0] text-[#0a0f0a] rounded-full font-black uppercase text-xs tracking-widest overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div 
                className="absolute inset-0 bg-[#DDA15E]"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <a href="#contact" className="group text-[#FEFAE0] font-black uppercase text-xs tracking-widest flex items-center gap-3">
              Contact <FaArrowDown className="group-hover:translate-y-2 transition-transform duration-300 text-[#DDA15E]" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT: THE 3D INTERACTIVE HUB */}
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[320px] h-[400px] md:w-[450px] md:h-[550px]"
          >
            {/* Trapezoid Image Frame */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-[#1a2410] border-2 border-[#DDA15E]/30 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <img 
                src={animeImg} 
                alt="Profile" 
                className="w-full h-full object-cover transition-all duration-1000 scale-110" 
                // COLOR FIX: Removed grayscale-[0.5] and hover:grayscale-0 classes
              />
            </motion.div>

            {/* FLOATING 3D CARDS */}
            <motion.div 
              style={{ translateZ: 100 }}
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-12 p-6 bg-[#111611]/90 backdrop-blur-2xl border border-[#DDA15E]/30 rounded-3xl z-20 shadow-2xl"
            >
              <FaCode className="text-[#DDA15E] mb-2 text-2xl" />
              <div className="text-[#FEFAE0] font-black text-3xl leading-none">10+</div>
              <div className="text-[#DDA15E] text-[9px] uppercase font-bold tracking-[0.2em] mt-1">Projects</div>
            </motion.div>

            <motion.div 
              style={{ translateZ: 150 }}
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 -left-16 p-6 bg-[#111611]/90 backdrop-blur-2xl border border-[#FEFAE0]/10 rounded-3xl z-20 shadow-2xl"
            >
              <FaGlobe className="text-[#DDA15E] mb-2 text-2xl" />
              <div className="text-[#FEFAE0] font-black text-xl leading-none">Remote</div>
              <div className="text-[#FEFAE0]/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-1">Worldwide</div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute inset-0 bg-[#DDA15E]/20 blur-[100px] -z-10 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

      </div>

      {/* FOOTER SCROLL DECOR */}
      <div className="absolute bottom-10 w-full flex justify-center opacity-20">
        <div className="h-16 w-[1px] bg-gradient-to-b from-[#DDA15E] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;