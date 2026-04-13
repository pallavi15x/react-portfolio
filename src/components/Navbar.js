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
    <nav className="fixed w-full h-24 z-[9999] bg-[#0a0f0a]/90 backdrop-blur-xl border-b border-white/5 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* LOGO - No dot, no AI look. Just clean, spaced typography */}
        <div className="group cursor-pointer">
          <span className="text-[#FEFAE0] font-black tracking-[0.3em] text-2xl uppercase transition-all duration-500 group-hover:tracking-[0.5em] group-hover:text-[#DDA15E]">
            PALLAVI
          </span>
        </div>

        {/* NAVIGATION - Minimalist and widely spaced */}
        <ul className="flex flex-row items-center gap-8 sm:gap-14">
          {links.map(({ id, link, title }) => (
            <li key={id} className="relative group">
              <a 
                href={`#${link}`} 
                className="text-[#FEFAE0]/40 uppercase text-[10px] sm:text-[11px] font-bold tracking-[0.3em] group-hover:text-[#FEFAE0] transition-all duration-300"
              >
                {title}
              </a>
              {/* Subtle underline that appears on hover */}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#DDA15E] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* CTA - Minimalist Button */}
        <div className="hidden lg:block">
           <a 
             href="#contact" 
             className="text-[#DDA15E] text-[10px] font-black uppercase tracking-[0.4em] hover:text-[#FEFAE0] transition-colors duration-300"
           >
             Let's Talk
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;