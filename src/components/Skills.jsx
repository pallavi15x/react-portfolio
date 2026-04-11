import { Reveal } from "./Reveal";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaTerminal } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const techs = [
  { id: 1, src: <FaHtml5 className="text-orange-500" />, title: "HTML5" },
  { id: 2, src: <FaCss3Alt className="text-blue-500" />, title: "CSS3" },
  { id: 3, src: <FaJs className="text-yellow-500" />, title: "JavaScript" },
  { id: 4, src: <FaReact className="text-blue-400" />, title: "React" },
  { id: 5, src: <SiTailwindcss className="text-sky-400" />, title: "Tailwind" },
  { id: 6, src: <FaGithub className="text-white" />, title: "GitHub" },
  { id: 7, src: <FaTerminal className="text-green-500" />, title: "Command Line" },
  { id: 8, src: <SiFigma className="text-pink-500" />, title: "Figma Design" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-widest">My <span className="text-blue-500">Toolkit</span></h2>
            <p className="text-gray-500 mt-4">The technologies I'm using to build my projects</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map(({ id, src, title }) => (
            <Reveal key={id}>
              <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all text-center">
                <div className="text-5xl flex justify-center mb-4 group-hover:scale-110 transition-transform">{src}</div>
                <p className="font-bold text-gray-300 uppercase text-xs tracking-widest">{title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;