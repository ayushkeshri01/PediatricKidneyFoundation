import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Microscope, ClipboardCheck, ShieldPlus, Droplets, ArrowRight } from 'lucide-react';

export default function KidneyHealthAwareness() {
  const cards = [
    {
      id: 'health-symptoms-link',
      title: 'Common Symptoms of Unhealthy kidneys',
      desc: 'Swelling, Blood in Urine, Frothy Urine, Poor Growth, High Blood Pressure, Fever with UTI',
      href: '/kidney-health/symptoms',
      icon: Activity,
      badge: 'Warning Signs',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      badgeBg: 'bg-teal/90'
    },
    {
      id: 'health-diseases-link',
      title: 'Kidney Diseases in Children',
      desc: 'UTI, Nephrotic Syndrome, CKD, Congenital Disorders, AKI, Glomerulonephritis, Kidney Stones',
      href: '/kidney-health/diseases',
      icon: Microscope,
      badge: 'Diseases',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
      badgeBg: 'bg-turquoise/90'
    },
    {
      id: 'health-diagnosis-link',
      title: 'Diagnosis & Investigations',
      desc: 'Urine Tests, Blood Tests, Ultrasound, Kidney Biopsy, Blood Pressure Monitoring',
      href: '/kidney-health/diagnosis',
      icon: ClipboardCheck,
      badge: 'Investigations',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      badgeBg: 'bg-navy/90'
    },
    {
      id: 'health-treatment-link',
      title: 'Treatment Journey',
      desc: 'Dialysis (Peritoneal Dialysis & Hemodialysis) and Kidney Transplant',
      href: '/treatment',
      icon: ShieldPlus,
      badge: 'Treatment',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
      badgeBg: 'bg-navy/90'
    },
    {
      id: 'health-prevention-link',
      title: 'Nutrition & Lifestyle',
      desc: 'Healthy Eating Tips, Healthy Lifestyle Habits, and Daily Care for Children',
      href: '/kidney-health/nutrition',
      icon: Droplets,
      badge: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
      badgeBg: 'bg-coral/90'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal active">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Kidney Health Hub
          </span>
          <h2 className="text-4xl text-navy mb-4 font-bold">Understanding Healthy Kidneys</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            The kidneys are remarkable organs that perform essential functions necessary for life. Understanding how the kidneys function helps families recognize the importance of protecting kidney health from an early age.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                id={card.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    <span className={`absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeBg} shadow-sm backdrop-blur-sm`}>
                      {card.badge}
                    </span>

                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-navy group-hover:bg-coral group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy group-hover:text-teal transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="text-xs font-bold text-teal group-hover:text-coral inline-flex items-center gap-1 transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
