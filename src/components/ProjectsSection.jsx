import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import Loader from "./Loader";
import projects from "../data/projects";
import "./font.css"; // reuse Monument Extended font

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProject = (project) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleBackToProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        ) : (
          <motion.section
            id="projects"
            className="py-16 bg-transparent backdrop-blur-sm border border-white/10 rounded-xl shadow-inner"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="core-services-title text-3xl sm:text-4xl font-bold text-center text-black drop-shadow-lg mb-12">
                FEATURED PROJECTS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={handleSelectProject}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
