import React from 'react';
import { Cpu, Zap, Globe, Shield, Award } from 'lucide-react';

const PillarsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            5 Pillars of EAPRO
          </h2>
          <p className="text-xl text-gray-600">
            The foundation of our technological leadership and innovation excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Pillar 1 - Industry Leading R&D */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 group-hover:border-emerald-500 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                  <Cpu className="text-emerald-600" size={48} />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rotate-45"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Industry Leading R&D</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Industry-leading R&D drives innovation in solar and power solutions, delivering efficient, sustainable, and future-ready technologies tailored for evolving energy demands.
            </p>
            <button className="text-gray-700 hover:text-black font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Pillar 2 - Advance Technology */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 group-hover:border-blue-500 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <Zap className="text-blue-600" size={48} />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rotate-45"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Advance Technology</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Explore EAPRO advanced inverter technology using AI, IoT, MPPT, and smart grid integration — designed for efficient, intelligent, and sustainable energy systems.
            </p>
            <button className="text-gray-700 hover:text-black font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Pillar 3 - Manufacturing Power */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 group-hover:border-green-500 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <Globe className="text-green-600" size={48} />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rotate-45"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Manufacturing Power</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              EAPRO Global Ltd. leads the inverter industry with advanced manufacturing, sustainable practices, and precision-engineered facilities—powering smart, reliable energy solutions for a dynamic future.
            </p>
            <button className="text-gray-700 hover:text-black font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Pillar 4 - Quality Assurance */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 group-hover:border-purple-500 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                  <Shield className="text-purple-600" size={48} />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rotate-45"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Quality Assurance</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Discover how EAPRO Global Ltd.'s Quality Department ensures manufacturing excellence through rigorous testing, precision engineering, and industry-leading standards in inverter production.
            </p>
            <button className="text-gray-700 hover:text-black font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Pillar 5 - After Sale Services */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 group-hover:border-red-500 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <Award className="text-red-600" size={48} />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rotate-45"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">After Sale Services</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              EAPRO Global Ltd. after-sales services deliver expert support, fast issue resolution, and ongoing assistance to maximize product performance and customer satisfaction.
            </p>
            <button className="text-gray-700 hover:text-black font-medium transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;