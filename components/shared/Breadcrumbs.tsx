import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';
  const muted = isDark ? 'text-white/70' : 'text-gray-500';
  const hover = isDark ? 'hover:text-white' : 'hover:text-teal';
  const current = isDark ? 'text-white' : 'text-navy';
  const sep = isDark ? 'text-white/50' : 'text-gray-400';

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className={`flex items-center space-x-2 text-xs ${muted} flex-wrap`}>
        <li>
          <Link href="/" className={`${hover} flex items-center gap-1 transition-colors`}>
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className={`w-3 h-3 ${sep}`} aria-hidden="true" />
              {isLast || !crumb.href ? (
                <span className={`font-semibold ${current} truncate max-w-xs`} aria-current={isLast ? 'page' : undefined}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className={`${hover} transition-colors`}>
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
