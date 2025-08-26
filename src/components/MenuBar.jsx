import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
  exit: { x: 300, opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const submenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { staggerChildren: 0.03 } },
};

const submenuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    setOpenSubmenu(null);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Projects",
      path: "/projects",
      submenu: [
        { name: "Architecture", path: "/projects/architecture" },
        { name: "Elements", path: "/projects/elements" },
      ],
    },
    { name: "Studio", path: "/studio" },
    { name: "Blogs", path: "/Blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="relative z-[10000]"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100 }}
    >
      {/* Desktop Menu */}
      {!isMobile && (
        <ul className="flex gap-6 text-white text-sm">
          {links.map((link) => {
            const hasSubmenu = Boolean(link.submenu);
            const isSubmenuOpen = openSubmenu === link.name;

            return (
              <li
                key={link.path}
                className="relative group"
                onMouseEnter={() => hasSubmenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
              >
                <Link
                  to={link.path}
                  onClick={(e) => {
                    if (hasSubmenu) e.preventDefault();
                    else handleLinkClick(link.path);
                  }}
                  className="hover:text-gray-300 flex items-center gap-1"
                >
                  {link.name}
                  {hasSubmenu && (
                    <motion.span
                      className="select-none"
                      style={{ display: "flex" }}
                      animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </motion.span>
                  )}
                </Link>

                {hasSubmenu && (
                  <AnimatePresence>
                    {isSubmenuOpen && (
                      <motion.ul
                        variants={submenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 bg-black/80 backdrop-blur-lg rounded-lg mt-2 py-2 min-w-[180px] border border-white/10"
                      >
                        {link.submenu.map((sub) => (
                          <motion.li key={sub.path} variants={submenuItemVariants}>
                            <Link
                              to={sub.path}
                              onClick={() => handleLinkClick(sub.path)}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 text-sm"
                            >
                              {sub.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Mobile Menu Icon (animated Menu ↔ X, single toggle) */}
      {isMobile && (
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-block relative z-[10000]"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="icon-x"
                initial={{ rotate: -90, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <X className="w-7 h-7 text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="icon-menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <Menu className="w-7 h-7 text-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.ul
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-48  
                       bg-black/70 backdrop-blur-lg border-l border-white/10
                       shadow-2xl rounded-l-2xl z-[9999] py-6 overflow-y-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100 }}
          >
            {/* ⬇️ Removed the internal close button to avoid duplicate X */}

            <div className="px-2">
              {links.map((link) => {
                const hasSubmenu = Boolean(link.submenu);
                const isSubmenuOpen = openSubmenu === link.name;

                return (
                  <motion.li key={link.path} variants={itemVariants} className="mb-1">
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        if (hasSubmenu) {
                          e.preventDefault();
                          toggleSubmenu(link.name);
                        } else {
                          handleLinkClick(link.path);
                        }
                      }}
                      className={`flex justify-between items-center px-6 py-2 
                                 text-white text-sm rounded-lg transition-colors duration-150 
                                 ${isSubmenuOpen ? "bg-white/20" : "hover:bg-white/10"}`}
                    >
                      {link.name}
                      {hasSubmenu && (
                        <motion.span
                          className="ml-2 select-none flex"
                          animate={{ rotate: isSubmenuOpen ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={14} strokeWidth={2.5} />
                        </motion.span>
                      )}
                    </Link>

                    {hasSubmenu && (
                      <AnimatePresence>
                        {isSubmenuOpen && (
                          <motion.ul
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="ml-6"
                          >
                            {link.submenu.map((sub) => (
                              <motion.li
                                key={sub.path}
                                variants={submenuItemVariants}
                                className="flex justify-between items-center"
                              >
                                <Link
                                  to={sub.path}
                                  onClick={() => handleLinkClick(sub.path)}
                                  className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150 text-sm"
                                >
                                  {sub.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.li>
                );
              })}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
