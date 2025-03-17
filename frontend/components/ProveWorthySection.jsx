'use client';

import Link from 'next/link';
import React from 'react';

const ProveWorthySection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#f0f0f0]">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 opacity-70"></div>
      
      <div className="relative container mx-auto px-4 md:px-8 max-w-6xl z-10">
        {/* Heading with green accent */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Prove You Are</h2>
          <div className="h-12 w-1 bg-green-400 mx-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 bg-green-100 px-4">Worthy</h2>
        </div>
        
        {/* Description text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Do you have the skills to become the worthy one? Are you ready to compete against your fellow 
            community members and win exciting prizes? Register for our monthly competitions and trade 
            like true winner all the way to the top of the leaderboard.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href={"/register"} 
            className="px-8 py-4 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-lg"
            onClick={() => console.log('Register button clicked')}
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProveWorthySection;