import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black text-white px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-blue-500 font-mono tracking-[0.4em] text-[10px] mb-6 uppercase">
            // The Journey
          </h2>
          <p className="text-2xl md:text-5xl font-light leading-tight tracking-tight text-gray-300">
            I am a <span className="text-white font-medium italic">Computer Science student</span> specializing in 
            <span className="text-blue-500"> modern web interfaces</span>. 
            I focus on creating clean, interactive experiences that solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
          <div className="flex flex-col">
            <h4 className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Background</h4>
            <p className="text-xl font-bold tracking-tight">B.Tech Student</p>
            <p className="text-gray-500 text-sm mt-1 italic">Class of 2026</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Focus</h4>
            <p className="text-xl font-bold tracking-tight">Frontend Dev</p>
            <p className="text-gray-500 text-sm mt-1 italic">React & Framer Motion</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Goal</h4>
            <p className="text-xl font-bold tracking-tight">UI Innovation</p>
            <p className="text-gray-500 text-sm mt-1 italic">Modern Interfaces</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;