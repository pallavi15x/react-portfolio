import { motion } from "framer-motion";

const projectData = [
  {
    title: "Finance Tracker",
    desc: "A sleek dashboard to track daily expenses and visualize savings with interactive charts.",
    tech: ["React", "Tailwind", "Chart.js"],
    github: "https://github.com/your-username",
    live: "https://your-demo-link.com",
  },
  {
    title: "Portfolio Website",
    desc: "A high-performance personal portfolio featuring glassmorphism and smooth scroll animations.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/your-username",
    live: "https://your-demo-link.com",
  },
  {
    title: "Weather App",
    desc: "Real-time weather forecasting tool using OpenWeather API with dynamic background changes.",
    tech: ["JavaScript", "API", "CSS3"],
    github: "https://github.com/your-username",
    live: "https://your-demo-link.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;