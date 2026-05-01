import { ChevronDown, Check, Phone } from 'lucide-react';

const callItems = [
  { label: 'Call answered', time: '0.8s' },
  { label: 'Lead qualified', time: null },
  { label: 'Appointment booked', time: null },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.07) 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
        {/* Left: text */}
        <div className="flex-1 hero-stagger">
          <div className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.10)] border border-[rgba(212,168,67,0.30)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-10">
            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
            Voice Automation Agency
          </div>

          <h1 className="font-['Instrument_Serif'] text-[clamp(3rem,6vw,5rem)] leading-[1.1] font-normal text-[var(--color-text)]">
            Your Customers Call.{' '}
            <em className="italic text-[var(--color-accent)]">Your System Answers.</em>
          </h1>

          <hr className="divider-gold max-w-[100px] my-8" />

          <p className="text-[#0D1B2E]/55 text-lg mb-10 leading-relaxed max-w-lg">
            We build and deploy voice systems that handle every inbound call, qualify your leads, and book appointments — without missing a beat.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-text)] text-white rounded-full px-8 py-3.5 font-semibold text-base btn-glow"
            >
              Book A Free Call →
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-[rgba(13,27,46,0.18)] text-[#0D1B2E]/60 hover:text-[var(--color-text)] rounded-full px-7 py-3.5 text-sm transition-colors"
            >
              See what we build
            </a>
          </div>

          <p className="text-[#0D1B2E]/30 text-xs mt-6">
            Works with clinics, agencies, law firms, real estate &amp; more
          </p>
        </div>

        {/* Right: floating system card */}
        <div className="shrink-0 hidden md:flex justify-center">
          <div className="bg-white rounded-2xl border border-[rgba(212,168,67,0.20)] shadow-[0_24px_64px_rgba(13,27,46,0.09)] p-6 w-[280px] animate-float border-glow-pulse">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold text-[#0D1B2E]/45 tracking-widest uppercase">System Active</span>
            </div>

            <div className="space-y-3 mb-5">
              {callItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[rgba(212,168,67,0.12)] border border-[rgba(212,168,67,0.30)] flex items-center justify-center shrink-0">
                    <Check size={9} className="text-[var(--color-accent)]" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#0D1B2E]/75 flex-1">{item.label}</span>
                  {item.time && <span className="text-xs text-[#0D1B2E]/30">{item.time}</span>}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[rgba(13,27,46,0.06)]">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-[var(--color-accent)] shrink-0" />
                <span className="text-[11px] text-[#0D1B2E]/35 flex-1">Awaiting next call...</span>
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="text-[#0D1B2E]/20 animate-float" size={24} />
      </div>
    </section>
  );
}
