import React from 'react';
import Link from 'next/link';
import { Tent, Megaphone, Handshake, Calendar, ArrowRight } from 'lucide-react';

export default function LatestInitiativesSection() {
  const initiatives = [
    {
      title: 'Upcoming Camps',
      icon: Tent,
      href: '/programs'
    },
    {
      title: 'Awareness Drives',
      icon: Megaphone,
      href: '/programs'
    },
    {
      title: 'Partnerships',
      icon: Handshake,
      href: '/get-involved'
    },
    {
      title: 'Events',
      icon: Calendar,
      href: '/news'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
                className="group p-8 bg-off-white rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all flex flex-col items-center text-center justify-between"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-navy text-lg group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <div className="mt-4 pt-3 flex items-center gap-1 text-xs font-bold text-teal">
                  <span>View Details</span>
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
