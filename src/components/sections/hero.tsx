import { ArrowDown, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Sky blue background with depth gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0C4A6E] via-[#0369A1] to-[#0284C7]" />

      {/* Cloud shapes — white blobs, blurred */}
      <div className="absolute top-[15%] left-[10%] w-96 h-32 rounded-full bg-white/8 blur-3xl pointer-events-none" />
      <div className="absolute top-[25%] right-[5%] w-80 h-24 rounded-full bg-white/6 blur-2xl pointer-events-none" />
      <div className="absolute top-[10%] left-[40%] w-64 h-20 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-72 h-28 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[30%] right-[15%] w-56 h-20 rounded-full bg-white/6 blur-2xl pointer-events-none" />

      {/* Subtle bottom fade to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-[#0369A1]/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white text-sm font-medium mb-8">
          <Code2 className="w-3.5 h-3.5 text-white/70" />
          Full-Stack Web Developer in Sarasota, FL
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-lg font-(family-name:--font-outfit)">
          Websites built{' '}
          <span className="text-emerald-300">to last</span>,
          <br />
          not rented.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build fast, custom, mobile-first websites for Florida businesses and beyond.
          You own the code outright. No templates, no platform lock-in.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-sky-700 font-bold text-base hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/15 transition-all"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
