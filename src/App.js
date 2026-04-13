import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';

function App() {
  return (
    /* FIXED: Background color changed to #0a0f0a to match Navbar and Hero */
    <div className="bg-[#0a0f0a] min-h-screen relative selection:bg-[#DDA15E] selection:text-black overflow-x-hidden">
      
      <Navbar />
      <SocialSidebar /> 
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* This Footer is what shows at the bottom. We need to fix the logo inside it. */}
      <Footer />
    </div>
  );
}

export default App;