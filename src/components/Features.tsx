import { Brain, Mic, GitBranch, Target, BarChart3, RefreshCw } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Brain, title: 'Conversations That Flow Naturally', desc: 'Callers are heard and understood — no rigid menus, no frustrating scripts. The system handles enquiries as naturally as talking to your best team member.' },
  { icon: Mic, title: 'Your Brand, Your Voice', desc: 'We configure the tone, warmth, and personality to match your brand. Every caller hears a consistent, professional first impression — tailored to you.' },
  { icon: GitBranch, title: 'Intelligent Call Routing', desc: 'Calls are routed to the right person, every time. Complex queries escalate to your team with full context — nothing gets lost.' },
  { icon: Target, title: 'Lead Qualification', desc: 'The system captures intent, qualifies prospects, and scores inbound enquiries automatically — so your team only follows up on the leads that matter.' },
  { icon: BarChart3, title: 'Clear Reporting', desc: "Track call volumes, booking rates, and outcomes in real time. See exactly what's working — and where to improve." },
  { icon: RefreshCw, title: 'Seamless System Integration', desc: 'Call data, notes, and bookings push directly into your CRM and existing tools. Zero double-entry, zero manual handover.' },
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
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Built Into Every System We Deploy</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Every feature your business needs — included as standard.</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 card-hover">
              <div className="w-11 h-11 rounded-lg bg-[rgba(0,0,0,0.3)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white/70 hover:text-white hover:border-[var(--color-accent)] rounded-full px-7 py-3 text-sm transition-colors duration-200"
          >
            See how it works for your business →
          </a>
        </div>
      </div>
    </section>
  );
}
