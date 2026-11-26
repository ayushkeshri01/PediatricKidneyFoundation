import React from 'react';
import Link from 'next/link';
import { Tent, Megaphone, Handshake, Calendar, ArrowRight } from 'lucide-react';

export default function LatestInitiativesSection() {
  const initiatives = [
    {
      title: 'Upcoming Camps',
      desc: 'Mobile diagnostic and pediatric screening camps organized in community clinics and rural health centers.',
      icon: Tent,
      href: '/programs#rural-awareness-camps'
    },
    {
      title: 'Awareness Drives',
      desc: 'School health programs and public workshops on healthy hydration, nutrition, and early warning signs.',
      icon: Megaphone,
      href: '/programs#school-awareness-program'
    },
    {
      title: 'Partnerships',
      desc: 'Alliances with hospitals, medical colleges, CSR foundations, and NGOs to expand care access.',
      icon: Handshake,
      href: '/get-involved'
    },
    {
      title: 'Events',
      desc: 'Conferences, caregiver seminars, and World Kidney Day community events across the region.',
      icon: Calendar,
      href: '/news'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Action &amp; Outreach
          </span>
          <h2 className="text-3xl font-bold text-navy">
            Latest Initiatives
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group p-6 bg-off-white rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1 text-xs font-bold text-teal">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
