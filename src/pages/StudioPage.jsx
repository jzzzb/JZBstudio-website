// src/pages/StudioPage.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer"; // Adjust path if needed

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function StudioPage() {
  const features = [
    {
      title: "Innovation",
      text: "We explore cutting-edge technologies and materials to create designs that stand out.",
    },
    {
      title: "Sustainability",
      text: "Our designs prioritize eco-friendly solutions without compromising aesthetics.",
    },
    {
      title: "Collaboration",
      text: "Every project is a journey, and we work closely with clients to bring visions to life.",
    },
  ];

  const team = [
    { name: "JAHANZAIB BHAT", role: "Founder & Principle Architect", img: `${process.env.PUBLIC_URL}/images/jahanzaib.jpg` },
    { name: "NAVEED MALIK", role: "Project Manager", img: `${process.env.PUBLIC_URL}/images/naveed.jpg` },
    { name: "FAIZAN BHAT", role: "Structural Engineer", img: `${process.env.PUBLIC_URL}/images/faizan.jpg` },
  ];

  const gallery = ["/images/studio1.jpg", "/images/studio2.jpg", "/images/studio3.jpg"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/studio hero.jpg`}
          alt="Studio Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Page Heading */}
      <motion.div
        className="px-6 md:px-20 lg:px-32 pt-12 pb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 monument">ABOUT US</h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          At JZB STUDIOZ, we create architecture that blends innovation, sustainability, and timeless design.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="px-6 md:px-20 lg:px-32 grid md:grid-cols-3 gap-8 mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={fadeUp}
          >
            <h2 className="font-bold text-2xl mb-4 text-gray-800">{feature.title}</h2>
            <p className="text-gray-600">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section (glassy cards with rectangular image + text below) */}
      <motion.div
        className="px-6 md:px-20 lg:px-32 mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-4xl monument font-bold text-gray-800 mb-8 text-center">THE BEES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="
                group relative rounded-2xl p-4
                bg-white/30 backdrop-blur-md border border-white/40
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
                transition-shadow duration-300
              "
            >
              {/* Image: rectangular with soft corners */}
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>

              {/* Text below the image inside the same blurry card */}
              <div className="pt-4 pb-2 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="px-6 md:px-20 lg:px-32 mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center monument">OUR SPACE</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Studio ${idx + 1}`}
              className="rounded-xl shadow-lg w-full h-64 object-cover"
              variants={fadeUp}
            />
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
