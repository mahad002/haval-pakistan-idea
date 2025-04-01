import React, { useState, useMemo } from 'react';
import { MapPin, Phone, ExternalLink, Search, MapIcon } from 'lucide-react';
import { dealers } from '../data/dealers';

const FindDealer = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = useMemo(() => {
    return Array.from(new Set(dealers.map(dealer => dealer.city))).sort();
  }, []);

  const filteredDealers = useMemo(() => {
    return dealers.filter(dealer => {
      const matchesCity = selectedCity ? dealer.city === selectedCity : true;
      const matchesSearch = searchQuery.trim() === '' ? true : 
        dealer.dealership.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dealer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dealer.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562426209-1c7fabfa53f6?auto=format&fit=crop&q=80"
            alt="Dealership Network"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find a Dealer Near You
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Discover our nationwide network of authorized GWM dealers
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by dealership name or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredDealers.length} Dealers Found
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map(dealer => (
              <div
                key={dealer.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dealer.dealership}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{dealer.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-red-500" />
                      <a
                        href={`tel:${dealer.contact}`}
                        className="text-gray-600 hover:text-red-500 transition-colors"
                      >
                        {dealer.contact}
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={dealer.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MapIcon className="w-4 h-4" />
                      Get Directions
                    </a>
                    <a
                      href={`/test-drive?dealer=${dealer.id}`}
                      className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      Book Test Drive
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredDealers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No dealers found matching your criteria. Please try a different search.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Become a Dealer?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our growing network of GWM dealers and be part of Pakistan's
            fastest-growing automotive brand.
          </p>
          <a
            href="/become-a-dealer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindDealer;