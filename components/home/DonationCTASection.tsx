import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Sparkles, HandHeart } from 'lucide-react';

export default function DonationCTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal active">
        <div className="bg-navy rounded-[2.5rem] p-10 sm:p-16 md:p-20 relative overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Background Photographic Scrim */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1600"
              alt="Compassionate pediatric healthcare support"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Decorative ambient radial gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-coral/20 border border-coral/30 px-4 py-1.5 rounded-full backdrop-blur-md mb-6">
            <Heart className="w-4 h-4 text-coral fill-coral/40" />
            <span className="text-xs font-bold text-coral tracking-widest uppercase">
              Compassionate Pediatric Care
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-6 leading-tight">
              Every Child Deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-turquoise">
                A Fighting Chance for Healthy Kidneys
              </span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed font-light">
              Your contribution directly subsidizes life-saving dialysis sessions, kidney transplant evaluations, diagnostic tests, and emergency medications for underprivileged children across India.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/donate"
                id="final-cta-donate-link"
                className="w-full sm:w-auto bg-coral text-white px-9 py-4 rounded-xl font-bold shadow-xl shadow-coral/30 hover:scale-[1.03] active:scale-95 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <HandHeart className="w-5 h-5" />
                Donate to Save a Child
              </Link>
              <Link
                href="/get-involved"
                id="final-cta-volunteer-link"
                className="w-full sm:w-auto border-2 border-white/30 text-white px-9 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all text-center"
              >
                Volunteer &amp; Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
