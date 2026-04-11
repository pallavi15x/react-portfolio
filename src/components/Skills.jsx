import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>

      <div className="flex justify-center gap-10 flex-wrap text-6xl">
        <FaReact className="text-blue-400 hover:scale-110 transition" />
        <FaHtml5 className="text-orange-500 hover:scale-110 transition" />
        <FaCss3Alt className="text-blue-500 hover:scale-110 transition" />
        <FaJs className="text-yellow-400 hover:scale-110 transition" />
      </div>
    </section>
  );
}

export default Skills;