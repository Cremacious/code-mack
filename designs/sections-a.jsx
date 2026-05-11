/* Sections: Navbar, Hero, About, Projects, Why, Contact, Footer */
const { useEffect: _useEffect, useRef: _useRef, useState: _useState } = React;

// ─── Reveal-on-scroll wrapper
function Reveal({ children, variant = 'up', delay = 0, className = '', as: As = 'div' }) {
  const ref = _useRef(null);
  const [seen, setSeen] = _useState(false);
  _useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  const variantClass = variant === 'left' ? 'reveal-left'
                     : variant === 'right' ? 'reveal-right'
                     : variant === 'scale' ? 'reveal-scale'
                     : '';
  return (
    <As
      ref={ref}
      className={`reveal ${variantClass} ${seen ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </As>
  );
}

// ─── Icons (inline SVG — lucide-style)
const Icon = {
  Code:    () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Arrow:   () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>,
  ArrowRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Phone:   () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  Map:     () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock:   () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Send:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  External:() => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Git:     () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>,
  Check:   ({c = 'currentColor'}={}) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  X:       () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Minus:   () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Menu:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Close:   () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

// ─── Navbar (glass, sticky)
function Navbar() {
  const [scrolled, setScrolled] = _useState(false);
  const [menuOpen, setMenuOpen] = _useState(false);

  _useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About',    href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Code Mack', href: '#why' },
    { label: 'Contact',  href: '#contact' },
  ];

  return (
    <header
      data-screen-label="Navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-6xl'}`}
        style={{ paddingInline: scrolled ? 16 : 0 }}
      >
        <div className={`glass-navbar transition-all duration-500 ${scrolled ? 'rounded-2xl' : 'rounded-none border-0'}`}
             style={{
               background: scrolled ? 'rgba(8, 50, 63, 0.42)' : 'rgba(8, 50, 63, 0.18)',
               borderRadius: scrolled ? 18 : 0,
               margin: scrolled ? '0 8px' : 0,
             }}>
          <div className="px-5 sm:px-6 h-16 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                <span style={{ color: 'var(--seafoam)' }}>{'<'}</span>
                <span className="text-white">CODE</span>
                <span style={{ color: 'var(--seafoam)' }}>://</span>
                <span className="text-white">MACK</span>
                <span style={{ color: 'var(--seafoam)' }}>{'/>'}</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map(({ label, href }) => (
                <a key={href} href={href}
                   className="px-3.5 py-2 text-white/90 hover:text-white text-[14px] font-medium transition-all rounded-lg hover:bg-white/10">
                  {label}
                </a>
              ))}
              <a href="#contact"
                 className="ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-[1.04] active:scale-[0.97] whitespace-nowrap"
                 style={{
                   background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                   color: '#3a1a0f',
                   boxShadow: '0 6px 18px -6px rgba(255, 138, 107, 0.6)',
                 }}>
                Get a Quote
              </a>
            </nav>

            <button onClick={() => setMenuOpen(v => !v)}
                    className="md:hidden p-2 text-white/90 hover:text-white" aria-label="Toggle menu">
              {menuOpen ? <Icon.Close /> : <Icon.Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-white/10 px-5 py-3">
              {links.map(({label, href}) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}
                   className="block px-3 py-3 text-white text-sm font-semibold hover:bg-white/10 rounded-lg">
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                 className="mt-2 block text-center px-4 py-3 rounded-full text-sm font-bold"
                 style={{ background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)', color: '#3a1a0f' }}>
                Get a Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// ─── Hero (sunlit surface)
function Hero() {
  return (
    <section
      id="top"
      data-screen-label="01 Hero"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <SurfaceRipple />

      {/* Subtle warm corner glow — sun */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', right: '-10%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(255, 220, 150, 0.32), transparent 65%)',
        filter: 'blur(20px)',
      }} />

      {/* Decorative coral/kelp at corners */}
      <div className="absolute pointer-events-none" style={{ bottom: -20, left: -20, opacity: 0.7 }}>
        <div className="frond slow"><FrondSVG tone="kelp" /></div>
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: -40, right: -10, opacity: 0.6 }}>
        <div className="frond fast" style={{ transform: 'scaleX(-1)' }}><FrondSVG tone="coral" /></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center" style={{ paddingTop: 140 }}>
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white text-[13px] font-semibold mb-8"
               style={{ letterSpacing: '0.01em' }}>
            <span style={{ color: 'var(--seafoam)' }}><Icon.Code /></span>
            Full-Stack Web Developer in Sarasota, FL
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display font-extrabold text-white mb-6 tracking-tight"
              style={{ fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 1.04, textWrap: 'balance' }}>
            Websites built{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffd28a 10%, #ff8a6b 70%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>to last</span>,<br/>
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
            <a href="#projects"
               className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-[1.04] active:scale-[0.97]"
               style={{
                 background: 'linear-gradient(135deg, #ffffff 0%, #f4f9ff 100%)',
                 color: '#0c5d68',
                 boxShadow: '0 14px 36px -10px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.4) inset',
               }}>
              See Portfolio and Examples
            </a>
            <a href="#contact"
               className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/15 transition-all whitespace-nowrap">
              Get a Quote
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-20 flex flex-col items-center gap-2 dive">
            <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">Dive in</span>
            <Icon.Arrow />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── About
function About() {
  const skills = ['Next.js','React','TypeScript','Tailwind CSS','Node.js','PostgreSQL','MongoDB','Stripe','TanStack','Vite','Drizzle ORM','REST APIs'];
  return (
    <section id="about" data-screen-label="02 About" className="relative py-28">
      <WaveDivider from="rgba(255,255,255,0.08)" to="transparent" flip className="absolute top-0" />

      {/* Coral frond accent */}
      <div className="absolute pointer-events-none hidden lg:block"
           style={{ top: '6%', right: '-20px', opacity: 0.55 }}>
        <div className="frond"><FrondSVG tone="coral" /></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Photo */}
          <Reveal variant="left">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-card"
                 style={{
                   boxShadow: '0 30px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08) inset',
                 }}>
              <img src="assets/profile.jpg" alt="Chris Mackall"
                   className="absolute inset-0 w-full h-full object-cover object-top" />
              {/* Caustic overlay on photo */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{
                     background: 'radial-gradient(ellipse at top, rgba(255, 240, 200, 0.18), transparent 60%)',
                     mixBlendMode: 'overlay',
                   }} />
              {/* Status pill */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 glass-card rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                   style={{ background: 'rgba(8, 50, 63, 0.6)' }}>
                <span className="w-2 h-2 rounded-full dot-pulse" style={{ background: 'var(--seafoam)', boxShadow: '0 0 8px var(--seafoam)' }} />
                <span className="text-sm font-semibold text-white">Sarasota, FL · Available now</span>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3"
               style={{ color: 'var(--seafoam)' }}>
              About
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Hi, I&rsquo;m Chris Mackall.
            </h2>
            <p className="text-lg font-medium mb-6" style={{ color: 'var(--seafoam)' }}>
              Full-Stack Developer and Web Designer in Sarasota, Florida
            </p>
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

            <div className="h-px w-full mb-6"
                 style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase text-white/75 mb-4">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {skills.map((s, i) => (
                <Reveal key={s} delay={i * 40} variant="up" className="whitespace-nowrap">
                  <span className="glass-card rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:text-white hover:bg-white/15 transition-all cursor-default whitespace-nowrap inline-block">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
                 style={{ borderColor: 'rgba(154, 240, 208, 0.3)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--seafoam)', flexShrink: 0 }}>
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
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

Object.assign(window, { Reveal, Icon, Navbar, Hero, About });
