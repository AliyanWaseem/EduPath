import { Container } from '@/components/container'
import { BrandButton } from '@/components/brand-button'
import { ArrowRight } from 'lucide-react'

export function DestinationsCta() {
  return (
    <section className="relative overflow-hidden bg-gold py-16 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border-[16px] border-navy/10 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-8 hidden h-40 w-40 rounded-full border-[16px] border-navy/10 md:block"
      />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-navy text-balance md:text-4xl">
          Not Sure Which Country Fits You Best?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy/80">
          Book a free 30-minute consultation and we&apos;ll match you to the
          right destination based on your budget, grades, and goals.
        </p>
        <div className="mt-8 flex justify-center">
          <BrandButton href="/contact" variant="secondary" size="lg">
            Book Free Consultation
            <ArrowRight />
          </BrandButton>
        </div>
      </Container>
    </section>
  )
}
