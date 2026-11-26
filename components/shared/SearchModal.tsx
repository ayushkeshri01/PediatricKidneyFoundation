'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, BookOpen, Stethoscope, Heart, Activity } from 'lucide-react';
import { getSiteSearchIndex } from '@/content/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const allItems = useMemo(() => getSiteSearchIndex(), []);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      prev?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [isOpen, onClose]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy/60 backdrop-blur-sm animate-fadeIn" onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-warm-white">
          <Search className="w-5 h-5 text-teal shrink-0" aria-hidden="true" />
          <label htmlFor="site-search-input" className="sr-only">Search the site</label>
          <input
            id="site-search-input"
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diseases, symptoms, tests, programs, FAQs..."
            className="w-full bg-transparent text-charcoal placeholder-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer" aria-label="Clear search">
              <X className="w-4 h-4" />
            </button>
          )}
          <button type="button" ref={closeRef} onClick={onClose} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer" aria-label="Close search">
            ESC
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-gray-50 flex-1">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3" aria-live="polite">
            {query.trim() ? `Search Results (${filteredResults.length})` : 'Popular Topics & Quick Nav'}
          </div>

          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="font-semibold text-navy text-lg mb-1">No matching resources found</p>
              <p className="text-sm">Try searching for &ldquo;swelling&rdquo;, &ldquo;dialysis&rdquo;, &ldquo;UTI&rdquo;, or &ldquo;transplant&rdquo;.</p>
            </div>
          ) : (
            <div className="space-y-2" role="list">
              {filteredResults.map((item, idx) => (
                <Link key={idx} href={item.href} onClick={onClose} className="group flex items-start justify-between p-3 rounded-xl hover:bg-teal/5 transition-all focus:outline-none focus:ring-2 focus:ring-teal/40" role="listitem">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-white transition-colors">
                      {item.category.includes('Condition') || item.category.includes('Disease') ? <Activity className="w-4 h-4" /> :
                       item.category.includes('Test') ? <Stethoscope className="w-4 h-4" /> :
                       item.category.includes('Donation') ? <Heart className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-navy group-hover:text-teal text-sm transition-colors">{item.title}</span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">{item.category}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0 mt-2" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="p-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center px-6">
          <span>Pediatric Kidney Foundation Search Index</span>
          <span className="text-teal font-semibold">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
