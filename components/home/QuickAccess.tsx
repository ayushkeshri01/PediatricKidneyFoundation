import React from 'react';
import Link from 'next/link';
import { Hospital, BookOpen, Users, Heart, Hand, ArrowRight } from 'lucide-react';

export default function QuickAccess() {
  const quickCards = [
    {
      id: 'quick-care-card',
      title: 'Find Care',
      subtitle: 'Specialist Directory',
      href: '/contact?inquiry=care',
      icon: Hospital,
      borderColor: 'border-teal',
      iconBg: 'bg-teal/10',
      iconColor: 'text-teal'
    },
    {
      id: 'quick-info-card',
      title: 'Information',
      subtitle: 'Medical Library',
      href: '/kidney-health',
      icon: BookOpen,
      borderColor: 'border-turquoise',
      iconBg: 'bg-turquoise/10',
      iconColor: 'text-turquoise'
    },
    {
      id: 'quick-support-card',
      title: 'Family Support',
      subtitle: 'Counseling & Aid',
      href: '/support',
      icon: Users,
      borderColor: 'border-sage',
      iconBg: 'bg-sage/20',
      iconColor: 'text-teal'
    },
    {
      id: 'quick-donate-card',
      title: 'Donate',
      subtitle: 'Subsidize Treatment',
      href: '/donate',
      icon: Heart,
      borderColor: 'border-coral',
      iconBg: 'bg-coral/10',
      iconColor: 'text-coral'
    },
    {
      id: 'quick-involved-card',
      title: 'Get Involved',
      subtitle: 'Volunteers & CSR',
      href: '/get-involved',
      icon: Hand,
      borderColor: 'border-navy',
      iconBg: 'bg-navy/10',
      iconColor: 'text-navy'
    }
  ];

  return (
    <section className="relative -mt-16 z-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                id={card.id}
                className={`bg-white p-6 shadow-xl rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 ${card.borderColor} stagger-item active group`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <span className="text-sm font-bold text-navy uppercase tracking-wider block mb-0.5 group-hover:text-teal transition-colors">
                  {card.title}
                </span>
                <span className="text-[11px] text-gray-400 font-medium hidden sm:block">
                  {card.subtitle}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
