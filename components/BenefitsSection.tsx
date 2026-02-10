import React, { useState } from 'react';
import { CheckCircle2, Info, ArrowRight } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Increase Revenues Up to 40%",
      desc: "Dynamic pricing; Capture fees for oversized vehicles and early arrivals and late departures.",
      highlight: "40%"
    },
    {
      title: "Maximize Parking Lot Utilization",
      desc: "Optimize real-time parking capacity with smart booking tracking technology and predictive occupancy modeling.",
      highlight: ""
    },
    {
      title: "Operational Efficiency",
      desc: "Seamless check-in by AI-powered staff management tools that reduce wait times and boost customer loyalty.",
      highlight: ""
    }
  ];

  const handleToggleFlip = (idx: number) => {
    // Only toggle on mobile widths
    if (window.innerWidth < 1024) {
      setFlippedIndex(flippedIndex === idx ? null : idx);
    }
  };

  return (
    <section id="benefits" className="py-24 bg-koda-purple text-white scroll-mt-16 overflow-hidden relative">
      {/* Subtle ambient glow for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-16 relative z-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1.5 bg-koda-green mb-8"></div>
            <h2 className="text-4xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
              Why Choose <span className="font-bold">KodaCars?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
              Same Spaces, Higher Profits. Our platform is designed specifically to solve the unique yield challenges of airport parking.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleToggleFlip(idx)}
              className="relative group h-[320px] lg:h-[420px] [perspective:1000px] cursor-pointer lg:cursor-default"
            >
              {/* Inner container for 3D flip effect - Only active on mobile (<1024px) */}
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndex === idx ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front Face: Visible by default on both, but hides description on mobile front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white p-8 lg:p-10 flex flex-col transition-all duration-500 lg:group-hover:shadow-2xl overflow-hidden">
                  {/* IBM-style indicator bar on the left */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-koda-green transform scale-y-0 lg:group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  
                  <div className="text-koda-purple mb-6 transition-transform duration-500 lg:group-hover:scale-110 flex-shrink-0">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-koda-black mb-6 leading-tight flex-shrink-0">
                    {idx === 0 ? (
                      <>Increase Revenues Up to <span className="font-extrabold text-koda-black lg:group-hover:text-koda-blue transition-colors duration-500">40%</span></>
                    ) : item.title}
                  </h3>
                  
                  {/* Desktop Only Reveal: Keeps current interaction for desktop */}
                  <div className="hidden lg:block flex-grow">
                    <p className="text-gray-600 text-xl leading-relaxed font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.desc}
                    </p>
                  </div>

                  {/* Mobile Only visual hint */}
                  <div className="mt-auto lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-koda-purple/50 flex-shrink-0">
                    <Info size={14} /> Tap for details
                  </div>
                </div>

                {/* Back Face: Only visible on mobile after flip */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white p-8 flex flex-col lg:hidden border-2 border-koda-green overflow-hidden">
                  <div className="text-koda-green mb-6 flex-shrink-0">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-koda-black mb-4 uppercase tracking-widest flex-shrink-0">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg font-medium leading-relaxed flex-grow overflow-y-auto">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-koda-green font-bold text-sm uppercase tracking-widest gap-2 flex-shrink-0">
                    Close <ArrowRight size={16} className="rotate-180" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;