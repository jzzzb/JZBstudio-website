import React from "react";
import { motion } from "framer-motion";

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-6 md:p-12 rounded-lg shadow-inner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium"
          whileHover={{ x: -5 }}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Projects
        </motion.button>

        {/* Project Image */}
        <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl mb-12">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {project.title}
        </h1>
        <p className="text-gray-700 text-xl mb-8">{project.location}</p>
        <p className="text-gray-800 leading-relaxed text-lg mb-8">
          {project.description}
        </p>

        {/* Extra Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Architect
            </h3>
            <p className="text-gray-600">Your Firm Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Year Completed
            </h3>
            <p className="text-gray-600">2024</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
