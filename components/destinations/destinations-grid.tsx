import { Section } from '@/components/section'
import { Landmark, Snowflake, Sun, Euro, Star, Mountain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const DESTINATIONS = [
  {
    icon: Landmark,
    country: 'United Kingdom',
    tagline: '1-year master\u2019s degrees, globally recognized names',
    description:
      'Home to world-renowned universities like Oxford and Imperial College, the UK offers one-year master\u2019s programs and strong post-study work options via the Graduate Route visa.',
    stats: [
      { label: 'Avg. Tuition', value: '\u00a312,000\u2013\u00a325,000/yr' },
      { label: 'Visa Success', value: '97%' },
      { label: 'Intakes', value: 'Sep & Jan' },
    ],
  },
  {
    icon: Snowflake,
    country: 'Canada',
    tagline: 'Affordable education with a clear path to residency',
    description:
      'Canada combines high-quality education with immigrant-friendly policies, making it a top choice for students planning to settle abroad after graduation.',
    stats: [
      { label: 'Avg. Tuition', value: 'CAD 15,000\u201330,000/yr' },
      { label: 'Visa Success', value: '92%' },
      { label: 'Intakes', value: 'Sep, Jan & May' },
    ],
  },
  {
    icon: Sun,
    country: 'Australia',
    tagline: 'World-class research universities, year-round sunshine',
    description:
      'Australia\u2019s Group of Eight universities rank among the world\u2019s best, and generous post-study work visas make it ideal for STEM and business graduates.',
    stats: [
      { label: 'Avg. Tuition', value: 'AUD 20,000\u201335,000/yr' },
      { label: 'Visa Success', value: '90%' },
      { label: 'Intakes', value: 'Feb & Jul' },
    ],
  },
  {
    icon: Euro,
    country: 'Europe',
    tagline: 'Low or zero tuition at top-ranked public universities',
    description:
      'Countries like Germany, France, and the Netherlands offer world-class education at a fraction of the cost, with many public universities charging little to no tuition.',
    stats: [
      { label: 'Avg. Tuition', value: '\u20ac0\u2013\u20ac3,000/yr' },
      { label: 'Visa Success', value: '95%' },
      { label: 'Intakes', value: 'Oct & Apr' },
    ],
  },
  {
    icon: Star,
    country: 'United States',
    tagline: 'The widest range of programs and top-ranked universities',
    description:
      'From Ivy League research powerhouses to specialized STEM programs, the US offers unmatched program diversity \u2014 and OPT lets you work up to 3 years after graduation.',
    stats: [
      { label: 'Avg. Tuition', value: 'USD 25,000\u201355,000/yr' },
      { label: 'Visa Success', value: '85%' },
      { label: 'Intakes', value: 'Aug & Jan' },
    ],
  },
  {
    icon: Mountain,
    country: 'New Zealand',
    tagline: 'A safe country with practical, industry-linked degrees',
    description:
      'New Zealand\u2019s universities emphasize hands-on learning, and its post-study work visa makes it one of the easiest countries to gain international work experience.',
    stats: [
      { label: 'Avg. Tuition', value: 'NZD 22,000\u201332,000/yr' },
      { label: 'Visa Success', value: '93%' },
      { label: 'Intakes', value: 'Feb & Jul' },
    ],
  },
]

export function DestinationsGrid() {
  return (
    <Section id="destinations-grid">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Where You Can Go</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Compare Your Options at a Glance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Tuition, visa success rates, and intakes shift every year \u2014
          your consultant will confirm exact figures for your target
          programs during your free consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((destination) => (
          <div
            key={destination.country}
            className="flex flex-col rounded-[12px] border border-border bg-card p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex size-12 items-center justify-center rounded-[12px] bg-sky/15 text-sky">
              <destination.icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">{destination.country}</h3>
            <p className="mt-1 text-sm font-medium text-gold">{destination.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal">
              {destination.description}
            </p>

            <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
              {destination.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-xs font-bold text-navy">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all hover:gap-2.5"
            >
              Explore {destination.country}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
