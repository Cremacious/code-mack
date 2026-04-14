import Image from 'next/image';
import { ExternalLink, GitBranch } from 'lucide-react';
import { PERSONAL_PROJECTS, EXAMPLE_SITES } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="font-outfit text-xs font-semibold tracking-[0.18em] uppercase text-[#a8f0dc] mb-3">
            PORTFOLIO &amp; EXAMPLES
          </p> */}
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white">
            Portfolio &amp; Examples
          </h2>
        </div>

        {/* ─── Live Projects ─────────────────────────────────── */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/75 font-outfit">
            LIVE PROJECTS
          </p>
          <p className="text-xs text-white/65">
            {PERSONAL_PROJECTS.length} project{PERSONAL_PROJECTS.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="space-y-6">
          {PERSONAL_PROJECTS.map(
            ({ title, description, tech, liveUrl, githubUrl, type, imagePath }, index) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-6 flex flex-col lg:flex-row gap-6 hover:-translate-y-0.5 transition-all"
              >
                {/* Image */}
                <div className="lg:w-72 shrink-0 relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <span className="absolute top-3 left-3 bg-emerald-400 text-emerald-950 text-xs font-bold px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {type && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#a8f0dc] mb-1 font-outfit">
                      {type}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-3 font-outfit">
                    {title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4 text-sm">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 text-sm font-bold hover:bg-white/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-semibold hover:bg-white/15 transition-all"
                      >
                        <GitBranch className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* ─── Example Sites ─────────────────────────────────── */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/75 font-outfit">
              EXAMPLE SITES
            </p>
            <p className="text-xs text-white/65">
              {EXAMPLE_SITES.length} example{EXAMPLE_SITES.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXAMPLE_SITES.map(({ title, description, tech, liveUrl, imagePath }) => (
              <div
                key={title}
                className="glass-card rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white/20">
                    Example
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 font-outfit">
                    {title}
                  </h3>
                  <p className="text-white/88 text-sm leading-relaxed mb-4 flex-1">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/15 inline-flex items-center gap-1.5 hover:bg-white/10 transition-all mt-auto"
                  >
                    View Example
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="glass-card border border-white/20 text-white font-semibold px-8 py-3 rounded-2xl inline-flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            View All Projects and Examples &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
