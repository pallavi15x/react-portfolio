import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  const links = [
    { id: 1, child: <FaGithub size={18}/>, href: "https://github.com" },
    { id: 2, child: <FaLinkedin size={18}/>, href: "https://linkedin.com" },
    { id: 3, child: <FaEnvelope size={18}/>, href: "mailto:hello@pallavi.dev" },
  ];

  return (
    <div className="fixed bottom-12 left-8 flex flex-col gap-6 z-50">
      <div className="w-[1px] h-20 bg-gradient-to-t from-blue-500 to-transparent mx-auto" />
      {links.map(({ id, child, href }) => (
        <a key={id} href={href} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
          {child}
        </a>
      ))}
    </div>
  );
}
export default SocialLinks;