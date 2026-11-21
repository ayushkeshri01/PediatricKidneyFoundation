'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeartPulse, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { foundationData } from '@/content/foundation';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">PKF</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A registered nonprofit dedicated exclusively to pediatric kidney health since 2004. Saving lives through specialized care, early screening, and research.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="social-fb-link"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center social-icon hover:bg-teal hover:text-white"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                id="social-tw-link"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center social-icon hover:bg-teal hover:text-white"
                aria-label="Twitter / X"
              >
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="social-ig-link"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center social-icon hover:bg-teal hover:text-white"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="social-li-link"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center social-icon hover:bg-teal hover:text-white"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8 text-white/90">Quick Links</h5>
            <ul className="space-y-4">
              <li>
                <Link href="/about" id="footer-about-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  About PKF & History
                </Link>
              </li>
              <li>
                <Link href="/kidney-health" id="footer-health-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  Kidney Health Hub
                </Link>
              </li>
              <li>
                <Link href="/support" id="footer-support-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  Patient Support & Families
                </Link>
              </li>
              <li>
                <Link href="/programs" id="footer-programs-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  Programs & Initiatives
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" id="footer-leadership-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  Leadership & Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/donate" id="footer-transparency-link" className="text-gray-400 hover:text-white transition-colors text-sm link-underline">
                  80G Tax Exemption & Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8 text-white/90">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal shrink-0 mt-1 w-4 h-4" />
                <span>
                  E-11, South Extension-1,<br />
                  New Delhi – 110049, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal shrink-0 w-4 h-4" />
                <span>+91 (011) 4567-8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal shrink-0 w-4 h-4" />
                <span>contact@pkf-india.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8 text-white/90">Newsletter</h5>
            <p className="text-sm text-gray-400 mb-6">
              Stay updated with awareness drives, screening camps, and medical publications.
            </p>
            {isSubscribed ? (
              <div className="bg-teal/20 border border-teal/40 rounded-lg p-4 flex items-center gap-3 text-teal">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-semibold">Thank you for subscribing to PKF updates!</span>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-teal focus:bg-white/10 transition-all w-full text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="bg-teal text-white font-bold py-3 rounded text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2024 Pediatric Kidney Foundation. All rights reserved. Registered Indian Trust (80G Status).
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="/privacy" id="privacy-link" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" id="terms-link" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" id="disclaimer-link" className="hover:text-white transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
