import { useEffect, useRef, useState } from 'react'

type Stat = {
  key: string
  target: number
  display: (v: number) => string
  label: string
}

const stats: Stat[] = [
  { key: 'calls', target: 35, display: (v) => `${v}%`, label: 'of calls go unanswered without a system' },
  { key: 'revenue', target: 401, display: (v) => `£${v}k`, label: 'average annual revenue at risk' },
  { key: 'days', target: 5, display: (v) => String(v), label: 'days average time to go live' },
  { key: 'coverage', target: 247, display: () => '24/7', label: 'always-on coverage' },
]

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function StatItem({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(easeOutQuart(progress) * stat.target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, stat.target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-['Instrument_Serif'] text-[clamp(2.5rem,5vw,3.75rem)] text-[var(--color-accent)] leading-none mb-3 tabular-nums">
        {stat.display(value)}
      </div>
      <p className="text-[#0D1B2E]/45 text-xs font-['Inter'] leading-relaxed max-w-[130px] mx-auto">{stat.label}</p>
    </div>
  )
}

export default function StatStrip() {
  return (
    <section className="py-16 px-6 border-y border-[var(--color-border)]">
      <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((stat) => (
          <StatItem key={stat.key} stat={stat} />
        ))}
      </div>
    </section>
  )
}
