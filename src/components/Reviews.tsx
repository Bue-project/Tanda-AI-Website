import { Star } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const reviews = [
  { text: 'Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.', name: 'Daniel Kim', role: 'Operations Lead at Flowbyte' },
  { text: 'Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.', name: 'Priya Mehra', role: 'CTO at Brightstack Labs' },
  { text: 'Smooth setup. Their system replaced three tools. We saw improvements in just the first week.', name: 'Elena Rodriguez', role: 'Product Manager at Nexora' },
  { text: 'Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.', name: 'Marcus Thompson', role: 'Marketing Director at OrbitShift' },
  { text: 'Huge time-saver. Data is better organized. The insights we get now are actionable and fast.', name: 'Sarah Wong', role: 'Analytics Manager at Corelink' },
  { text: 'Very intuitive. No fluff, just performance. Our internal processes finally feel under control.', name: 'Ravi Shah', role: 'COO at PixelNest Solutions' },
];

export default function Reviews() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Reviews
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Trusted by Visionaries</h2>
          <p className="text-muted-foreground mt-3">Hear from real users who achieved success with our automation</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="fade-in-up bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 card-hover">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <p className="text-white text-sm leading-relaxed mb-5 italic">"{r.text}"</p>
              <div>
                <p className="text-white text-sm font-medium">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
