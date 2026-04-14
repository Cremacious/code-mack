import Image from 'next/image';
import { Smartphone } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Chris Mackall"
              fill
              className="object-cover object-top"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Sarasota, FL &bull; Available now
              </span>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="font-outfit text-xs font-semibold tracking-[0.18em] uppercase text-[#a8f0dc] mb-3">
              ABOUT
            </p>
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-white mb-2">
              Hi, I&apos;m Chris Mackall.
            </h2>
            <p className="text-[#a8f0dc] text-lg font-medium mb-6">
              Full-Stack Developer and Web Designer in Sarasota, Florida
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              I&apos;m a full-stack web developer based in Sarasota, Florida,
              building custom websites and web applications for businesses of
              all sizes. From polished landing pages to complete platforms, I
              handle everything from design to deployment so you get a site that
              works as hard as you do.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              I build fast, modern, mobile-first websites that you own outright.
              No templates, no monthly platform fees, just clean code that
              works.
            </p>

            <hr className="border-white/10 my-6" />

            <p className="font-outfit text-xs font-semibold tracking-[0.18em] uppercase text-white/60 mb-4">
              TECHNOLOGIES I WORK WITH
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Node.js',
                'PostgreSQL',
                'MongoDB',
                'Stripe',
                'TanStack',
                'Vite',
                'Drizzle ORM',
                'REST APIs',
              ].map((skill) => (
                <div
                  key={skill}
                  className="glass-card rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3 border border-emerald-400/20">
              <Smartphone className="text-[#a8f0dc] shrink-0" size={20} />
              <span className="text-white text-sm">
                <strong>Mobile-first by default.</strong> Every site looks great
                on any device, whether phone, tablet, or desktop.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
