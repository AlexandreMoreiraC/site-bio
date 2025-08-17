import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sobre Nós
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Desenvolvemos sites e experiências digitais com foco em inovação e tecnologia. 
        Cada projeto é pensado para impressionar e converter, elevando sua marca ao próximo nível.
      </motion.p>
    </motion.section>
  );
}

export default About;
