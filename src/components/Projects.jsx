import { motion } from "framer-motion";

const projects = [
  {
    title: "Finance Tracker",
    desc: "Track income & expenses with charts",
    github: "https://github.com/your-username/finance-tracker",
    live: "https://your-live-link.com"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio using React & Tailwind",
    github: "https://github.com/your-username/react-portfolio",
    live: "#"
  },
  {
    title: "Todo App",
    desc: "Manage tasks with local storage",
    github: "https://github.com/your-username/todo-app",
    live: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 px-6 text-center pt-24">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>

            <div className="flex justify-center gap-4 mt-4">
              <a href={p.github} target="_blank" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                GitHub
              </a>
              <a href={p.live} target="_blank" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;