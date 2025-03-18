"use client"

import { ContactForm, CustomGetFundedBtn, Footer, FundingOptionsSection, GetFunded, Navbar, PayoutCertificatesCarousel, ProveWorthySection, SubHeroSection, TelegramCommunityBenefits, TradeEliteBanner, TradingPlanSelector } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className="bg">
        <Navbar />
      <main className="bg pt-28 pb-12 md:pt-40 px-4 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-2 md:mb-4 text-white">
          Ready to Level Up Your Trading? 
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-12">
          Join Fortune Edge Funding Today
          </h2>
          
          <p className="max-w-3xl text-lg md:text-xl mb-8 md:mb-12 text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 py-4 px-4 rounded-md">
          Take your trading to the next level with funding of up to $200,000. Whether you specialize in Forex trading or Deriv synthetic indices,  trade without financial risk and keep up to 80% of your profits."
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <Link href={"/"} className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-slate-50 px-6 md:px-8 py-3 rounded-full font-medium hover:bg-green-300 transition w-full sm:w-auto">
              Start Trading
            </Link>
            <Link href={"/"} className="bg-transparent border-[2px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-slate-50 px-6 md:px-8 py-3 rounded-full font-medium hover:bg-green-900 transition w-full sm:w-auto">
              Join Our Community
            </Link>
          </div>
        </div>
      <SubHeroSection />
      {/* Get funded components */}
      <GetFunded />
      <CustomGetFundedBtn />
      <FundingOptionsSection />
      <TradingPlanSelector />
      <ProveWorthySection />
      <TelegramCommunityBenefits />
      <ContactForm />
      <TradeEliteBanner />
      <Footer />
      </main>
    </main>
  )
}

export default Hero