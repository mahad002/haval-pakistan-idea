import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Car, Battery, Shield } from 'lucide-react';

interface ModelData {
  model: string;
  url: string;
  imageUrl: string;
  description?: string;
  specs?: {
    power?: string;
    acceleration?: string;
    features?: string;
  };
}

const FeaturedModels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const models: ModelData[] = [
    {
      model: "HAVAL H6 HEV",
      url: "/h6-hev/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/02.webp",
      description: "Experience the perfect fusion of power and efficiency with our advanced hybrid technology",
      specs: {
        power: "240 HP Combined",
        acceleration: "0-100 in 7.5s",
        features: "Level 2 ADAS"
      }
    },
    {
      model: "HAVAL H6",
      url: "/h6/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/03.webp",
      description: "Bold design meets exceptional performance in our flagship SUV",
      specs: {
        power: "201 HP",
        acceleration: "0-100 in 8.2s",
        features: "Panoramic Sunroof"
      }
    },
    {
      model: "HAVAL JOLION",
      url: "/jolion/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/01.webp",
      description: "The perfect companion for urban adventures",
      specs: {
        power: "147 HP",
        acceleration: "0-100 in 9.1s",
        features: "10.25\" Display"
      }
    },
    {
      model: "JOLION HEV",
      url: "/hev-jolion/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/TANK/Black-%E9%87%91%E4%B9%8C%E9%BB%91-00002.png",
      description: "Efficiency meets style in our compact hybrid SUV",
      specs: {
        power: "190 HP Combined",
        acceleration: "0-100 in 8.0s",
        features: "Hybrid System"
      }
    },
    {
      model: "ORA",
      url: "/ora/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/ORA/Ora%203.png",
      description: "The future of electric mobility is here",
      specs: {
        power: "171 HP",
        acceleration: "0-100 in 6.9s",
        features: "400km Range"
      }
    },
    {
      model: "TANK",
      url: "/tank/",
      imageUrl: "https://storage.googleapis.com/havalimages/images/TANK/Gwm%20Tank.png",
      description: "Dominate any terrain with unmatched capability",
      specs: {
        power: "349 HP",
        acceleration: "0-100 in 7.0s",
        features: "Off-road Mode"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section 
      className="relative h-screen bg-black overflow-hidden featured-models flex flex-col"
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 h-screen px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 md:from-black/40 md:via-transparent md:to-black/90" />
        <img
          src={models[currentIndex].imageUrl}
          alt={models[currentIndex].model}
          className={`w-full h-full object-contain md:object-center transition-transform duration-1000 max-w-6xl mx-auto ${
            isDragging ? 'transition-none' : ''
          }`}
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-between z-10 pt-20 md:pt-32 pb-4">
        <div>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4">
              {models[currentIndex].model}
            </h2>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              {models[currentIndex].description}
            </p>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider">Power</p>
                  <p className="text-white font-medium">{models[currentIndex].specs?.power}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Battery className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider">Acceleration</p>
                  <p className="text-white font-medium">{models[currentIndex].specs?.acceleration}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider">Features</p>
                  <p className="text-white font-medium">{models[currentIndex].specs?.features}</p>
                </div>
              </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-start">
            <a
              href={models[currentIndex].url}
              className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-red-500/20"
            >
              Learn More
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-black/30 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-white/10 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10">
              Book Test Drive
            </button>
          </div>
        </div>

        {/* Bottom Slider */}
        <div className="w-full hidden md:block mt-auto">
          <div className="relative">
            <div className="flex gap-6 justify-center items-center max-w-6xl mx-auto">
              {models.map((model, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentIndex === index 
                      ? 'scale-110 ring-2 ring-red-500 translate-y-[-4px] shadow-xl shadow-black/30 opacity-100 z-10' 
                      : 'opacity-40 hover:opacity-70 hover:scale-110'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={model.imageUrl}
                    alt={model.model}
                    className="w-full h-full object-cover transition-transform duration-500 scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{model.model}</p>
                      <p className="text-white/70 text-xs">{model.specs?.power}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-white/60">{String(currentIndex + 1).padStart(2, '0')}</span>
                <div className="w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / models.length) * 100}%` }}
                  />
                </div>
                <span className="text-white/60">{String(models.length).padStart(2, '0')}</span>
              </div>

              <button
                onClick={nextSlide}
                className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="md:hidden w-full mt-auto">
          <div className="flex justify-center items-center gap-2 mb-2">
            {models.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-red-500 w-4' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-white/60 text-xs text-center">
            Swipe to explore more models
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;