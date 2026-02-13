import React, { useState, useEffect } from 'react';
import { X, Info, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const members: TeamMember[] = [
    {
      name: "Brahm Om Sharma",
      role: "CEO",
      image: "https://lh3.googleusercontent.com/d/18tnS1U8e70RS2HkUBQpiX-185-j0xdtd",
      bio: "Brahm is an experienced CIO in InsurTech and FinTech with an MS in Production Engineering, who spent the last 30 years delivering numerous multi-million-dollar technology projects in high-pressure environments at Aon, Marsh, TCS, Ryder, & others."
    },
    {
      name: "Rohan Sharma",
      role: "Co-Founder",
      image: "https://lh3.googleusercontent.com/d/1XAhSo8sNUU7AkAkSyClct-eQnVX1Yx2n",
      bio: "Rohan is an Economics & Management graduate from the University of Oxford who brings a valuable network and key skills in finance, marketing, and applied mathematics."
    },
    {
      name: "Will Pagan",
      role: "Advisor & CMO",
      image: "https://lh3.googleusercontent.com/d/1-OsqspaRWu0VIC7JoK5N2YK2entvspLJ",
      bio: "Will Pagan brings over 20 years of senior management experience to the KodaCars Advisory Board, with a focus on business growth, product optimization, and AI-driven fraud mitigation—helping prevent $3.7B in auto and financial services fraud. He has deep expertise in building data-rich platforms and leading regulated, high-volume insurance programs. Will has also served as a lobbyist, authoring bills and advocating for mobile insurance solutions that protect both carriers and consumers. Previously, he held executive roles at CARCO Group, InsPro Technologies, Aon Affinity, AIG, and First Data."
    },
    {
      name: "Caslav Savic",
      role: "Director of Sales",
      image: "https://lh3.googleusercontent.com/d/12JYMHIxab7XQssIzGc9IsJHgknkEBVYZ",
      bio: "Caslav brings over 10 years of experience driving performance-based B2B revenue growth through high-impact partnerships and data-driven lead generation. He focuses on connecting KodaCars with forward-thinking partners and customers, expanding market reach, and driving qualified opportunities."
    },
    {
      name: "Mohit Gupta",
      role: "Advisor",
      image: "https://lh3.googleusercontent.com/d/1TMro23VTBy8t81nBDddSmyN0gCdR-2Hj",
      bio: "Founder & CEO of Damco Solutions, an entrepreneurial leader with over 30 years of technology experience. Mohit plays a pivotal role in shaping KodaCar's technology and innovation."
    },
    {
      name: "Mayrelis Caldera",
      role: "Customer Success Leader",
      image: "https://lh3.googleusercontent.com/d/1KsXZ4EzJ-IpFY-Kn-ayMgRRTCdHlPGNU",
      bio: "Mayrelis is an expert in customer relations and enterprise platform adoption. She leads the Customer Success department at KodaCars, focusing on building long-term partnerships and ensuring that operators achieve peak performance and ROI using our AI-driven ecosystem. Her proactive approach to onboarding and strategic support ensures that every client maximizes their parking asset value."
    },
    {
      name: "Andy Bess",
      role: "Advisor",
      image: "https://lh3.googleusercontent.com/d/18tYxd2cui3d5LzD4dbhG7pxKa4LKmza8",
      bio: "A seasoned investment banker renowned in the parking and mobility industry. Andy's strategic insights and advisory role are invaluable, guiding KodaCar's in positioning itself effectively in the mobility space."
    },
    {
      name: "Richard Piotrowski",
      role: "Advisor",
      image: "https://lh3.googleusercontent.com/d/1CTxC-auSxvrZZNLtRSPRj_WP0d9XRHpW",
      bio: "Richard Piotrowski is an advisory board member at KodaCars, bringing extensive expertise in car lending and parking lot operations. He owns and operates several car-rental and car-parking facilities across Florida, from which he leverages his insights to support KodaCars' strategic initiatives. His contributions include facilitating our initial pilot in Miami and Orlando, co-innovating to streamline our partners' operations, advising on our risk management strategies, and connecting with the broader industry."
    },
    {
      name: "Sunil Gupta",
      role: "CTO",
      image: "https://lh3.googleusercontent.com/d/1VOxkdgejJNBG-A4usAd8uFwnB7j0vWfJ",
      bio: "Sunil Kumar Gupta is the CTO at KodaCars, driving technology strategy, product architecture, and digital innovation. With 17+ years in enterprise software, cloud-native design, and AI platforms, he brings deep expertise across automotive, mobility, and infrastructure. He leads engineering teams, steers platform optimization, and aligns tech initiatives with business goals."
    },
    {
      name: "Bob Pichler",
      role: "Operations Strategy Leader",
      image: "https://lh3.googleusercontent.com/d/13vG0RvYhEGq1ZrypgGHc7l1Scw-Logdc",
      bio: "Dynamic executive with 20+ years of experience leading strategy and operations across private equity, SMBs, and public organizations. Expert in using data-driven insights to streamline processes, enhance customer experience, and drive scalable growth through cross-functional collaboration."
    },
    {
      name: "Ravi Vaidya",
      role: "Advisor & Legal",
      image: "https://lh3.googleusercontent.com/d/1gzClQoyqKF2fvw8mREYuGyHhRAkWtk3E",
      bio: "Ravi Vaidya, MBA, JD, is a seasoned business advisor with over 40 years of experience helping startups and early-stage ventures navigate growth and achieve success. With a global track record across numerous industries, Ravi has spent the last decade intensely focused on advising founders during critical launch phases. He provides hands-on strategic guidance in areas like fundraising, M&A, and executive mentoring, consistently helping companies refine their vision and prepare for long-term growth."
    },
    {
      name: "Calvin Johnson",
      role: "Advisor",
      image: "https://lh3.googleusercontent.com/d/10A4j_Lkx9Znn23cL3i-UvrgZ3d7b6XSN",
      bio: "Bringing four decades of insurance industry experience, Calvin focuses on driving growth and innovation across multiple product lines, a vital asset to KodaCars."
    }
  ];

  return (
    <section id="team" className="bg-white scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="mb-20">
          <div className="w-12 h-1.5 bg-koda-blue mb-8"></div>
          <h2 className="text-4xl lg:text-6xl font-normal text-koda-black mb-6 tracking-tight">Our <span className="font-bold">Team</span></h2>
          <p className="text-2xl text-gray-700 font-semibold max-w-4xl leading-relaxed">
            Our team combines decades of experience in airport operations, technology, and business development to revolutionize parking management for the travel industry.
          </p>
          <p className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest">Select a profile to view professional experience</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div 
                onClick={() => setSelectedMember(member)}
                className="relative w-full aspect-square transition-all duration-500 overflow-hidden mb-8 border border-gray-100 shadow-sm cursor-pointer group-hover:shadow-xl bg-gray-50"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" 
                />
                
                {/* Visual Indicator - Info Button */}
                <div className="absolute bottom-4 right-4 p-2.5 bg-white/95 backdrop-blur shadow-lg rounded-full text-koda-blue transform transition-all duration-300 hover:scale-110 hover:bg-koda-blue hover:text-white">
                  <Info size={22} />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-koda-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="text-left">
                <h4 className="text-xl font-bold text-koda-black group-hover:text-koda-blue transition-colors">{member.name}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{member.role}</p>
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 inline-flex items-center text-xs font-bold text-koda-blue uppercase tracking-widest hover:underline gap-1 group/btn"
                >
                  View Bio <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal Pop-up */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-koda-black/80 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-4xl shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-koda-blue hover:text-white transition-all text-koda-black"
            >
              <X size={24} />
            </button>

            {/* Left: Image (Visible on larger screens) */}
            <div className="lg:w-2/5 shrink-0 bg-gray-100">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right: Bio Content */}
            <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-12 h-1.5 bg-koda-blue mb-6"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-koda-black mb-2 tracking-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-bold text-koda-blue uppercase tracking-[0.25em]">
                  {selectedMember.role}
                </p>
              </div>

              <div className="prose prose-lg">
                <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                  "{selectedMember.bio}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;