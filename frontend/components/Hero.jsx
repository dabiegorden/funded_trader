"use client"

import { ContactForm, CustomGetFundedBtn, DiscordCommunityBenefits, EquityEdge, Footer, FundingOptionsSection, GetFunded, Navbar, PayoutCertificatesCarousel, ProveWorthySection, SubHeroSection, TradeEliteBanner, TradingPlanSelector } from '@/constants'
import React from 'react'

const Hero = () => {
  return (
    <main className="bg">
        <Navbar />
      <main className="bg pt-28 pb-12 md:pt-40 px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4">
            Are You a Trader?
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-green-400 mb-6 md:mb-12">
            We Want You
          </h2>
          
          <p className="max-w-3xl text-lg md:text-xl mb-8 md:mb-12">
            Prove your trading skills and unlock up to $100,000 on an Equity Edge account. 
            Receive up to 90% of the profits from your simulated trades and scale up to 
            $2,000,000 once you pass.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <button className="bg-green-400 text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-green-300 transition w-full sm:w-auto">
              Start Trading
            </button>
            <button className="bg-transparent border border-green-400 text-green-400 px-6 md:px-8 py-3 rounded-full font-medium hover:bg-green-900 transition w-full sm:w-auto">
              Join Our Community
            </button>
          </div>
        </div>
      <SubHeroSection />
      {/* Get funded components */}
      <GetFunded />
      <CustomGetFundedBtn />
      <EquityEdge />
      <FundingOptionsSection />
      <TradingPlanSelector />
      <PayoutCertificatesCarousel />
      <ProveWorthySection />
      <DiscordCommunityBenefits />
      <ContactForm />
      <TradeEliteBanner />
      <Footer />
      </main>
    </main>
  )
}

export default Hero