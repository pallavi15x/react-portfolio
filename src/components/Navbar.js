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
    <header className="fixed top-4 md:top-6 left-0 w-full z-[9999] px-2 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 px-3 md:px-5 py-2 rounded-xl shrink-0">
          <span className="text-white font-black tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-[10px] uppercase">
            PALLAVI
          </span>
        </div>

        <nav className="flex-1 flex justify-end md:justify-center overflow-hidden">
          <div className="bg-black/40 backdrop-blur-3xl border border-white/5 p-1 rounded-full flex items-center shadow-2xl overflow-x-auto no-scrollbar max-w-full">
            <ul className="flex items-center px-2">
              {links.map((item, index) => {
                const isActive = activeSection === item.link;
                const isHovered = hoveredIndex === index;
                
                return (
                  <li 
                    key={item.id} 
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="shrink-0"
                  >
                    <a href={`#${item.link}`} className="px-3 md:px-6 py-2 block">
                      <span 
                        style={{ color: isActive || isHovered ? item.color : 'rgba(255,255,255,0.4)' }}
                        className="uppercase text-[8px] md:text-[9px] font-bold tracking-[0.1em] md:tracking-[0.3em] transition-all duration-300 whitespace-nowrap"
                      >
                        {item.title}
                      </span>
                      
                      <motion.div 
                        animate={{ 
                          scale: isActive ? 1 : 0,
                          backgroundColor: item.color,
                        }}
                        className="h-1 w-1 mx-auto mt-0.5 rounded-full"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;