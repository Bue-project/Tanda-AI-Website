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
          <div ref={headingRef} className="text-center mb-10 fade-in-up">
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
          <ROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
