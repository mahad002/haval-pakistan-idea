import React, { useEffect, useRef, useState } from 'react';

interface Specification {
  category: string;
  items: {
    name: string;
    value: string;
  }[];
}

interface SpecsTableProps {
  specifications: Specification[];
}

const SpecsTable = ({ specifications }: SpecsTableProps) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete specifications of the ORA O7 electric vehicle.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <th colSpan={2} className="px-6 py-4 text-left text-lg font-semibold">
                    ORA O7 Specifications
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((specGroup, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    <tr className="bg-gray-100">
                      <td 
                        colSpan={2} 
                        className="px-6 py-3 text-gray-900 font-bold text-left"
                      >
                        {specGroup.category}
                      </td>
                    </tr>
                    {specGroup.items.map((item, itemIndex) => (
                      <tr 
                        key={`${groupIndex}-${itemIndex}`}
                        className={`border-b border-gray-100 ${
                          (groupIndex + itemIndex) % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        } transition-all duration-500`}
                        style={{
                          opacity: isInView ? 1 : 0,
                          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                          transition: `all 0.5s ease ${(groupIndex * 0.1) + (itemIndex * 0.05)}s`
                        }}
                      >
                        <td className="px-6 py-4 text-gray-700 font-medium">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-gray-900 font-bold">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              *Specifications may vary depending on market and configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsTable;