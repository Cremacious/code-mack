import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="glass border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-cropped.png"
                alt="Code Mack"
                width={100}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/90 mt-1">Custom web development in Sarasota, FL</p>
          </div>
          <nav className="flex items-center gap-6">
            {['#about', '#services', '#projects', '#contact'].map((href) => (
              <a key={href} href={href} className="text-sm text-white/90 hover:text-white transition-colors capitalize">
                {href.replace('#', '')}
              </a>
            ))}
          </nav>
          <p className="text-sm text-white/90">&copy; {year} Chris Mackall</p>
        </div>
      </div>
    </footer>
  );
}
