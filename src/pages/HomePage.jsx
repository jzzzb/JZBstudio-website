import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactFormOnly from "../components/ContactFormOnly"; // <-- new component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import We from "../components/We";
import CountUp from "../components/CountUp";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ServiceSection />
        <CountUp />
        <We />
        <AboutSection />
        <ContactFormOnly /> {/* only form now */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
