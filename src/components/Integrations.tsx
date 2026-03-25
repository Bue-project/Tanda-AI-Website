import { useScrollReveal } from '@/hooks/useScrollReveal';

const tools = ['Zapier', 'Slack', 'HubSpot', 'Notion', 'Stripe', 'Shopify', 'Google', 'Airtable', 'Mailchimp', 'Salesforce', 'Asana', 'Jira'];

export default function Integrations() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div ref={ref} className="fade-in-up max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Integrations
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Seamless Integrations</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Interact with all your favourite software without unnecessary fuss
          </p>
        </div>

        <div className="relative overflow-hidden py-6">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...tools, ...tools].map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl text-sm text-muted-foreground font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground italic mt-8 text-sm max-w-lg mx-auto">
          "Our AI automation plugs into your stack to create a unified, intelligent workflow"
        </p>
      </div>
    </section>
  );
}
