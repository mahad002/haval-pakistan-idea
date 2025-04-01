import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exceptional Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the innovative features that set the ORA O7 apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === index ? 'scale-110 brightness-90' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-90' : 'opacity-50'
                }`}></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
                <h3 className={`text-xl md:text-2xl font-bold mb-2 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0' : 'translate-y-0'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-white/90 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'
                }`}>
                  {feature.description}
                </p>
                <div className={`mt-4 inline-flex items-center font-semibold transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;