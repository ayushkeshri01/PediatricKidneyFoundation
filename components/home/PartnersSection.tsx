import React from 'react';
import { Hospital, School, HeartHandshake, Shield } from 'lucide-react';

export default function PartnersSection() {
  const partnerCategories = [
    { title: 'Hospital logos', icon: Hospital },
    { title: 'Medical Colleges', icon: School },
    { title: 'CSR Partners', icon: HeartHandshake },
    { title: 'NGOs', icon: Shield }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-navy text-lg">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
