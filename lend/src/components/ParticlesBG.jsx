import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log("Particles loaded", container);
  }, []);

  const dark = true;

  const backgroundColor = dark ? "#1b1b1b" : "#ebe0c7";
  const particleColor = dark ? "#ffe600" : "#5C7C8A";
  const linksColor = dark ? "#00c8ff" : "#E7B669";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 60,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.4,
              size: 40,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 100,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: linksColor,
            distance: 200,
            enable: true,
            opacity: 0.7,
            width: 2,
            triangles: {
              enable: true,
              color: linksColor,
              opacity: 0.2,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 6,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              value_area: 2000,
            },
            value: 40,
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: "polygon",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBG;
