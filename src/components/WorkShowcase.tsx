import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";

const WorkShowcase: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center w-full pb-20 gap-4 px-4 sm:px-8 dark:bg-[#1c1c1c] dark:text-white">
      {/* Image 1 */}
      <img
        src={work1}
        alt="w1"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
      {/* Image 2 */}
      <img
        src={work2}
        alt="w2"
        className="w-3/4 sm:w-1/3 md:w-1/4 max-w-full h-auto rounded-lg shadow-lg"
      />
      {/* Image 3 */}
      <img
        src={work3}
        alt="w3"
        className="w-3/4 sm:w-1/3 md:w-1/4 max-w-full h-auto rounded-lg shadow-lg"
      />
      {/* Image 4 */}
      <img
        src={work4}
        alt="w4"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default WorkShowcase;
