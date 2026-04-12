import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className={`fixed bottom-12 right-8 p-5 glass rounded-full transition-all duration-500 z-50 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <FaArrowUp size={14} className="text-blue-500" />
    </button>
  );
}
export default ScrollToTop;