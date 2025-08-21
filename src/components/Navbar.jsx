import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";

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
      {/* Static Logo (not clickable) */}
      <img
        src={`${process.env.PUBLIC_URL}/images/JZB_ICON.svg`}
        alt="ZBB Logo"
        className="h-[10px] sm:h-[10px] md:h-[15px] transition-all duration-300"
      />

      {/* Menu bar */}
      <MenuBar />
    </header>
  );
};

export default Navbar;
