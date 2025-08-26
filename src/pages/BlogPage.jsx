// src/pages/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogModal({ blog, onClose }) {
  // robust scroll lock (preserves background scroll position)
  useEffect(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, Math.abs(parseInt(y || "0", 10)));
    };
  }, []);

  if (!blog) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-[92%] md:w-[80%] p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.92, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: -40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Hero image inside modal */}
          <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden shadow mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mb-3">{blog.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Sustainable Architecture",
      image: `${process.env.PUBLIC_URL}/images/blog1.jpg`,
      content:
        "Sustainability is no longer an option but a necessity. This blog explores how architects are innovating with eco-friendly materials, passive design strategies, and renewable energy integration.",
    },
    {
      id: 2,
      title: "Minimalist Living Spaces",
      image: `${process.env.PUBLIC_URL}/images/blog2.jpg`,
      content:
        "Minimalism is more than aesthetics—it's a lifestyle. Learn how clean lines, decluttered spaces, and functional design create peaceful environments.",
    },
    {
      id: 3,
      title: "Smart Homes & IoT in Architecture",
      image: `${process.env.PUBLIC_URL}/images/blog3.jpg`,
      content:
        "Smart homes are changing the way we live. IoT-enabled architecture improves comfort, efficiency, and security.",
    },
    {
      id: 4,
      title: "Reviving Traditional Kashmiri Architecture",
      image: `${process.env.PUBLIC_URL}/images/blog4.jpg`,
      content:
        "Kashmir’s rich architectural heritage is timeless. Discover how traditional methods like wood carving and sloped roofs are being revived in modern projects.",
    },
    {
      id: 5,
      title: "Parametric Design in Modern Stadiums",
      image: `${process.env.PUBLIC_URL}/images/blog5.jpg`,
      content:
        "Parametric design enables futuristic stadiums with optimal airflow, crowd movement, and structural strength.",
    },
    {
      id: 6,
      title: "Luxury Homes of Tomorrow",
      image: `${process.env.PUBLIC_URL}/images/blog6.jpg`,
      content:
        "Luxury homes are evolving with AI, automation, and sustainable tech—from smart facades to integrated wellness.",
    },
  ];

  const [openBlog, setOpenBlog] = useState(null);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/studio hero.jpg`}
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl md:text-6xl text-white text-center monument">
            J Z BLOGS
          </h1>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 monument">KEEP UP WITH US</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpenBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              {/* Overlay + Title */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openBlog && (
        <BlogModal blog={openBlog} onClose={() => setOpenBlog(null)} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
