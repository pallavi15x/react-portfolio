import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaLeaf 
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostman, SiFramer } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Javascript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "MongoDB", icon: <FaLeaf />, color: "#47A248" },
    { name: "Express", icon: <SiExpress />, color: "#FEFAE0" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#E91E63" },
    { name: "Github", icon: <FaGithub />, color: "#FEFAE0" },
  ];

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0f0a] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#DDA15E]" />
            <span className="text-[#DDA15E] font-bold uppercase tracking-[0.4em] text-[10px]">Technical Stack</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#FEFAE0] uppercase tracking-tighter"
          >
            Capabilities<span className="text-[#DDA15E]"></span>
          </motion.h2>
        </div>

        {/* UNIFORM PROFESSIONAL GRID */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative h-32 flex items-center p-8 bg-[#1a2410]/20 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#DDA15E]/50 hover:bg-[#1a2410]/40"
            >
              {/* Subtle background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
              />

              <div className="flex items-center gap-6 z-10 w-full">
                {/* Icon with clean transition */}
                <div 
                  className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(221,161,94,0.3)]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[#FEFAE0] font-bold text-lg uppercase tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="text-[#DDA15E] text-[9px] font-black tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    PROFICIENT
                  </span>
                </div>
              </div>

              {/* Minimal corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#DDA15E] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4"
        >
          <p className="text-[#FEFAE0]/30 text-[10px] uppercase tracking-widest font-medium">
            © 2026 Engineering Portfolio
          </p>
          <div className="flex gap-4">
            {["Scalability", "Clean Code", "Performance"].map((item) => (
              <span key={item} className="text-[#DDA15E]/40 text-[9px] font-bold uppercase tracking-widest border border-[#DDA15E]/20 px-3 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;