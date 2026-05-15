import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { WaveDivider } from '@/components/ambient/ocean-ambient';

const SKILLS = [
  'Next.js','React','TypeScript','Tailwind CSS','Node.js',
  'PostgreSQL','MongoDB','Stripe','TanStack','Vite','Drizzle ORM','REST APIs',
];

function MobileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--seafoam)', flexShrink: 0 }}>
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <WaveDivider from="rgba(255,255,255,0.08)" to="transparent" flip />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Photo */}
          <Reveal variant="left">
            <div
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-card"
              style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Chris Mackall"
                fill
                className="object-cover object-top"
              />
              {/* Caustic overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(255, 240, 200, 0.18), transparent 60%)', mixBlendMode: 'overlay' }}
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--seafoam)' }}>
              About
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Hi, I&rsquo;m Chris Mackall.
            </h2>
            <p className="text-white/90 text-[15px] leading-[1.75] mb-4">
              I&rsquo;m a full-stack web developer based in Sarasota, Florida,
              building custom websites and web applications for businesses of
              all sizes. From polished landing pages to complete platforms, I
              handle everything from design to deployment so you get a site that
              works as hard as you do.
            </p>
            <p className="text-white/90 text-[15px] leading-[1.75] mb-8">
              I build fast, modern, mobile-first websites that you own outright.
              No templates, no monthly platform fees, just clean code that works.
            </p>

            <div
              className="h-px w-full mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
            />

            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase text-white/75 mb-4">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {SKILLS.map((s, i) => (
                <Reveal key={s} delay={i * 40} variant="up" className="whitespace-nowrap">
                  <span className="glass-card rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:text-white hover:bg-white/15 transition-all cursor-default whitespace-nowrap inline-block">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>

            <div
              className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              style={{ borderColor: 'rgba(143, 212, 255, 0.3)' }}
            >
              <MobileIcon />
              <span className="text-white text-sm">
                <strong>Mobile-first by default.</strong> Every site looks great on any device, whether phone, tablet, or desktop.
              </span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
