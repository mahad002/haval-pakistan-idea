import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Ready to Experience Excellence?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto">
          Visit our showroom today and discover why Haval is Pakistan's fastest-growing SUV brand
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 md:px-0">
          <button className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors">
            Find a Dealer
          </button>
          <button className="border-2 border-white/80 text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;