import React from 'react';

const GlobalReachSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Global Reach, Local Understanding
          </h2>
          <p className="text-xl text-gray-600">
            Serving businesses worldwide with responsive, adaptable solutions and dedicated support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-8">
            <div className="text-4xl font-bold text-emerald-600 mb-4">10+</div>
            <p className="text-gray-600 text-lg">Years of Excellence</p>
          </div>
          <div className="p-8">
            <div className="text-4xl font-bold text-blue-600 mb-4">50+</div>
            <p className="text-gray-600 text-lg">Countries Served</p>
          </div>
          <div className="p-8">
            <div className="text-4xl font-bold text-purple-600 mb-4">1000+</div>
            <p className="text-gray-600 text-lg">Business Partners</p>
          </div>
          <div className="p-8">
            <div className="text-4xl font-bold text-gray-600 mb-4">24/7</div>
            <p className="text-gray-600 text-lg">Support Network</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;