import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 'Intermediate' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Basic' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Expert' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Expert' },
    { name: 'GitHub', icon: <FaGithub />, level: 'Advanced' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#283618]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#DDA15E] font-bold uppercase tracking-[0.5em] text-[10px] mb-2">02. My Arsenal</p>
          <h2 className="text-5xl md:text-7xl font-black text-[#FEFAE0] uppercase">Tech Stack<span className="text-[#DDA15E]">.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, backgroundColor: "rgba(221, 161, 94, 0.1)" }}
              className="p-8 border border-[#FEFAE0]/10 rounded-2xl flex flex-col items-center justify-center transition-all group"
            >
              <div className="text-4xl text-[#FEFAE0]/50 group-hover:text-[#DDA15E] transition-colors mb-4">
                {skill.icon}
              </div>
              <h3 className="text-[#FEFAE0] font-bold uppercase tracking-widest text-[10px]">
                {skill.name}
              </h3>
              <p className="text-[#DDA15E] text-[8px] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;