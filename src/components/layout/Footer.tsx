import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <img
              src="https://www.gwm.iq/themes/contrib/haveitall/logo.svg"
              alt="GWM Logo"
              className="h-8 mb-6"
            />
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>123 Main Street, Karachi, Pakistan</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+92 300 1234567</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>info@gwm.pk</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-red-500 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-red-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicles</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">HAVAL</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/haval/h6" className="hover:text-red-500 transition-colors">
                      H6
                    </Link>
                  </li>
                  <li>
                    <Link to="/haval/h6-hev" className="hover:text-red-500 transition-colors">
                      H6 HEV
                    </Link>
                  </li>
                  <li>
                    <Link to="/haval/jolion" className="hover:text-red-500 transition-colors">
                      JOLION
                    </Link>
                  </li>
                  <li>
                    <Link to="/haval/jolion-hev" className="hover:text-red-500 transition-colors">
                      JOLION HEV
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">ORA</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/ora/o3" className="hover:text-red-500 transition-colors">
                      O3
                    </Link>
                  </li>
                  <li>
                    <Link to="/ora/o7" className="hover:text-red-500 transition-colors">
                      O7
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">TANK</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/tank/tank-500" className="hover:text-red-500 transition-colors">
                      TANK 500
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/test-drive" className="hover:text-red-500 transition-colors">
                  Book a Test Drive
                </Link>
              </li>
              <li>
                <Link to="/after-sales/book-service" className="hover:text-red-500 transition-colors">
                  Book a Service
                </Link>
              </li>
              <li>
                <Link to="/find-a-dealer" className="hover:text-red-500 transition-colors">
                  Find a Dealer
                </Link>
              </li>
              <li>
                <Link to="/become-a-dealer" className="hover:text-red-500 transition-colors">
                  Become a Dealer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GWM Pakistan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;