'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, BookOpen, Stethoscope, Heart, Activity } from 'lucide-react';
import { getSiteSearchIndex } from '@/content/search';
import { SearchResultItem } from '@/types/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const allItems = useMemo(() => getSiteSearchIndex(), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 8);
    }
    const q = query.toLowerCase();
    return allItems.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-warm-white">
          <Search className="w-5 h-5 text-teal shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diseases (e.g. Nephrotic Syndrome, UTI), tests, programs, FAQs..."
            autoFocus
            className="w-full bg-transparent text-charcoal placeholder-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-gray-50 flex-1">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            {query.trim() ? `Search Results (${filteredResults.length})` : 'Popular Topics & Quick Nav'}
          </div>

          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="font-semibold text-navy text-lg mb-1">No matching resources found</p>
              <p className="text-sm">Try searching for symptoms like &ldquo;swelling&rdquo;, &ldquo;dialysis&rdquo;, &ldquo;camps&rdquo;, or &ldquo;transplant&rdquo;.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredResults.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start justify-between p-3 rounded-xl hover:bg-teal/5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-white transition-colors">
                      {item.category.includes('Condition') || item.category.includes('Disease') ? (
                        <Activity className="w-4 h-4" />
                      ) : item.category.includes('Test') ? (
                        <Stethoscope className="w-4 h-4" />
                      ) : item.category.includes('Donation') ? (
                        <Heart className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-navy group-hover:text-teal text-sm transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center px-6">
          <span>Pediatric Kidney Foundation Search Index</span>
          <span className="text-teal font-semibold">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
