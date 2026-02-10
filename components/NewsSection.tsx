import React from 'react';
import { ArrowRight, Heart, Truck, ShieldCheck, Smartphone, Bus } from 'lucide-react';

const NewsSection: React.FC = () => {
  const insightArticles = [
    {
      category: "Customer Loyalty",
      title: "Customer Loyalty: Building Customer Loyalty in Off-Airport Parking",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
      icon: <Heart size={20} />,
      id: "loyalty",
      href: "#loyalty-insight"
    },
    {
      category: "Large Vehicle",
      title: "Large Vehicle: Capturing Lost Revenue from Large Vehicles in Off-Airport Parking",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      icon: <Truck size={20} />,
      id: "large-vehicle",
      href: "#large-vehicle"
    },
    {
      category: "Reputation Management",
      title: "Reputation Management: Leveraging Digital Excellence in Off-Airport Parking",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck size={20} />,
      id: "reputation",
      href: "#reputation"
    },
    {
      category: "Self Check In",
      title: "Self Check In: Transforming Hotel Off-Airport Parking Elevating Guest Experience Scores and Minimizing Liability",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
      icon: <Smartphone size={20} />,
      id: "self-check-in",
      href: "#self-check-in"
    },
    {
      category: "Shuttle Services",
      title: "Shuttle Services: Reduce Shuttle Services Friction; Drive Superior Guest Satisfaction and Loyalty",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      icon: <Bus size={20} />,
      id: "shuttle",
      href: "#shuttle"
    }
  ];

  const renderTitle = (title: string) => {
    const [boldPart, regularPart] = title.split(':');
    return (
      <h3 className="text-2xl font-normal leading-tight group-hover:text-koda-blue transition-colors flex-grow">
        <span className="font-bold">{boldPart}:</span>{regularPart}
      </h3>
    );
  };

  return (
    <section id="insights" className="py-12 bg-white px-4 lg:px-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-normal text-koda-black mb-6 tracking-tight">KodaCars <span className="font-bold">Insights</span></h2>
            <p className="text-2xl text-gray-700 font-semibold max-w-3xl leading-relaxed">
              Our thoughts on the near-airport industry and tactics to increase revenue for your business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insightArticles.map((article) => (
            <a 
              key={article.id} 
              id={article.id} 
              href={article.href}
              className="group cursor-pointer flex flex-col bg-white border border-gray-100 hover:border-koda-blue transition-all p-8 shadow-sm hover:shadow-xl"
            >
              <div className="overflow-hidden mb-8 h-64 bg-gray-100 relative">
                 <img 
                    src={article.image} 
                    alt={article.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest text-koda-blue flex items-center gap-2 border border-gray-100 shadow-sm">
                   {article.icon}
                   {article.category}
                 </div>
              </div>
              {renderTitle(article.title)}
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center text-sm font-bold text-gray-400 group-hover:text-koda-blue transition-colors uppercase tracking-widest">
                READ REPORT <ArrowRight size={18} className="ml-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;