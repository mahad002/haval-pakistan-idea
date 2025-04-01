import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const H6 = () => {
  const heroData = {
    brand: "HAVAL",
    model: "H6",
    tagline: "The Perfect Blend of Style and Performance",
    description: "Experience the next generation of SUV excellence with the HAVAL H6. Featuring cutting-edge technology, premium comfort, and outstanding performance.",
    price: "PKR 8,200,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
    specs: {
      power: "201 HP",
      acceleration: "0-100 in 8.2s",
      features: "Level 2 ADAS"
    }
  };

  const features = [
    {
      title: "Advanced Safety",
      description: "Level 2 autonomous driving capabilities with advanced driver assistance systems.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
    },
    {
      title: "Premium Interior",
      description: "Luxurious cabin with premium materials and advanced infotainment system.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
    },
    {
      title: "Powerful Performance",
      description: "2.0L Turbo engine delivering exceptional power and efficiency.",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80"
    }
  ];

  const specifications = [
    {
      category: "Engine & Performance",
      items: [
        { name: "Engine Type", value: "2.0L Turbo" },
        { name: "Maximum Power", value: "201 HP" },
        { name: "Maximum Torque", value: "320 Nm" },
        { name: "Transmission", value: "7-Speed DCT" }
      ]
    },
    {
      category: "Dimensions",
      items: [
        { name: "Length", value: "4,653 mm" },
        { name: "Width", value: "1,886 mm" },
        { name: "Height", value: "1,730 mm" },
        { name: "Wheelbase", value: "2,738 mm" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <ModelHero {...heroData} />
      <FeatureSection features={features} />
      <SpecsTable specifications={specifications} />
      
      {/* Test Drive Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the H6 Yourself
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and discover why the HAVAL H6 is Pakistan's
              fastest-growing premium SUV.
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

export default H6;