import { Reveal } from '@/components/Reveal';

const COMPARISON = [
  { feature: 'Custom design',           codeMack: true,  squarespace: false,       wix: false },
  { feature: 'You own the code',        codeMack: true,  squarespace: false,       wix: false },
  { feature: 'No monthly platform fee', codeMack: true,  squarespace: false,       wix: false },
  { feature: 'Mobile-first build',      codeMack: true,  squarespace: 'sometimes', wix: 'sometimes' },
  { feature: 'Custom web app support',  codeMack: true,  squarespace: false,       wix: false },
  { feature: 'Affordable pricing',      codeMack: true,  squarespace: 'medium',    wix: 'medium' },
  { feature: 'Direct developer access', codeMack: true,  squarespace: false,       wix: false },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Cell({ v }: { v: boolean | string }) {
  if (v === true)  return <span style={{ color: 'var(--seafoam)', display: 'inline-flex' }}><CheckIcon /></span>;
  if (v === false) return <span style={{ color: 'rgba(255,138,107,0.85)', display: 'inline-flex' }}><XIcon /></span>;
  return <span style={{ color: 'rgba(255,255,255,0.65)', display: 'inline-flex' }}><MinusIcon /></span>;
}

export function Why() {
  return (
    <section id="why" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">

        <Reveal>
          <div className="text-center mb-14">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--seafoam)' }}>
              The Code Mack difference
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Stop renting your website.
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Platforms like Squarespace and Wix charge you every month forever
              for a site you never truly own. Here&rsquo;s how Code Mack compares.
            </p>
          </div>
        </Reveal>

        {/* Desktop table */}
        <Reveal variant="scale">
          <div
            className="hidden md:block rounded-3xl overflow-hidden glass-card"
            style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.55)' }}
          >
            <div className="grid grid-cols-4 border-b border-white/10" style={{ background: 'rgba(8, 50, 63, 0.4)' }}>
              <div className="p-5" />
              <div className="p-5 text-center border-l border-white/10">
                <p className="font-display font-bold text-base" style={{ color: 'var(--seafoam)' }}>Code Mack</p>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <p className="text-white/85 font-medium">Squarespace</p>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <p className="text-white/85 font-medium">Wix</p>
              </div>
            </div>

            {COMPARISON.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-4 border-b border-white/5 last:border-0 transition-colors ${i % 2 ? 'bg-white/[0.02]' : ''}`}
              >
                <div className="p-4 pl-6 flex items-center">
                  <p className="text-white/95 text-[15px]">{r.feature}</p>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10" style={{ background: 'rgba(154, 240, 208, 0.06)' }}>
                  <Cell v={r.codeMack} />
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10"><Cell v={r.squarespace} /></div>
                <div className="p-4 flex items-center justify-center border-l border-white/10"><Cell v={r.wix} /></div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {COMPARISON.map((r, i) => (
            <Reveal key={r.feature} delay={i * 60}>
              <div className="glass-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-white mb-4">{r.feature}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3" style={{ background: 'rgba(154, 240, 208, 0.1)' }}>
                    <Cell v={r.codeMack} />
                    <span className="text-xs font-semibold text-center" style={{ color: 'var(--seafoam)' }}>Code Mack</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3" style={{ background: 'rgba(0,0,0,0.18)' }}>
                    <Cell v={r.squarespace} />
                    <span className="text-xs text-white/90 text-center">Squarespace</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3" style={{ background: 'rgba(0,0,0,0.18)' }}>
                    <Cell v={r.wix} />
                    <span className="text-xs text-white/90 text-center">Wix</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-white/90 mb-6 text-lg">Ready to own your website?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                color: '#3a1a0f',
                boxShadow: '0 14px 36px -10px rgba(255,138,107,0.55)',
              }}
            >
              Get a Free Quote <ArrowRightIcon />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
