import { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type Mode = 'missed' | 'reactivation'
type Specialty = 'dental' | 'aesthetics'

const gbp = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

function InfoTooltip({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-white/30 text-[10px] border border-white/20 rounded-full w-4 h-4 inline-flex items-center justify-center flex-shrink-0 hover:text-white/60 hover:border-white/40 transition-colors cursor-help"
        >
          ?
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[220px] text-xs leading-relaxed">
        {text}
      </TooltipContent>
    </Tooltip>
  )
}

function ModeToggle({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <div className="inline-flex bg-white/5 border border-[var(--color-border)] rounded-full p-1 gap-1">
      {(['missed', 'reactivation'] as Mode[]).map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-all duration-200 whitespace-nowrap ${
            mode === m
              ? 'bg-[var(--color-accent)] text-black shadow-sm'
              : 'text-white/50 hover:text-white'
          }`}
        >
          {m === 'missed' ? 'Missed Calls ROI' : 'Database Reactivation'}
        </button>
      ))}
    </div>
  )
}

function SpecialtyToggle({ specialty, setSpecialty }: { specialty: Specialty; setSpecialty: (s: Specialty) => void }) {
  return (
    <div className="inline-flex bg-white/5 border border-[var(--color-border)] rounded-full p-1 gap-1">
      {(['dental', 'aesthetics'] as Specialty[]).map((s) => (
        <button
          key={s}
          onClick={() => setSpecialty(s)}
          className={`px-3 py-1 rounded-full text-[11px] font-semibold font-['Plus_Jakarta_Sans'] transition-all duration-200 ${
            specialty === s
              ? 'bg-white/15 text-white'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          {s === 'dental' ? 'Dental' : 'Aesthetics'}
        </button>
      ))}
    </div>
  )
}

function SliderRow({
  label,
  tooltip,
  value,
  display,
  min,
  max,
  step,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string
  tooltip: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  minLabel: string
  maxLabel: string
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 font-['Inter'] text-sm flex items-center gap-1.5">
          {label}
          <InfoTooltip text={tooltip} />
        </span>
        <span className="text-[var(--color-accent)] font-bold font-['Plus_Jakarta_Sans'] text-base tabular-nums">
          {display}
        </span>
      </div>
      <div className="calculator-slider">
        <Slider min={min} max={max} step={step} value={[value]} onValueChange={([v]) => onChange(v)} />
      </div>
      <div className="flex justify-between text-white/25 text-[11px] mt-1.5 font-['Inter']">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
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
        className="rounded-2xl border p-6 md:p-8"
        style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
      >
        {/* Toggles row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
          <SpecialtyToggle specialty={specialty} setSpecialty={setSpecialty} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Result */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white/40 font-['Inter'] text-[11px] uppercase tracking-widest mb-2">
                {mode === 'missed' ? 'Annual Revenue Leakage' : 'Reactivation Potential'}
              </p>
              <div
                className="font-['Instrument_Serif'] text-5xl md:text-6xl tabular-nums leading-none mb-3"
                style={{ color: '#F59E0B' }}
              >
                {gbp.format(result)}
              </div>
              <p className="text-white/30 font-['Inter'] text-xs leading-relaxed max-w-[220px]">
                {mode === 'missed'
                  ? '85% attendance · 50% treatment start rate'
                  : '15% AI reactivation reach rate'}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-accent)] text-black rounded-full px-6 py-2.5 font-semibold font-['Plus_Jakarta_Sans'] text-sm btn-glow"
              >
                Recover This Revenue →
              </a>
            </div>
          </div>

          {/* Right — Sliders */}
          <div className="space-y-6">
            {mode === 'missed' ? (
              <>
                <SliderRow
                  label="Monthly Missed Calls"
                  tooltip="~35% of inbound calls go unanswered on average (UK dental benchmark)"
                  value={missedCalls}
                  display={String(missedCalls)}
                  min={0} max={200} step={1}
                  onChange={setMissedCalls}
                  minLabel="0" maxLabel="200"
                />
                <SliderRow
                  label="Phone-to-Booking Rate"
                  tooltip="Industry average: 23–45%. Top practices achieve 50–67%"
                  value={phoneToBooking}
                  display={`${phoneToBooking}%`}
                  min={0} max={100} step={1}
                  onChange={setPhoneToBooking}
                  minLabel="0%" maxLabel="100%"
                />
                <SliderRow
                  label="Avg Treatment Value"
                  tooltip="Dental: £4,500 (Invisalign benchmark). Aesthetics: £350 (toxin average)"
                  value={atvMissed}
                  display={gbp.format(atvMissed)}
                  min={100} max={10000} step={50}
                  onChange={setAtvMissed}
                  minLabel="£100" maxLabel="£10,000"
                />
              </>
            ) : (
              <>
                <SliderRow
                  label="Inactive Patient Database"
                  tooltip="Patients with no appointment booked in 18+ months"
                  value={inactiveDb}
                  display={inactiveDb.toLocaleString('en-GB')}
                  min={0} max={5000} step={10}
                  onChange={setInactiveDb}
                  minLabel="0" maxLabel="5,000"
                />
                <SliderRow
                  label="Visit Frequency / Year"
                  tooltip="Dental: ~2x/year. Aesthetics (toxin): 3–4x/year"
                  value={visitFreq}
                  display={`${visitFreq}x`}
                  min={1} max={12} step={0.5}
                  onChange={setVisitFreq}
                  minLabel="1x" maxLabel="12x"
                />
                <SliderRow
                  label="Spend Per Visit"
                  tooltip="Average revenue per completed appointment. Dental: £4,500. Aesthetics: £350"
                  value={spendPerVisit}
                  display={gbp.format(spendPerVisit)}
                  min={100} max={10000} step={50}
                  onChange={setSpendPerVisit}
                  minLabel="£100" maxLabel="£10,000"
                />
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-white/20 text-[11px] text-center font-['Inter'] mt-4 max-w-lg mx-auto leading-relaxed">
        Estimates based on UK dental & aesthetics industry benchmarks. Actual results vary by practice.
      </p>
    </div>
  )
}
