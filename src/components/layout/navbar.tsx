'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
          ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className='text-2xl font-bold'>
            <span className='text-emerald-300'>{'<'}</span>
            CODE://MACK
                   <span className='text-emerald-300'>{'/>'}</span>
          </div>
          {/* <Image
            src="/images/logo-cropped.png"
            alt="Code Mack"
            width={120}
            height={40}
            className="h-6 w-auto object-contain"
            priority
          /> */}
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
            className="ml-3 px-4 py-2 rounded-full bg-white text-[#0a1e35] text-sm font-bold hover:bg-white/90 transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a1e35]/95 backdrop-blur-md border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base text-white font-bold font-sans hover:text-white transition-colors rounded-lg hover:bg-white/15"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-white text-[#0a1e35] text-sm font-bold text-center hover:bg-white/90 transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
