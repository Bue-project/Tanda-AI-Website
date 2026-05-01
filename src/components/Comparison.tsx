import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows: [string, string][] = [
  ['Every call answered, 24/7 — zero missed leads', 'Limited to business hours, calls go to voicemail'],
  ['Warm, consistent conversations at any call volume', 'High staffing cost to maintain consistent quality'],
  ['Deployed in days — not weeks of hiring and training', 'Slow to hire, train, and onboard new staff'],
  ['Seamless booking sync and lead capture, automatically', 'Manual data entry and missed notes'],
  ['Dedicated build, support, and ongoing optimisation', 'Inconsistent caller experience with no feedback loop'],
];

export default function Comparison() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div ref={headerRef} className="fade-in-up text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Comparison
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-[var(--color-text)]">A Tanda System vs. Your Current Setup</h2>
          <p className="text-muted-foreground mt-3">What changes when your phone line never misses a beat</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div ref={leftRef} className="fade-in-left border border-[rgba(212,168,67,0.20)] border-glow-pulse bg-[var(--color-bg-card)] rounded-2xl p-8">
            <h3 className="text-[var(--color-accent)] font-semibold text-lg mb-6">With Tanda</h3>
            <ul className="space-y-4">
              {rows.map(([item]) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <Check size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div ref={rightRef} className="fade-in-right bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-muted-foreground font-semibold text-lg mb-6">Without</h3>
            <ul className="space-y-4">
              {rows.map(([, item]) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={ctaRef} className="fade-in-up mt-10 bg-[rgba(212,168,67,0.10)] border border-[rgba(212,168,67,0.2)] rounded-2xl p-10 text-center">
          <p className="font-['Instrument_Serif'] text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-text)] mb-2">
            Stop losing leads. Start today.
          </p>
          <p className="text-[#0D1B2E]/45 text-sm font-['Inter'] mb-7">
            Join the businesses already running on Tanda systems.
          </p>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-black rounded-full px-9 py-3.5 font-semibold text-sm btn-glow"
          >
            Book A Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
