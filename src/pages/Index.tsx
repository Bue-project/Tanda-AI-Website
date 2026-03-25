import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Integrations from '@/components/Integrations';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews';
import Team from '@/components/Team';
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
      <Integrations />
      <Features />
      <Process />
      <Pricing />
      <Comparison />
      <FAQ />
      <Reviews />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
