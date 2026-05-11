export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="glass border-t border-white/15 relative">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-2xl tracking-tight">
              <span style={{ color: 'var(--seafoam)' }}>{'<'}</span>
              <span className="text-white">CODE</span>
              <span style={{ color: 'var(--seafoam)' }}>{'://'}</span>
              <span className="text-white">MACK</span>
              <span style={{ color: 'var(--seafoam)' }}>{'/>'}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">Custom web development in Sarasota, FL</p>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {['about', 'projects', 'why', 'contact'].map(s => (
              <a key={s} href={`#${s}`} className="text-sm text-white/85 hover:text-white capitalize transition-colors">
                {s}
              </a>
            ))}
          </nav>

          <p className="text-sm text-white/85">&copy; {year} Chris Mackall</p>
        </div>
      </div>
    </footer>
  );
}
