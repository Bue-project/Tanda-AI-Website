import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows = [
  ['24/7 AI voice agents — never misses a call', 'Limited to business hours'],
  ['Human-like conversations at scale', 'High staffing cost to scale'],
  ['Live in days, not weeks', 'Inconsistent caller experience'],
  ['Full CRM sync and lead capture', 'Manual data entry and missed notes'],
  ['Dedicated build + ongoing optimisation', 'Slow to hire, train, and onboard'],
];

export default function Comparison() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Comparison
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Tanda AI vs. Traditional Support</h2>
          <p className="text-muted-foreground mt-3">How voice AI stacks up against a human-only phone team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tanda AI */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-accent)]/30 rounded-2xl p-8">
            <h3 className="text-[var(--color-accent)] font-semibold text-lg mb-6">Tanda AI</h3>
            <ul className="space-y-4">
              {rows.map(([item]) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <Check size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-muted-foreground font-semibold text-lg mb-6">Others</h3>
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
      </div>
    </section>
  );
}
