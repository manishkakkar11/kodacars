import React from 'react';

const ClientsSection: React.FC = () => {
  const clients = [
    { 
      name: "Motel 6", 
      logo: "https://lh3.googleusercontent.com/d/17uoyewaH0qBw25lJWYHIgfEPpAd194iQ" 
    },
    { 
      name: "APEX", 
      logo: "https://lh3.googleusercontent.com/d/11-vTwCaT_pQFb-uFHWMAMmeVQUjkYZH3" 
    },
    { 
      name: "Stride", 
      logo: "https://lh3.googleusercontent.com/d/1Uq6kq0IDmRWBAxU5T9boXcnTGK9lv2LN" 
    },
    { 
      name: "Orange", 
      logo: "https://lh3.googleusercontent.com/d/1YvfB_9kFLIUh3ZhHzNLhpJG0M6GNG8sA" 
    },
    { 
      name: "Traveling", 
      logo: "https://lh3.googleusercontent.com/d/1t6CeeEhbj2Vci1ETcNhEvgmwVUynwC7o" 
    }
  ];

  return (
    <section id="clients" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="lg:w-1/3 text-center lg:text-left shrink-0">
          <h3 className="text-2xl font-normal text-koda-black leading-tight">
            Our Clients <br className="hidden lg:block" />
            <span className="font-semibold text-koda-text">Benefiting from Our Services</span>
          </h3>
        </div>
        <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-start items-center gap-12 lg:gap-16">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="group flex items-center transition-all duration-500 cursor-default"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to text if image fails to load
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
              ) : null}
              <span 
                className={`text-2xl lg:text-3xl text-gray-900 font-bold tracking-tighter hover:text-koda-blue transition-colors ${client.logo ? 'hidden' : 'block'}`}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;