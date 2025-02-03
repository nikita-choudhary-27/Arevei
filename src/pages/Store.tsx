import React from 'react'
import ProductSection from '../components/ProductSection';
import banner1 from "../assets/store/banner1.png";
import banner2 from "../assets/store/banner2.png";
import galaxymain from "../assets/store/galaxymain.png";
import galaxy1 from "../assets/store/galaxy1.png";
import galaxy2 from "../assets/store/galaxy2.png";
import galaxy3 from "../assets/store/galaxy3.png";
import ProductCollection from '../components/ProductCollection';

const Store: React.FC = () => {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-full bg-gradient-to-r from-blue-100 to-orange-100 px-24">
        {/* Heading Section */}
        <div className="text-center px-64">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Discover. Shop. Create.
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Discover how we can elevate your brand and drive measurable results.
            We specialize in crafting unique brand experiences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col items-center w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
          />

          <button className="w-1/2 bg-lime-400 text-black font-semibold  mt-2 py-3 px-4 rounded-full hover:bg-lime-500 transition-all">
            Search Products
          </button>
        </div>
      </div>
      <ProductSection />

      <div className="bg-black text-white py-10 px-6 md:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">
          Your Shopping <br /> Journey Starts Here
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          Discover how we can elevate your brand and drive measurable results.
          We specialize in crafting unique brand experiences that resonate with
          your audience.
        </p>

        <div className="mt-10 space-y-8">
          {/* Physical Products Card */}
          <div className="bg-yellow-300 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center md:items-stretch gap-6 shadow-lg">
            <div className="relative w-full md:w-1/2">
              <img
                src={banner1}
                alt="Physical Product"
                className="mx-auto  h-56 object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-3xl mb-3 font-bold text-black">
                Physical Products
              </h2>
              <p className=" text-gray-800 mb-2">
                Experience the joy of tangible treasures with our carefully
                curated collection of physical products. Our store offers a
                diverse range of high-quality items designed to enrich your
                life.
              </p>
              <button className=" w-1/3 bg-lime-400 text-black py-2 px-6 rounded-full font-bold hover:bg-lime-500">
                Shop Now
              </button>
            </div>
          </div>

          {/* Digital Products Card */}
          <div className="bg-pink-100 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center md:items-stretch gap-6 shadow-lg">
            <div className="relative w-full md:w-1/2">
              <img
                src={banner2}
                alt="Digital Product"
                className="mx-auto w-60 h-56 object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-black">
                Digital Products
              </h2>
              <p className="mt-2 text-gray-800">
                Dive into a world of limitless possibilities with our curated
                selection of digital products. From software, games, and e-books
                to stunning templates and inspiring online courses.
              </p>
              <button className="mt-4 w-1/3 bg-lime-400 text-black py-2 px-6 rounded-full font-bold hover:bg-lime-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductCollection />

      <div className=" my-20 bg-[#1f1f1f] flex flex-col md:flex-row items-center justify-center p-8  rounded-2xl max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 ">
          <img
            src={galaxymain}
            alt="Galaxy S25 Series"
            className="mx-auto rounded-xl py-4 w-4/5 h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-white  md:text-left mt-6 md:mt-0 ">
          <h2 className="text-3xl md:text-4xl font-bold">
            Galaxy S25 Series arrived in 2025!
          </h2>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <img
              src={galaxy1}
              alt="Galaxy S25"
              className="w-32 h-w-32 rounded-xl"
            />
            <img
              src={galaxy2}
              alt="Galaxy S25"
              className="w-32 h-w-32 rounded-xl"
            />
            <img
              src={galaxy3}
              alt="Galaxy S25"
              className="w-32 h-w-32 rounded-xl"
            />
          </div>
          <div className="mt-8">
            <button className="bg-transparent border-2 border-lime-400 text-lime-400 px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <ProductCollection />
    </div>
  );
}

export default Store