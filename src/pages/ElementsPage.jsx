// src/pages/ArchPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArchPage = () => {
  // ✅ Manually add project info here
  const projects = [
    {
      id: 1,
      title: "FLOATING STAIRCASE",
      description:
        "A modern villa blending traditional Kashmiri architecture with sleek modern finishes.",
      thumbnail: `${process.env.PUBLIC_URL}/images/Elements/floatingstair1.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/images/Elements/floatingstair1.jpg`,
      ],
    },
    
    // 👉 Continue until project 21
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/archhero.jpg`} // 👉 add this in /public/images
          alt="Architecture Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            
          </h1>
        </div>
      </div>

      {/* Project Grid */}
      <div className="flex-1 px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 monument" >
          ELEMENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal (same style as Project Cards) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-7xl w-full max-h-[85vh] overflow-y-auto relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-5xl text-gray-600 font mb-4 monument">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArchPage;
