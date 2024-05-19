import React, { useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

import "./Particle.css";

function Particle() {
  const particlesInit = useCallback(async (main) => {
    await loadSeaAnemonePreset(main);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "seaAnemone",
        particles: {
          move: {
            speed: 2,
          },
        },
      }}
    />
  );
}

export default Particle;
