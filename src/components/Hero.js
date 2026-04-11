import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Pallavi</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg text-gray-300"
        >
          Frontend Developer | React Enthusiast 🚀
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          View My Work
        </motion.button>

      </div>
    </section>
  );
}

export default Hero;