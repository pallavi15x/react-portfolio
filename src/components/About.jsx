import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-6 text-center">
      
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        I am a passionate frontend developer who loves building modern and responsive websites using React and Tailwind CSS.
      </p>

      <div className="flex justify-center gap-6 text-4xl">
        <FaReact className="text-blue-400" />
        <FaHtml5 className="text-orange-500" />
        <FaCss3Alt className="text-blue-500" />
        <FaJs className="text-yellow-400" />
      </div>

    </section>
  );
}

export default About;