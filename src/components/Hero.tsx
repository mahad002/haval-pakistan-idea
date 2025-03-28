import React, { useState, useRef } from 'react';
import { Car, ChevronLeft, ChevronRight} from 'lucide-react';

interface HeroScreen {
  fallbackImage: string | undefined;
  id: number;
  background: string;
  type: 'video' | 'image';
  logo: string;
  title: string;
  highlight: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

const screens: HeroScreen[] = [
  {
    id: 1,
    background: "https://www.gwmjordan.com/sites/default/files/2024-06/GWM-Tank-300-HEV-Intro.mp4",
    fallbackImage: "https://images.unsplash.com/photo-1675050757561-731d0f88e06c?q=80&w=3271&auto=format&fit=crop",
    type: "video", 
    logo: "https://www.gwm.iq/themes/contrib/haveitall/logo.svg",
    title: "Experience",
    highlight: "Premium SUVs",
    description: "Discover our range of premium SUVs engineered for the modern adventurer",
    stats: [
      { label: "Models", value: "6+ SUVs" },
      { label: "Safety", value: "5-Star ANCAP" }
    ]
  },
  {
    id: 2,
    // background: "https://www.gwm.iq/sites/default/files/styles/full_desktop/public/2024-09/GWM-Haval-Jolion-Pro-Present.webp?itok=R_S2lAjg",
    background: "https://www.gwm.iq/sites/default/files/2023-10/Ora-EV-Trailer-24.mp4",
    type: "video",
    logo: "https://www.gwm.iq/sites/default/files/2023-02/ora-logo%402x_2.png",
    title: "Redefining",
    highlight: "Electric Mobility",
    description: "Zero emissions, maximum performance, and unparalleled style",
    stats: [
      { label: "Power", value: "126 kW" },
      { label: "Speed", value: "0-100 in 6.9s" }
    ],
    fallbackImage: "https://www.gwm.iq/sites/default/files/styles/full_desktop/public/2024-09/GWM-Haval-Jolion-Pro-Present.webp?itok=R_S2lAjg"
  },
  {
    id: 3,
    // background: "https://www.gwm.iq/sites/default/files/2023-10/Ora-EV-Trailer-24.mp4",
    background: "https://www.gwm.iq/sites/default/files/2024-10/H9-2ndgen-video654.mp4",
    type: "video",
    logo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x_0.png",
    title: "The Future is",
    highlight: "Innovation",
    description: "Leading the way in automotive technology and sustainable mobility",
    stats: [
      { label: "Safety", value: "5-Star Rating" },
      { label: "Features", value: "Level 2+ ADAS" }
    ],
    fallbackImage: "https://www.gwm.iq/sites/default/files/styles/full_desktop/public/2024-09/GWM-Haval-Jolion-Pro-Present.webp?itok=R_S2lAjg"
  }
];

const Hero = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const modelsRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videoError, setVideoError] = useState(false);

  const scrollToModels = () => {
    modelsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <>
      <div className="relative h-screen flex items-center overflow-hidden">
        {screens.map((screen, index) => (
          <div
            key={screen.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {screen.type === 'video' && !videoError ? (
              <video
                ref={el => videoRefs.current[index] = el}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              >
                <source src={screen.background} type="video/mp4" />
              </video>
            ) : (
              <img
                src={screen.type === 'video' ? screen.fallbackImage : screen.background}
                alt={screen.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-20000 hover:scale-100"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        ))}
        
        <div className="relative container mx-auto px-4">
          <img
            src={screens[currentScreen].logo}
            alt="Brand Logo"
            className="w-32 md:w-48 mb-6 md:mb-8 opacity-90"
          />
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight transform transition-transform duration-500">
                {screens[currentScreen].title}{' '}
                <span className="text-red-500">{screens[currentScreen].highlight}</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-200 transform transition-all duration-500">
              {screens[currentScreen].description}
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-red-400 font-semibold">
              Now available in Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg sm:max-w-none relative z-10 mb-20 sm:mb-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button 
                  onClick={scrollToModels}
                  className="w-full sm:w-auto min-w-[180px] bg-red-600 text-white px-6 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-base group"
                >
                  <Car className="w-5 h-5" />
                  <span>Explore Now</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </button>
                <button 
                  className="w-full sm:w-auto min-w-[180px] bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-md font-semibold hover:bg-white/20 transition-all duration-300 text-base border border-white/30 hover:border-red-500 flex items-center justify-center"
                >
                  Book a Test Drive
                </button>
              </div>
              <div className="hidden lg:flex ml-8 items-center gap-6">
                {screens[currentScreen].stats.map((stat, index) => (
                  <React.Fragment key={stat.label}>
                    <div className="text-white/80 text-sm">
                      <div className="font-semibold mb-1">{stat.label}</div>
                      <div>{stat.value}</div>
                    </div>
                    {index < screens[currentScreen].stats.length - 1 && (
                      <div className="h-8 w-px bg-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 md:bottom-8 left-4 right-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-white/60 text-sm z-20">
            <button onClick={scrollToModels} className="hover:text-white transition-colors">
              
            </button>
            <div className="flex items-center gap-6 md:gap-8">
              <button 
                onClick={prevScreen}
                className="p-2 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 md:gap-4">
                <span>{String(currentScreen + 1).padStart(2, '0')}</span>
                <div className="w-24 md:w-32 h-px bg-white/20">
                  <div 
                    className="h-full bg-red-500 transition-all duration-500"
                    style={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
                  />
                </div>
                <span>{String(screens.length).padStart(2, '0')}</span>
              </div>
              <button 
                onClick={nextScreen}
                className="p-2 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={modelsRef} />
    </>
  );
};

export default Hero;