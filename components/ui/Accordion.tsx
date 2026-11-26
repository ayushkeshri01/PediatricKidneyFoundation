'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3 bg-white transition-all hover:border-teal/40">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50/80 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-navy text-base sm:text-lg">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-teal shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-warm-white/50">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { id: string | number; title: string; content: React.ReactNode }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.id} title={item.title} defaultOpen={index === 0}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
