import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-6 py-2 ${
        scrolled
          ? "backdrop-blur-md bg-black/40 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo - Clickable & Right Click Disabled */}
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/JZB_ICON.svg`}
          alt="ZBB Logo"
          className="h-[10px] sm:h-[10px] md:h-[15px] transition-all duration-300 cursor-pointer select-none"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          draggable="false" // Optional: prevents drag-save
        />
      </Link>

      {/* Menu bar */}
      <MenuBar />
    </header>
  );
};

export default Navbar;
