export interface ModelData {
  model: string;
  url: string;
  imageUrl: string;
  description?: string;
  specs?: {
    power?: string;
    acceleration?: string;
    features?: string;
  };
}

export const models: ModelData[] = [
  {
    model: "HAVAL H6 HEV",
    url: "/h6-hev/",
    imageUrl: "https://storage.googleapis.com/havalimages/images/02.webp",
    description: "Experience the perfect fusion of power and efficiency with our advanced hybrid technology",
    specs: {
      power: "240 HP Combined",
      acceleration: "0-100 in 7.5s",
      features: "Level 2 ADAS"
    }
  },
  {
    model: "HAVAL H6",
    url: "/h6/",
    imageUrl: "https://storage.googleapis.com/havalimages/images/03.webp",
    description: "Bold design meets exceptional performance in our flagship SUV",
    specs: {
      power: "201 HP",
      acceleration: "0-100 in 8.2s",
      features: "Panoramic Sunroof"
    }
  },
  {
    model: "HAVAL JOLION",
    url: "/jolion/",
    imageUrl: "https://storage.googleapis.com/havalimages/images/01.webp",
    description: "The perfect companion for urban adventures",
    specs: {
      power: "147 HP",
      acceleration: "0-100 in 9.1s",
      features: "10.25\" Display"
    }
  },
  {
    model: "JOLION HEV",
    url: "/hev-jolion/",
    imageUrl: "https://storage.googleapis.com/havalimages/images/TANK/Black-%E9%87%91%E4%B9%8C%E9%BB%91-00002.png",
    description: "Efficiency meets style in our compact hybrid SUV",
    specs: {
      power: "190 HP Combined",
      acceleration: "0-100 in 8.0s",
      features: "Hybrid System"
    }
  },
  {
    model: "ORA O3",
    url: "/ora/o3",
    imageUrl: "https://storage.googleapis.com/havalimages/images/ORA/Ora%203.png",
    description: "The future of electric mobility is here",
    specs: {
      power: "171 HP",
      acceleration: "0-100 in 6.9s",
      features: "400km Range"
    }
  },
  {
    model: "ORA O7",
    url: "/ora/o7",
    imageUrl: "https://storage.googleapis.com/havalimages/images/ORA/Ora%207.png",
    description: "Premium electric mobility redefined",
    specs: {
      power: "204 HP",
      acceleration: "0-100 in 6.5s",
      features: "500km Range"
    }
  },
  {
    model: "TANK 500",
    url: "/tank/tank-500",
    imageUrl: "https://storage.googleapis.com/havalimages/images/TANK/Gwm%20Tank.png",
    description: "Dominate any terrain with unmatched capability",
    specs: {
      power: "349 HP",
      acceleration: "0-100 in 7.0s",
      features: "Off-road Mode"
    }
  }
];