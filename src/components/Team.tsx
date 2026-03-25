import { useStaggerReveal } from '@/hooks/useScrollReveal';

const team = [
  { name: 'Ikta Sollork', role: 'Founder / Data Analyst' },
  { name: 'Gwen Chase', role: 'AI Strategist' },
  { name: 'James Bond', role: 'Automation Engineer' },
  { name: 'Jenny Will', role: 'SEO / Growth' },
  { name: 'Jan Wink', role: 'Integration Specialist' },
  { name: 'Lilli Math', role: 'Client Manager' },
];

export default function Team() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Our Amazing Team
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Get to Know Our Team</h2>
          <p className="text-muted-foreground mt-3">The people behind your automation success</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-[rgb(16,19,28)] border border-[var(--color-border)] mx-auto mb-5 flex items-center justify-center text-2xl font-['Instrument_Serif'] text-[var(--color-accent)]">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-white font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
