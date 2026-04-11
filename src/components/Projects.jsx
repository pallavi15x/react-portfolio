import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const projects = [
  { title: "Finance Tracker", tech: "React, Chart.js", desc: "Expense monitoring dashboard." },
  { title: "Task Manager", tech: "React, Redux", desc: "Drag & drop task organization." },
  { title: "Modern Quiz App", tech: "JavaScript, Tailwind", desc: "Interactive quiz with real-time scoring." },
  { title: "Glass Calculator", tech: "HTML, CSS, JS", desc: "Premium UI Neumorphic calculator." },
  { title: "Weather Live", tech: "OpenWeather API", desc: "Global weather tracking app." },
  { title: "Portfolio V2", tech: "React, Framer Motion", desc: "My interactive developer portfolio." },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal><h2 className="text-4xl font-bold mb-16 text-center">SELECTED <span className="text-blue-500">WORKS</span></h2></Reveal>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Reveal key={i}>
            <motion.div whileHover={{ y: -10 }} className="bg-gray-900/40 backdrop-blur-md p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all group">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400">{p.title}</h3>
              <p className="text-blue-500 text-sm mb-4 font-mono">{p.tech}</p>
              <p className="text-gray-400 mb-6">{p.desc}</p>
              <div className="flex justify-between">
                <a href="#" className="text-sm font-bold hover:underline">GITHUB</a>
                <a href="#" className="text-sm font-bold text-blue-500 hover:underline">LIVE DEMO</a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export default Projects;