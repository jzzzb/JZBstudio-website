import React from "react";
import { motion } from "framer-motion";
import "./font.css"; // contains Monument Extended font styles

const ContactSection = () => {
  return (
    <section className="mt-0">
      {/* Full-width Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/contact hero.jpg`} // Replace with your image path
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        {/* Removed overlay text */}
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-transparent backdrop-blur-sm rounded-xl shadow-inner mt-10 border border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            className="core-services-title text-3xl md:text-4xl lg:text-5xl text-center mb-12 font-bold text-black whitespace-nowrap"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SEND US A MESSAGE
          </motion.h2>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="relative w-full bg-black/40 backdrop-blur-md text-white font-bold py-3 rounded-lg overflow-hidden transition-all duration-300 border border-white/10 hover:bg-black/60"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative z-10">Send Message</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                translate-x-[-100%] animate-[shine_3s_linear_infinite]"
              />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto mt-16 px-6 mb-20">
        <motion.h2
          className="core-services-title text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-black whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FIND US HERE
        </motion.h2>
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Google Maps Embed with new pinned location */}
          <iframe
            title="JZB Studioz Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1634367921574!2d77.23174786296453!3d28.55012546717994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2312ce8f077%3A0xbd049acbd84c015f!2sS492%2C%20Greater%20Kailash-1%2C%20Block%20S%2C%20Greater%20Kailash%20I%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1755794518044!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Inline keyframes for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
