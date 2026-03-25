import { Phone, PhoneOutgoing, Headphones, Lightbulb } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export default function Services() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Services
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">
            Voice AI Services, Built for Your Business
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Custom voice agents that handle real calls — so your team doesn't have to
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {/* Inbound */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Phone size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Inbound Voice AI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Handle customer enquiries, support calls, and FAQs automatically with a natural-sounding AI agent.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• Appointment booking</li>
              <li>• Lead qualification</li>
              <li>• Call routing</li>
              <li>• FAQ handling</li>
            </ul>
          </div>

          {/* Outbound */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <PhoneOutgoing size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Outbound Voice AI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Automate follow-up calls, appointment reminders, and outreach campaigns at scale.
            </p>
          </div>

          {/* Receptionist - full width */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Headphones size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">AI Receptionist</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A 24/7 virtual front desk that greets callers, answers questions, qualifies leads, and books appointments — all without human involvement.
            </p>
          </div>

          {/* Strategy - with code block */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgb(16,19,28)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Lightbulb size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Voice AI Strategy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Not sure where to start? We consult, design, and map out the right voice AI setup for your business goals.
            </p>
            <div className="bg-[rgb(16,19,28)] rounded-lg p-4 overflow-x-auto code-block">
              <div className="text-muted-foreground text-xs mb-2">automation_agent.py</div>
              <pre className="text-xs leading-relaxed">
<span className="code-keyword">class</span> <span className="code-class">AutomationAgent</span>:{'\n'}
{'  '}<span className="code-keyword">def</span> <span className="code-func">__init__</span>(<span className="code-self">self</span>, activation_limit):{'\n'}
{'    '}<span className="code-self">self</span>.activation_limit = activation_limit{'\n'}
{'    '}<span className="code-self">self</span>.current_mode = <span className="code-string">"idle"</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
