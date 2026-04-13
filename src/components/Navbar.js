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
    // Fixed height h-24 gives more room so it doesn't look "wrong"
    <nav className="fixed w-full h-24 z-[9999] bg-[#0a0f0a]/95 backdrop-blur-xl border-b border-white/10 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        
        {/* LOGO - Now has its own space */}
        <div className="text-[#FEFAE0] font-black tracking-tighter text-2xl">
          PALLAVI<span className="text-[#DDA15E]">.</span>
        </div>

        {/* LINKS - Spaced out properly so they don't overlap */}
        <ul className="flex flex-row items-center gap-4 sm:gap-8">
          {links.map(({ id, link, title }) => (
            <li key={id}>
              <a 
                href={`#${link}`} 
                className="text-[#FEFAE0]/50 uppercase text-[10px] sm:text-xs font-bold tracking-[0.2em] hover:text-[#DDA15E] hover:scale-110 transition-all inline-block"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* HIRE ME BUTTON - Hidden on small mobile to keep it clean */}
        <div className="hidden sm:block">
           <a 
             href="#contact" 
             className="bg-[#DDA15E] text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#FEFAE0] transition-all"
           >
             Hire Me
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;