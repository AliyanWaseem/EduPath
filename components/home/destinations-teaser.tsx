import { Section } from '@/components/section'
import { BrandButton } from '@/components/brand-button'
import { ArrowRight } from 'lucide-react'

const DESTINATIONS = [
  { flag: '🇬🇧', country: 'United Kingdom', universities: '120+ Universities' },
  { flag: '🇨🇦', country: 'Canada', universities: '95+ Universities' },
  { flag: '🇦🇺', country: 'Australia', universities: '60+ Universities' },
  { flag: '🇩🇪', country: 'Germany', universities: '80+ Universities' },
  { flag: '🇺🇸', country: 'United States', universities: '200+ Universities' },
  { flag: '🇲🇾', country: 'Malaysia', universities: '40+ Universities' },
]

export function DestinationsTeaser() {
  return (
    <Section id="destinations">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Destinations</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          We&apos;ll Get You There
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-charcoal">
          Our consultants specialize in admissions across 6 major study
          destinations.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.country}
            className="flex flex-col items-center rounded-[12px] border border-border bg-card p-5 text-center shadow-soft transition-transform duration-200 hover:-translate-y-1.5"
          >
            <span className="text-4xl" role="img" aria-label={dest.country}>
              {dest.flag}
            </span>
            <h3 className="mt-3 text-sm font-bold text-navy">{dest.country}</h3>
            <p className="mt-1 text-xs font-medium text-sky">
              {dest.universities}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <BrandButton href="/#destinations" variant="primary" size="lg">
          Explore All Destinations
          <ArrowRight />
        </BrandButton>
      </div>
    </Section>
  )
}
