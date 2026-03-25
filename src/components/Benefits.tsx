import { Clock, MessageCircle, Zap } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: Clock,
    title: 'Always Available',
    desc: 'Never miss a call. Your AI agent handles inbound calls around the clock, day or night.',
  },
  {
    icon: MessageCircle,
    title: 'Human-Like Conversations',
    desc: "Natural, context-aware voice interactions your callers won't be able to tell apart from a real person.",
  },
  {
    icon: Zap,
    title: 'Fast to Deploy',
    desc: 'Go live in days. We handle the full build, integration, and testing — you just take the calls.',
  },
];

export default function Benefits() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Benefits
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Why Voice AI?</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">The smarter way to handle every call, 24/7</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover"
            >
              <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
                <b.icon size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
