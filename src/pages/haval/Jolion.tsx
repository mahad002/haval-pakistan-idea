import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const Jolion = () => {
  const heroData = {
    brand: "HAVAL",
    model: "JOLION",
    tagline: "Urban Adventure Redefined",
    description: "The perfect companion for modern city life. Combining style, technology, and versatility in a compact SUV package.",
    price: "PKR 6,700,000",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
    specs: {
      power: "147 HP",
      acceleration: "0-100 in 9.1s",
      features: "10.25\" Display"
    }
  };

  const features = [
    {
      title: "Modern Design",
      description: "Bold, contemporary styling that stands out in the urban landscape.",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80"
    },
    {
      title: "Smart Connectivity",
      description: "Advanced infotainment system with smartphone integration.",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
    },
    {
      title: "Versatile Space",
      description: "Flexible interior with ample cargo space for all your adventures.",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80"
    }
  ];

  const specifications = [
    {
      category: "Engine & Performance",
      items: [
        { name: "Engine Type", value: "1.5L Turbo" },
        { name: "Maximum Power", value: "147 HP" },
        { name: "Maximum Torque", value: "220 Nm" },
        { name: "Transmission", value: "7-Speed DCT" }
      ]
    },
    {
      category: "Technology",
      items: [
        { name: "Display", value: "10.25\" Touchscreen" },
        { name: "Sound System", value: "6-Speaker System" },
        { name: "Connectivity", value: "Apple CarPlay/Android Auto" },
        { name: "Safety", value: "6 Airbags" }
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
              Your Urban Adventure Awaits
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take the HAVAL JOLION for a test drive and discover why it's the perfect
              companion for your urban lifestyle.
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

export default Jolion;