import React, { useEffect, useRef } from "react";

const VantaWavesBackground = () => {
  const ref = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // Dynamically load VANTA.WAVES if not already loaded
    if (window.VANTA && ref.current) {
      vantaRef.current = window.VANTA.WAVES({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.5,
        scaleMobile: 1,
        color: 0xc5c5c5,   // Updated color
        shininess: 150,    // Updated shininess
        waveHeight: 15,
        waveSpeed: 1,
        zoom: 0.4,
      });
    }

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 z-0" />;
};

export default VantaWavesBackground;
