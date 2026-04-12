import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar'; // 1. Import the new sidebar

function App() {
  return (
    /* 2. Added 'relative' to ensure the sidebar anchors correctly */
    <div className="bg-[#283618] min-h-screen relative">
      
      <Navbar />
      
      {/* 3. Add the SocialSidebar here so it stays on top of everything */}
      <SocialSidebar /> 
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;