'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/constants';

export default function AffiliatePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [earnings, setEarnings] = useState({ current: 0, pending: 0, total: 0 });
  const [referrals, setReferrals] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique referral code based on name and timestamp
    const generatedCode = `${name.slice(0, 4).toUpperCase()}${Date.now().toString().slice(-5)}`;
    setReferralCode(generatedCode);
    setIsRegistered(true);
    
    // Mock referral data
    setReferrals([
      { name: 'John Doe', date: '2025-03-15', status: 'Active', commission: '$180' },
      { name: 'Jane Smith', date: '2025-03-12', status: 'Pending', commission: '$120' },
      { name: 'Robert Johnson', date: '2025-03-10', status: 'Active', commission: '$200' },
    ]);
    
    setEarnings({ current: 380, pending: 120, total: 500 });
  };

  const copyToClipboard = () => {
    const referralLink = `https://fortuneedgefunding.com/ref/${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white shadow-lg">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Fortune Edge Funding</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-100">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-100">About</Link></li>
                <li><Link href="/affiliate" className="font-bold border-b-2 border-white">Affiliate Program</Link></li>
                <li><Link href="/contact" className="hover:text-blue-100">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Earn With Our Affiliate Program</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our affiliate program and earn up to 15% commission on every successful referral. Start earning passive income today!</p>
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('register-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Start Earning Now
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p>Register for our affiliate program using the form below and get your unique referral link.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Share</h3>
              <p>Share your unique referral link with your network through social media, blog, or email.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Earn</h3>
              <p>Earn commissions for every successful referral who signs up and funds their account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Commission Structure</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Level</th>
                  <th className="py-4 px-6 text-left">Commission Rate</th>
                  <th className="py-4 px-6 text-left">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">Standard</td>
                  <td className="py-4 px-6">10%</td>
                  <td className="py-4 px-6">New affiliates</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6">Premium</td>
                  <td className="py-4 px-6">12%</td>
                  <td className="py-4 px-6">5+ successful referrals</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Elite</td>
                  <td className="py-4 px-6">15%</td>
                  <td className="py-4 px-6">20+ successful referrals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isRegistered ? "Your Affiliate Dashboard" : "Join Our Affiliate Program"}
          </h2>
          {!isRegistered ? (
            <div className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white py-3 rounded-lg font-bold hover:opacity-90 transition duration-300"
                >
                  Register Now
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Dashboard */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Your Affiliate Details</h3>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">Your Referral Link</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      value={`https://fortuneedgefunding.com/ref/${referralCode}`}
                      readOnly
                    />
                    <button
                      onClick={copyToClipboard}
                      className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-gray-700 mb-2">Current Earnings</h4>
                    <p className="text-3xl font-bold text-blue-600">${earnings.current}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-gray-700 mb-2">Pending Earnings</h4>
                    <p className="text-3xl font-bold text-blue-600">${earnings.pending}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-gray-700 mb-2">Total Earnings</h4>
                    <p className="text-3xl font-bold text-blue-600">${earnings.total}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Your Referrals</h3>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Commission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referrals.map((referral, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4">{referral.name}</td>
                          <td className="py-3 px-4">{referral.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${referral.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {referral.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{referral.commission}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                <p className="mb-4">If you have any questions about our affiliate program, feel free to contact our support team.</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I get paid?</h3>
              <p>We process payments monthly via PayPal, bank transfer, or cryptocurrency. The minimum payout threshold is $100.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">When do I receive my commissions?</h3>
              <p>Commissions are paid on the 15th of each month for the previous month's referrals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What marketing materials are available?</h3>
              <p>We provide a variety of banners, email templates, and promotional content in your affiliate dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does the referral cookie last?</h3>
              <p>Our referral cookies last for 90 days, giving you ample time to earn commissions from your referrals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Affiliates Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"I've been an affiliate with Fortune Edge Funding for 6 months now, and I've already earned over $5,000. Their commission structure is one of the best in the industry!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">MS</div>
                <div>
                  <h4 className="font-bold">Michael Smith</h4>
                  <p className="text-sm text-gray-600">Financial Blogger</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"What I love most about Fortune Edge Funding's affiliate program is how easy it is to track my referrals and earnings. Their dashboard is intuitive and their support team is always helpful."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">AJ</div>
                <div>
                  <h4 className="font-bold">Amanda Johnson</h4>
                  <p className="text-sm text-gray-600">Trading Influencer</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"The promotional materials provided by Fortune Edge Funding are top-notch. My conversion rates have improved significantly since I started using their tailored banners and email templates."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">DP</div>
                <div>
                  <h4 className="font-bold">David Peterson</h4>
                  <p className="text-sm text-gray-600">Investment Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our affiliate program today and start earning generous commissions for every successful referral.</p>
          <button 
            onClick={() => document.getElementById('register-section').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition duration-300"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}