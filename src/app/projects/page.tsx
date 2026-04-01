import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, GitBranch, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PROJECTS } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects | Code Mack',
  description: 'All projects built by Chris Mackall — web apps, dashboards, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>

          <div className="mb-12">
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">All Projects</h1>
          </div>

          <div className="space-y-6">
            {PROJECTS.map(({ title, description, tech, liveUrl, githubUrl, status, statusColor, imagePath }) => (
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
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white">{title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                        {status}
                      </span>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-6">{description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium">
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
