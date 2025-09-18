import React from 'react';
import { Globe, Zap, Award } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Powering Business With 
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At EAPRO, we don't just manufacture inverters; we engineer tailored, sustainable power solutions that help businesses thrive in a dynamic market. With over a decade of expertise, EAPRO has become a trusted name worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Leadership</h3>
            <p className="text-gray-600 leading-relaxed">Positioned as the Apple/Tesla of solar technology with worldwide presence and trusted partnerships across industries</p>
          </div>
          <div className="text-center p-8 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
            <p className="text-gray-600 leading-relaxed">Cutting-edge R&D with AI-powered monitoring, digital control systems, and smart grid integration technology</p>
          </div>
          <div className="text-center p-8 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-gray-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
            <p className="text-gray-600 leading-relaxed">Products designed for performance, sustainability, and elegance with rigorous quality assurance protocols</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;