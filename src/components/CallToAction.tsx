import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black to-gray-800 text-white text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/90"></div>
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="relative z-10 text-5xl md:text-6xl font-bold mb-8">
          Where Every Watt Counts
        </h2>
        <p className="relative z-10 text-xl text-gray-300 mb-12 leading-relaxed">
          Join industry leaders who trust EAPRO for reliable, sustainable power solutions. Let's work together to build a robust, resilient, and sustainable energy future for your organization.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center group text-lg">
            Explore Products
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg">
            Get a Quote
          </button>
          <button className="border-2 border-gray-400 text-gray-300 px-10 py-4 rounded-full hover:border-white hover:text-white transition-all duration-300 text-lg">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;