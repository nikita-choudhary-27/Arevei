import React from 'react'
import career from '../assets/career.png'

const CareerBanner:React.FC = () => {
  return (
    <div className='bg-black px-28'>
      <div className="bg-[#1f1f1f]  rounded-3xl flex  ">
        <div className="p-16 pb-3">
          <h2 className="text-4xl font-bold text-gray-400">
            <span className="text-white">Explore Exciting</span> <br /> Career
            Opportunities.
          </h2>
          <p className="text-gray-400 py-5">
            Discover a rewarding career with competitive benefits and
            opportunities for growth. Be part of something bigger.{" "}
          </p>
          <button className="my-10 rounded-full text-lime-400 border border-lime-400 py-2 px-6 hover:bg-lime-400 hover:text-black hover:font-medium">
            Join Our Team
          </button>
        </div>
        <div className="w-3/5 h-full">
          <img src={career} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CareerBanner