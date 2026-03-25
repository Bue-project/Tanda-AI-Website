import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Discover & Analyze',
    desc: 'We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.',
  },
  {
    num: '02',
    title: 'Design & Build',
    desc: 'We design your custom AI automation solution and build it with precision — integrating seamlessly with your existing tools and platforms.',
  },
  {
    num: '03',
    title: 'Launch & Scale',
    desc: 'We launch your automation, monitor results, and iterate — staying by your side to optimize and scale as your business grows.',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Process
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Our Simple & Smart Process</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Everything you need to collaborate, create, and scale, all in one place</p>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-bg-card)] text-muted-foreground border border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
              }`}
            >
              Step {s.num}
            </button>
          ))}
        </div>

        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-10 max-w-2xl mx-auto text-center">
          <div className="text-[var(--color-accent)] text-sm font-semibold tracking-wider mb-3">STEP {steps[active].num}</div>
          <h3 className="text-white text-2xl font-['Instrument_Serif'] mb-4">{steps[active].title}</h3>
          <p className="text-muted-foreground leading-relaxed">{steps[active].desc}</p>
        </div>
      </div>
    </section>
  );
}
