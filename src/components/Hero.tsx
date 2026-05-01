import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-32 pb-20 bg-white">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.09) 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[700px] px-6 hero-stagger">
        <div className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.10)] border border-[rgba(212,168,67,0.30)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-10">
          <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
          Voice Automation Agency
        </div>

        <h1 className="font-['Instrument_Serif'] text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] font-normal text-[var(--color-bg)] mb-0">
          Your Customers Call.{' '}
          <em className="italic text-[var(--color-accent)]">
            Your System Answers.
          </em>
        </h1>

        <hr className="divider-gold max-w-[100px] mx-auto my-8" />

        <p className="text-[#0D1B2E]/55 text-lg mb-12 leading-relaxed max-w-lg mx-auto">
          We build and deploy voice systems that handle every inbound call, qualify your leads, and book appointments — without missing a beat.
        </p>

        <a
          href="https://calendar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--color-bg)] text-white rounded-full px-8 py-3.5 font-semibold text-base btn-glow"
        >
          Book A Free Call →
        </a>

        <div className="mt-20">
          <ChevronDown className="mx-auto text-[#0D1B2E]/20 animate-float" size={24} />
        </div>
      </div>
    </section>
  );
}
