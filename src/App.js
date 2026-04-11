import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <div className="mesh-bg" />
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />
      
      <footer className="py-10 text-center text-gray-500 border-t border-gray-900 bg-black/50">
        <p>© {new Date().getFullYear()} Pallavi | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;