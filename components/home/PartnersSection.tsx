import React from 'react';
import { Hospital, School, Building2, ShieldCheck, HeartHandshake, Landmark } from 'lucide-react';

export default function PartnersSection() {
  const partnerList = [
    { name: 'AIIMS New Delhi', icon: Hospital, delay: '0.1s' },
    { name: 'Lady Hardinge Medical College', icon: School, delay: '0.2s' },
    { name: 'Sir Ganga Ram Hospital', icon: Building2, delay: '0.3s' },
    { name: 'Max Healthcare Foundation', icon: HeartHandshake, delay: '0.4s' },
    { name: 'National Health Mission', icon: ShieldCheck, delay: '0.5s' },
    { name: 'Indian Academy of Pediatrics', icon: Landmark, delay: '0.6s' }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
          Our Institutional Partners
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          {partnerList.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer group"
                title={p.name}
              >
                <Icon className="w-10 h-10 text-gray-500 group-hover:text-teal group-hover:scale-110 transition-all mb-2" />
                <span className="text-[11px] font-bold text-gray-600 group-hover:text-navy line-clamp-2">
                  {p.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
