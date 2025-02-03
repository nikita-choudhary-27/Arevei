import React from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  // const location = useLocation();

  // const isActive = (path: string) => location.pathname === path;

  return (
    <div className="">
      

      <div className=" mb-10 ">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 pr-8 w-full fixed top-0 z-50 shadow-md bg-black dark:text-white ">
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <button
              className=" z-50 bg-black rounded-full p-1 ml-6"
              aria-label="Toggle Menu"
            >
              <svg
                className={`w-5 h-5 `}
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
            {/* Logo */}
            <img src="/logo.png" alt="logo" className="h-6" />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className=" rounded-full text-lime-400 border border-lime-400 py-1 px-5 hover:bg-lime-400 hover:text-black hover:font-medium">
              Login
            </button>
            <button className="bg-lime-400 text-black font-semibold py-1 px-4 rounded-full hover:bg-lime-500">
              Be a Creator
            </button>
            <ThemeToggle />
          </div>
        </nav>
        {/* <Outlet /> */}
      </div>
       
    </div>
  );
};

export default Navbar;
