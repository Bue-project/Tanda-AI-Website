import { useState } from 'react';
import { Check } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const plans = [
  {
    name: 'Starter',
    monthly: '$50',
    yearly: '$40',
    features: ['3 Automated Workflows', 'Basic AI Assistant Access', 'Email + Slack Integration', 'Monthly Performance Reports', 'Email Support'],
  },
  {
    name: 'Pro',
    monthly: '$90',
    yearly: '$72',
    popular: true,
    features: ['10+ Automated Workflows', 'Advanced AI Assistant Features', 'Bi-Weekly Strategy Reviews', 'CRM + Marketing Tool Integrations', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    yearly: 'Custom',
    features: ['Unlimited Custom Workflows', 'Dedicated AI Strategist', 'API & Private Integrations', 'Real-Time Performance Dashboards', '24/7 Premium Support + SLA'],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Pricing
          </span>
          <h2 className="font-['Instrument_Serif'] text-[clamp(2rem,4vw,3rem)] font-normal text-white">Flexible Plans for Everyone</h2>
          <p className="text-muted-foreground mt-3">Choose a plan that fits your goals and scale as you grow</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full p-1">
            <div
              className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[var(--color-accent)] rounded-full pricing-pill"
              style={{ transform: yearly ? 'translateX(100%)' : 'translateX(0)' }}
            />
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${!yearly ? 'text-white' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${yearly ? 'text-white' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-[var(--color-accent)]">Save 20%</span>
            </button>
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`fade-in-up bg-[var(--color-bg-card)] border rounded-2xl p-8 card-hover relative ${
                plan.popular ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{yearly ? plan.yearly : plan.monthly}</span>
                {plan.monthly !== 'Custom' && (
                  <span className="text-muted-foreground text-sm ml-1">
                    {yearly ? '/mo (billed yearly)' : '/month'}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-full py-3 font-semibold text-sm transition-all btn-glow ${
                  plan.popular
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-transparent border border-[var(--color-border-strong)] text-white hover:bg-white/5'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
