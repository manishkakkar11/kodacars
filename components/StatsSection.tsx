import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: "30-40%", label: "Increase in revenue" },
    { value: "6%", label: "Increase in overall parking spot utilization" },
  ];

  return (
    <section className="py-24 bg-koda-gray px-4 lg:px-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-normal text-koda-black mb-16 text-center">Real Results from Real Businesses</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 lg:gap-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-6xl font-normal text-koda-blue mb-4 group-hover:text-koda-darkblue transition-colors">{stat.value}</span>
              <span className="text-lg font-medium text-gray-700 max-w-[280px] leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;