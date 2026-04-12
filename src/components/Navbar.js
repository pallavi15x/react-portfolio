import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Make sure react-icons is installed

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // This array controls what shows up in your menu
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm bg-[#283618]/30"
    >
      {/* LOGO */}
      <div className="text-[#FEFAE0] font-black text-2xl uppercase tracking-tighter">
        PALLAVI<span className="text-[#DDA15E]">.</span>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <a 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FEFAE0]/70 hover:text-[#DDA15E] transition-all duration-300"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* MOBILE HAMBURGER ICON */}
      <div className="md:hidden text-[#FEFAE0] cursor-pointer" onClick={() => setNav(!nav)}>
        {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`${
        nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 fixed inset-0 bg-[#283618] flex flex-col items-center justify-center z-[90]`}>
        <ul className="flex flex-col gap-8 text-center">
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setNav(false)}>
              <a 
                href={link.href} 
                className="text-4xl font-black uppercase tracking-tighter text-[#FEFAE0] hover:text-[#DDA15E]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;