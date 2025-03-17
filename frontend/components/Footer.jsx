'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Twitter, TikTok } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // Show success message or notification
  };

  return (
    <footer className="bg-[#0a2409] text-white py-16 px-4 mt-16 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Logo and top section */}
        <div className="mb-16">
          <Link href="/" className="inline-block">
            <div className="flex items-center">
              <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-md mr-2">
                <span className="font-bold text-black text-2xl">E</span>
              </div>
              <span className="text-green-500 font-bold text-2xl tracking-tight">EQUITYEDGE</span>
            </div>
          </Link>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Quicklinks */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Quicklinks</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Link href="/" className="block hover:text-green-500 transition-colors">
                  Home
                </Link>
                <Link href="/pricing" className="block hover:text-green-500 transition-colors">
                  Pricing
                </Link>
                <Link href="/affiliate" className="block hover:text-green-500 transition-colors">
                  Affiliate
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="/mindset" className="block hover:text-green-500 transition-colors">
                  Mindset
                </Link>
                <Link href="/faq" className="block hover:text-green-500 transition-colors">
                  FAQ
                </Link>
                <Link href="/about" className="block hover:text-green-500 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>

          {/* Middle column - empty on larger screens, used for spacing */}
          <div className="hidden lg:block"></div>

          {/* Newsletter and socials */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="flex-grow bg-white text-gray-900 px-4 py-3 rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-3 rounded-r-lg hover:bg-green-600 transition-colors"
                >
                  <ArrowRight size={24} />
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow us on:</h3>
              <div className="flex space-x-4">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="12" r="1"></circle>
                    <circle cx="15" cy="12" r="1"></circle>
                    <path d="M7.5 7.2A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 4.5 1.2 10 10 0 0 1 1.3 2.6 14.3 14.3 0 0 1 .2 5.8 5 5 0 0 1-2.8 3A5 5 0 0 1 12 18c-1 0-1.7-.3-2.2-.5"></path>
                    <path d="M7 16.8c-.5-.9-1.6-2-1.8-2.6a13 13 0 0 1 .2-5.8 10 10 0 0 1 1.3-2.6A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 4.5 1.2 10 10 0 0 1 1.3 2.6 13 13 0 0 1 .2 5.8c-.2.6-1.3 1.7-1.8 2.6"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Copyright and legal information */}
        <div className="text-gray-300 text-sm space-y-4">
          <p>© 2025 Equity Edge Analytics Limited All rights reserved.</p>
          <p>Equity Edge Analytics Ltd is registered in England and Wales, Company Number 15263705.</p>
          <p>Registered Office: Onega House, 112 Main Road, Sidcup, Kent, England, DA14 6NE</p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/terms" className="hover:text-green-500 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/cookies" className="hover:text-green-500 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy" className="hover:text-green-500 transition-colors">
              Privacy policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/refunds" className="hover:text-green-500 transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;