import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const H6HEV = () => {
  const heroData = {
    brand: "HAVAL",
    model: "H6 HEV",
    tagline: "Hybrid Innovation Meets Premium Comfort",
    description: "The perfect fusion of power and efficiency. Experience the future of sustainable mobility with advanced hybrid technology and premium features.",
    price: "PKR 9,499,000",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80",
    specs: {
      power: "240 HP Combined",
      acceleration: "0-100 in 7.5s",
      features: "Level 2 ADAS"
    }
  };

  const features = [
    {
      title: "Hybrid Excellence",
      description: "Advanced hybrid powertrain delivering exceptional performance and efficiency.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
    },
    {
      title: "Smart Technology",
      description: "Cutting-edge infotainment and connectivity features for a connected driving experience.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
    },
    {
      title: "Eco-Friendly",
      description: "Reduced emissions and improved fuel efficiency without compromising on performance.",
      image: "https://images.unsplash.com/photo-1471477985642-4eec2879c486?auto=format&fit=crop&q=80"
    }
  ];

  const specifications = [
    {
      category: "Hybrid Powertrain",
      items: [
        { name: "Engine Type", value: "2.0L Turbo Hybrid" },
        { name: "Combined Power", value: "240 HP" },
        { name: "Electric Motor", value: "130 kW" },
        { name: "Battery Capacity", value: "1.8 kWh" }
      ]
    },
    {
      category: "Performance",
      items: [
        { name: "Acceleration", value: "7.5s (0-100 km/h)" },
        { name: "Top Speed", value: "180 km/h" },
        { name: "Fuel Economy", value: "5.2L/100km" },
        { name: "Transmission", value: "Hybrid DCT" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <ModelHero {...heroData} />
      <FeatureSection features={features} />
      <SpecsTable specifications={specifications} />
      
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Hybrid Innovation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and discover the perfect balance of power and efficiency
              in the all-new HAVAL H6 HEV.
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

export default H6HEV;