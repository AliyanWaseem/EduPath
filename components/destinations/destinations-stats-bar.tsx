import { Section } from '@/components/section'

const STATS = [
  { value: '6+', label: 'Countries Supported' },
  { value: '200+', label: 'Partner Universities' },
  { value: '93%', label: 'Avg. Visa Success Rate' },
  { value: '2,500+', label: 'Students Placed Abroad' },
]

export function DestinationsStatsBar() {
  return (
    <Section muted>
      <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-navy md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-charcoal">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
