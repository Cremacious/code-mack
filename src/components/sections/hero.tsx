import { Reveal } from '@/components/Reveal';
import { SurfaceRipple, FrondSVG } from '@/components/ambient/ocean-ambient';

function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <SurfaceRipple />

      {/* Sun glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-10%', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255, 220, 150, 0.32), transparent 65%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Kelp frond — bottom left */}
      <div className="absolute pointer-events-none" style={{ bottom: -20, left: -20, opacity: 0.7 }}>
        <div className="frond slow"><FrondSVG tone="kelp" /></div>
      </div>
      {/* Coral frond — bottom right */}
      <div className="absolute pointer-events-none" style={{ bottom: -40, right: -10, opacity: 0.6 }}>
        <div className="frond fast" style={{ transform: 'scaleX(-1)' }}><FrondSVG tone="coral" /></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center" style={{ paddingTop: 140 }}>

        <Reveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white text-[13px] font-semibold mb-8"
            style={{ letterSpacing: '0.01em' }}
          >
            <span style={{ color: 'var(--seafoam)' }}><CodeIcon /></span>
            Full-Stack Web Developer in Sarasota, FL
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1
            className="font-display font-extrabold text-white mb-6 tracking-tight"
            style={{ fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 1.04 }}
          >
            Websites built{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffd28a 10%, #ff8a6b 70%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>to last</span>,<br />
            not rented.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I build fast, custom, mobile-first websites for Florida businesses and beyond.
            You own the code outright. No templates, no platform lock-in.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f4f9ff 100%)',
                color: '#0c5d68',
                boxShadow: '0 14px 36px -10px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.4) inset',
              }}
            >
              See Portfolio and Examples
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/15 transition-all whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-20 flex flex-col items-center gap-2 dive">
            <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">Dive in</span>
            <ArrowDownIcon />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
