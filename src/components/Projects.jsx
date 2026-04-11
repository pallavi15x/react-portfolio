import { motion } from "framer-motion";

const projects = [
  {
    title: "Finance Tracker",
    desc: "A React app to track income and expenses with charts.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React and Tailwind.",
    link: "#",
  },
  {
    title: "Weather App",
    desc: "Fetches real-time weather using API.",
    link: "#",
  },
];

function Projects() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-6 rounded-xl shadow-lg border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">{project.desc}</p>

            <a
              href={project.link}
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;