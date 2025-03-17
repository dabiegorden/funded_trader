'use client';

import React from 'react';
import Link from 'next/link';

const TradeEliteBanner = () => {
  return (
    <section className="relative bg-green-500 py-24 px-4 rounded-3xl overflow-hidden">
      {/* Background gradient circles - decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full opacity-30 translate-x-1/4 translate-y-1/4" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
          This Is Your Chance To Trade<br />Among The Elite
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/get-funded" className="px-12 py-4 bg-gray-900 text-green-500 font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              Get Funded
          </Link>
          
          <Link href="/discord" className="px-12 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-green-500 transition-colors duration-300 cursor-pointer">
              Join our Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TradeEliteBanner;