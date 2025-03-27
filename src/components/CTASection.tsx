import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">Ready to Experience Excellence?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Visit our showroom today and discover why Haval is Pakistan's fastest-growing SUV brand
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors">
            Find a Dealer
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;