import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectDetail = ({ project, onBack }) => {
  // Robust scroll lock that preserves position (prevents jump-to-top)
  useEffect(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    // Lock body at current position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      // Restore scroll position and body styles
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, Math.abs(parseInt(y || "0", 10)));
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        className="bg-white w-[90%] md:w-[70%] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative p-6 md:p-10"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
          aria-label="Close project details"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Title & Info */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          {project.title}
        </h1>
        <p className="text-gray-700 text-lg mb-6">{project.location}</p>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-8">
          {project.description}
        </p>

        {/* 🔥 Extra Images Section */}
        {project.extraImages && project.extraImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {project.extraImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} extra ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        {/* Extra Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Architect
            </h3>
            <p className="text-gray-600">Your Firm Name</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Year Completed
            </h3>
            <p className="text-gray-600">2024</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
