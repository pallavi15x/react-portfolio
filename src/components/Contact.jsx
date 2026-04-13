import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowRight } from "react-icons/fa6";

function Contact() {
  const containerVars = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVars = {
    initial: { y: 30, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0f0a] relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#DDA15E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#606C38]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: EDITORIAL HEADING */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div variants={itemVars}>
              <h2 className="text-8xl md:text-9xl font-black uppercase tracking-tighter text-[#FEFAE0] leading-[0.85] mb-8">
                HAVE A<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #DDA15E" }}>VISION?</span><br />
                TALK<span className="text-[#DDA15E]">.</span>
              </h2>
              <p className="text-[#FEFAE0]/50 text-xl max-w-sm leading-relaxed font-medium">
                I'm currently available for freelance projects and full-time opportunities. Let's build something iconic.
              </p>
            </motion.div>

            <motion.div variants={itemVars} className="space-y-8">
              <div className="group flex flex-col gap-2">
                <span className="text-[#DDA15E] text-[10px] font-black uppercase tracking-[0.4em]">Email Me</span>
                <a href="mailto:PALLAVI@DEVELOPER.COM" className="text-[#FEFAE0] text-2xl font-bold tracking-tight hover:text-[#DDA15E] transition-colors flex items-center gap-3">
                 pallavik81254@.com <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              </div>


              <div className="flex items-center gap-4">
                {[
                  { icon: <FaLinkedin />, link: "https://linkedin.com/in/pallavi-kumari-9864b8380/" },
                  { icon: <FaGithub />, link: "https://github.com/pallavi15x" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href={social.link}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl bg-[#111611] border border-white/5 flex items-center justify-center text-[#FEFAE0]/40 hover:text-[#DDA15E] hover:border-[#DDA15E]/30 transition-all shadow-xl"
                  >
                    {React.cloneElement(social.icon, { size: 24 })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PREMIUM FORM (Integrated with Web3Forms) */}
          <motion.div 
            variants={itemVars}
            className="lg:col-span-7 bg-[#111611]/50 backdrop-blur-2xl border border-white/5 p-8 md:p-14 rounded-[48px] shadow-3xl"
          >
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-10"
            >
              {/* WEB3FORMS FUNCTIONAL INPUTS */}
              <input type="hidden" name="access_key" value="be4dcb53-1b55-4d1f-8d8f-7b1db32bf854" />
              <input type="hidden" name="to_name" value="Pallavi" />
              <input type="hidden" name="subject" value="New Portfolio Message" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-[#FEFAE0]/20 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#DDA15E] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Full Name
                  </label>
                </div>


                <div className="relative group">
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-[#FEFAE0]/20 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#DDA15E] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-4 text-[#FEFAE0]/20 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#DDA15E] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                  Your Project Details
                </label>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-20 bg-[#FEFAE0] text-black font-black uppercase tracking-[0.3em] text-xs rounded-3xl flex items-center justify-center gap-4 group overflow-hidden relative"
              >
                <span className="relative z-10">Establish Connection</span>
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center relative z-10 group-hover:bg-[#DDA15E] transition-colors">
                  <FaLocationArrow className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                {/* Button Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </motion.div>

      {/* FOOTER STRIP */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FEFAE0]">
          © 2026 PALLAVI • PORTFOLIO
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FEFAE0]">
          DESIGNED FOR THE FUTURE
        </span>
      </div>
    </section>
  );
}

export default Contact;