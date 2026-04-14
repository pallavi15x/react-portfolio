import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [hoverRect, setHoverRect] = useState(null);
  const navRef = useRef(null);

  const links = [
    { id: 1, link: 'home', title: 'Home', color: '#3B82F6' },
    { id: 2, link: 'about', title: 'About', color: '#EF4444' },
    { id: 3, link: 'skills', title: 'Skills', color: '#22C55E' },
    { id: 4, link: 'works', title: 'Works', color: '#A855F7' },
    { id: 5, link: 'contact', title: 'Contact', color: '#F59E0B' },
  ];

  const handleMouseEnter = (index, e) => {
    setHoveredIndex(index);
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    setHoverRect({
      width: rect.width,
      left: rect.left - navRect.left,
    });
  };

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
    <header className="fixed top-4 md:top-6 left-0 w-full z-[9999] px-3 md:px-10 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shrink-0">
          <span className="text-white font-black tracking-[0.3em] text-[9px] md:text-[10px] uppercase">
            PALLAVI
          </span>
        </div>

        <nav className="flex-1 flex justify-center ml-2 overflow-hidden">
          <div 
            ref={navRef}
            className="relative bg-black/40 backdrop-blur-3xl border border-white/10 p-1 rounded-full flex items-center shadow-2xl no-scrollbar overflow-x-auto"
          >
            <AnimatePresence>
              {hoveredIndex !== null && hoverRect && (
                <motion.div 
                  layoutId="spotlight"
                  initial={false}
                  animate={{ 
                    left: hoverRect.left,
                    width: hoverRect.width,
                    opacity: 1 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  className="absolute inset-y-1 bg-white/10 border border-white/10 rounded-full z-0 blur-[1px]"
                />
              )}
            </AnimatePresence>

            <ul className="flex items-center relative z-10">
              {links.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const isActive = activeSection === item.link && hoveredIndex === null;
                const shouldColor = isHovered || isActive;

                return (
                  <li 
                    key={item.id} 
                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="shrink-0"
                  >
                    <a href={`#${item.link}`} className="px-3 sm:px-4 md:px-7 py-2.5 block relative">
                      <motion.span 
                        animate={{ 
                          color: shouldColor ? item.color : 'rgba(255,255,255,0.3)',
                          scale: isHovered ? 1.05 : 1
                        }}
                        className="uppercase text-[7px] sm:text-[8px] md:text-[9px] font-black tracking-[0.1em] md:tracking-[0.3em] whitespace-nowrap block"
                      >
                        {item.title}
                      </motion.span>
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