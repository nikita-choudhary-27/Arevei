import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 py-12 px-4 md:px-14">
      <div className="flex flex-col md:flex-row justify-between gap-12 px-4">
        {/* Branding & Subscription */}
        <div className="max-w-sm">
          <img src="/logo.png" alt="AREVEI Logo" className="h-12 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Your Brand Companion Till Success</h2>
          <form className="flex flex-col mt-4">
            <label htmlFor="email" className="text-sm mb-2">Your Email</label>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="eg. example@gmail.com"
                className="w-full bg-[#222222] p-2 text-black rounded-md focus:outline-none focus:ring focus:ring-lime-400"
              />
              <button className="border w-full my-3 border-lime-400 text-lime-400 py-2 px-6 rounded-md hover:bg-lime-400 hover:text-black transition">
                Subscribe
              </button>
            </div>
          </form>
          <div className="flex space-x-4 mt-6">
            {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, index) => (
              <Icon
                key={index}
                className="text-gray-400 hover:text-white cursor-pointer"
                size={24}
              />
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
          <div>
            <h2 className="text-white font-medium text-xl mb-4">All Links</h2>
            <ul>
              {['Home', 'Career', 'About Us', 'Works', 'Contact Us'].map((link) => (
                <li key={link} className="text-gray-400 hover:text-white cursor-pointer mb-2">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-medium text-xl mb-4">Solutions</h2>
            <ul>
              {['Studio', 'Blog', 'Shop', 'Social'].map((link) => (
                <li key={link} className="text-gray-400 hover:text-white cursor-pointer mb-2">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-medium text-xl mb-4">Our Destinations</h2>
            <ul>
              <li className="text-gray-400 mb-2">Park Street Road, Southern California, USA</li>
              <li className="text-gray-400 mb-2">12 Glasgow Road, Singapore</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links and Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">&copy; 2025 AREVEI. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((text) => (
            <p key={text} className="text-gray-400 hover:text-white cursor-pointer">
              {text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
