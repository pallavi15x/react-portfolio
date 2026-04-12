import React, { useEffect } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  { title: "Finance Tracker", tech: "React / D3.JS", github: "https://github.com/pallavi15x/finance-tracker", live: "https://pallavi15x.github.io/finance-tracker" },
  { title: "Task Manager", tech: "Firebase", github: "https://github.com/pallavi15x/task-manager", live: "https://pallavi15x.github.io/task-manager" },
  { title: "Quiz Master", tech: "Javascript", github: "https://github.com/pallavi15x/quiz-app", live: "https://pallavi15x.github.io/quiz-app/" },
  { title: "Calculator App", tech: "Algorithm", github: "https://github.com/pallavi15x/CALCULATOR-APP", live: "https://pallavi15x.github.io/CALCULATOR-APP/" },
  { title: "Modern UI Project", tech: "Figma", github: "https://github.com/pallavi15x/MyProject", live: "https://pallavi15x.github.io/MyProject/" },
  { title: "Developer Portfolio", tech: "Motion", github: "https://github.com/pallavi15x/Portfolio", live: "https://pallavi15x.github.io/Portfolio/" },
];

function Projects() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("glass-card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="works" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-24 bg-[#283618]">
      {/* CSS for the Mouse Glow Effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-card::before {
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            rgba(221, 161, 94, 0.15),
            transparent 40%
          );
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0px;
          opacity: 0;
          transition: opacity 500ms;
          position: absolute;
          top: 0px;
          width: 100%;
          z-index: 3;
        }
        .glass-card:hover::before {
          opacity: 1;
        }
      `}} />

      <div className="flex flex-col mb-24">
        <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-[#FEFAE0] leading-none">
          WORKS<span className="text-[#DDA15E]">.</span>
        </h2>
        <p className="text-[#FEFAE0]/40 mt-6 max-w-md text-xs font-bold uppercase tracking-[0.3em]">
          // Selected Digital Exhibits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="glass-card p-10 h-[450px] flex flex-col justify-between group bg-[#606C38]/10 border border-[#606C38]/20 rounded-[40px] relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Background number - Behind content */}
            <span className="absolute top-10 right-10 text-[#FEFAE0]/5 font-black italic text-8xl group-hover:text-[#DDA15E]/10 transition-all pointer-events-none z-0">
              0{i+1}
            </span>

            <div className="relative z-10 space-y-4">
              <span className="text-[#DDA15E] font-mono text-[10px] uppercase tracking-[0.4em] font-black block">
                {p.tech}
              </span>
              <h3 className="text-4xl font-black uppercase text-[#FEFAE0] leading-tight max-w-[80%]">
                {p.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-6 relative z-10">
              <a 
                href={p.live} 
                target="_blank" 
                rel="noreferrer" 
                className="w-16 h-16 rounded-full border border-[#FEFAE0]/10 flex items-center justify-center text-[#FEFAE0] hover:bg-[#DDA15E] hover:border-[#DDA15E] hover:text-[#283618] transition-all duration-500 shadow-xl"
              >
                <FaArrowUpRightFromSquare size={20} />
              </a>
              
              <div className="h-[1px] flex-grow bg-[#606C38]/40"></div>
              
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FEFAE0]/30 hover:text-[#FEFAE0] transition-all"
              >
                <FaGithub size={18} className="group-hover/link:text-[#DDA15E]" />
                <span className="hidden sm:inline">Github</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;