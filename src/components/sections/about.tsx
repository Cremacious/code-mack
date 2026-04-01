import { Laptop, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Hi, I&apos;m Chris Mackall.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              I&apos;m a self-taught full-stack developer based in Sarasota, Florida. Since 2022 I&apos;ve gone from writing my first line of code to building complete web applications from the ground up, including Beehive Books, a full-featured social writing platform.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              I build fast, modern, mobile-first websites that you own outright. No templates, no monthly platform fees, just clean code that works.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Since 2022</p>
                  <p className="text-white/90 text-xs">Self-taught developer</p>
                </div>
              </div>
              <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Sarasota, FL</p>
                  <p className="text-white/90 text-xs">Local and remote work</p>
                </div>
              </div>
              <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                <Laptop className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Full-Stack</p>
                  <p className="text-white/90 text-xs">Frontend to database</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — skills grid */}
          <div>
            <p className="text-white text-sm font-medium uppercase tracking-widest mb-6">Tech Stack</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                'Next.js', 'React', 'TypeScript',
                'Tailwind CSS', 'Node.js', 'PostgreSQL',
                'MongoDB', 'Stripe', 'TanStack',
                'Vite', 'Drizzle ORM', 'REST APIs',
              ].map((skill) => (
                <div
                  key={skill}
                  className="glass-card rounded-xl px-3 py-3 text-center text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Mobile-first badge */}
            <div className="mt-4 glass-card rounded-2xl px-5 py-4 flex items-center gap-3 border border-emerald-400/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-sm text-white/90">
                <span className="text-emerald-300 font-semibold">Mobile-first</span> by default. Every site looks great on any device.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
