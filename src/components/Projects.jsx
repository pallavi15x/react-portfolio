import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  { 
    title: "Finance Tracker", 
    tech: "React", 
    category: "Web",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format", 
    github: "https://github.com/pallavi15x/finance-tracker", 
    live: "https://pallavi15x.github.io/finance-tracker" 
  },
  { 
    title: "Task Manager", 
    tech: "Firebase", 
    category: "App",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format",
    github: "https://github.com/pallavi15x/task-manager", 
    live: "https://pallavi15x.github.io/task-manager" 
  },
  { 
    title: "Quiz Master", 
    tech: "Javascript", 
    category: "Web",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format",
    github: "https://github.com/pallavi15x/quiz-app", 
    live: "https://pallavi15x.github.io/quiz-app/" 
  },
  { 
    title: "Calculator App", 
    tech: "Algorithms", 
    category: "App",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/da709b189684199.65af65134cbe2.jpg",
    github: "https://github.com/pallavi15x/CALCULATOR-APP", 
    live: "https://pallavi15x.github.io/CALCULATOR-APP/" 
  },
  { 
    title: "Modern UI Project", 
    tech: "Figma", 
    category: "Design",
    img: "https://img.freepik.com/premium-photo/cloud-services-business-people-touch-laptop-user-interface-with-technology-concept-isometric-illustration-background_551826-7716.jpg",
    github: "https://github.com/pallavi15x/MyProject", 
    live: "https://pallavi15x.github.io/MyProject/" 
  },
  { 
    title: "Developer Portfolio", 
    tech: "Motion", 
    category: "Design",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format",
    github: "https://github.com/pallavi15x/Portfolio", 
    live: "https://pallavi15x.github.io/Portfolio/" 
  },
];

const categories = ["All", "Web", "App", "Design"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => 
    filter === "All" ? true : p.category === filter
  );

  return (
    <section id="works" className="py-32 px-6 bg-[#0a0f0a] relative overflow-hidden">
      
      <div className="absolute top-20 -left-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black leading-none">CREATIONS</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#DDA15E] font-black uppercase tracking-[0.5em] text-[10px] mb-4"
            >
              03. Selected Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black text-[#FEFAE0] uppercase tracking-tighter leading-none"
            >
              Projects<span className="text-[#DDA15E]"></span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat 
                  ? "bg-[#DDA15E] border-[#DDA15E] text-[#0a0f0a]" 
                  : "bg-transparent border-[#FEFAE0]/10 text-[#FEFAE0]/40 hover:border-[#FEFAE0]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[500px] rounded-[32px] overflow-hidden bg-[#111611] border border-white/5"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={p.img} 
                    alt={p.title}
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/60 to-transparent" />
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#DDA15E] font-mono text-xs">
                      0{i + 1}
                    </span>
                    <div className="flex gap-3">
                      <a href={p.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FEFAE0] hover:bg-[#DDA15E] hover:text-black transition-all">
                        <FaGithub />
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-[1px] w-8 bg-[#DDA15E]" />
                      <span className="text-[#DDA15E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                        {p.tech}
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-[#FEFAE0] uppercase tracking-tight mb-6">
                      {p.title}
                    </h3>
                    
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#FEFAE0] text-black rounded-full font-black uppercase text-[10px] tracking-widest group-hover:bg-[#DDA15E] transition-colors"
                    >
                      View Project <FaArrowUpRightFromSquare size={12} />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#DDA15E]/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DDA15E]/20 to-transparent" />
    </section>
  );
}

export default Projects;