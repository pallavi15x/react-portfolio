import React from 'react';
import { motion } from 'framer-motion';
import animeImg from '../assets/Anime.jpeg'; // Ensure the path to your image is correct

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#283618] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Decorative Box with Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="w-full h-[600px] border border-[#DDA15E]/20 rounded-[40px] relative overflow-hidden bg-[#606C38]/5">
            {/* The Image - Absolute positioned to fill the box or act as a focal point */}
            <img 
              src={animeImg} 
              alt="About Me" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Gradient to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#283618] via-transparent to-transparent"></div>

            <span className="text-[#DDA15E]/5 text-[300px] font-black absolute -bottom-20 -left-10 select-none z-0">
              A
            </span>

            <div className="p-12 absolute bottom-0 left-0 w-full z-10">
              <h3 className="text-[#FEFAE0] text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
                Based in <br/><span className="text-[#DDA15E]">India</span>
              </h3>
              <div className="h-[1px] w-12 bg-[#DDA15E] my-4"></div>
              <p className="text-[#FEFAE0]/40 text-[10px] uppercase tracking-[0.5em] font-bold">
                Available for Remote Work
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content */}
        <div className="space-y-10">
          <Reveal>
            <p className="text-[#DDA15E] font-black uppercase tracking-[0.5em] text-[10px] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#DDA15E]"></span> 01. Who am I?
            </p>
            <h2 className="text-6xl md:text-8xl font-black text-[#FEFAE0] uppercase leading-[0.9] mb-8 tracking-tighter">
              Turning code <br/>into <span className="text-[#DDA15E]">Art.</span>
            </h2>
          </Reveal>
          
          <Reveal>
            <div className="space-y-6 text-[#FEFAE0]/70 text-lg leading-relaxed font-medium max-w-xl">
              <p>
                I am <span className="text-[#FEFAE0] font-bold underline decoration-[#DDA15E] underline-offset-4">Pallavi</span>, 
                a passionate Full Stack Developer dedicated to building digital experiences that are as functional as they are beautiful.
              </p>
              <p>
                My journey evolved into a deep love for creating clean, optimized code and interactive user interfaces. 
                I specialize in the <span className="text-[#FEFAE0]">MERN stack</span> and modern CSS frameworks like Tailwind.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-12">
               <div className="group">
                 <h4 className="text-5xl font-black text-[#DDA15E] group-hover:scale-110 transition-transform cursor-default">10+</h4>
                 <p className="text-[#FEFAE0]/40 text-[10px] uppercase font-bold tracking-widest mt-2">Projects Done</p>
               </div>
               <div className="w-[1px] h-16 bg-[#FEFAE0]/10 hidden sm:block"></div>
               <div className="group">
                 <h4 className="text-5xl font-black text-[#FEFAE0] group-hover:text-[#DDA15E] transition-colors cursor-default">2026</h4>
                 <p className="text-[#FEFAE0]/40 text-[10px] uppercase font-bold tracking-widest mt-2">Current Goal</p>
               </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
export default About;