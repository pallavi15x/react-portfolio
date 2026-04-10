import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/70 text-white shadow-lg">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition">
          Pallavi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          
          <a href="#home" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#projects" className="relative group">
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 bg-black/90 backdrop-blur-md transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;