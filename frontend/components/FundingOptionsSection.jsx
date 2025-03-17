import React from 'react';

const FundingOptionsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-bold flex flex-col md:flex-row justify-center items-center gap-2">
          <span className="text-green-950">Earn Up To $100k in Funding or take advantage of our</span>
          <span className="flex items-center mt-2 md:mt-0">
            <span className="h-12 w-1 bg-green-400 mx-2 hidden md:block"></span>
            <span className="text-green-950">Pro Edge Accounts</span>
          </span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-800 text-lg md:text-xl leading-relaxed">
          We offer you diverse opportunities with our 1-step and 2-step evaluation challenges, or if you prefer you can skip straight to funded with our Pro Edge accounts, offering multiple paths for traders to showcase their skills and excel in a competitive environment.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition">
          Compare Options
        </button>
      </div>
    </section>
  );
};

export default FundingOptionsSection;