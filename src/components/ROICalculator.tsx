import { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'

type Mode = 'missed' | 'reactivation'
type Specialty = 'dental' | 'aesthetics'

const gbp = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

function TooltipBadge({ text }: { text: string }) {
  return (
    <span
      title={text}
      className="text-white/30 text-xs cursor-help border border-white/20 rounded-full w-4 h-4 inline-flex items-center justify-center flex-shrink-0"
    >
      ?
    </span>
  )
}

export default function ROICalculator() {
  const [mode, setMode] = useState<Mode>('missed')
  const [specialty, setSpecialty] = useState<Specialty>('dental')

  const [missedCalls, setMissedCalls] = useState(50)
  const [phoneToBooking, setPhoneToBooking] = useState(35)
  const [atvMissed, setAtvMissed] = useState(4500)

  const [inactiveDb, setInactiveDb] = useState(500)
  const [visitFreq, setVisitFreq] = useState(2)
  const [spendPerVisit, setSpendPerVisit] = useState(4500)

  useEffect(() => {
    if (specialty === 'dental') {
      setAtvMissed(4500)
      setSpendPerVisit(4500)
      setVisitFreq(2)
    } else {
      setAtvMissed(350)
      setSpendPerVisit(350)
      setVisitFreq(3.5)
    }
  }, [specialty])

  const annualLeakage =
    (missedCalls * (phoneToBooking / 100) * 0.85 * 0.5) * atvMissed * 12

  const reactivationPotential =
    (inactiveDb * 0.15) * (visitFreq * spendPerVisit)

  const result = mode === 'missed' ? annualLeakage : reactivationPotential

  return (
    <div>
      <div
        className="rounded-2xl border p-8 md:p-12 card-hover"
        style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
      >
        {/* Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full p-1">
            <div
              className="absolute top-1 bottom-1 rounded-full bg-[var(--color-accent)] transition-transform duration-300 ease-in-out"
              style={{
                width: 'calc(50% - 4px)',
                transform: mode === 'missed' ? 'translateX(2px)' : 'translateX(calc(100% + 6px))',
              }}
            />
            <button
              onClick={() => setMode('missed')}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
                mode === 'missed' ? 'text-black' : 'text-white/60'
              }`}
            >
              Missed Calls ROI
            </button>
            <button
              onClick={() => setMode('reactivation')}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
                mode === 'reactivation' ? 'text-black' : 'text-white/60'
              }`}
            >
              Database Reactivation
            </button>
          </div>
        </div>

        {/* Specialty Sub-toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full p-1">
            <div
              className="absolute top-1 bottom-1 rounded-full bg-white/10 transition-transform duration-300 ease-in-out"
              style={{
                width: 'calc(50% - 4px)',
                transform: specialty === 'dental' ? 'translateX(2px)' : 'translateX(calc(100% + 6px))',
              }}
            />
            <button
              onClick={() => setSpecialty('dental')}
              className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
                specialty === 'dental' ? 'text-white' : 'text-white/40'
              }`}
            >
              Dental
            </button>
            <button
              onClick={() => setSpecialty('aesthetics')}
              className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
                specialty === 'aesthetics' ? 'text-white' : 'text-white/40'
              }`}
            >
              Aesthetics
            </button>
          </div>
        </div>

        {/* Result Hero */}
        <div className="text-center mb-10">
          <p className="text-white/50 font-['Inter'] text-xs uppercase tracking-widest mb-3">
            {mode === 'missed' ? 'Estimated Annual Revenue Leakage' : 'Reactivation Revenue Potential'}
          </p>
          <div
            className="font-['Instrument_Serif'] text-6xl md:text-7xl tabular-nums leading-none"
            style={{ color: '#F59E0B' }}
          >
            {gbp.format(result)}
          </div>
          <p className="text-white/40 font-['Inter'] text-xs mt-3 max-w-sm mx-auto">
            {mode === 'missed'
              ? 'Based on 85% attendance rate & 50% treatment start rate'
              : 'Based on 15% AI reactivation reach rate'}
          </p>
        </div>

        <div className="border-t border-[var(--color-border)] mb-8" />

        {/* Sliders */}
        {mode === 'missed' ? (
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Monthly Missed Calls
                  <TooltipBadge text="~35% of inbound calls go unanswered on average (UK dental benchmark)" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {missedCalls}
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={0} max={200} step={1} value={[missedCalls]} onValueChange={([v]) => setMissedCalls(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>0</span><span>200</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Phone-to-Booking Rate
                  <TooltipBadge text="Industry average: 23–45%. Top practices achieve 50–67%" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {phoneToBooking}%
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={0} max={100} step={1} value={[phoneToBooking]} onValueChange={([v]) => setPhoneToBooking(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>0%</span><span>100%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Average Treatment Value
                  <TooltipBadge text="Dental: £4,500 (Invisalign benchmark). Aesthetics: £350 (toxin treatment average)" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {gbp.format(atvMissed)}
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={100} max={10000} step={50} value={[atvMissed]} onValueChange={([v]) => setAtvMissed(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>£100</span><span>£10,000</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Inactive Patient Database
                  <TooltipBadge text="Patients with no appointment booked in 18+ months" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {inactiveDb.toLocaleString('en-GB')}
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={0} max={5000} step={10} value={[inactiveDb]} onValueChange={([v]) => setInactiveDb(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>0</span><span>5,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Visit Frequency / Year
                  <TooltipBadge text="Dental: ~2x/year. Aesthetics (toxin): 3–4x/year" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {visitFreq}x
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={1} max={12} step={0.5} value={[visitFreq]} onValueChange={([v]) => setVisitFreq(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>1x</span><span>12x</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm flex items-center gap-2">
                  Spend Per Visit
                  <TooltipBadge text="Average revenue per completed appointment. Dental: £4,500. Aesthetics: £350" />
                </label>
                <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-lg tabular-nums">
                  {gbp.format(spendPerVisit)}
                </span>
              </div>
              <div className="calculator-slider">
                <Slider min={100} max={10000} step={50} value={[spendPerVisit]} onValueChange={([v]) => setSpendPerVisit(v)} />
              </div>
              <div className="flex justify-between text-white/30 text-xs mt-2 font-['Inter']">
                <span>£100</span><span>£10,000</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-accent)] text-white rounded-full px-8 py-3.5 font-semibold font-['Plus_Jakarta_Sans'] text-base btn-glow"
          >
            Recover This Revenue →
          </a>
        </div>
      </div>

      <p className="text-white/25 text-xs text-center font-['Inter'] mt-6 max-w-lg mx-auto leading-relaxed">
        Estimates based on UK dental & aesthetics industry benchmarks. Actual results vary by practice.
        Attendance rate: 85% · Treatment start rate: 50% · AI reactivation reach: 15%.
      </p>
    </div>
  )
}
