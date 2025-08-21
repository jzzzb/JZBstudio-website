import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);       // Ref for the hero section
  const vantaRef = useRef(null);  // Ref to store Vanta instance

  // Framer Motion scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    let vantaEffect;
    // Check if VANTA is loaded (from CDN)
    if (window.VANTA && ref.current) {
      vantaEffect = window.VANTA.WAVES({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 0.7,
        scaleMobile: 1,
        color: 0xe0e0e,    // Background color
        shininess: 40,     // Shininess
        waveHeight: 15,    // Wave height
        waveSpeed: 1,      // Wave speed
        zoom: 1,           // Zoom
      });
      vantaRef.current = vantaEffect;
    }

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center min-h-screen overflow-hidden rounded-b-3xl shadow-xl bg-transparent"
      initial="hidden"
      animate="visible"
    >
      {/* Overlay pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px),
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      {/* Center Logo */}
      <motion.div
        className="relative z-20 text-center px-4"
        style={{ y: textY }}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/JZB-LOGO.svg`}
          alt="JZB Studio Logo"
          className="h-12 md:h-16 lg:h-24 mx-auto drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
