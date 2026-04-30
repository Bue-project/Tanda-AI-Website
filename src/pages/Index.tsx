import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import ROICalculator from '@/components/ROICalculator';
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
      <section id="calculator" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-[var(--color-accent)] text-sm font-semibold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-4">
              Revenue Calculator
            </p>
            <h2 className="font-['Instrument_Serif'] text-3xl md:text-4xl text-white mb-4">
              Calculate Your Revenue Leakage
            </h2>
            <p className="text-white/60 max-w-xl mx-auto font-['Inter']">
              See in seconds what missed calls and dormant patients are costing your practice.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
