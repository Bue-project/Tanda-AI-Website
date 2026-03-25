import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Benefits />
      <Services />
      <Features />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
