'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Why Code Mack', href: '#why' },
  { label: 'Contact',       href: '#contact' },
];

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-6xl'}`}
        style={{ paddingInline: scrolled ? 16 : 0 }}
      >
        <div
          className="glass-navbar transition-all duration-500 rounded-2xl"
          style={{
            background:   scrolled ? 'rgba(8, 37, 84, 0.42)' : 'rgba(8, 37, 84, 0.18)',
            borderRadius: 18,
            margin:       scrolled ? '0 8px' : 0,
          }}
        >
          <div className="px-5 sm:px-6 h-16 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                <span style={{ color: 'var(--seafoam)' }}>{'<'}</span>
                <span className="text-white">CODE</span>
                <span style={{ color: 'var(--seafoam)' }}>{'://'}</span>
                <span className="text-white">MACK</span>
                <span style={{ color: 'var(--seafoam)' }}>{'/>'}</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-3.5 py-2 text-white/90 hover:text-white text-[14px] font-medium transition-all rounded-lg hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-[1.04] active:scale-[0.97] whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                  color: '#3a1a0f',
                  boxShadow: '0 6px 18px -6px rgba(255, 138, 107, 0.6)',
                }}
              >
                Get a Quote
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden p-2 text-white/90 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-white/10 px-5 py-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-3 text-white text-sm font-semibold hover:bg-white/10 rounded-lg"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block text-center px-4 py-3 rounded-full text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)', color: '#3a1a0f' }}
              >
                Get a Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
