'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Code Mack', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        scrolled
          ? 'bg-white/10 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-white tracking-tight hover:text-white/80 transition-colors">
          Code://Mack
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 text-white hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 rounded-full bg-white text-sky-700 text-sm font-bold hover:bg-white/90 transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/20">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-white text-sky-700 text-sm font-bold text-center hover:bg-white/90 transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
