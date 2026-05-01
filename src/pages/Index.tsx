import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import StatStrip from '@/components/StatStrip';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import ROICalculator from '@/components/ROICalculator';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Index() {
  const calcRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <StatStrip />
      <Benefits />
      <Services />
      <Features />
      <Comparison />
      <section id="calculator" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={calcRef} className="text-center mb-10 fade-in-up">
            <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
              Revenue Calculator
            </span>
            <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white mt-2 mb-3">
              What Is Your Business Losing Right Now?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-['Inter']">
              Move the sliders to see your real revenue leakage in seconds.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
