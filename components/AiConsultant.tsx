import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { getYieldStrategy } from '../services/geminiService';

const AiConsultant: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [capacity, setCapacity] = useState('');
  const [goals, setGoals] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !capacity) return;

    setLoading(true);
    try {
      const result = await getYieldStrategy(industry, capacity, goals);
      setStrategy(result);
    } catch (err) {
      setStrategy("An error occurred while generating your report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consulting" className="w-full bg-koda-black text-white py-24 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-koda-blue mb-4">
            <Sparkles size={24} />
            <span className="uppercase tracking-widest text-base font-bold">Koda Intelligence</span>
          </div>
          <h2 className="text-3xl lg:text-6xl font-normal mb-8 leading-tight">
            Get a preliminary<br />
            revenue assessment.
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-md font-medium">
            Leverage our Gemini-powered consultant to identify yield opportunities for your specific asset.
          </p>
          
          {strategy && (
            <div className="bg-gray-800 p-8 border-l-4 border-koda-blue animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-white">Strategic Insight</h3>
              <p className="text-gray-200 text-lg whitespace-pre-line leading-relaxed font-semibold">
                {strategy}
              </p>
              <button 
                onClick={() => setStrategy(null)}
                className="mt-6 text-base font-bold text-koda-blue hover:text-white underline underline-offset-4"
              >
                Start new assessment
              </button>
            </div>
          )}
        </div>

        <div className="lg:w-1/2 bg-white text-koda-black p-8 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label className="block text-base font-bold text-gray-700 mb-3 uppercase tracking-wide">Asset Type</label>
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-5 bg-gray-50 border-b-4 border-gray-300 focus:border-koda-blue outline-none transition-colors rounded-none appearance-none text-lg font-bold"
                required
              >
                <option value="" disabled>Select your facility type</option>
                <option value="Near-Airport Parking">Near-Airport Parking</option>
                <option value="Hotel Parking">Hotel Parking</option>
                <option value="Urban Garage">Urban Garage</option>
                <option value="Event Parking">Event Parking</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-700 mb-3 uppercase tracking-wide">Capacity</label>
              <input
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Number of spaces (e.g. 500)"
                className="w-full p-5 bg-gray-50 border-b-4 border-gray-300 focus:border-koda-blue outline-none transition-colors rounded-none text-lg font-bold"
                required
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-700 mb-3 uppercase tracking-wide">Primary Goal</label>
              <input 
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="e.g., Increase RevPAR, Automate entry..."
                className="w-full p-5 bg-gray-50 border-b-4 border-gray-300 focus:border-koda-blue outline-none transition-colors rounded-none text-lg font-bold"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 flex items-center justify-between w-full p-6 bg-koda-blue text-white hover:bg-koda-darkblue transition-colors text-xl font-bold disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span>Analyzing...</span>
                  <Loader2 size={24} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>Generate Report</span>
                  <ArrowRight size={24} />
                </>
              )}
            </button>
            
            <p className="text-sm text-gray-600 mt-2 font-semibold italic text-center">
              By clicking generate, you agree to our terms of service. This tool uses AI and provides estimates only.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;