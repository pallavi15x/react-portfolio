import React from 'react';

const Navbar = () => {
  const links = [
    { id: 1, link: 'home', title: 'Home' },
    { id: 2, link: 'about', title: 'About' },
    { id: 3, link: 'skills', title: 'Skills' },
    { id: 4, link: 'works', title: 'Works' },
    { id: 5, link: 'contact', title: 'Contact' },
  ];

  return (
    <nav className="fixed w-full h-20 z-[9999] bg-[#0a0f0a]/80 backdrop-blur-md px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-center md:justify-between items-center py-2">
        
        {/* LOGO - Centered on mobile, left-aligned on desktop */}
        <div className="text-[#FEFAE0] font-black tracking-tighter text-xl md:text-2xl mb-2 md:mb-0">
          PALLAVI<span className="text-[#DDA15E]">.</span>
        </div>

        {/* LINKS - Now forced to show on mobile (Removed 'hidden' class) */}
        <ul className="flex flex-row gap-4 sm:gap-6 md:gap-8">
          {links.map(({ id, link, title }) => (
            <li key={id}>
              <a 
                href={`#${link}`} 
                className="text-[#FEFAE0]/70 uppercase text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.1em] sm:tracking-widest hover:text-[#DDA15E] transition-colors whitespace-nowrap"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT BUTTON - Only shows on larger screens to save space */}
        <div className="hidden lg:block">
           <a href="#contact" className="bg-[#DDA15E] text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;