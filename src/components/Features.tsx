import { Brain, Mic, GitBranch, Target, BarChart3, RefreshCw } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Brain, title: 'Natural Language Understanding', desc: 'Conversations that follow context and intent, not rigid scripts.' },
  { icon: Mic, title: 'Custom Voice & Persona', desc: 'Choose the voice, tone, and personality that matches your brand.' },
  { icon: GitBranch, title: 'Smart Call Routing', desc: 'Intelligently route calls to the right team or escalate to a live agent when needed.' },
  { icon: Target, title: 'Lead Qualification', desc: 'Capture, qualify, and score inbound leads over the phone — automatically.' },
  { icon: BarChart3, title: 'Call Analytics', desc: 'Track volumes, outcomes, and conversion rates in real time.' },
  { icon: RefreshCw, title: 'CRM & Tool Sync', desc: 'Push call data, notes, and outcomes directly into your CRM and existing stack.' },
];

export default function Features() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Features
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Everything Your Voice AI Needs</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Built-in tools to run, track, and improve every call</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 card-hover">
              <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
