import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
