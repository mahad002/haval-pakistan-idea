import React from 'react';

interface SUVModel {
  brand: string;
  model: string;
  url: string;
  mainImage: string;
  secondaryImage: string;
  backgroundImage: string;
  brandLogo: string;
  price: string;
  slogan: string;
  specs: {
    engine: string;
    power: string;
    transmission: string;
  };
}

const SUVModelCard = ({ brand, model, url, mainImage, secondaryImage, backgroundImage, brandLogo, price, slogan, specs }: SUVModel) => {
  return (
    <a href={url} className="relative h-[400px] border-none group cursor-pointer overflow-hidden block">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 group-hover:opacity-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Hover Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-gray-100 to-white" />
      
      {/* Model and Brand Info */}
      <div className="absolute inset-x-0 top-0 p-8 flex justify-end items-start gap-6 z-10">
        <div className="flex flex-col items-end">
          <h3 className="text-lg font-bold text-white tracking-wider drop-shadow-lg transition-all duration-300 group-hover:text-black">{model}</h3>
          <div className="h-0.5 w-12 bg-red-500 mt-1 mb-2 transition-all duration-300 group-hover:w-16 group-hover:mt-2 group-hover:mb-3"></div>
          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 group-hover:text-gray-600 transition-all duration-300">{price}</p>
          <p className="text-xs text-white/80 mt-1 text-right max-w-[200px] opacity-0 group-hover:opacity-100 group-hover:text-gray-500 transition-all duration-300">{slogan}</p>
        </div>
        <img 
          src={brandLogo}
          alt={brand}
          className="h-10 drop-shadow-lg transition-all duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Car Images with Hover Effect */}
      <div className="absolute inset-0 w-full flex items-center justify-center mt-16">
        <div className="relative w-full h-full">
          <img 
            src={mainImage} 
            alt={`${model} - Primary View`} 
            className="w-full h-full object-contain absolute inset-0 transition-all duration-700 ease-in-out group-hover:opacity-0"
          />
          <img 
            src={secondaryImage} 
            alt={`${model} - Secondary View`} 
            className="w-full h-full object-contain absolute inset-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100"
          />
        </div>
      </div>
      
      {/* Specs Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="grid grid-cols-3 gap-4 text-white text-sm">
          <div>
            <p className="font-semibold">Engine</p>
            <p className="opacity-80">{specs.engine}</p>
          </div>
          <div>
            <p className="font-semibold">Power</p>
            <p className="opacity-80">{specs.power}</p>
          </div>
          <div>
            <p className="font-semibold">Transmission</p>
            <p className="opacity-80">{specs.transmission}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const SUVModelsShowcase = () => {
  const models = [
    {
    brand: "ORA",
    model: "ORA",
    slogan: "Ready for the future | 100% electric",
    price: "Starting from PKR 7,500,000",
    specs: {
      engine: "Electric Motor",
      power: "126 kW (171 hp)",
      transmission: "Single-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/ora-logo%402x_1.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-4.jpg?itok=kymHnltz",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Ora-green-SideTrueDim.png?itok=RAcAgMUn",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Ora-Rice-SideTrueDim.png?itok=0nYVLu6s",
    url: "/ora/ora"
  },
  {
    brand: "TANK",
    model: "TANK 500",
    slogan: "Luxurious medium and large-sized off-road SUV",
    price: "Starting from PKR 19,500,000",
    specs: {
      engine: "3.0L V6 Turbo Hybrid",
      power: "260 kW (349 hp)",
      transmission: "9-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/tank-logo%402x_1.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-09/hia-modelbg-21.jpg?itok=mgryBHVI",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-09/tank500_silver_00008.png?itok=zIvqQf34",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-09/tank500_white_00008.png?itok=jxVELqeb",
    url: "/tank/tank-500"
  },
  {
    brand: "TANK",
    model: "TANK 300",
    slogan: "Luxurious and smart 4WD vehicle for a great driving experience on all roads",
    price: "Starting from PKR 14,000,000",
    specs: {
      engine: "2.0L Turbo",
      power: "167 kW (224 hp)",
      transmission: "8-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/tank-logo%402x_1.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-12.jpg?itok=6xMEHrrI",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Tank-Orange-SideTrueDim.png?itok=moeLRJ9J",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Tank-White-SideTrueDim.png?itok=37sStSop",
    url: "/tank/tank-300"
  },
  {
    brand: "TANK",
    model: "TANK 300 HEV",
    slogan: "Luxurious and smart 4WD vehicle for a great driving experience on all roads",
    price: "Starting from PKR 15,500,000",
    specs: {
      engine: "2.0L Turbo Hybrid",
      power: "224 kW (300 hp)",
      transmission: "9-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/tank-logo%402x_1.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-11/hia-modelbg-26_0.jpg?itok=MMFH-Oc2",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-11/Tank300HEV-Black-SideTrueDim.png?itok=LCehhvGk",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-11/Tank300HEV-Grey-SideTrueDim.png?itok=ZnzqHecs",
    url: "/tank/tank-300-hev"
  },
  {
    brand: "HAVAL",
    model: "H7",
    slogan: "An unprecedented engineering masterpiece",
    price: "Starting from PKR 11,400,000",
    specs: {
      engine: "2.0L Turbo",
      power: "165 kW (221 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2025-02/hia-modelbg-39.jpg?itok=qihIXOMr",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2025-02/haval-h7-grey-SideTrueDim.png?itok=WSxMxYnD",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2025-02/haval-h7-black-SideTrueDim.png?itok=nByXPmUf",
    url: "/haval/h7"
  },
  {
    brand: "HAVAL",
    model: "H9 2nd Gen",
    slogan: "Perfect for family, youth, and off-road",
    price: "Starting from PKR 13,800,000",
    specs: {
      engine: "2.0L Turbo",
      power: "180 kW (241 hp)",
      transmission: "8-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-12.jpg?itok=6xMEHrrI",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-10/H9-2ndgen-Gray-SideTrueDim.png?itok=aaeaiS0E",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-10/H9-2ndgen-White-SideTrueDim.png?itok=6b1ALZOE",
    url: "/haval/h9-2nd-gen"
  },
  {
    brand: "HAVAL",
    model: "H6 GT",
    slogan: "The new generation of sporty and modern SUVs",
    price: "Starting from PKR 9,300,000",
    specs: {
      engine: "2.0L Turbo",
      power: "150 kW (201 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-10.jpg?itok=pg_5PIhs",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/h6GT-Blue-SideTrueDim.png?itok=i_lh0ubO",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/h6GT-White-SideTrueDim.png?itok=PZqbFFIB",
    url: "/haval/h6-gt"
  },
  {
    brand: "HAVAL",
    model: "DARGO",
    slogan: "Do you have the courage?",
    price: "Starting from PKR 8,500,000",
    specs: {
      engine: "2.0L Turbo",
      power: "145 kW (194 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-1.jpg?itok=GO_TIQsL",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Dargo-Orange-SideTrueDim.png?itok=NstBqTRy",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Dargo-White-SideTrueDim.png?itok=xvX_YNUw",
    url: "/haval/dargo"
  },
  {
    brand: "HAVAL",
    model: "H6 3rd Gen",
    slogan: "The next generation of high technology",
    price: "Starting from PKR 8,200,000",
    specs: {
      engine: "1.5L Turbo",
      power: "124 kW (166 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-14.jpg?itok=5bt39rcR",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/H63rd-Brown-SideTrueDim.png?itok=CGo8ZdtZ",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/H63rd-White-SideTrueDim.png?itok=1YzcgAto",
    url: "/haval/h6-3rd-gen"
  },
  {
    brand: "HAVAL",
    model: "JOLION PRO",
    slogan: "Unleash the spirit of youth",
    price: "Starting from PKR 7,200,000",
    specs: {
      engine: "1.5L Turbo",
      power: "130 kW (174 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-3_0.jpg?itok=-OydaPXh",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-08/Jolion-pro-sblue-SideTrueDim.png?itok=kITb7psb",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2024-08/Jolion-pro-white-SideTrueDim.png?itok=lkxNB4iH",
    url: "/haval/jolion-pro"
  },
  {
    brand: "HAVAL",
    model: "JULYON",
    slogan: "Smart, wonderful, and elegant",
    price: "Starting from PKR 6,700,000",
    specs: {
      engine: "1.5L Turbo",
      power: "110 kW (147 hp)",
      transmission: "7-Speed DCT"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-3_0.jpg?itok=-OydaPXh",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Jolion-blue-SideTrueDim.png?itok=sdf-Q8Ik",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/Jolion-White-SideTrueDim.png?itok=dE7WRp83",
    url: "/haval/jolion"
  },
  {
    brand: "POER",
    model: "KINGKONG",
    slogan: "The reliable work companion",
    price: "Starting from PKR 5,900,000",
    specs: {
      engine: "2.0L Turbo Diesel",
      power: "120 kW (161 hp)",
      transmission: "6-Speed Manual"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/poer-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-8.jpg?itok=aKV89AAw",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/KINGKONG-Green-SideTrueDim.png?itok=NjOtBXP9",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/KINGKONG-White-SideTrueDim.png?itok=1432k4mW",
    url: "/poer/kingkong"
  },
  {
    brand: "POER",
    model: "POER",
    slogan: "GWM's powerful and completely new POER",
    price: "Starting from PKR 8,800,000",
    specs: {
      engine: "2.0L Turbo Diesel",
      power: "140 kW (188 hp)",
      transmission: "8-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/poer-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-9.jpg?itok=NyhPRme_",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/POER-Brown-SideTrueDim.png?itok=3SShLrRv",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/POER-White-SideTrueDim.png?itok=5ikXl0bq",
    url: "/poer/poer"
  },
  {
    brand: "POER",
    model: "POER SC",
    slogan: "It serves as more than a workhorse",
    price: "Starting from PKR 7,400,000",
    specs: {
      engine: "2.0L Turbo Diesel",
      power: "130 kW (174 hp)",
      transmission: "6-Speed Manual/8-Speed Auto"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-02/poer-logo%402x.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-11.jpg?itok=3R-UCiUc",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/POERSC-White-SideTrueDim.png?itok=F_qIl1Cw",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/POERSC-White-SideTrueDim.png?itok=F_qIl1Cw",
    url: "/poer/poer-sc"
  },
  {
    brand: "WINGLE",
    model: "Wingle 5 Upgrade",
    slogan: "Fuel efficiency",
    price: "Starting from PKR 5,300,000",
    specs: {
      engine: "2.4L Petrol / 2.0L Diesel",
      power: "100 kW (134 hp) / 105 kW (141 hp)",
      transmission: "5-Speed Manual"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-01/wingle-logo.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-5.jpg?itok=d57vPaaH",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-06/wingle-5-upgrade23-side-gray-upd.png?itok=fkwNuFwK",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-06/wingle-5-upgrade23-side-white-upd.png?itok=oRXiJNpt",
    url: "/wingle/wingle-5-upgrade"
  },
  {
    brand: "WINGLE",
    model: "Wingle 5 SC",
    slogan: "Strong. Durable. Reliable.",
    price: "Starting from PKR 4,900,000",
    specs: {
      engine: "2.4L Petrol / 2.0L Diesel",
      power: "100 kW (134 hp) / 105 kW (141 hp)",
      transmission: "5-Speed Manual"
    },
    brandLogo: "https://www.gwm.iq/sites/default/files/2023-01/wingle-logo.png",
    backgroundImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/hia-modelbg-13.jpg?itok=TT0MWYKd",
    mainImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/WingleSC-White-SideTrueDim.png?itok=cbU4Mmsd",
    secondaryImage: "https://www.gwm.iq/sites/default/files/styles/16_9_xsmall/public/2023-02/WingleSC-Red-SideTrueDim.png?itok=X82no-1h",
    url: "/wingle/wingle-5-sc"
  }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-0">
        {models.map((model, index) => (
          <SUVModelCard 
            key={index}
            brand={model.brand}
            model={model.model}
            url={model.url}
            backgroundImage={model.backgroundImage}
            brandLogo={model.brandLogo}
            price={model.price}
            slogan={model.slogan}
            specs={model.specs}
            mainImage={model.mainImage}
            secondaryImage={model.secondaryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SUVModelsShowcase;