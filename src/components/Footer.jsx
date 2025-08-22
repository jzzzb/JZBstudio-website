import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si"; // Threads icon from react-icons/si

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={`${process.env.PUBLIC_URL}/images/JZB-LOGO.svg`}
            alt="JZBStudio Logo"
            className="h-12"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" 
          />
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: studiozjzb@gmail.com</li>
            <li>Location: Delhi, India</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="https://instagram.com/jzbstudioz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/jzb-studioz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/JZBstudioz?t=KWTQHY79lZAF_OakwoiHxg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578964426075&sk=photos" // placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://threads.net/jzbstudioz" // placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <SiThreads />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} JZB STUDIOZ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;