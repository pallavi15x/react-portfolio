import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma, FaFire } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JS", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Firebase", icon: <FaFire />, color: "#FFCA28" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Github", icon: <FaGithub />, color: "#FEFAE0" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-[#FEFAE0]">
            Toolkit<span className="text-[#DDA15E]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-10 flex flex-col items-center group">
              <div 
                className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FEFAE0]/40 group-hover:text-[#FEFAE0]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;