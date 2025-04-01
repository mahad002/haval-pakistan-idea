import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const O7 = () => {
  const [selectedExteriorImage, setSelectedExteriorImage] = useState(0);
  const [selectedInteriorImage, setSelectedInteriorImage] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  const exteriorImages = [
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410%202.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410%203.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410%204.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410%205.jpg"
  ];

  const interiorImages = [
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20interior/ORAINT%20%20516x410%20.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20interior/ORAINT%20%20516x410%202.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20interior/ORAINT%20%20516x410%203.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20interior/ORAINT%20%20516x410%204.jpg",
    "https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20interior/ORAINT%20%20516x410%205.jpg"
  ];

  const heroData = {
    brand: "ORA",
    model: "O7",
    tagline: "Premium Electric Elegance",
    description: "Experience luxury redefined with zero emissions. The ORA O7 combines sophisticated design, advanced technology, and sustainable performance.",
    price: "PKR 8,900,000",
    image: "https://www.ora.com.hk/media/wk5pplve/20240731_ora07_adaptation_1920x1080_la2.jpg",
    specs: {
      power: "204 HP",
      acceleration: "0-100 in 6.5s",
      features: "500km Range"
    }
  };

  const features = [
    {
      title: "Premium Electric",
      description: "High-performance electric powertrain with extended range capability.",
      image: "https://www.ora.com.hk/media/bc3d1ol3/gallery_1_800x1360.jpg"
    },
    {
      title: "Luxury Interior",
      description: "Premium materials and advanced comfort features for an exceptional experience.",
      image: "https://www.ora.com.hk/media/idopqt3i/gallery_2_800x1360_2.jpg"
    },
    {
      title: "Smart Technology",
      description: "Advanced driver assistance and connectivity features.",
      image: "https://www.ora.com.hk/media/0nqbahjl/gallery_3_800x1360_3.jpg"
    }
  ];

  const specifications = [
    {
      category: "Performance",
      items: [
        { name: "Max Power (kW)", value: "150kW" },
        { name: "Max Torque (Nm)", value: "340Nm" },
        { name: "Torque", value: "220 NM" }
      ]
    },
    {
      category: "Battery & Range",
      items: [
        { name: "Battery Type", value: "Lithium Ion Phosphate Battery" },
        { name: "Battery Capacity (kWh)", value: "83.49" },
        { name: "Electric Range (NEDC)", value: "640 (FWD), 550 (AWD)" }
      ]
    },
    {
      category: "Dimensions",
      items: [
        { name: "Overall length (mm)", value: "4871" },
        { name: "Overall width (mm)", value: "1862" },
        { name: "Overall height (mm)", value: "1500" }
      ]
    }
  ];

  // Add intersection observer to play video when it's in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play()
              .catch((error) => {
                console.error("Auto-play failed:", error);
              });
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  // Handle video click to toggle audio
  const handleToggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Navigate through images (mobile only)
  const navigateImage = (type, direction) => {
    if (type === 'exterior') {
      const newIndex = (selectedExteriorImage + direction + exteriorImages.length) % exteriorImages.length;
      setSelectedExteriorImage(newIndex);
    } else {
      const newIndex = (selectedInteriorImage + direction + interiorImages.length) % interiorImages.length;
      setSelectedInteriorImage(newIndex);
    }
  };

  return (
    <div className="min-h-screen">
      <ModelHero {...heroData} />
      
      {/* Video Section */}
      <div className="relative bg-black py-24" ref={videoSectionRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/havalimages/images/ORA%20O7/Video/ora07-video1%20(1).webm"
              muted={isMuted}
              loop
              playsInline
              autoPlay
              poster="https://storage.googleapis.com/havalimages/images/ORA%20O7/large%20exterior/ORAEXT%20516x410%202.jpg"
            />
            {/* Audio toggle button */}
            <button 
              onClick={handleToggleAudio}
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 rounded-full p-3 transition-opacity hover:bg-opacity-80 focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6 text-white" />
              ) : (
                <Volume2 className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Exterior Section - Image on right */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-16 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12 md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exterior Design</h2>
            <p className="text-gray-600 max-w-3xl mx-auto md:mx-0">
              The ORA O7's exterior design combines elegance with modern aesthetics, featuring sleek lines and premium detailing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Description and content */}
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-4">
                  Experience the perfect blend of sophistication and aerodynamic efficiency. 
                  Every curve of the ORA O7 has been meticulously designed to create a vehicle 
                  that not only looks premium but performs exceptionally.
                </p>
                <p className="text-gray-700">
                  The distinctive front grille, sleek LED headlights, and elegant profile
                  create a commanding presence on the road, turning heads wherever you go.
                </p>
              </div>
              
              {/* Desktop thumbnails */}
              <div className="hidden md:flex mt-6 flex-wrap gap-3">
                {exteriorImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExteriorImage(index)}
                    className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                      selectedExteriorImage === index 
                        ? 'ring-2 ring-red-500 shadow-md' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ width: '100px', height: '75px' }}
                  >
                    <img
                      src={image}
                      alt={`Exterior view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Main image and mobile navigation */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={exteriorImages[selectedExteriorImage]}
                  alt={`ORA O7 exterior view ${selectedExteriorImage + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                  <h3 className="text-white text-xl font-bold">ORA O7</h3>
                  <p className="text-white/90 text-sm">Premium Exterior</p>
                </div>
              </div>
              
              {/* Mobile image navigation only */}
              <div className="flex justify-between items-center mt-4 md:hidden">
                <button 
                  onClick={() => navigateImage('exterior', -1)} 
                  className="bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-gray-500 text-sm font-medium">
                  {selectedExteriorImage + 1} / {exteriorImages.length}
                </span>
                <button 
                  onClick={() => navigateImage('exterior', 1)} 
                  className="bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interior Section - Image on left */}
      <section className="min-h-screen flex items-center bg-gray-100 py-16 md:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12 md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interior Comfort</h2>
            <p className="text-gray-600 max-w-3xl mx-auto md:ml-auto md:mr-0">
              Step inside the ORA O7 and experience a cabin crafted with premium materials and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Main image and mobile navigation */}
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={interiorImages[selectedInteriorImage]}
                  alt={`ORA O7 interior view ${selectedInteriorImage + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                  <h3 className="text-white text-xl font-bold">ORA O7</h3>
                  <p className="text-white/90 text-sm">Luxurious Interior</p>
                </div>
              </div>
              
              {/* Mobile image navigation only */}
              <div className="flex justify-between items-center mt-4 md:hidden">
                <button 
                  onClick={() => navigateImage('interior', -1)} 
                  className="bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-gray-500 text-sm font-medium">
                  {selectedInteriorImage + 1} / {interiorImages.length}
                </span>
                <button 
                  onClick={() => navigateImage('interior', 1)} 
                  className="bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            {/* Features and thumbnails */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-4">
                  Interior Highlights
                </h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium leather seats with heating and ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Advanced infotainment system with 12.3" touchscreen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Smart ambient lighting with customizable colors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Spacious cabin with premium materials throughout</span>
                  </li>
                </ul>
              </div>
              
              {/* Desktop thumbnails */}
              <div className="hidden md:flex mt-6 flex-wrap gap-3 justify-end">
                {interiorImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedInteriorImage(index)}
                    className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                      selectedInteriorImage === index 
                        ? 'ring-2 ring-red-500 shadow-md' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ width: '100px', height: '75px' }}
                  >
                    <img
                      src={image}
                      alt={`Interior view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection features={features} />
      <SpecsTable specifications={specifications} />
      
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Electric Luxury
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and discover how the ORA O7 redefines
              premium electric mobility.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <TestDriveForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default O7;