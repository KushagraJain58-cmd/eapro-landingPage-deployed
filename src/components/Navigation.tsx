"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">EAPRO</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#products"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                On-Grid Inverters
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                Off-Grid Inverters
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                Solar Modules
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                Batteries
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                Store Locator
              </a>
              <a
                href="#downloads"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                Downloads
              </a>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#products" className="block px-3 py-2 text-gray-700">
              On-Grid Inverters
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-700">
              Off-Grid Inverters
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-700">
              Solar Modules
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-700">
              Batteries
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700">
              Store Locator
            </a>
            <a href="#downloads" className="block px-3 py-2 text-gray-700">
              Downloads
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
