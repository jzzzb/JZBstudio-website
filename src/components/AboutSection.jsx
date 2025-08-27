import React from "react";
import { motion } from "framer-motion";
import "./font.css"; // your custom font

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-WHITE-to-r from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold monument leading-tight text-gray-900">
            WE DESIGN <span className="text-gray-500">experiences</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            At <span className="font-semibold">JZB STUDIOZ</span>, we don’t just create
            buildings — we craft spaces that connect people, culture, and nature.  
          </p>

          <motion.a
            href="./pages/StudioPage"
            className="inline-block px-6 py-3 bg-gray-500 text-white rounded-xl shadow-lg hover:bg-black text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover The Studio →
          </motion.a>
        </motion.div>

        {/* Right side - image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={process.env.PUBLIC_URL + "/images/studio.jpg"}
              alt="Studio Preview"
              className="w-full h-[400px] object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-white shadow-lg px-6 py-3 rounded-xl font-semibold text-gray-800"
          >
            #FutureOfDesign
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
