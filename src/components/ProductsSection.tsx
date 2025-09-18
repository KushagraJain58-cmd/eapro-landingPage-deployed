import React from 'react';
import { ArrowRight, Zap, Sun, Battery, Grid } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            OUR PRODUCTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation energy solutions engineered for tomorrow&apos;s world
          </p>
        </div>

        {/* Modern Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Off-Grid Inverters */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Off-Grid Inverters</h3>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors group-hover:scale-110 duration-300">
                  <Zap className="text-emerald-600" size={24} />
                </div>
              </div>
              <div className="mb-8 h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative flex space-x-4">
                  <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-4 bg-green-400 rounded-t-lg"></div>
                  </div>
                  <div className="w-16 h-24 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-4 bg-green-400 rounded-t-lg"></div>
                  </div>
                  <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-4 bg-green-400 rounded-t-lg"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Reliable and efficient inverters designed to deliver seamless power backup with advanced technology for homes and businesses.
              </p>
              <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Solar Modules */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Solar Modules</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors group-hover:scale-110 duration-300">
                  <Sun className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="mb-8 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative grid grid-cols-2 gap-2">
                  <div className="w-20 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded border-2 border-blue-300 shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-20 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded border-2 border-blue-300 shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-20 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded border-2 border-gray-400 shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-20 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded border-2 border-indigo-300 shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Premium solar panels expertly engineered for superior efficiency, long-lasting durability, and reliable, eco-friendly energy production.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Batteries */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Batteries</h3>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors group-hover:scale-110 duration-300">
                  <Battery className="text-purple-600" size={24} />
                </div>
              </div>
              <div className="mb-8 h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative flex space-x-4">
                  <div className="w-24 h-32 bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg shadow-lg border-4 border-orange-300 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <Battery className="text-white mb-2" size={20} />
                    <span className="text-white text-xs font-bold">EAPRO</span>
                  </div>
                  <div className="w-24 h-32 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg shadow-lg border-4 border-yellow-300 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <Battery className="text-white mb-2" size={20} />
                    <span className="text-white text-xs font-bold">EAPRO</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                High-performance batteries designed for reliable power storage, exceptional durability, and long-lasting energy backup solutions.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>

          {/* On-Grid Inverters */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">On-Grid Inverters</h3>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors group-hover:scale-110 duration-300">
                  <Grid className="text-green-600" size={24} />
                </div>
              </div>
              <div className="mb-8 h-48 bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="w-20 h-16 bg-white rounded-lg border-2 border-gray-300 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group-hover:scale-105">
                    <Grid className="text-gray-600" size={20} />
                  </div>
                  <div className="w-20 h-16 bg-white rounded-lg border-2 border-gray-300 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group-hover:scale-105">
                    <Grid className="text-gray-600" size={20} />
                  </div>
                  <div className="w-20 h-12 bg-gradient-to-r from-gray-800 to-black rounded shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">EAPRO</span>
                  </div>
                  <div className="w-20 h-12 bg-gradient-to-r from-gray-800 to-black rounded shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Grid className="text-white" size={16} />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Say goodbye to high electricity bills! Our on-grid inverters optimize power utilization for maximum savings. Empower your home or business with sustainable energy today!
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center group-hover:translate-x-2 duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
