import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} Pallavi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;