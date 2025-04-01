import { lazy } from 'react';

// Lazy load all pages
const H6 = lazy(() => import('../pages/haval/H6'));
const H6HEV = lazy(() => import('../pages/haval/H6HEV'));
const Jolion = lazy(() => import('../pages/haval/Jolion'));
const JolionHEV = lazy(() => import('../pages/haval/JolionHEV'));
const O3 = lazy(() => import('../pages/ora/O3'));
const O7 = lazy(() => import('../pages/ora/O7'));
const Tank500 = lazy(() => import('../pages/tank/Tank500'));
const BookService = lazy(() => import('../pages/after-sales/BookService'));
const TestDrive = lazy(() => import('../pages/TestDrive'));
const Contact = lazy(() => import('../pages/Contact'));
const Careers = lazy(() => import('../pages/Careers'));
const NewsEvents = lazy(() => import('../pages/NewsEvents'));
const BecomeDealer = lazy(() => import('../pages/BecomeDealer'));
const FindDealer = lazy(() => import('../pages/FindDealer'));
const AboutUs = lazy(() => import('../pages/AboutUs'));

export const routes = {
  vehicles: [
    {
      brand: 'Haval',
      models: [
        { path: '/haval/h6', component: H6 },
        { path: '/haval/h6-hev', component: H6HEV },
        { path: '/haval/jolion', component: Jolion },
        { path: '/haval/jolion-hev', component: JolionHEV },
      ],
    },
    {
      brand: 'Ora',
      models: [
        { path: '/ora/o3', component: O3 },
        { path: '/ora/o7', component: O7 },
      ],
    },
    {
      brand: 'Tank',
      models: [
        { path: '/tank/tank-500', component: Tank500 },
      ],
    },
  ],
  services: [
    { path: '/after-sales/book-service', component: BookService },
    { path: '/test-drive', component: TestDrive },
  ],
  info: [
    { path: '/contact-us', component: Contact },
    { path: '/careers', component: Careers },
    { path: '/news-events', component: NewsEvents },
    { path: '/become-a-dealer', component: BecomeDealer },
    { path: '/find-a-dealer', component: FindDealer },
    { path: '/about-us', component: AboutUs },
  ],
};