import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ROICalculator from '@/components/ROICalculator'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function CalculatorPage() {
  const headingRef = useScrollReveal<HTMLDivElement>()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={headingRef} className="text-center mb-6 fade-in-up">
            <p className="text-[var(--color-accent)] text-xs font-semibold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-3">
              Revenue Calculator
            </p>
            <h1 className="font-['Instrument_Serif'] text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight">
              How Much Revenue Are You Leaving on the Table?
            </h1>
            <p className="text-white/55 text-base max-w-xl mx-auto font-['Inter']">
              See what missed calls and dormant patients are costing your practice — then fix it with Tanda AI.
            </p>
          </div>
          <p className="text-center text-white/35 text-xs font-['Inter'] mb-10 tracking-wide">
            35% of calls missed&nbsp;&nbsp;·&nbsp;&nbsp;£401k avg annual leakage&nbsp;&nbsp;·&nbsp;&nbsp;15% AI reactivation rate
          </p>
          <ROICalculator />
          <div className="mt-10 text-center">
            <p className="text-white/50 font-['Inter'] text-sm mb-4">
              Ready to stop the leak? Book a free 20-minute strategy call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-accent)] text-black rounded-full px-8 py-3 font-semibold text-sm btn-glow"
              >
                Book A Free Call →
              </a>
              <a
                href="mailto:hello@tanda.ai"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                or email hello@tanda.ai
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
