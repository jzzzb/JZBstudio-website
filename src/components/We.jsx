import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "DESIGN WITH VISION",
  "BUILD WITH PASSION",
  "INNOVATE WITH PURPOSE",
  "HELP TO HEAL EARTH",
  "PROTECT THE NATURE",
  "DELIVER AS PROMISE",
];

// Delay (ms) between line switches
const delay = 2500;

const WeScroller = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeIndex === -1) {
            setActiveIndex(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex >= 0) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % lines.length);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[300px] flex justify-center items-center text-center"
    >
      {activeIndex >= 0 && (
        <div className="flex items-center justify-center text-2xl sm:text-4xl md:text-6xl font-bold monument">
          {/* Fixed WE */}
          <motion.span
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            WE&nbsp;
          </motion.span>

          {/* Animated line with smooth ease-in-out shifting */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              layout
              layoutTransition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
              className="text-gray-300 whitespace-nowrap"
            >
              {lines[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default WeScroller;
