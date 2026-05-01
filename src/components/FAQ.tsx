import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How does a Tanda voice system work?',
    a: 'We integrate an intelligent voice system into your existing phone line. It answers every inbound call professionally — handling enquiries, booking appointments, answering FAQs, and routing complex calls to your team — all without putting callers on hold.',
  },
  {
    q: "Will my customers know it's automated?",
    a: "Most won't. We configure the system using the latest voice synthesis to create warm, natural conversations that callers rarely distinguish from speaking to a real person. The focus is always on a great experience, not on technology.",
  },
  {
    q: 'What kinds of businesses use Tanda?',
    a: 'Service businesses, clinics, agencies, real estate firms, e-commerce brands — any business that regularly receives calls and wants to handle them more professionally without hiring more staff.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most clients are live within 5–10 business days, depending on call flow complexity and the integrations required. We handle the full build and setup — your team just starts seeing more booked calls.',
  },
  {
    q: 'Can calls be passed to my team?',
    a: 'Yes. When a caller needs to speak with someone directly, the system transfers the call seamlessly to your team with a full context summary — so nothing is repeated and no one is left waiting.',
  },
];

export default function FAQ() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[700px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Questions
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-3">Everything you need to know</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white hover:no-underline text-left py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-semibold mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 text-sm">Book a free call and we'll walk you through everything.</p>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-full px-8 py-3 font-semibold text-sm btn-glow"
          >
            Book A Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
