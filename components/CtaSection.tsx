import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact-cta" className="bg-koda-blue text-white py-24 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl lg:text-5xl font-normal mb-6">Transform Your Parking Business Now!</h2>
        <p className="text-blue-100 text-xl font-medium mb-12 max-w-3xl">
          AI Powered Solutions for parking business to maximize revenue and streamline operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a 
            href="#contact"
            className="px-10 py-5 bg-white text-koda-blue font-bold hover:bg-gray-100 transition-colors flex items-center justify-center min-w-[240px]"
          >
            Get a Fee Waived Trial
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a 
            href="#contact"
            className="px-10 py-5 border border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center min-w-[240px]"
          >
            Schedule a Demo
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;