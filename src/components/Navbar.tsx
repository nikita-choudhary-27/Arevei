import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-16 bg-white sticky top-0 z-50 shadow-md dark:bg-[#1c1c1c] dark:text-white">
      <img src="/logo.png" alt="logo" className="h-8" />

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-8 font-light text-white bg-[#1c1c1c] p-2 rounded-full border border-gray-700 transition-all duration-300 ${
          isMenuOpen
            ? "flex-col space-y-4 absolute top-16 left-0 w-full text-center bg-[#1c1c1c] p-6"
            : "hidden"
        } md:block`}
      >
        <li className="transition-all duration-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 text-black hover:bg-lime-500 rounded-full px-7 py-1"
                : "hover:text-green-600 cursor-pointer px-7 py-1"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="transition-all duration-300">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 text-black hover:bg-lime-500 rounded-full px-7 py-1"
                : "hover:text-green-600 cursor-pointer px-7 py-1"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="transition-all duration-300">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 text-black hover:bg-lime-500 rounded-full px-7 py-1"
                : "hover:text-green-600 cursor-pointer px-7 py-1"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="transition-all duration-300">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 text-black hover:bg-lime-500 rounded-full px-7 py-1"
                : "hover:text-green-600 cursor-pointer px-7 py-1"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Right section with Quote Button and ThemeToggle */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-950 text-white py-2 px-4 rounded-full hover:bg-black font-light">
          Get a Quote
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile Hamburger Button */}
      {!isMenuOpen ?  (
        <button className="md:hidden text-black dark:text-white" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
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
        </button>
      ): ""}

      {/* Mobile Close Button */}
      <button
        className={`md:hidden opacity-30 dark:text-white text-black ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
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
