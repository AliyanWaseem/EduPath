import { Section } from '@/components/section'
import { BrandButton } from '@/components/brand-button'
import { Compass, Star, Crown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const PACKAGES = [
  {
    icon: Compass,
    name: 'Essential',
    price: 'PKR 45,000',
    cadence: 'one-time',
    description: 'For students who know where they want to go.',
    features: [
      '1 university application',
      'SOP writing & review',
      'Document checklist & guidance',
      'Email support',
    ],
    featured: false,
  },
  {
    icon: Star,
    name: 'Premium',
    price: 'PKR 95,000',
    cadence: 'one-time',
    description: 'Our most popular package for serious applicants.',
    features: [
      'Up to 5 university applications',
      'SOP, LOR & essay support',
      'Visa filing & interview prep',
      'Scholarship matching',
      'WhatsApp priority support',
    ],
    featured: true,
  },
  {
    icon: Crown,
    name: 'Elite',
    price: 'PKR 175,000',
    cadence: 'one-time',
    description: 'Full concierge from shortlist to departure.',
    features: [
      'Unlimited university applications',
      'Dedicated consultant, start to finish',
      'IELTS/TOEFL coaching included',
      'Pre-departure briefing & alumni network',
      '24/7 WhatsApp support',
    ],
    featured: false,
  },
]

export function PricingPackages() {
  return (
    <Section id="packages" muted>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Packages</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Simple Pricing, No Surprises
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Every package is fully customizable. Book a free consultation and
          we&apos;ll recommend the right fit for your goals and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className={cn(
              'relative flex flex-col rounded-[12px] border bg-card p-8 shadow-soft',
              pkg.featured ? 'border-gold ring-2 ring-gold/40 lg:-translate-y-2' : 'border-border',
            )}
          >
            {pkg.featured && (
              <span className="label-caps absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs text-navy">
                Most Popular
              </span>
            )}

            <span
              className={cn(
                'flex size-12 items-center justify-center rounded-[12px]',
                pkg.featured ? 'bg-gold/20 text-gold' : 'bg-navy/10 text-navy',
              )}
            >
              <pkg.icon className="size-6" />
            </span>

            <h3 className="mt-5 text-xl font-bold text-navy">{pkg.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-charcoal">{pkg.description}</p>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-navy">{pkg.price}</span>
              <span className="text-sm text-muted-foreground">{pkg.cadence}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <BrandButton
              href="/contact"
              variant={pkg.featured ? 'primary' : 'ghost'}
              size="lg"
              className="mt-8 w-full"
            >
              Choose {pkg.name}
            </BrandButton>
          </div>
        ))}
      </div>
    </Section>
  )
}
