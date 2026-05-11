import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Why } from '@/components/sections/why';
import { Contact } from '@/components/sections/contact';
import { LightRays, Plankton, Bubbles } from '@/components/ambient/ocean-ambient';

export default function Home() {
  return (
    <>
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
