import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 1, link: 'home', title: 'Home', color: '#00F0FF' },    
    { id: 2, link: 'about', title: 'About', color: '#FF007A' },   
    { id: 3, link: 'skills', title: 'Skills', color: '#00FF94' },  
    { id: 4, link: 'works', title: 'Works', color: '#8B5CF6' },   
    { id: 5, link: 'contact', title: 'Contact', color: '#FACC15' }, 
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.6 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    links.forEach((item) => {
      const section = document.getElementById(item.link);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  
  return (
    <header className="fixed top-8 left-0 w-full z-[9999] px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        
        <motion.div 
          whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-7 py-3 rounded-full cursor-pointer relative overflow-hidden group"
        >
          <span className="text-white font-black tracking-[0.7em] text-xs uppercase relative z-10 transition-transform duration-500 group-hover:scale-110 block">
            PALLAVI
          </span>

          <motion.div 
            animate={{ x: [-100, 100], opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
          />
        </motion.div>

        <nav className="relative bg-black/40 backdrop-blur-3xl border border-white/5 p-2 rounded-full hidden lg:flex items-center">
          <ul className="flex items-center relative">
            {links.map((item, index) => {
              const isActive = activeSection === item.link;
              const isHovered = hoveredIndex === index;
              const currentColor = (isActive || isHovered) ? item.color : 'rgba(255,255,255,0.2)';

              return (
                <li 
                  key={item.id} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative z-10"
                >
                  <a 
                    href={`#${item.link}`} 
                    className="px-8 py-3 flex flex-col items-center justify-center min-w-[120px] transition-all"
                  >
                    <span 
                      style={{ 
                        color: currentColor,
                        textShadow: isActive ? `0 0 20px ${item.color}` : 'none'
                      }}
                      className="uppercase text-[9px] font-black tracking-[0.4em] transition-all duration-500"
                    >
                      {item.title}
                    </span>
                    
                    <motion.div 
                      initial={false}
                      animate={{ 
                        width: (isActive || isHovered) ? "30px" : "0px",
                        backgroundColor: item.color,
                        boxShadow: (isActive || isHovered) ? `0 0 15px ${item.color}` : "none"
                      }}
                      className="h-[3px] mt-2 rounded-full"
                    />
                  </a>
                </li>
              );
            })}

            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div 
                  layoutId="unique-pill"
                  className="absolute inset-y-0 bg-white/[0.05] border border-white/10 rounded-full z-0 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, left: hoveredIndex * 120, width: 120 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </ul>
        </nav>

        <div className="w-10 hidden lg:block"></div>
      </div>
    </header>
  );
};

export default Navbar;