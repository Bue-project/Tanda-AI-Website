import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[700px] mx-auto text-center">
        <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-4">
          Ready to Stop Missing Leads?
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Book a free 20-minute call. We'll walk you through exactly how a Tanda system works for your business — and show you what it's costing you not to have one.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@tanda.ai"
            className="text-muted-foreground hover:text-white transition-colors text-sm border border-[var(--color-border-strong)] rounded-full px-6 py-3"
          >
            hello@tanda.ai
          </a>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-full px-8 py-3 font-semibold text-sm btn-glow"
          >
            Book A Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
