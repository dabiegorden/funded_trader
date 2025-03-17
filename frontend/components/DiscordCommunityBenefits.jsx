'use client';

import React from 'react';
import { Brain, Trophy, HeadphonesIcon, LineChart } from 'lucide-react';
import Link from 'next/link';

const BenefitCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <Icon size={48} className="text-green-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const DiscordCommunityBenefits = () => {
  const benefits = [
    {
      Icon: Brain,
      title: 'Mindset Management',
      description: 'Engage with our mindset and fitness community to become the best version of yourself.',
    },
    {
      Icon: Trophy,
      title: 'Competitions & Giveaways',
      description: 'Monthly competitions and giveaways exclusively in our Discord Community.',
    },
    {
      Icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'By signing up to our Discord, you have access to constant technical and mindset support from our team.',
    },
    {
      Icon: LineChart,
      title: 'Exclusive Trading Content',
      description: 'Daily trading content from our in-house analysts',
    },
  ];

  return (
    <section className="bg-[#0a2409] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="relative">
            <h2 className="text-4xl font-bold text-center mb-8">Discord Community Benefits</h2>
          </div>
          <p className="text-xl text-center max-w-4xl mt-8">
            Join our Discord community and communicate with like-minded traders. Here you will also be
            the first to hear about exciting promotions and giveaways that you won&apos;t want to miss out on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href={"/discord"} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300">
            Join Our Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscordCommunityBenefits;