import React from 'react';
import people from '../assets/people.png';

const PeopleSay: React.FC = () => {
  return (
    <div className="bg-black text-center flex flex-col justify-center p-10 pb-40">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-white p-3">What People Say</h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-8">
        Discover how we can elevate your brand and drive measurable results.{" "}
        <br className="hidden sm:block" /> {/* Break line only on larger screens */}
        We specialize in crafting unique brand experiences.
      </p>

      {/* Testimonial */}
      <p className="text-3xl text-gray-400 leading-8 pb-10 pt-10">
        “Working with AREVEI has been an absolute game-changer{" "}
        <br className="hidden sm:block" /> {/* Break line only on larger screens */}
        for our business. Their team truly understands our brand{" "}
        <br className="hidden sm:block" /> {/* Break line only on larger screens */}
        and has helped us to refine our message.”
      </p>

      {/* Divider */}
      <hr className="w-1/3 mx-auto border-gray-600 opacity-40" />

      {/* Author */}
      <h1 className="text-white font-medium text-lg mt-6">John Doe</h1>
      <p className="text-gray-400">General Manager, ABC Inc.</p>

      {/* Image */}
      <img
        src={people}
        alt="People"
        className="mt-16 mx-auto w-full max-w-4xl px-4 sm:px-40" 
      />
    </div>
  );
};

export default PeopleSay;