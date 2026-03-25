import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What is a voice AI agent?',
    a: 'A voice AI agent is an intelligent virtual assistant that handles real phone calls — answering questions, booking appointments, qualifying leads, and more — using natural, human-like speech.',
  },
  {
    q: 'How human does the voice sound?',
    a: 'Very natural. We use the latest voice synthesis technology to create warm, fluent voices that callers rarely distinguish from a real person.',
  },
  {
    q: 'What kinds of businesses use voice AI?',
    a: 'Service businesses, clinics, real estate agencies, e-commerce brands — any business that regularly receives or makes calls and wants to handle them more efficiently.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most clients are live within 5–10 business days, depending on call flow complexity and the number of integrations required.',
  },
  {
    q: 'Can the AI hand off to a human?',
    a: 'Yes. When a caller needs escalation, the AI seamlessly transfers the call to a live agent and provides a full context summary so nothing is repeated.',
  },
];

export default function FAQ() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 px-6">
      <div ref={ref} className="fade-in-up max-w-[700px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            FAQ's
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-3">Everything you need to know about voice AI</p>
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
