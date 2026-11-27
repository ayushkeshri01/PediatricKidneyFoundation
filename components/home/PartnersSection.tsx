import React from 'react';
import Image from 'next/image';
import { Hospital, School, HeartHandshake, Shield } from 'lucide-react';

export default function PartnersSection() {
  const partnerCategories = [
    { title: 'Hospitals', icon: Hospital, href: '#hospitals' },
    { title: 'Medical Colleges', icon: School },
    { title: 'CSR Partners', icon: HeartHandshake },
    { title: 'NGOs', icon: Shield }
  ];

  const hospitalPartners = [
    {
      name: 'AIIMS New Delhi',
      fullName: 'All India Institute of Medical Sciences',
      logo: '/partners/aiims.svg'
    },
    {
      name: 'Indraprastha Apollo Hospitals',
      fullName: 'Apollo Hospitals, New Delhi',
      logo: '/partners/apollo.svg'
    },
    {
      name: 'Sir Ganga Ram Hospital',
      fullName: 'Sir Ganga Ram Hospital, New Delhi',
      logo: '/partners/gangaram.svg'
    },
    {
      name: 'Max Super Speciality Hospital',
      fullName: 'Max Healthcare, Saket',
      logo: '/partners/max.svg'
    },
    {
      name: "Kalawati Saran Children's Hospital",
      fullName: 'Lady Hardinge Medical College',
      logo: '/partners/kalawati.svg'
    },
    {
      name: 'Fortis Healthcare',
      fullName: 'Fortis Memorial Research Institute',
      logo: '/partners/fortis.svg'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-scale">
          <h2 className="text-3xl font-bold text-navy">
            Our Partners
          </h2>
        </div>

        {/* 4 Partner Categories from Document */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerCategories.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-navy text-lg">
                  {item.title}
                </h3>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="group bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:border-teal/30 transition-all cursor-pointer stagger-item"
                >
                  {content}
                </a>
              );
            }

              return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all stagger-item"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Hospital Logos Section */}
        <div id="hospitals" className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs reveal">
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
              <Hospital className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy">
                Hospitals
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalPartners.map((hospital, idx) => (
              <div
                key={idx}
                className="group p-5 bg-off-white hover:bg-white rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-md transition-all flex items-center justify-center stagger-item"
              >
                <div className="relative w-full h-16 flex items-center justify-center p-2 bg-white rounded-xl border border-gray-100 group-hover:border-teal/20 transition-all">
                  <Image
                    src={hospital.logo}
                    alt={`${hospital.name} Logo`}
                    width={220}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
