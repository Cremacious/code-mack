import Image from 'next/image';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">Projects</p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Here are some highlights from my portfolio, showcasing a range of
            skills and technologies. Each project is a testament to my
            commitment to quality and innovation in web development.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map(
            (
              {
                title,
                description,
                tech,
                liveUrl,
                githubUrl,
                status,
                statusColor,
                imagePath,
              },
              index,
            ) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-8 hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Preview */}
                  <div className="lg:w-80 shrink-0 rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto lg:h-48">
                    <Image
                      src={imagePath}
                      alt={title}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover object-top"
                      priority={index === 0}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white">{title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
                      >
                        {status}
                      </span>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-6">
                      {description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 text-sm font-bold hover:bg-white/90 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
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
              </div>
            ),
          )}

          {PROJECTS.length > 3 && (
            <div className="text-center">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-semibold text-sm hover:bg-white/15 transition-all"
              >
                See all projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Placeholder card */}
          {/* <div className="glass-card rounded-3xl p-8 border border-dashed border-white/20 flex flex-col items-center justify-center text-center min-h-48 gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white/90" />
            </div>
            <p className="text-white/90 font-medium">More coming soon</p>
            <p className="text-white/90 text-sm max-w-xs">
              New projects and client work added regularly.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
