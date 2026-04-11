import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  const links = [
    { id: 1, child: <FaGithub size={25}/>, href: "https://github.com", label: "GitHub" },
    { id: 2, child: <FaLinkedin size={25}/>, href: "https://linkedin.com", label: "LinkedIn" },
    { id: 3, child: <FaEnvelope size={25}/>, href: "mailto:pallavi@example.com", label: "Email" },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      {links.map(({ id, child, href, label }) => (
        <a key={id} href={href} target="_blank" rel="noreferrer" 
           className="flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] duration-300 bg-gray-900/80 backdrop-blur-md border border-gray-800 text-white rounded-r-lg">
          {label} {child}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;