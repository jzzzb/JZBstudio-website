import React from "react";
import { motion } from "framer-motion";
import "./font.css"; // import the font styles

const AboutSection = () => {
  return (
    <section className="py-20 mt-10 relative z-10">
      <div
        className="w-[90%] max-w-7xl mx-auto px-10 text-center 
        bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-14"
      >
        {/* Title */}
        <motion.h2
          className="core-services-title text-4xl mb-8 font-bold text-black monument" 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE STUDIO
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="h-1 w-32 bg-blue-500 mx-auto mb-10 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Studio Image */}
        <motion.img
          src={process.env.PUBLIC_URL + "/images/studio.jpg"} // place your image in public/images/studio.jpg
          alt="Studio"
          className="mx-auto rounded-2xl shadow-lg mb-12 max-h-[400px] object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Text content */}
        <motion.div
          className="text-xl leading-relaxed text-black/90 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
          
          </p>
          <p>
            Welcome to <strong>JZB STUDIOZ</strong> — an innovative architectural studio based
            in Kashmir, India. We design modern homes, hospitals, commercial spaces,
            and urban projects with a focus on sustainability and human-centered
            design. Our expertise lies in creating residences with contemporary
            aesthetics, healthcare facilities with smart planning, and commercial
            spaces that inspire productivity.

            
          </p>
          <p>
           At <strong>JZB STUDIOZ</strong>, every project reflects a balance of creativity, technology,
            and local context. Whether it’s a custom house design in Kashmir, eco-friendly
            interiors, or large-scale master planning, we bring thoughtful ideas and
            precision to every detail. We believe architecture should not only look
            beautiful but also improve lifestyles, communities, and the environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
