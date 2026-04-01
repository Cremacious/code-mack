import { ArrowDown, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Warm radial gradient background */}
      <div className="absolute inset-0 bg-[#0f0a00]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(245,158,11,0.06),transparent)]" />

      {/* Floating glass orbs — decorative */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-amber-400/4 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-amber-400 text-sm font-medium mb-8">
          <Code2 className="w-3.5 h-3.5" />
          Full-Stack Web Developer in Sarasota, FL
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Websites built{' '}
          <span className="text-amber-400">to last,</span>
          <br />
          not rented.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build fast, custom, mobile-first websites for Florida businesses and beyond.
          You own the code outright. No templates, no platform lock-in.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-base hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-amber-500/10 transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
