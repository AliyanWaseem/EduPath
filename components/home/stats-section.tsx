'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/container'

const STATS = [
  { target: 2500, suffix: '+', label: 'Students Placed' },
  { target: 98, suffix: '%', label: 'Visa Success' },
  { target: 15, suffix: '+', label: 'Countries' },
  { target: 10, suffix: '+', label: 'Years Experience' },
]

function formatNumber(n: number) {
  return n.toLocaleString('en-US')
}

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function StatItem({
  target,
  suffix,
  label,
  active,
}: {
  target: number
  suffix: string
  label: string
  active: boolean
}) {
  const value = useCountUp(target, active)
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-gold md:text-5xl">
        {formatNumber(value)}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-16 md:py-20">
      {/* Faint decorative dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #F5A623 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </Container>
    </section>
  )
}
