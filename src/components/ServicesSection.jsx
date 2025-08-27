import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Architectural Design",
     image: `${process.env.PUBLIC_URL}/images/studio.jpg`, // replace later
    desc: "Shaping timeless spaces with a balance of form, function, and emotion.",
  },
  {
    title: "Urban Planning",
     image: `${process.env.PUBLIC_URL}/images/zeal1.jpg`, // replace later
    desc: "Crafting sustainable and future-ready urban environments for communities.",
  },
  {
    title: "Interior Design",
    image: `${process.env.PUBLIC_URL}/images/studio.jpg`, // replace later
    desc: "Curating interiors that resonate with personality, elegance, and comfort.",
  },
  {
    title: "Sustainable Solutions",
     image: `${process.env.PUBLIC_URL}/images/studio.jpg`, // replace later
    desc: "Innovative green practices for eco-conscious and responsible living.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-4xl font-bold monument text-center text-black mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          EXPERTISE
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="h-[400px] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 p-8">
                <motion.h3
                  className="text-3xl text-white monument mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
