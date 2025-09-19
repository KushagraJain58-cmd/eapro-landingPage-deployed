import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-purple-50/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
            Global Technology Leader in Clean Energy
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight">
          Powering Tomorrow, 
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Starting Now
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          A technology-driven global leader in solar inverters and clean energy, known for innovation,
          premium quality, and futuristic designs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center group text-lg">
            Explore Products
            <ArrowRight
              className="ml-3 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>

          <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full hover:border-black hover:text-black transition-all duration-300 text-lg">
            Get a Quote
          </button>

          <button className="text-emerald-600 px-10 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 text-lg">
            Partner with Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
