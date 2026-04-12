import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialFloating() {
  return (
    <div className="fixed left-8 bottom-0 z-50 hidden lg:flex flex-col items-center gap-8 after:content-[''] after:w-[1px] after:h-24 after:bg-[#606C38]">
      <a href="https://github.com/pallavi15x" target="_blank" rel="noreferrer" className="text-[#606C38] hover:text-[#FEFAE0] transition-all">
        <FaGithub size={22} />
      </a>
      <a href="https://linkedin.com/in/pallavi" target="_blank" rel="noreferrer" className="text-[#606C38] hover:text-[#FEFAE0] transition-all">
        <FaLinkedin size={22} />
      </a>
      <div className="[writing-mode:vertical-lr] text-[10px] font-mono tracking-[0.5em] text-[#606C38] mb-6 uppercase">
        Explore Connections
      </div>
    </div>
  );
}

export default SocialFloating;