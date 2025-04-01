import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const JolionHEV = () => {
  const heroData = {
    brand: "HAVAL",
    model: "JOLION HEV",
    tagline: "Efficiency Meets Urban Style",
    description: "Experience the future of urban mobility with the hybrid JOLION. Advanced technology, exceptional efficiency, and premium features in one stylish package.",
    price: "PKR 7,900,000",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
    specs: {
      power: "190 HP Combined",
      acceleration: "0-100 in 8.0s",
      features: "Hybrid System"
    }
  };

  const features = [
    {
      title: "Hybrid Innovation",
      description: "Advanced hybrid system delivering power and efficiency.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
    },
    {
      title: "Urban Efficiency",
      description: "Exceptional fuel economy perfect for city driving.",
      image: "https://images.unsplash.com/photo-1557411732-1797a9171fcf?auto=format&fit=crop&q=80"
    },
    {
      title: "Connected Drive",
      description: "Smart features and connectivity for the modern driver.",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
    }
  ];

  const specifications = [
    {
      category: "Hybrid System",
      items: [
        { name: "System Type", value: "Parallel Hybrid" },
        { name: "Combined Power", value: "190 HP" },
        { name: "Electric Motor", value: "95 kW" },
        { name: "Battery Type", value: "Lithium-ion" }
      ]
    },
    {
      category: "Efficiency",
      items: [
        { name: "Fuel Economy", value: "4.2L/100km" },
        { name: "CO2 Emissions", value: "98 g/km" },
        { name: "Drive Modes", value: "ECO/SPORT/EV" },
        { name: "Range", value: "800+ km" }
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
              Experience Hybrid Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and discover how the JOLION HEV combines
              efficiency with urban sophistication.
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

export default JolionHEV;