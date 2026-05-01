import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhatWeDo() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[800px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-6">
          What We Do
        </span>
        <p className="font-['Instrument_Serif'] text-[clamp(1.5rem,3vw,2.25rem)] leading-relaxed text-white font-normal">
          We design, build, and deploy intelligent voice systems that answer your calls, qualify leads, and book appointments — so your team focuses on{' '}
          <em className="italic text-[var(--color-accent)]">closing</em>, not answering.
        </p>
        <p className="text-muted-foreground mt-6 text-sm">— Tanda AI</p>
      </div>
    </section>
  );
}
