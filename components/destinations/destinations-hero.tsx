import { ArrowRight, Globe2 } from 'lucide-react'
import { Container } from '@/components/container'
import { BrandButton } from '@/components/brand-button'

export function DestinationsHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint animated background blobs, matches homepage hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 -z-0 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-0 h-72 w-72 rounded-full bg-sky/10 blur-3xl"
      />

      <Container className="relative z-10 py-16 text-center md:py-24">
        <span className="label-caps inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs text-gold">
          <Globe2 className="size-3.5" />
          Destinations
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.1] text-navy text-balance md:text-5xl">
          Six Countries. One Trusted Path to Get There.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal text-pretty">
          Every destination comes with its own visa rules, intakes, and
          costs. We help you pick the country that actually fits your
          budget, goals, and timeline — not just the most popular one.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BrandButton href="/contact" variant="primary" size="lg">
            Book Free Consultation
            <ArrowRight />
          </BrandButton>
          <BrandButton href="#destinations-grid" variant="ghost" size="lg">
            Compare Destinations
          </BrandButton>
        </div>
      </Container>
    </section>
  )
}
