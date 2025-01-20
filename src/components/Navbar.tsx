import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white sticky top-0 z-50 shadow-md dark:bg-[#1c1c1c] dark:text-white">
      {/* Logo */}
      <img src="/logo.png" alt="logo" className="h-8" />

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 h-full w-2/5 bg-white shadow-xl dark:bg-[#1c1c1c] text-black dark:text-white transform transition-transform duration-300 md:static md:flex md:space-x-6 md:bg-transparent md:transform-none md:w-auto md:h-auto ${
          isMenuOpen ? "translate-x-0 w-3/4" : "-translate-x-full"
        }`}
      >
        <li className="mt-16 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-6 py-2 rounded-md bg-lime-400 text-black"
                : "block px-6 py-2  rounded-md"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block px-6 py-2 rounded-md bg-lime-400 text-black"
                : "block px-6 py-2 rounded-md"
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "block px-6 py-2 rounded-md bg-lime-400 text-black"
                : "block px-6 py-2  rounded-md"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block px-6 py-2 rounded-md bg-lime-400 text-black"
                : "block px-6 py-2  rounded-md"
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-gray-950 text-white py-2 px-4 rounded-full hover:bg-black">
          Get a Quote
        </button>
        <ThemeToggle />
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className={`w-8 h-8 ${isMenuOpen ? "hidden" : "block"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className={`w-8 h-8 ${isMenuOpen ? "block" : "hidden"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
