import React from 'react';
import { motion } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg'; 

const About = () => {
  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="about" className="relative min-h-screen bg-[#283618] flex items-center justify-center py-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: ORGANIC CIRCULAR PORTAL */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Animated Glow behind the circle */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-72 h-72 bg-[#DDA15E]/20 blur-[80px] rounded-full" 
          />

          {/* THE IMAGE: Organic Morphing Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10 group overflow-hidden border-2 border-[#DDA15E]/30 shadow-2xl"
            style={{ 
              // This creates the "cyclic/blob" shape that isn't a boring perfect circle
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" 
            }}
          >
            <motion.img 
              whileHover={{ scale: 1.1 }}
              src={animeImg} 
              alt="About" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Soft Overlay Light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#283618]/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Element: Rotating Text Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] border border-dashed border-[#FEFAE0]/10 rounded-full pointer-events-none"
          />
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-4">
            <motion.div variants={itemVars} className="flex items-center gap-4">
               <div className="w-10 h-[1px] bg-[#DDA15E]" />
               <p className="text-[#DDA15E] font-black uppercase tracking-[0.5em] text-[10px]">The Developer</p>
            </motion.div>
            
            <motion.h2 variants={itemVars} className="text-7xl md:text-9xl font-black text-[#FEFAE0] leading-[0.85] uppercase tracking-tighter">
              BORN TO <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #DDA15E" }}>CREATE.</span>
            </motion.h2>
          </div>

          <motion.div variants={itemVars} className="space-y-6 max-w-xl">
            <p className="text-[#FEFAE0] text-xl md:text-2xl font-medium leading-snug">
              I am <span className="text-[#DDA15E] italic">Pallavi</span>, a full-stack architect turning complex logic into seamless human experiences.
            </p>
            
            <p className="text-[#FEFAE0]/50 text-base md:text-lg leading-relaxed border-l-2 border-[#DDA15E]/30 pl-6 italic">
              Based in India, I bridge the gap between heavy performance and aesthetic tranquility. Every line of code I write is a step toward a cleaner digital world.
            </p>
          </motion.div>

          {/* Skill Tags */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-3">
             {["React", "Node", "Design", "Logic"].map((tag) => (
               <span key={tag} className="px-4 py-1 border border-[#FEFAE0]/20 rounded-full text-[#FEFAE0]/40 text-[10px] uppercase font-bold tracking-widest hover:text-[#DDA15E] hover:border-[#DDA15E] transition-colors cursor-default">
                 {tag}
               </span>
             ))}
          </motion.div>

          <motion.div variants={itemVars} className="pt-4">
            <a href="#contact" className="group flex items-center gap-6">
               <div className="w-12 h-12 rounded-full border border-[#DDA15E] flex items-center justify-center text-[#DDA15E] group-hover:bg-[#DDA15E] group-hover:text-[#283618] transition-all duration-500">
                 →
               </div>
               <span className="text-[#FEFAE0] font-black uppercase text-[11px] tracking-[0.3em] group-hover:text-[#DDA15E] transition-colors">Connect with me</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;