import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNav = () => setNav(!nav);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-[#283618]/50"
    >
      {/* LOGO */}
      <div className="text-[#FEFAE0] font-black text-2xl tracking-tighter z-[110]">
        PALLAVI<span className="text-[#DDA15E]">.</span>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FEFAE0]/70 hover:text-[#DDA15E] transition-all"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE TOGGLE BUTTON */}
      <div className="md:hidden text-[#FEFAE0] z-[110] cursor-pointer" onClick={handleNav}>
        {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {nav && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#283618] flex flex-col items-center justify-center z-[105]"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={handleNav}
                    className="text-4xl font-black text-[#FEFAE0] uppercase hover:text-[#DDA15E] transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* MOBILE SOCIAL LINKS - These will show on phone now! */}
            <div className="flex gap-8 mt-16 border-t border-[#FEFAE0]/10 pt-10">
              <a 
                href="https://github.com/pallavi15x" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 bg-[#606C38]/30 rounded-full text-[#DDA15E]"
              >
                <FaGithub size={25} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pallavi-kumari-9864b8380/" 
                target="_blank" 
                rel="noreferrer"
                className="p-4 bg-[#606C38]/30 rounded-full text-[#DDA15E]"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;