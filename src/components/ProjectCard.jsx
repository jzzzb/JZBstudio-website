import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 40, // smooth
  stiffness: 60, // soft
  mass: 2,
};

const ProjectCard = ({ project, onSelectProject }) => {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -10;
    const rotationY = (offsetX / (rect.width / 2)) * 10;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scale.set(1.05);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full perspective-1000 cursor-pointer"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProject(project)}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Project image */}
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover"
          style={{ borderRadius: "12px" }}
          animate={{
            filter: isHovered
              ? "grayscale(100%) brightness(0.6) blur(3px)"
              : "grayscale(0%) brightness(1) blur(0px)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Popup text in middle */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            isHovered
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
            {project.title}
          </h3>
        </motion.div>
      </motion.div>
    </figure>
  );
};

export default ProjectCard;
