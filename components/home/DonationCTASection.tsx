import React from 'react';
import Link from 'next/link';

export default function DonationCTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal active">
        <div className="bg-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl">
          {/* Top Right Badge */}
          <div className="absolute top-6 right-8 sm:right-12 bg-coral/20 border border-coral/30 px-4 py-2 rounded-full backdrop-blur-md">
            <p className="text-xs font-bold text-coral tracking-widest uppercase">
              80G Tax Exempt Foundation
            </p>
          </div>

          {/* Decorative radial blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full -mr-32 -mt-32 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              Every Child Deserves <br />
              a Fighting Chance
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Your contribution provides life-saving dialysis, transplants, and education for children who need it most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                id="final-cta-donate-link"
                className="bg-coral text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform text-center"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                id="final-cta-volunteer-link"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors text-center"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
