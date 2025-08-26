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
      title: "CANTELIVER HOUSE",
      description:
        "A modern villa blending traditional Kashmiri architecture with sleek modern finishes.",
      thumbnail: `${process.env.PUBLIC_URL}/images/Canteliver House/canteliver2.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/images/Canteliver House/canteliver2.jpg`,
        `${process.env.PUBLIC_URL}/images/Canteliver House/canteliver2.jpg`,
      ],
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      description:
        "30-floor corporate HQ with sustainable design and an innovative glass façade.",
      thumbnail: `${process.env.PUBLIC_URL}/projects/office/thumb.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/projects/office/1.jpg`,
        `${process.env.PUBLIC_URL}/projects/office/2.jpg`,
      ],
    },
    {
      id: 3,
      title: "500-Bedded Hospital – Bandipora",
      description:
        "Healing architecture with natural light, ventilation, and efficient circulation.",
      thumbnail: `${process.env.PUBLIC_URL}/projects/hospital/thumb.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/projects/hospital/1.jpg`,
        `${process.env.PUBLIC_URL}/projects/hospital/2.jpg`,
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
          JZB ELEMENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="w-full h-48 object-cover"
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
              className="bg-white rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
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

              {/* Hero Image */}
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
