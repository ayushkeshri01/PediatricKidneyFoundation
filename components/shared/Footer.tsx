'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  FileText,
  Shield,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  // Newsletter Form State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  // Quick Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setIsNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsContactSubmitted(true);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      {/* =========================================================================
          SECTION 1: HIGH-PRIORITY ACTION & LOCATION BAR
          (Office Hours, Google Map, Quick Contact Form, Follow Us)
         ========================================================================= */}
      <div className="bg-gray-900/90 border-b border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* 1. Office Hours */}
            <div className="bg-gray-950/70 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-teal">
                  <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Office Hours
                  </h4>
                </div>
                
                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-800">
                    <span className="text-gray-400">Monday – Friday:</span>
                    <span className="font-semibold text-white">9:00 AM – 5:30 PM (IST)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-800">
                    <span className="text-gray-400">Saturday:</span>
                    <span className="font-semibold text-white">9:30 AM – 1:30 PM (IST)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-gray-400">Sunday:</span>
                    <span className="font-semibold text-coral">Emergency Hotline On-Call</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-800 text-[11px] text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span>Central Clinical Help Desk Available</span>
              </div>
            </div>

            {/* 2. Google Map & Secretariat Location */}
            <div className="bg-gray-950/70 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-teal">
                  <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Google Map &amp; Office
                  </h4>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  <strong>Pediatric Kidney Foundation</strong><br />
                  E-11, South Extension-1,<br />
                  New Delhi – 110049, India
                </p>

                <p className="text-[11px] text-gray-400 mb-4">
                  Near AIIMS &amp; Safdarjung Hospital Medical Corridor
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=South+Extension-1+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-google-map-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-teal text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all border border-white/10 hover:border-teal cursor-pointer group"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* 3. Quick Contact Form */}
            <div className="bg-gray-950/70 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-2.5 mb-4 text-teal">
                <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center">
                  <Send className="w-4 h-4 text-teal" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider">
                  Contact Form
                </h4>
              </div>

              {isContactSubmitted ? (
                <div className="py-6 text-center text-xs text-teal bg-teal/10 rounded-xl p-4 border border-teal/20">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-teal" />
                  <p className="font-bold">Thank You!</p>
                  <p className="text-gray-300 mt-1">Your message has been sent to our desk.</p>
                  <button
                    onClick={() => setIsContactSubmitted(false)}
                    className="mt-3 text-[10px] text-white underline hover:text-teal"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-white/5 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-white/5 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal"
                  />
                  <textarea
                    required
                    rows={2}
                    placeholder="How can we help your child?"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-white/5 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-coral hover:brightness-110 active:scale-95 text-white text-xs font-bold py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3 h-3" /> Send Quick Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* 4. Follow Us & Social Media */}
            <div className="bg-gray-950/70 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-teal">
                  <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Follow Us
                  </h4>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Connect with our clinical community for regular pediatric health tips, free screening schedules, and patient advocacy.
                </p>

                {/* Social Media Link Badges */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-teal hover:text-white text-gray-300 transition-colors border border-gray-800"
                    aria-label="Facebook"
                  >
                    <span className="font-bold text-xs">f</span> Facebook
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-teal hover:text-white text-gray-300 transition-colors border border-gray-800"
                    aria-label="Twitter / X"
                  >
                    <span className="font-bold text-xs">𝕏</span> Twitter/X
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-teal hover:text-white text-gray-300 transition-colors border border-gray-800"
                    aria-label="Instagram"
                  >
                    <span className="font-bold text-xs">ig</span> Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-teal hover:text-white text-gray-300 transition-colors border border-gray-800"
                    aria-label="LinkedIn"
                  >
                    <span className="font-bold text-xs">in</span> LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-800 text-[11px] text-gray-400">
                Join 25,000+ parents and pediatric care advocates.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: MAIN FOOTER NAVIGATION
          (Quick Links, Annual Reports & Governance, Direct Contact, Newsletter)
         ========================================================================= */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Col 1: Brand & Identity */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center border border-teal/30">
                  <HeartPulse className="text-teal w-6 h-6" />
                </div>
                <div>
                  <span className="block font-extrabold text-xl tracking-tight text-white">PKF</span>
                  <span className="block text-[10px] text-teal font-semibold tracking-widest uppercase">
                    Pediatric Kidney Foundation
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                A registered Indian charitable non-profit trust dedicated exclusively to childhood kidney healthcare, clinical research, early detection, and compassionate patient assistance since 5 April 2004.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal shrink-0" />
                  <span>+91 (011) 4567-8901</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal shrink-0" />
                  <span>contact@pkf-india.org</span>
                </p>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-l-2 border-teal pl-3">
                Quick Links
              </h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" id="footer-about-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    About PKF &amp; History
                  </Link>
                </li>
                <li>
                  <Link href="/kidney-health" id="footer-health-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Kidney Health Hub
                  </Link>
                </li>
                <li>
                  <Link href="/kidney-health/diseases" id="footer-diseases-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Common Childhood Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/treatment" id="footer-treatment-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Dialysis &amp; Transplant Care
                  </Link>
                </li>
                <li>
                  <Link href="/support" id="footer-support-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Patient Support &amp; Families
                  </Link>
                </li>
                <li>
                  <Link href="/programs" id="footer-programs-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Community Programs &amp; Camps
                  </Link>
                </li>
                <li>
                  <Link href="/about/leadership" id="footer-leadership-link" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-teal group-hover:translate-x-1 transition-transform" />
                    Leadership &amp; Medical Board
                  </Link>
                </li>
                <li>
                  <Link href="/donate" id="footer-donate-link" className="text-gray-400 hover:text-coral transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-coral group-hover:translate-x-1 transition-transform" />
                    Donate &amp; Subsidize Treatment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Annual Reports & Governance */}
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-l-2 border-teal pl-3">
                Annual Reports &amp; Transparency
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                We maintain complete institutional transparency and governance compliance across all programs.
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/annual-reports"
                    id="footer-annual-reports-link"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FileText className="w-4 h-4 text-teal shrink-0" />
                    <span>Annual Reports (2020–2024)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/annual-reports#audited"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FileText className="w-4 h-4 text-teal shrink-0" />
                    <span>Audited Financial Statements</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#governance"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Shield className="w-4 h-4 text-teal shrink-0" />
                    <span>Trust Governance &amp; Bylaws</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Shield className="w-4 h-4 text-teal shrink-0" />
                    <span>Donor Data Protection Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-teal shrink-0" />
                    <span>Secretariat Contact Desk</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-l-2 border-teal pl-3">
                Newsletter
              </h5>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                Subscribe to receive our clinical newsletters, early detection guidelines, and event announcements directly in your inbox.
              </p>

              {isNewsletterSubscribed ? (
                <div className="bg-teal/20 border border-teal/40 rounded-xl p-4 flex items-center gap-3 text-teal">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-semibold">Thank you for subscribing to PKF updates!</span>
                </div>
              ) : (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    id="newsletter-email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal focus:bg-white/10 transition-all w-full text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="bg-teal hover:brightness-110 active:scale-95 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Subscribe to Updates
                  </button>
                  <p className="text-[10px] text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>

          </div>

          {/* =========================================================================
              SECTION 3: BOTTOM COMPLIANCE & LEGAL BAR
              (Copyright, Privacy Policy, Terms, Medical Disclaimer, Annual Reports)
             ========================================================================= */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2024 Pediatric Kidney Foundation. All rights reserved. Registered Indian Non-Profit Charitable Trust.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <Link href="/privacy" id="privacy-link" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" id="terms-link" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/annual-reports" id="footer-bottom-reports-link" className="hover:text-white transition-colors">
                Annual Reports
              </Link>
              <Link href="/disclaimer" id="disclaimer-link" className="hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
