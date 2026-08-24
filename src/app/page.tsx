import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Specializations from '@/components/Specializations';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specializations />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
