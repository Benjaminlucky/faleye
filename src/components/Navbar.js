"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      // Get all sections
      const sections = navLinks
        .map((link) => {
          const element = document.getElementById(link.id);
          if (element) {
            return {
              id: link.id,
              offsetTop: element.offsetTop,
              offsetBottom: element.offsetTop + element.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-primary-0)]/90 backdrop-blur-md border-b border-[var(--color-secondary-10)] font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="block outline-none">
              <img
                src="/images/FaleyeWebsiteLogo.svg"
                alt="Faleye Inc Logo"
                className="h-16 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-[var(--color-primary-50)]"
                    : "text-[var(--color-secondary-80)] hover:text-[var(--color-primary-50)]"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary-50)]"
                  />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[var(--color-secondary-50)] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--color-secondary-60)] transition-all shadow-md shadow-[var(--color-secondary-20)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-secondary-50)] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-primary-0)] overflow-hidden border-t border-[var(--color-secondary-10)]"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-[var(--color-primary-50)]"
                      : "text-[var(--color-secondary-80)]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-[var(--color-secondary-50)] text-white px-7 py-3 rounded-full text-sm font-bold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
