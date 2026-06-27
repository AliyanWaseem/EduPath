import { Container } from '@/components/container'
import { BrandButton } from '@/components/brand-button'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gold py-16 md:py-20">
      {/* Decorative dots on the edges */}
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
          Ready to Start Your Study Abroad Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy/80">
          Book a free 30-minute consultation with our experts today.
        </p>
        <div className="mt-8 flex justify-center">
          <BrandButton href="/#contact" variant="secondary" size="lg">
            Get Started Free
            <ArrowRight />
          </BrandButton>
        </div>
      </Container>
    </section>
  )
}
