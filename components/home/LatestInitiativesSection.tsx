import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tent, Megaphone, Handshake, Calendar, ArrowRight } from 'lucide-react';

export default function LatestInitiativesSection() {
  const initiatives = [
    {
      title: 'Upcoming Camps',
      icon: Tent,
      href: '/programs',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Awareness Drives',
      icon: Megaphone,
      href: '/programs',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Partnerships',
      icon: Handshake,
      href: '/get-involved',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Events',
      icon: Calendar,
      href: '/news',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
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
                className="group bg-off-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-xl transition-all flex flex-col justify-between stagger-item"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 text-white">
                      <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-base text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-3 flex items-center justify-between text-xs font-bold text-teal">
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
