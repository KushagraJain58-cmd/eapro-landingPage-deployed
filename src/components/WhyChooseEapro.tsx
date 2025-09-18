import React from 'react';
import { Award, Zap, Cpu, Leaf, Globe } from 'lucide-react';

const WhyChooseEapro: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Why Choose EAPRO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your strategic partner for reliable, sustainable power solutions that drive business success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-emerald-400" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4">Reliability</h3>
            <p className="text-gray-300">Consistent power delivery you can count on for critical operations</p>
          </div>
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-blue-400" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4">Efficiency</h3>
            <p className="text-gray-300">Maximum energy conversion with minimal waste and operational costs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cpu className="text-purple-400" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-300">Futuristic design with AI-powered technology and smart features</p>
          </div>
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-emerald-400" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-300">Eco-friendly solutions advancing your green energy goals</p>
          </div>
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-blue-400" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-4">Global Reach</h3>
            <p className="text-gray-300">Worldwide presence with local understanding and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEapro;