import React from 'react';
import { useLocation } from 'react-router-dom';
import { Car } from 'lucide-react';
import TestDriveForm from '../components/forms/TestDriveForm';

const TestDrive = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedModel = searchParams.get('model');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600706432502-77a0e2e32795?auto=format&fit=crop&q=80"
            alt="Test Drive"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Test Drive
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Experience the thrill of driving our premium vehicles firsthand
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-100 rounded-full">
              <Car className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Schedule Your Test Drive
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our team will contact you shortly
              </p>
            </div>
          </div>
          
          <TestDriveForm preselectedModel={preselectedModel} />
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">What to Bring</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Valid driver's license</li>
              <li>• Proof of insurance</li>
              <li>• Valid ID card</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">
              Test drives typically last 30-45 minutes, including a comprehensive
              vehicle walkthrough with our product expert.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
            <p className="text-gray-600">
              Need help? Contact our support team at support@gwm.pk or call
              0800-12345.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;