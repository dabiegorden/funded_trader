import React from 'react';

const StatsBar = () => {
  const stats = [
    {
      title: "$ 4.5M",
      description: "Paid Out to traders in 2024"
    },
    {
      title: "90%",
      description: "Receive up to 90% of your simulated profits"
    },
    {
      title: "180+",
      description: "Countries"
    },
    {
      title: "48 h",
      description: "Avg payout processing time"
    }
  ];

  return (
    <div className="w-full bg-green-400 py-5 px-4 mt-8 rounded-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-sm md:text-base text-slate-800">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;