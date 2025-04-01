import React from 'react';
import Hero from '../components/Hero';
import SUVModelsShowcase from '../components/SUVModelsShowcase';
import FeaturedModels from '../components/FeaturedModels';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Models Showcase */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Our Premium SUV Collection
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover the perfect blend of luxury and performance
          </p>
        </div>
        <SUVModelsShowcase />
      </div>
      <FeaturedModels />
      <CTASection />
    </div>
  );
};

export default Home;