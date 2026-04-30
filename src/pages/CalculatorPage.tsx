import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ROICalculator from '@/components/ROICalculator'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-[var(--color-accent)] text-sm font-semibold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-4">
              Revenue Calculator
            </p>
            <h1 className="font-['Instrument_Serif'] text-4xl md:text-5xl text-white mb-4 leading-tight">
              How Much Revenue Are You<br className="hidden md:block" /> Leaving on the Table?
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-['Inter']">
              Discover exactly how much revenue is slipping through the gaps in your practice — then fix it with Tanda AI.
            </p>
          </div>
          <ROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
