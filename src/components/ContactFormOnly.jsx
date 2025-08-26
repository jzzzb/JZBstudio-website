import React from "react";
import { motion } from "framer-motion";

const ContactFormOnly = () => {
  return (
    <section className="mt-0">
      <div className="py-20 bg-transparent backdrop-blur-sm rounded-xl shadow-inner mt-10 border border-white/10 max-w-2xl mx-auto px-6">
        <motion.h2
          className="core-services-title text-4xl md:text-4xl lg:text-4xl monument
             text-center mb-12 font-bold text-black leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          SEND US A MESSAGE
        </motion.h2>

        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full border border-gray-300 bg-white/80 text-gray-900 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Tell us about your project..."
            ></textarea>
          </motion.div>

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
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shine_3s_linear_infinite]"
            />
          </motion.button>
        </form>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ContactFormOnly;
