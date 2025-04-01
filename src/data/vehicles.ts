export interface VehicleHeroData {
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

export interface VehicleFeature {
  title: string;
  description: string;
  image: string;
}

export interface SpecificationItem {
  name: string;
  value: string;
}

export interface Specification {
  category: string;
  items: SpecificationItem[];
}

export const vehicleData = {
  h6: {
    hero: {
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
    },
    features: [
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
    ],
    specifications: [
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
    ]
  },
  h6hev: {
    hero: {
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
    },
    features: [
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
    ],
    specifications: [
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
    ]
  },
  jolion: {
    hero: {
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
    },
    features: [
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
    ],
    specifications: [
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
    ]
  },
  jolionhev: {
    hero: {
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
    },
    features: [
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
    ],
    specifications: [
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
    ]
  },
  o3: {
    hero: {
      brand: "ORA",
      model: "O3",
      tagline: "The Future of Electric Mobility",
      description: "Experience pure electric performance with zero compromises. The ORA O3 combines cutting-edge technology with sophisticated design.",
      price: "PKR 7,500,000",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80",
      specs: {
        power: "171 HP",
        acceleration: "0-100 in 6.9s",
        features: "400km Range"
      }
    },
    features: [
      {
        title: "Electric Performance",
        description: "Powerful electric motor delivering instant torque and smooth acceleration.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
      },
      {
        title: "Advanced Tech",
        description: "State-of-the-art technology and connectivity features.",
        image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80"
      },
      {
        title: "Range Excellence",
        description: "Long-range capability with fast charging technology.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
      }
    ],
    specifications: [
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
    ]
  },
  o7: {
    hero: {
      brand: "ORA",
      model: "O7",
      tagline: "Premium Electric Elegance",
      description: "Experience luxury redefined with zero emissions. The ORA O7 combines sophisticated design, advanced technology, and sustainable performance.",
      price: "PKR 8,900,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
      specs: {
        power: "204 HP",
        acceleration: "0-100 in 6.5s",
        features: "500km Range"
      }
    },
    features: [
      {
        title: "Premium Electric",
        description: "High-performance electric powertrain with extended range capability.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
      },
      {
        title: "Luxury Interior",
        description: "Premium materials and advanced comfort features for an exceptional experience.",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80"
      },
      {
        title: "Smart Technology",
        description: "Advanced driver assistance and connectivity features.",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
      }
    ],
    specifications: [
      {
        category: "Electric Powertrain",
        items: [
          { name: "Motor Type", value: "Permanent Magnet" },
          { name: "Maximum Power", value: "204 HP" },
          { name: "Maximum Torque", value: "340 Nm" },
          { name: "Battery Capacity", value: "83 kWh" }
        ]
      },
      {
        category: "Performance & Charging",
        items: [
          { name: "Range (WLTP)", value: "500 km" },
          { name: "Fast Charging", value: "35 min (20-80%)" },
          { name: "Top Speed", value: "180 km/h" },
          { name: "Energy Consumption", value: "16.2 kWh/100km" }
        ]
      }
    ]
  },
  tank500: {
    hero: {
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
    },
    features: [
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
    ],
    specifications: [
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
    ]
  }
};