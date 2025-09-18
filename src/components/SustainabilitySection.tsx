import React from 'react';
import { Leaf, Globe, Zap } from 'lucide-react';

const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Sustainability At The Core
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advancing green energy goals with clean, renewable power solutions that reduce carbon footprint, support ESG priorities, and contribute to a sustainable future for all.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Leaf className="text-emerald-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-6">Clean Energy Transition</h3>
            <p className="text-gray-600 leading-relaxed">
              Solar solutions that reduce dependence on fossil fuels, lower emissions, and accelerate your journey to carbon neutrality
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Globe className="text-blue-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-6">ESG Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              Meet regulatory requirements while reinforcing environmental commitments and enhancing your sustainability credentials
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Zap className="text-purple-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-6">Energy Efficiency</h3>
            <p className="text-gray-600 leading-relaxed">
              Smart architectures that maximize both environmental and financial outcomes with long-term value creation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;