import { motion } from "framer-motion";

function LinkCard({ label, url }) {
  return (
    <motion.a
      href={url}
      className="link-card"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 2, textShadow: "0px 0px 8px #00ffff" }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {label}
    </motion.a>
  );
}

export default LinkCard;
