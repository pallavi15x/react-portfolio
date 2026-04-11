import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
      <div className="text-white font-black text-xl tracking-tighter">
        PORTFOLIO<span className="text-blue-500">.</span>
      </div>
      
      <div className="flex gap-6 md:gap-10">
        {["about", "projects"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;