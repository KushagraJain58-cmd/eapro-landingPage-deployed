import React from 'react';

const InnovationSection: React.FC = () => {
  return (
    <section id="innovation" className="py-24 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl p-12 h-96 flex items-center justify-center">
            <div className="text-8xl">🔬</div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-8">
              Technological Leadership
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over a decade of expertise in pure sine wave innovation. Our R&D team continuously pushes boundaries in power electronics, integrating AI monitoring and smart grid solutions for the future of energy.
            </p>
            <div className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-8">
                <h4 className="text-xl font-bold mb-3">Deep Industry Expertise</h4>
                <p className="text-gray-600">Advanced engineering practices with rigorous quality standards that exceed international benchmarks</p>
              </div>
              <div className="border-l-4 border-green-500 pl-8">
                <h4 className="text-xl font-bold mb-3">Pure Sine Wave Technology</h4>
                <p className="text-gray-600">Clean, stable power for sensitive equipment and production lines with maximum efficiency</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-8">
                <h4 className="text-xl font-bold mb-3">Smart Integration</h4>
                <p className="text-gray-600">AI-powered monitoring, battery-ready systems, and future-ready scalable architectures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;