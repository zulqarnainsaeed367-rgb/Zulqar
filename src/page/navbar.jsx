import React, { useState } from "react";
import g1 from "../assets/g1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // mobile menu close
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0B1120]/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-110 ">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="h-[50px] flex items-center group cursor-pointer"
        >
          <img
            src={g1}
            alt="Zulqarnain Logo"
            className="h-100 w-50 object-contain transition duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition duration-300 font-medium tracking-wide"
              >
                {link.name}
              </span>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] px-6 py-4 space-y-4 border-t border-white/10">
          {navLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(link.id)}
              className="block text-gray-300 hover:text-white transition duration-300 cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;