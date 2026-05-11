/* Root app — composes everything */
const { useEffect: __useEffect } = React;

function App() {
  // Subtle parallax: shift bg gradient position based on scroll
  __useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const t = Math.min(1, Math.max(0, y / Math.max(max, 1)));
        // Move caustics down as you scroll
        doc.style.setProperty('--depth', t.toFixed(3));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Fixed ambient layers behind the content */}
      <div className="ocean-bg" />
      <LightRays />
      <Plankton count={50} />
      <Bubbles count={26} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
