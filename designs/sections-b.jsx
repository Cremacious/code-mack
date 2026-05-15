/* Projects, Why, Contact, Footer */

const PERSONAL_PROJECTS = [
{
  title: 'Beehive Books',
  description:
  'A fully custom online reading and community platform. Users can discover books, track their reading progress, join book clubs, and connect with other readers. Built from scratch with a full backend, database, and authentication system.',
  tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'User Auth', 'Full Stack'],
  liveUrl: 'https://www.beehive-books.app',
  githubUrl: 'https://github.com/Cremacious/beehive-books',
  imagePath: 'assets/portfolio/beehive.png',
  type: 'Full Stack Application'
}];


const EXAMPLE_SITES = [
{
  title: 'Admin Dashboard',
  description: 'A fully responsive admin dashboard with live Recharts data visualizations, KPI cards, and a product management table with sorting, order tracking, a multi-tab settings panel, and a data addition workflow.',
  tech: ['React', 'TanStack', 'TypeScript'],
  liveUrl: 'https://sales-dashboard-lyart-two.vercel.app',
  imagePath: 'assets/portfolio/dashboard2.png'
},
{
  title: 'Restaurant Site',
  description: 'A polished restaurant website with a menu, online reservation form, location info, and a photo gallery. Perfect for any food and hospitality business.',
  tech: ['Next.js', 'Tailwind CSS', 'Mobile-first'],
  liveUrl: 'https://food-example.vercel.app',
  imagePath: 'assets/portfolio/oleander.png'
},
{
  title: 'Portfolio Site',
  description: 'A clean personal portfolio with a full-screen gallery, about section, contact form, and project showcase. Great for photographers, designers, and creatives.',
  tech: ['Next.js', 'Tailwind CSS', 'Animations'],
  liveUrl: 'https://art-portfolio-wheat.vercel.app',
  imagePath: 'assets/portfolio/art-portfolio.png'
}];


// ─── Projects
function Projects() {
  return (
    <section id="projects" data-screen-label="03 Projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--seafoam)' }}>Portfolio · Examples</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Things I&rsquo;ve built.
            </h2>
          </div>
        </Reveal>

        {/* Live Projects */}
        <Reveal>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/80 font-display">Live Projects</p>
            <p className="text-xs text-white/65">{PERSONAL_PROJECTS.length} project{PERSONAL_PROJECTS.length !== 1 ? 's' : ''}</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {PERSONAL_PROJECTS.map((p, idx) =>
          <Reveal key={p.title} delay={idx * 100}>
              <div className="glass-card rounded-3xl p-6 flex flex-col lg:flex-row gap-6 hover:-translate-y-1 transition-all duration-500 group"
            style={{ boxShadow: '0 20px 60px -30px rgba(0,0,0,0.5)' }}>
                <div className="lg:w-80 shrink-0 relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <img src={p.imagePath} alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'var(--seafoam)', color: '#0b2e6b' }}>
                    Live
                  </span>
                  {/* underwater overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(8,50,63,0.4), transparent 50%)' }} />
                </div>

                <div className="flex-1 min-w-0">
                  {p.type &&
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: 'var(--seafoam)' }}>{p.type}</p>
                }
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/85 leading-relaxed mb-4 text-[14.5px]">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) =>
                  <span key={t} className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium">{t}</span>
                  )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-[1.04]"
                  style={{
                    background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                    color: '#3a1a0f',
                    boxShadow: '0 8px 20px -8px rgba(255,138,107,0.55)'
                  }}>
                      <Icon.External /> View Live Site
                    </a>
                    {p.githubUrl &&
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-semibold hover:bg-white/15 transition-all">
                        <Icon.Git /> GitHub
                      </a>
                  }
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* Example Sites */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/80 font-display">Example Sites</p>
              <p className="text-xs text-white/65">{EXAMPLE_SITES.length} examples</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAMPLE_SITES.map((p, i) =>
            <Reveal key={p.title} delay={i * 120} variant="scale">
                <div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img src={p.imagePath} alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full border border-white/20"
                  style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', color: '#fff' }}>
                      Example
                    </span>
                    <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(8,50,63,0.45), transparent 55%)' }} />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) =>
                    <span key={t} className="px-2.5 py-1 rounded-full glass text-white/90 text-xs font-medium">{t}</span>
                    )}
                    </div>

                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="glass text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/15 inline-flex items-center gap-1.5 hover:bg-white/12 transition-all mt-auto self-start">
                      View Example <Icon.External />
                    </a>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <a href="#"
            className="glass-card border border-white/20 text-white font-semibold px-8 py-3.5 rounded-2xl inline-flex items-center gap-2 hover:bg-white/10 transition-all">
              View All Projects and Examples <Icon.ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}

// ─── Why
const COMPARISON = [
{ feature: 'Custom design', codeMack: true, squarespace: false, wix: false },
{ feature: 'You own the code', codeMack: true, squarespace: false, wix: false },
{ feature: 'No monthly platform fee', codeMack: true, squarespace: false, wix: false },
{ feature: 'Mobile-first build', codeMack: true, squarespace: 'sometimes', wix: 'sometimes' },
{ feature: 'Custom web app support', codeMack: true, squarespace: false, wix: false },
{ feature: 'Affordable pricing', codeMack: true, squarespace: 'medium', wix: 'medium' },
{ feature: 'Direct developer access', codeMack: true, squarespace: false, wix: false }];


function Cell({ v }) {
  if (v === true) return <span style={{ color: 'var(--seafoam)', display: 'inline-flex' }}><Icon.Check /></span>;
  if (v === false) return <span style={{ color: 'rgba(255,138,107,0.85)', display: 'inline-flex' }}><Icon.X /></span>;
  return <span style={{ color: 'rgba(255,255,255,0.65)', display: 'inline-flex' }}><Icon.Minus /></span>;
}

function Why() {
  return (
    <section id="why" data-screen-label="04 Why" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--seafoam)' }}>The Code Mack difference</p>
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
          <div className="hidden md:block rounded-3xl overflow-hidden glass-card"
          style={{
            background: 'rgba(4, 25, 64, 0.94)',
            backdropFilter: 'blur(14px) saturate(135%)',
            WebkitBackdropFilter: 'blur(14px) saturate(135%)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 30px 80px -30px rgba(0,0,0,0.55)', opacity: "1"
          }}>
            <div className="grid grid-cols-4 border-b border-white/10"
            style={{ background: 'rgba(8, 37, 84, 0.97)' }}>
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

            {COMPARISON.map((r, i) =>
            <div key={r.feature}
            className={`grid grid-cols-4 border-b border-white/10 last:border-0 transition-colors ${i % 2 ? '' : ''}`}
            style={{ background: i % 2 ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
                <div className="p-4 pl-6 flex items-center">
                  <p className="text-white/95 text-[15px]">{r.feature}</p>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10"
              style={{ background: 'rgba(143, 212, 255, 0.18)' }}>
                  <Cell v={r.codeMack} />
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10"><Cell v={r.squarespace} /></div>
                <div className="p-4 flex items-center justify-center border-l border-white/10"><Cell v={r.wix} /></div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {COMPARISON.map((r, i) =>
          <Reveal key={r.feature} delay={i * 60}>
              <div className="rounded-2xl p-5 border border-white/15"
            style={{ background: 'rgba(4, 25, 64, 0.94)' }}>
                <p className="text-sm font-semibold text-white mb-4">{r.feature}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3"
                style={{ background: 'rgba(143, 212, 255, 0.1)' }}>
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
          )}
        </div>

      </div>
    </section>);

}

// ─── Contact
function Contact() {
  const [form, setForm] = _useState({ name: '', email: '', message: '' });
  const [status, setStatus] = _useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate submission for the prototype
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('sent');
  };

  return (
    <section id="contact" data-screen-label="05 Contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--seafoam)' }}>Get in touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let&rsquo;s build something.
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Tell me about your project and I&rsquo;ll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            <Reveal variant="left">
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(143, 212, 255, 0.16)', color: 'var(--seafoam)' }}>
                  <Icon.Map />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Based in</p>
                  <p className="text-white/90 text-sm mt-0.5">Sarasota, Florida</p>
                  <p className="text-white/70 text-xs mt-0.5">Available for local and remote work</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={120}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255, 210, 138, 0.16)', color: 'var(--sand)' }}>
                  <Icon.Clock />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Response time</p>
                  <p className="text-white/90 text-sm mt-0.5">Within 24 hours</p>
                  <p className="text-white/70 text-xs mt-0.5">Or 1 business day</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={240}>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-white/85 text-xs uppercase tracking-[0.2em] font-bold mb-3 font-display">
                  Free quote includes
                </p>
                <ul className="space-y-2.5 text-sm text-white/90">
                  {['Project timeline estimate', 'Itemized pricing breakdown', 'Tech stack recommendation', 'No obligation, no pressure'].map((s) =>
                  <li key={s} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--seafoam)', boxShadow: '0 0 6px var(--seafoam)' }} />
                      {s}
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal variant="right">
              {status === 'sent' ?
              <div className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[420px]">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'rgba(143, 212, 255, 0.2)', color: 'var(--seafoam)' }}>
                    <Icon.Send />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/90">Thanks for reaching out. I&rsquo;ll be in touch within 24 hours.</p>
                </div> :

              <form onSubmit={submit} className="glass-card rounded-3xl p-7 sm:p-8 space-y-5"
              style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.5)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name">
                      <input type="text" required value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/55 focus:outline-none focus:border-white/40 focus:bg-white/12 transition-all text-sm" />
                    </Field>
                    <Field label="Email">
                      <input type="email" required value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/55 focus:outline-none focus:border-white/40 focus:bg-white/12 transition-all text-sm" />
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea required rows={5} value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project! What you need, your timeline, and any other details. The more info you can provide, the better I can understand your needs and provide an accurate quote."
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/55 focus:outline-none focus:border-white/40 focus:bg-white/12 transition-all resize-none text-sm leading-relaxed" />
                  </Field>

                  <button type="submit" disabled={status === 'sending'}
                className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                  color: '#3a1a0f',
                  boxShadow: '0 14px 36px -10px rgba(255,138,107,0.55)'
                }}>
                    {status === 'sending' ?
                  <>
                        <span className="w-4 h-4 border-2 rounded-full animate-spin"
                    style={{ borderColor: 'rgba(58,26,15,0.25)', borderTopColor: '#3a1a0f' }} />
                        Sending...
                      </> :

                  <><Icon.Send /> Send Message</>
                  }
                  </button>
                </form>
              }
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/90 mb-2">{label}</label>
      {children}
    </div>);

}

// ─── Footer
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="glass border-t border-white/15 relative">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-2xl tracking-tight">
              <span style={{ color: 'var(--seafoam)' }}>{'<'}</span>
              <span className="text-white">CODE</span>
              <span style={{ color: 'var(--seafoam)' }}>://</span>
              <span className="text-white">MACK</span>
              <span style={{ color: 'var(--seafoam)' }}>{'/>'}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">Custom web development in Sarasota, FL</p>
          </div>
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {['about', 'projects', 'why', 'contact'].map((s) =>
            <a key={s} href={`#${s}`} className="text-sm text-white/85 hover:text-white capitalize transition-colors">
                {s}
              </a>
            )}
          </nav>
          <p className="text-sm text-white/85">&copy; {year} Chris Mackall</p>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Projects, Why, Contact, Footer });