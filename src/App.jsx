import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from './components/Header';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';

import './index.css';

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLogged(!!user);
    });
    return () => unsubscribe();
  }, []);

  const companyLinks = [
    { id: 1, label: 'Site Oficial', url: 'https://marswebsites.com/' },
    { id: 2, label: 'Instagram', url: 'https://instagram.com/marswebsite' },
    { id: 3, label: 'WhatsApp', url: 'https://wa.me/351964766822?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Mars%20Websites' },
  ];

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="app">
      <VideoBackground />

      {!userLogged && (
        <>
          <Header />
          <About />

          <motion.div
            className="bio-creator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="links">
              {companyLinks.map(link => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  className="link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: link.id * 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95, rotate: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <SocialLinks />
          <Footer />
        </>
      )}

      {userLogged && <BioCreator />}
    </div>
  );
}

export default App;
