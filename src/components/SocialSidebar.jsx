import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed left-6 md:left-10 bottom-0 z-[100] hidden sm:flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-6 mb-4">
        <a 
          href="https://github.com/pallavi15x" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#FEFAE0]/50 hover:text-[#DDA15E] transition-all duration-300 hover:-translate-y-1"
        >
          <FaGithub size={22} />
        </a>
        <a 
          href="https://www.linkedin.com/in/pallavi-kumari-9864b8380/" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#FEFAE0]/50 hover:text-[#DDA15E] transition-all duration-300 hover:-translate-y-1"
        >
          <FaLinkedinIn size={22} />
        </a>
      </div>
      
      <div className="w-[1px] h-32 bg-gradient-to-t from-[#DDA15E] to-transparent"></div>
    </motion.div>
  );
};

export default SocialSidebar;