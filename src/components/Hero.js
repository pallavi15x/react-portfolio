import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-8xl font-black mb-4">
          PALLAVI
        </motion.h1>
        <div className="text-xl md:text-3xl text-blue-400 font-light tracking-widest">
          <TypeAnimation sequence={['FRONTEND DEVELOPER', 1000, 'CREATIVE DESIGNER', 1000, 'REACT EXPERT', 1000]} repeat={Infinity} />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-10">
          <a href="#projects" className="bg-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">VIEW PROJECTS</a>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;