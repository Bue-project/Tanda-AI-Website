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
            What We Build For You
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Custom voice systems, fully deployed — from first enquiry to confirmed booking.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {/* Inbound */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgba(0,0,0,0.3)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Phone size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Inbound Call System</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We deploy a system that answers every inbound call professionally — handling enquiries, booking requests, and FAQs without putting callers on hold or sending them to voicemail.
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
            <div className="w-11 h-11 rounded-lg bg-[rgba(0,0,0,0.3)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <PhoneOutgoing size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Customer Reactivation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We set up automated outreach campaigns that re-engage dormant customers — reminders, recall sequences, and follow-ups that bring lapsed clients back and fill your schedule.
            </p>
          </div>

          {/* Receptionist */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgba(0,0,0,0.3)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Headphones size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Always-On Receptionist</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We build a 24/7 virtual receptionist that greets callers, answers questions, qualifies leads, and books appointments — keeping your business running at full capacity, around the clock.
            </p>
          </div>

          {/* Strategy */}
          <div className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 card-hover">
            <div className="w-11 h-11 rounded-lg bg-[rgba(0,0,0,0.3)] shadow-[inset_0_2px_1px_rgba(207,231,255,0.15)] flex items-center justify-center mb-5">
              <Lightbulb size={20} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Growth Consultation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Not sure where to start? We audit your current call flow, identify where revenue is being lost, and design a bespoke system that fits your business goals perfectly.
            </p>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 code-block">
              <div className="text-muted-foreground text-xs mb-2">automation_agent.py</div>
              <pre className="text-xs leading-relaxed whitespace-pre">{[
                'class AutomationAgent:',
                '  def __init__(self, activation_limit):',
                '    self.activation_limit = activation_limit',
                '    self.current_mode = "idle"',
              ].join('\n')}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
