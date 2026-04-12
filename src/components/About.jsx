import React from 'react';
import { motion } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#283618] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Animated Image Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#DDA15E] rounded-[40px] z-0 opacity-20" />
          <div className="relative z-10 w-full h-[500px] overflow-hidden rounded-[40px] border border-[#FEFAE0]/10 shadow-2xl bg-[#283618]">
            <img src={animeImg} className="w-full h-full object-cover" alt="About" />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-[#FEFAE0] mb-8">
            The Vision<span className="text-[#DDA15E]">.</span>
          </h2>
          
          <p className="text-[#FEFAE0]/70 text-lg leading-relaxed mb-8">
            I am a developer driven by the intersection of <span className="text-[#DDA15E] font-bold">Nature & Technology</span>. 
            By blending the organic <span className="text-[#DDA15E] font-bold uppercase">Pine & Earth</span> palette 
            with modern high-performance code, I create digital spaces that feel both grounded and cutting-edge.
          </p>

          {/* New Content: Core Philosophy Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="p-6 border border-[#FEFAE0]/10 rounded-2xl bg-[#606C38]/20">
              <h3 className="text-[#DDA15E] font-bold uppercase tracking-widest text-xs mb-3">01. Aesthetic</h3>
              <p className="text-[#FEFAE0]/50 text-sm italic">Clean lines, organic textures, and a focus on visual harmony.</p>
            </div>
            
            <div className="p-6 border border-[#FEFAE0]/10 rounded-2xl bg-[#606C38]/20">
              <h3 className="text-[#DDA15E] font-bold uppercase tracking-widest text-xs mb-3">02. Performance</h3>
              <p className="text-[#FEFAE0]/50 text-sm italic">Fast loading times and smooth motion for a premium user feel.</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#DDA15E]"></div>
            <span className="text-[#FEFAE0]/30 uppercase text-[10px] tracking-[0.5em] font-bold">
              Driven by Curiosity
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;