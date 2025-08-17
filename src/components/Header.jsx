import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/src/assets/logo.png"
        alt="Mars Websites"
        className="profile-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 120 }}
      />

      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Mars Websites
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Transformando ideias em experiências digitais futuristas
      </motion.p>
    </motion.header>
  );
}

export default Header;
