import { Clock, MessageCircle, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: Clock,
    title: 'Always Available',
    desc: 'The system we deploy never sleeps. Every inbound enquiry is handled professionally, day or night — so your business never loses a lead to a missed call.',
  },
  {
    icon: MessageCircle,
    title: 'Natural, Reassuring Conversations',
    desc: "Callers hear a warm, natural voice that represents your brand the way you'd want. No robotic menus. No hold music. Just a great first impression, every time.",
  },
  {
    icon: Zap,
    title: 'Up and Running in Days',
    desc: 'We handle the full build, integration, and testing. Your team needs zero technical knowledge — go live in days and start seeing more booked calls.',
  },
];

export default function Benefits() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Why Tanda
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Built Around Your Business</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Reliable, professional, and always on</p>
        </div>

        <div ref={ref} className="fade-in-up grid md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((b) => (
            <div key={b.title} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.15)] flex items-center justify-center mb-5 mx-auto md:mx-0">
                <b.icon size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="font-['Instrument_Serif'] text-xl font-normal text-white mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm font-['Inter'] mb-3">Sounds right for your business?</p>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-white text-sm font-semibold transition-colors duration-200 group"
          >
            Book a free 20-minute call
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
