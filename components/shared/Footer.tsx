'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';

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
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Social Media Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Pediatric Kidney Foundation"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight block text-white">PKF</span>
                <span className="text-[10px] text-teal block uppercase tracking-wider font-semibold">Pediatric Kidney Foundation</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
            </p>

            {/* Follow Us / Social Media */}
            <div className="mb-6">
              <p className="text-xs font-bold text-white/90 uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-fb-link"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-teal hover:text-white transition-all text-xs font-bold"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-tw-link"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-teal hover:text-white transition-all text-xs font-bold"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  𝕏
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-ig-link"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-teal hover:text-white transition-all text-xs font-bold"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  ig
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-li-link"
                  className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-teal hover:text-white transition-all text-xs font-bold"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="pt-4 border-t border-white/10 text-xs text-gray-400 space-y-1">
              <p className="font-bold text-white/90 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal" /> Office Hours
              </p>
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" id="footer-about-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About PKF
                </Link>
              </li>
              <li>
                <Link href="/kidney-health" id="footer-health-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kidney Health Hub
                </Link>
              </li>
              <li>
                <Link href="/support" id="footer-support-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Patient &amp; Family Support
                </Link>
              </li>
              <li>
                <Link href="/programs" id="footer-programs-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Programs &amp; Initiatives
                </Link>
              </li>
              <li>
                <Link href="/get-involved" id="footer-get-involved-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" id="footer-news-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  News &amp; Media
                </Link>
              </li>
              <li>
                <Link href="/faq" id="footer-faq-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" id="footer-contact-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact & Google Map Column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Office Address</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal shrink-0 mt-1 w-4 h-4" />
                <div>
                  <span>Pediatric Kidney Foundation<br />E-11, South Extension-1,<br />New Delhi-110049</span>
                  <div className="mt-2">
                    <a
                      href="https://maps.google.com/?q=South+Extension-1+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="footer-google-map-link"
                      className="text-teal hover:underline text-xs font-semibold inline-flex items-center gap-1"
                    >
                      Google Map <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal shrink-0 w-4 h-4" />
                <span>+91 11 2469 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal shrink-0 w-4 h-4" />
                <span>contact@pediatrickidneyfoundation.org</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
            </p>
            {isSubscribed ? (
              <div className="bg-teal/20 border border-teal/40 rounded-xl p-4 flex items-center gap-2 text-teal text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="bg-teal text-white font-bold py-3 rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Newsletter
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Annual Reports, Privacy Policy, Terms, Social Media */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            Pediatric Kidney Foundation
          </p>
          <div className="flex flex-wrap gap-6 text-xs">
            <Link href="/contact" className="hover:text-white transition-colors">
              Annual Reports
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Social Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
