import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactFormOnly from "../components/ContactFormOnly"; // <-- new component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Galaxy from "../components/silk"; // Import your Galaxy animation

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ServiceSection />
        <AboutSection />
        <ContactFormOnly /> {/* only form now */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
