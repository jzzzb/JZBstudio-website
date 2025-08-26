import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './font.css';

import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import PopUp from "./components/PopUp"; // 👈 import your PopUp

import Homepage from "./pages/HomePage";
import Project from "./pages/ProjectsPage";
import Aboutpage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import StudioPage from "./pages/StudioPage";
import ArchPage from "./pages/ArchPage";
import BlogPage from "./pages/BlogPage";
import ElementsPage from "./pages/ElementsPage";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const navbarVariants = {
  initial: { y: 0, opacity: 1 },
  exit: { y: -80, opacity: 0 },
  enter: { y: 0, opacity: 1 },
};

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      {/* Animate the Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          key="navbar"
          variants={navbarVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>

      {/* Animate the Routes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/projects/architecture" element={<ArchPage />} />
            <Route path="/projects/elements" element={<ElementsPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* 👇 PopUp will appear on every page */}
      <PopUp />
    </>
  );
}

export default App;
