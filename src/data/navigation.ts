export interface NavigationItem {
  name: string;
  link: string;
}

export interface VehicleModel {
  name: string;
  link: string;
}

export interface VehicleBrand {
  brand: string;
  models: VehicleModel[];
}

export const navigation = {
  vehicles: [
    {
      brand: 'Haval',
      models: [
        { name: 'H6', link: '/haval/h6' },
        { name: 'H6 HEV', link: '/haval/h6-hev' },
        { name: 'Jolion', link: '/haval/jolion' },
        { name: 'Jolion HEV', link: '/haval/jolion-hev' },
      ],
    },
    {
      brand: 'Ora',
      models: [
        { name: 'O3', link: '/ora/o3' },
        { name: 'O7', link: '/ora/o7' },
      ],
    },
    {
      brand: 'Tank',
      models: [
        { name: 'Tank 500', link: '/tank/tank-500' },
      ],
    },
  ],
  utilities: [
    { name: 'Test Drive', link: '/test-drive' },
    { name: 'Book Service', link: '/after-sales/book-service' },
    { name: 'Find Dealer', link: '/find-a-dealer' },
    { name: 'Careers', link: '/careers' }
  ],
  quickLinks: [
    { name: 'About Us', link: '/about-us' },
    { name: 'News & Events', link: '/news-events' },
    { name: 'Careers', link: '/careers' },
    { name: 'Contact Us', link: '/contact-us' }
  ],
  services: [
    { name: 'Book a Test Drive', link: '/test-drive' },
    { name: 'Book a Service', link: '/after-sales/book-service' },
    { name: 'Find a Dealer', link: '/find-a-dealer' },
    { name: 'Become a Dealer', link: '/become-a-dealer' }
  ]
};