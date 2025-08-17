import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // carrega todos os presets
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0b0b0b" },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ["#ff3f3f", "#ff8c42", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1, random: true },
          links: { enable: true, distance: 150, color: "#ff3f3f", opacity: 0.4, width: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
