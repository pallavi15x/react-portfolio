import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 1, link: 'home', title: 'Home', color: '#3B82F6' },
    { id: 2, link: 'about', title: 'About', color: '#EF4444' },
    { id: 3, link: 'skills', title: 'Skills', color: '#22C55E' },
    { id: 4, link: 'works', title: 'Works', color: '#A855F7' },
    { id: 5, link: 'contact', title: 'Contact', color: '#F59E0B' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    links.forEach((item) => {
      const section = document.getElementById(item.link);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-[9999] px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl">
          <span className="text-white font-black tracking-[0.5em] text-[10px] uppercase">
            PALLAVI
          </span>
        </div>

        <nav className="relative bg-black/40 backdrop-blur-3xl border border-white/5 p-1.5 rounded-full flex items-center shadow-2xl">
          <ul className="flex items-center relative">
            {links.map((item, index) => {
              const isActive = activeSection === item.link;
              const isHovered = hoveredIndex === index;
              
              return (
                <li 
                  key={item.id} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative z-10"
                >
                  <a href={`#${item.link}`} className="px-4 md:px-7 py-2.5 block">
                    <span 
                      style={{ color: isActive || isHovered ? item.color : 'rgba(255,255,255,0.4)' }}
                      className="uppercase text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300"
                    >
                      {item.title}
                    </span>
                    
                    <motion.div 
                      animate={{ 
                        scale: isActive ? 1 : 0,
                        backgroundColor: item.color,
                        boxShadow: isActive ? `0 0 10px ${item.color}` : "none"
                      }}
                      className="h-1 w-1 mx-auto mt-1 rounded-full"
                    />
                  </a>
                </li>
              );
            })}

            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute inset-y-0 bg-white/5 border border-white/10 rounded-full z-0 hidden md:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, left: hoveredIndex * 105, width: 105 }} // Adjusted for spacing
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </ul>
        </nav>

        <div className="w-20 hidden md:block"></div>


      </div>
    </header>
  );
};

export default Navbar;