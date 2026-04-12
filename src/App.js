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
    /* The selection: classes make your text highlights gold instead of blue */
    <div className="bg-[#283618] min-h-screen relative selection:bg-[#DDA15E] selection:text-[#283618] overflow-x-hidden">
      
      <Navbar />
      <SocialSidebar /> 
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;