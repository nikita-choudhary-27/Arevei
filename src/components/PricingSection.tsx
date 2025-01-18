import React from "react";

const PricingSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 dark:bg-[#1c1c1c]">
      <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
        Choose What's Best for You
      </h2>
      <p className="mt-2 text-center font-semibold text-gray-400 mb-10">
        <strong className="dark:text-lime-500">
          Discover how we can elevate your brand
        </strong>{" "}
        and drive measurable results. We specialize in{" "}
        <br className="hidden sm:block" />
        crafting unique brand experiences that resonate with your audience.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
        {/* Pro Plan */}
        <div className="w-64 md:w-72 h-[450px] md:h-[500px] p-6 bg-white rounded-3xl border dark:bg-[#222222] dark:border-0">
          <h3 className="text-xl font-semibold dark:text-lime-500">Pro Plan</h3>
          <p className="mt-2 text-3xl md:text-4xl font-bold dark:text-white">
            $60
          </p>
          <p className="text-sm text-gray-500">per seat/month billed monthly</p>
          <ul className="mt-4 space-y-2 text-sm dark:text-slate-400">
            <li>✔ 60h Fast generations</li>
            <li>✔ Unlimited Relaxed generations</li>
            <li>✔ General commercial terms</li>
            <li>✔ Access to member gallery</li>
            <li>✔ Optional credit top ups</li>
            <li>✔ 3 concurrent fast jobs</li>
            <li>✔ 12 concurrent fast jobs</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 font-bold text-white bg-black rounded-full hover:bg-gray-800 dark:bg-[#222222] dark:border dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors duration-600">
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="relative w-64 md:w-72 h-[450px] md:h-[500px] p-6 bg-lime-400 rounded-3xl shadow-[0_8px_20px_rgba(34,197,94,0.4)] -translate-y-4 md:-translate-y-8 border">
          <span className="absolute top-2 right-2 px-2 py-1 text-sm font-bold text-black bg-white rounded-full">
            Most Popular
          </span>
          <h3 className="text-xl font-semibold">Standard Plan</h3>
          <p className="mt-2 text-3xl md:text-4xl font-bold">$30</p>
          <p className="text-sm text-gray-500">per seat/month billed monthly</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ 15h Fast generations</li>
            <li>✔ Unlimited Relaxed generations</li>
            <li>✔ General commercial terms</li>
            <li>✔ Access to member gallery</li>
            <li>✔ Optional credit top ups</li>
            <li>✔ 3 concurrent fast jobs</li>
            <li>✔ Access to member gallery</li>
            <li>✔ Optional credit top ups</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 font-bold text-black bg-white rounded-full hover:bg-gray-50 dark:bg-lime-400 dark:border dark:border-black dark:hover:bg-black dark:hover:text-white transition-colors duration-600">
            Choose Plan
          </button>
        </div>

        {/* Unlimited Plan */}
        <div className="w-64 md:w-72 h-[450px] md:h-[500px] p-6 bg-white rounded-3xl border dark:bg-[#222222] dark:border-0">
          <h3 className="text-xl font-semibold dark:text-lime-500">
            Unlimited Plan
          </h3>
          <p className="mt-2 text-3xl md:text-4xl font-bold dark:text-white">
            $120
          </p>
          <p className="text-sm text-gray-500">per seat/month billed monthly</p>
          <ul className="mt-4 space-y-2 text-sm dark:text-slate-400">
            <li>✔ 60h Fast generations</li>
            <li>✔ Unlimited Relaxed generations</li>
            <li>✔ General commercial terms</li>
            <li>✔ Access to member gallery</li>
            <li>✔ Optional credit top ups</li>
            <li>✔ 3 concurrent fast jobs</li>
            <li>✔ 12 concurrent fast jobs</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 font-bold text-white bg-black rounded-full hover:bg-gray-800 dark:bg-[#222222] dark:border dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors duration-600">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
