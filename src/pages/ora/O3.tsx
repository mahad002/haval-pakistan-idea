import React from 'react';
import ModelHero from '../../components/vehicle/ModelHero';
import FeatureSection from '../../components/vehicle/FeatureSection';
import SpecsTable from '../../components/vehicle/SpecsTable';
import TestDriveForm from '../../components/forms/TestDriveForm';

const O3 = () => {
  const heroData = {
    brand: "ORA",
    model: "O3",
    tagline: "The Future of Electric Mobility",
    description: "Experience pure electric performance with zero compromises. The ORA O3 combines cutting-edge technology with sophisticated design.",
    price: "PKR 7,500,000",
    image: "https://www.ora.com.hk/media/s5cnknqk/product-page_ora_-na_8833_updated.jpg",
    specs: {
      power: "171 HP",
      acceleration: "0-100 in 6.9s",
      features: "400km Range"
    }
  };

  const features = [
    {
      title: "Electric Performance",
      description: "Powerful electric motor delivering instant torque and smooth acceleration.",
      image: "https://www.ora.com.hk/media/vnslirhf/block-1_ps-7p4a0207.jpg"
    },
    {
      title: "Advanced Tech",
      description: "State-of-the-art technology and connectivity features.",
      image: "https://www.ora.com.hk/media/04jppz33/block-2_ps-7p4a0386.jpg"
    },
    {
      title: "Range Excellence",
      description: "Long-range capability with fast charging technology.",
      image: "https://www.ora.com.hk/media/nojp5jhr/block-3_ps-7p4a0223.jpg"
    }
  ];

  const specifications = [
    {
      category: "Electric Powertrain",
      items: [
        { name: "Motor Type", value: "Permanent Magnet" },
        { name: "Maximum Power", value: "171 HP" },
        { name: "Maximum Torque", value: "250 Nm" },
        { name: "Battery Capacity", value: "63 kWh" }
      ]
    },
    {
      category: "Charging",
      items: [
        { name: "Fast Charging", value: "30 min (20-80%)" },
        { name: "AC Charging", value: "7 hours" },
        { name: "Range", value: "400 km" },
        { name: "Energy Consumption", value: "16.8 kWh/100km" }
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
              Experience Electric Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a test drive today and discover the future of mobility with the ORA O3.
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

export default O3;