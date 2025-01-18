import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 py-12 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-8 justify-between text-center md:text-left px-4 md:px-14">
        <div className="flex flex-col items-center md:items-start max-w-xs mx-auto md:mx-0">
          <div>
            <img src="/logo.png" alt="Logo" className="h-12 mb-4 p-2 mx-auto" />
            <h2 className="text-lg font-semibold mb-2 text-center md:text-left">
              Your Brand Companion Till The Success
            </h2>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              blanditiis.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white font-medium text-xl mb-2">All Links</h2>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Home
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            About Us
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Services
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Works
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white font-medium text-xl mb-2">Shortcuts</h2>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Our Plans
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Team
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Testimonial
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white font-medium text-xl mb-2">Social</h2>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Instagram
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            LinkedIn
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            X
          </p>
          <p className="text-gray-400 font-light mb-1 hover:text-white cursor-pointer">
            Facebook
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between mt-10 pt-4 text-center px-4 md:px-12">
        <p className="text-sm text-gray-400">
          © 2025 AREVEI. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <p className="text-sm text-gray-400 cursor-pointer hover:text-white">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-400 cursor-pointer hover:text-white">
            Terms of Service
          </p>
          <p className="text-sm text-gray-400 cursor-pointer hover:text-white">
            Cookies Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
