import React from 'react';
import { ArrowLeft, ArrowRight, Building2, Coins, UserCheck, ShieldCheck, Heart, Smartphone } from 'lucide-react';

const HotelParkingPage: React.FC = () => {
  const benefits = [
    {
      icon: <Coins className="text-koda-blue" size={32} />,
      title: "New Revenue Stream",
      desc: "Turn empty lot space into a profit center. Hotels typically see a $5k-$20k monthly increase in passive income by opening underutilized inventory to the park-and-fly market."
    },
    {
      icon: <UserCheck className="text-koda-blue" size={32} />,
      title: "Guest Priority Protection",
      desc: "Our smart inventory management ensures your primary hotel guests always have a spot reserved, even during peak airport travel periods."
    },
    {
      icon: <Smartphone className="text-koda-blue" size={32} />,
      title: "Zero Staff Friction",
      desc: "Travelers check in and out via mobile. Your front desk staff doesn't need to lift a finger—no vouchers to validate, no payments to process."
    },
    {
      icon: <Heart className="text-koda-blue" size={32} />,
      title: "Enhanced Experience",
      desc: "Modern digital check-in improves your brand perception and can lead to higher guest satisfaction scores on sites like TripAdvisor and Marriott Bonvoy."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white font-sans antialiased animate-fade-in">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-16 py-6">
          <a href="#" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-koda-blue transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-koda-blue mb-8">
                <Building2 size={24} />
                <span className="uppercase tracking-[0.25em] text-xs font-bold">Asset Monetization</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-normal text-koda-black leading-tight mb-8 tracking-tight">
                Unlock Your <span className="font-bold">Hotel's Parking</span> Potential.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-12 max-w-xl">
                Monetize your parking asset without adding operational burden. KodaCars provides the bridge between your vacant spaces and airport travelers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-5 bg-koda-blue text-white font-bold text-lg hover:bg-koda-darkblue transition-all flex items-center justify-between group shadow-lg">
                  Get a Free Revenue Projection <ArrowRight className="ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-koda-blue/5 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1jV4DhQGeclXO-xJ5sQoZ5-vYsVxt__RK" 
                alt="Hotel Parking" 
                className="w-full h-auto object-cover shadow-2xl rounded-sm border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-koda-black text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-normal mb-6">Passive <span className="font-bold">Income</span>, Active Results.</h2>
            <p className="text-xl text-gray-400 font-medium max-w-2xl">
              Our automated system handles the entire lifecycle of a parking reservation, from booking to payout.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-10 border border-gray-800 hover:border-koda-blue transition-all group flex flex-col h-full bg-gray-900/50">
                <div className="mb-8 text-koda-blue group-hover:scale-110 transition-transform origin-left">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium flex-grow">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-normal text-koda-black mb-8 leading-tight">
                Seamless <span className="font-bold">Check-in Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                The KodaCars platform integrates with your existing workflows. We provide a white-labeled reservation portal and an intuitive dashboard to monitor occupancy in real-time.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 border border-gray-100 text-koda-blue">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-koda-black">Digital Liability Waivers</h4>
                    <p className="text-sm text-gray-600">Every parker signs a digital waiver protecting your hotel from standard lot liabilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 border border-gray-100 text-koda-blue">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-koda-black">Shuttle Tracking Integration</h4>
                    <p className="text-sm text-gray-600">Sync with your hotel shuttle service so parkers know exactly when the next ride arrives.</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-block px-8 py-4 border-2 border-koda-black text-koda-black font-bold hover:bg-koda-black hover:text-white transition-all">
                Book a Platform Walkthrough
              </a>
            </div>
            <div>
              <div className="relative p-12 bg-gray-50 border border-gray-100 shadow-inner rounded-xl">
                 <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
                    alt="Hotel Reception" 
                    className="w-full h-auto shadow-2xl rounded-sm"
                 />
                 <div className="absolute -bottom-6 -right-6 p-6 bg-koda-blue text-white shadow-xl max-w-[200px]">
                   <p className="text-2xl font-bold">$12k+</p>
                   <p className="text-xs font-bold uppercase tracking-widest">Avg. monthly revenue per partner</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelParkingPage;