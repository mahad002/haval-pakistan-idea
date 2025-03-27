import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const models = [
    { name: 'H6', link: '#' },
    { name: 'H6 HEV', link: '#' },
    { name: 'Jolion', link: '#' },
    { name: 'Jolion HEV', link: '#' },
    { name: 'ORA O3', link: '#' },
    { name: 'Tank 500', link: '#' }
  ];

  const utilities = [
    { name: 'Test Drive', link: '#' },
    { name: 'Booking', link: '#' },
    { name: 'Dealers', link: '#' },
    { name: 'Aftersales', link: '#' },
    { name: 'Careers', link: '#' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={isScrolled 
                  ? "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x.png"
                  : "https://www.gwm.iq/sites/default/files/2023-02/haval-logo%402x_0.png"
                }
                alt="HAVAL"
                className={`h-8 transition-opacity duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {models.map((model) => (
              <a
                key={model.name}
                href={model.link}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-red-600'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {model.name}
              </a>
            ))}
          </div>

          {/* Utility Links */}
          <div className="hidden md:flex items-center space-x-6">
            {utilities.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-600 hover:text-red-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className={`transition-colors ${
              isScrolled
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
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {models.map((model) => (
            <a
              key={model.name}
              href={model.link}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
            >
              {model.name}
            </a>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          {utilities.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
            >
              {item.name}
            </a>
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