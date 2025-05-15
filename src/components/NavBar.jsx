import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun, FiGrid, FiSettings, FiSend } from "react-icons/fi";
import { useDarkMode } from "../hooks/useDarkMode"; // Adjust path if needed

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const navItems = [
    { label: "Projects", id: "projects", icon: <FiGrid /> },
    { label: "Services", id: "services", icon: <FiSettings /> },
    { label: "Contact", id: "contact", icon: <FiSend /> },
  ];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setMenuOpen(false); // Close menu when toggling dark mode
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <button
          onClick={scrollToTop}
          className="text-xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400"
        >
          Dagmawi Negesse
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-blue-600 transition"
            >
              {item.label}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-700 dark:text-gray-300" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-xl bg-gray-100 dark:bg-gray-800 p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 space-y-6 border-t border-gray-200 dark:border-gray-700 transition-all"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  {item.icon}
                  <span className="text-base">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <span className="text-base">Toggle Dark Mode</span>
                {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
