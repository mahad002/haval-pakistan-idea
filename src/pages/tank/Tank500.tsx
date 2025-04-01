import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const Tank500 = () => {
  const heroData = {
    brand: "TANK",
    model: "500",
    tagline: "Dominate Every Terrain",
    description: "Experience unmatched capability and luxury in the TANK 500. Built for those who demand the extraordinary in both on-road comfort and off-road prowess.",
    price: "PKR 19,500,000",
    image: "https://images.unsplash.com/photo-1669214723831-7626b4daa17a?auto=format&fit=crop&q=80",
    specs: {
      power: "349 HP",
      acceleration: "0-100 in 7.0s",
      features: "Off-road Mode"
    }
  };

  const features = [
    {
      title: "Off-Road Excellence",
      description: "Advanced 4x4 system with multiple terrain modes for ultimate capability.",
      image: "https://images.unsplash.com/photo-1669214723831-7626b4daa17a?auto=format&fit=crop&q=80"
    },
    {
      title: "Luxury Interior",
      description: "Premium materials and craftsmanship for ultimate comfort.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80"
    },
    {
      title: "Power & Performance",
      description: "V6 Turbo engine delivering exceptional power and capability.",
      image: "https://images.unsplash.com/photo-1669214723831-7626b4daa17a?auto=format&fit=crop&q=80"
    }
  ];

  const specifications = [
    {
      category: "Powertrain",
      items: [
        { name: "Engine", value: "3.0L V6 Turbo" },
        { name: "Power", value: "349 HP" },
        { name: "Torque", value: "500 Nm" },
        { name: "Transmission", value: "9-Speed Auto" }
      ]
    },
    {
      category: "Off-Road Capability",
      items: [
        { name: "Ground Clearance", value: "224 mm" },
        { name: "Wading Depth", value: "800 mm" },
        { name: "Approach Angle", value: "29.6°" },
        { name: "Departure Angle", value: "24°" }
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
              Command Every Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and experience the perfect blend of luxury
              and capability in the TANK 500.
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

export default Tank500;