import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://instagram.com/marswebsite" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/AlexandreMoreiraC" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialLinks;
