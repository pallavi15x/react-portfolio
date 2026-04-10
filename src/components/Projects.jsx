import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Finance Tracker</h3>
          <p className="text-gray-400 mt-2">Track income & expenses.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-400 mt-2">React + Tailwind project.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Todo App</h3>
          <p className="text-gray-400 mt-2">Manage daily tasks.</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;