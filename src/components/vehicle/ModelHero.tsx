import React from 'react';
import { ChevronRight, Award, Zap, Gauge } from 'lucide-react';

interface ModelHeroProps {
  brand: string;
  model: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  specs: {
    power: string;
    acceleration: string;
    features: string;
  };
}

const ModelHero = ({ brand, model, tagline, description, price, image, specs }: ModelHeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={`${brand} ${model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href={`/${brand.toLowerCase()}`} className="hover:text-white transition-colors">{brand}</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{model}</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {model}
          </h1>
          <p className="text-xl md:text-2xl text-red-500 font-semibold mb-4">
            {tagline}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            {description}
          </p>

          {/* Price */}
          <div className="mb-8">
            <p className="text-white/60 text-sm">Starting from</p>
            <p className="text-3xl font-bold text-white">{price}</p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-white/60 text-sm">Power</p>
                <p className="text-white font-medium">{specs.power}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gauge className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-white/60 text-sm">Acceleration</p>
                <p className="text-white font-medium">{specs.acceleration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-white/60 text-sm">Features</p>
                <p className="text-white font-medium">{specs.features}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors">
              Build Your Own
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-md font-semibold hover:bg-white/20 transition-colors border border-white/30">
              Book Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHero;