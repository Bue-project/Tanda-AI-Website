import { Phone, PhoneOutgoing, Headphones, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    num: '01',
    icon: Phone,
    title: 'Inbound Call System',
    desc: 'We deploy a system that answers every inbound call professionally — handling enquiries, booking requests, and FAQs without putting callers on hold or sending them to voicemail.',
  },
  {
    num: '02',
    icon: PhoneOutgoing,
    title: 'Customer Reactivation',
    desc: 'We set up automated outreach campaigns that re-engage dormant customers — reminders, recall sequences, and follow-ups that bring lapsed clients back and fill your schedule.',
  },
  {
    num: '03',
    icon: Headphones,
    title: 'Always-On Receptionist',
    desc: 'We build a 24/7 virtual receptionist that greets callers, answers questions, qualifies leads, and books appointments — keeping your business running at full capacity, around the clock.',
  },
  {
    num: '04',
    icon: Lightbulb,
    title: 'Growth Consultation',
    desc: 'Not sure where to start? We audit your current call flow, identify where revenue is being lost, and design a bespoke system that fits your business goals perfectly.',
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

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

        <div ref={ref} className="fade-in-up max-w-[900px] mx-auto">
          {services.map((s) => (
            <div key={s.title} className="service-row group flex items-start gap-6">
              <span className="font-['Instrument_Serif'] text-lg text-[var(--color-accent)] opacity-50 w-8 shrink-0 pt-0.5">{s.num}</span>
              <div className="w-10 h-10 rounded-lg bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.15)] flex items-center justify-center shrink-0">
                <s.icon size={18} className="text-[var(--color-accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1.5">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
              <span className="text-white/20 group-hover:text-[var(--color-accent)] transition-colors text-xl shrink-0 pt-0.5">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
