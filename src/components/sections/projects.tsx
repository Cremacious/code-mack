import Image from 'next/image';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { PERSONAL_PROJECTS, EXAMPLE_SITES } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">

        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--seafoam)' }}>
              Portfolio · Examples
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Things I&rsquo;ve built.
            </h2>
          </div>
        </Reveal>

        {/* ── Live Projects ── */}
        <Reveal>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/80 font-display">Live Projects</p>
            <p className="text-xs text-white/65">{PERSONAL_PROJECTS.length} project{PERSONAL_PROJECTS.length !== 1 ? 's' : ''}</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {PERSONAL_PROJECTS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 100}>
              <div
                className="glass-card rounded-3xl p-6 flex flex-col lg:flex-row gap-6 hover:-translate-y-1 transition-all duration-500 group"
                style={{ boxShadow: '0 20px 60px -30px rgba(0,0,0,0.5)' }}
              >
                <div className="lg:w-80 shrink-0 relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={p.imagePath}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={idx === 0}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--seafoam)', color: '#0b2e6b' }}
                  >
                    Live
                  </span>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(8,50,63,0.4), transparent 50%)' }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {p.type && (
                    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--seafoam)' }}>
                      {p.type}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/85 leading-relaxed mb-4 text-[14.5px]">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium">{t}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-[1.04]"
                      style={{
                        background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                        color: '#3a1a0f',
                        boxShadow: '0 8px 20px -8px rgba(255,138,107,0.55)',
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Live Site
                    </a>
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-semibold hover:bg-white/15 transition-all"
                      >
                        <GitBranch className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Example Sites ── */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/80 font-display">Example Sites</p>
              <p className="text-xs text-white/65">{EXAMPLE_SITES.length} examples</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAMPLE_SITES.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} variant="scale">
                <div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={p.imagePath}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span
                      className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full border border-white/20"
                      style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', color: '#fff' }}
                    >
                      Example
                    </span>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(8,50,63,0.45), transparent 55%)' }}
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-full glass text-white/90 text-xs font-medium">{t}</span>
                      ))}
                    </div>

                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/15 inline-flex items-center gap-1.5 hover:bg-white/12 transition-all mt-auto self-start"
                    >
                      View Example <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <a
              href="/projects"
              className="glass-card border border-white/20 text-white font-semibold px-8 py-3.5 rounded-2xl inline-flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              View All Projects and Examples <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
