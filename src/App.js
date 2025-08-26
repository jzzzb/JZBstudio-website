import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar"; // Ensure this exists and is imported

import Homepage from "./pages/HomePage";
import Project from "./pages/ProjectsPage";
import Aboutpage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";// App.js
import StudioPage from "./pages/StudioPage"; // Add this import



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
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/studio" element={<StudioPage/>} />
            <Route path="/Careers" element={<CareerPage/>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;