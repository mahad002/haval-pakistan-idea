import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInFeaturedSection, setIsInFeaturedSection] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  // Group models by brand
  const models = [
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
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (!isInFeaturedSection) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInFeaturedSection(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsScrolled(false);
        }
      },
      {
        threshold: [0, 1],
        rootMargin: "-64px 0px 0px 0px" // Account for navbar height
      }
    );

    const featuredSection = document.querySelector('section.featured-models');
    if (featuredSection) {
      observer.observe(featuredSection);
    }

    window.addEventListener('scroll', handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && !target.closest('.dropdown-container')) {
        setOpenDropdown('');
      }
      
      // Close mobile menu when clicking outside
      if (target && !target.closest('.mobile-menu-container') && 
          !target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      observer.disconnect();
    };
  }, []);

  const utilities = [
    { name: 'Test Drive', link: '/test-drive' },
    { name: 'Book Service', link: '/after-sales/book-service' },
    { name: 'Find Dealer', link: '/find-a-dealer' },
    { name: 'Careers', link: '/careers' }
  ];

  // Handle dropdown toggle
  const toggleDropdown = (brand: React.SetStateAction<string>) => {
    if (openDropdown === brand) {
      setOpenDropdown('');
    } else {
      setOpenDropdown(brand);
    }
  };

  // Handle navigation
  const handleNavigation = () => {
    // Close mobile menu and dropdowns when navigating
    setIsOpen(false);
    setOpenDropdown('');
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isInFeaturedSection ? 'bg-transparent' : (isScrolled ? 'bg-white shadow-md' : 'bg-transparent')
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={handleNavigation}>
              <img
                src={isScrolled 
                  && !isInFeaturedSection 
                  ? "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png"
                  : "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x_0.png"
                }
                alt="HAVAL"
                className={`h-8 transition-opacity duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {models.map((brand) => (
              <div key={brand.brand} className="relative dropdown-container">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                    isScrolled && !isInFeaturedSection
                      ? 'text-gray-700 hover:text-red-600'
                      : 'text-white hover:text-red-400'
                  }`}
                  onClick={() => toggleDropdown(brand.brand)}
                >
                  {brand.brand}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${
                  openDropdown === brand.brand 
                    ? 'opacity-100 visible' 
                    : 'opacity-0 invisible'
                }`}>
                  <div className="py-1">
                    {brand.models.map((model) => (
                      <Link
                        key={model.name}
                        to={model.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                        onClick={handleNavigation}
                      >
                        {model.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Utility Links */}
          <div className="hidden md:flex items-center space-x-6">
            {utilities.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`text-sm font-medium transition-colors ${
                  isScrolled && !isInFeaturedSection
                    ? 'text-gray-600 hover:text-red-600'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={handleNavigation}
              >
                {item.name}
              </Link>
            ))}
            <button className={`transition-colors ${
              isScrolled && !isInFeaturedSection
                ? 'text-gray-600 hover:text-red-600'
                : 'text-white/90 hover:text-white'
            }`}>
              <Globe className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`mobile-menu-button inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled
                  ? 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                  : 'text-white hover:text-red-400 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white mobile-menu-container`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {models.map((brand) => (
            <div key={brand.brand}>
              <div className="px-3 py-2 text-base font-medium text-gray-900">
                {brand.brand}
              </div>
              {brand.models.map((model) => (
                <Link
                  key={model.name}
                  to={model.link}
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  onClick={handleNavigation}
                >
                  {model.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          {utilities.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              onClick={handleNavigation}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            Language
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;