import React from "react";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";

const Blogs: React.FC = () => {
  return (
    <div className="bg-black flex flex-col justify-between items-center pb-20 px-4 sm:px-8">
      {/* Heading */}
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-5">
        Our Latest Blog
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-center text-sm sm:text-base mb-10">
        Discover how we can elevate your brand and drive measurable results.
        <br className="hidden sm:block" />
        We specialize in crafting unique brand experiences.
      </p>

      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
        {/* Blog 1 */}
        <div className="w-full md:w-1/4 bg-[#1f1f1f] rounded-3xl overflow-hidden  md:px-0">
          <img src={blog1} alt="Blog 1" className="w-full" />
          <div className="p-4 sm:p-8">
            <h1 className="text-white text-lg font-bold mb-2">
              Arevei Integrates Technology Solutions
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              Arevei is evolving! We're thrilled to announce the expansion of
              our services to include cutting-edge technology solutions.
            </p>
            <p className="text-lime-400 font-medium">Read More &nbsp; &gt;</p>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="w-full md:w-1/4 bg-[#1f1f1f] rounded-3xl overflow-hidden  md:px-0">
          <img src={blog2} alt="Blog 2" className="w-full" />
          <div className="p-4 sm:p-8">
            <h1 className="text-white text-lg font-bold mb-2">
              Shaping the Future with Web3
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              In today's rapidly evolving business landscape, it's crucial to
              embrace new approaches. We're expanding ...
            </p>
            <p className="text-lime-400 font-medium">Read More &nbsp; &gt;</p>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="w-full md:w-1/4 bg-[#1f1f1f] rounded-3xl overflow-hidden  md:px-0">
          <img src={blog3} alt="Blog 3" className="w-full" />
          <div className="p-4 sm:p-8">
            <h1 className="text-white text-lg font-bold mb-2">
              How Online Shopping is Changing
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              E-commerce has irrevocably transformed the way we shop. No longer
              confined to physical stores, consumers can now ...
            </p>
            <p className="text-lime-400 font-medium">Read More &nbsp; &gt;</p>
          </div>
        </div>
      </div>

      {/* Explore All Button */}
      <button className="my-10 rounded-full text-lime-400 border border-lime-400 py-2 px-6 hover:bg-lime-400 hover:text-black hover:font-medium">
        Explore All
      </button>
    </div>
  );
};

export default Blogs;
