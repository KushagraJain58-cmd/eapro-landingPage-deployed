import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">EAPRO</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Where Every Watt Counts. Powering the world with innovation, reliability, and sustainable solutions for a cleaner energy future.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">On-Grid Inverters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Off-Grid Inverters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solar Modules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Batteries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Monitoring</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Innovation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Store Locator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={18} className="mr-4 text-gray-400" />
                <span className="text-gray-400">+91 (0) 000-000-0000</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-4 text-gray-400" />
                <span className="text-gray-400">info@eapro.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-4 text-gray-400 mt-1" />
                <span className="text-gray-400">Global Headquarters<br />India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EAPRO Global Limited. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;