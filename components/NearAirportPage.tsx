import React from 'react';
import { ArrowLeft, ArrowRight, Plane, BarChart3, Users, Clock, ShieldCheck, Zap } from 'lucide-react';

const NearAirportPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="text-koda-blue" size={32} />,
      title: "AI Dynamic Pricing",
      desc: "Our proprietary algorithm analyzes local competition, flight schedules, and historical data to adjust your rates in real-time, ensuring you never leave money on the table."
    },
    {
      icon: <BarChart3 className="text-koda-blue" size={32} />,
      title: "Inventory Fencing",
      desc: "Automatically protect spots for high-margin direct bookings while strategically distributing remaining inventory across third-party OTAs."
    },
    {
      icon: <Clock className="text-koda-blue" size={32} />,
      title: "Automated Workflows",
      desc: "Eliminate manual check-ins. Our QR-based system allows customers to enter and exit without staff intervention, reducing overhead by up to 30%."
    },
    {
      icon: <ShieldCheck className="text-koda-blue" size={32} />,
      title: "Liability Protection",
      desc: "Integrated damage tracking and digital waivers protect your business from fraudulent claims and minimize insurance premiums."
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
      <section className="py-20 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-koda-blue mb-8">
                <Plane size={24} />
                <span className="uppercase tracking-[0.25em] text-xs font-bold">Industry Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-normal text-koda-black leading-tight mb-8 tracking-tight">
                Enterprise <span className="font-bold">Airport Parking</span> Management.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-12 max-w-xl">
                The high-performance operating system for near-airport parking facilities. Maximize yield, automate operations, and scale with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-5 bg-koda-blue text-white font-bold text-lg hover:bg-koda-darkblue transition-all flex items-center justify-between group shadow-lg">
                  Consult with an Expert <ArrowRight className="ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-koda-blue/5 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1n7yPUUhUeDrTSV-BmBrx36IZIzeBAe8f" 
                alt="Near Airport Parking" 
                className="w-full h-auto object-cover shadow-2xl rounded-sm border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-normal text-koda-black mb-6">Engineered for <span className="font-bold">Efficiency</span></h2>
            <div className="w-20 h-1.5 bg-koda-blue"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-10 border border-gray-200 hover:border-koda-blue transition-all group flex flex-col h-full shadow-sm hover:shadow-xl">
                <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-koda-black mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium flex-grow">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                alt="Analytics" 
                className="w-full h-auto shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-normal text-koda-black mb-8 leading-tight">
                Data-Driven <span className="font-bold">Yield Consultation</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                We don't just provide software; we provide a partnership. Our enterprise clients receive quarterly yield assessments where our data scientists analyze your performance and suggest specific optimizations.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-koda-blue shrink-0"></div>
                  <span className="text-gray-800 font-bold">Predictive Occupancy Modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-koda-blue shrink-0"></div>
                  <span className="text-gray-800 font-bold">Competitive Rate Parity Audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-koda-blue shrink-0"></div>
                  <span className="text-gray-800 font-bold">Custom Loyalty Tier Architecting</span>
                </li>
              </ul>
              <a href="#contact" className="text-koda-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn more about our enterprise services <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearAirportPage;