import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/container'
import { BrandButton } from '@/components/brand-button'

const STATS = [
  { value: '2,500+', label: 'Students Placed', position: 'left-0 top-8' },
  { value: '15+', label: 'Countries', position: 'right-0 top-32' },
  {
    value: '98%',
    label: 'Visa Success Rate',
    position: 'left-4 bottom-10',
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint animated background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-0 h-[28rem] w-[28rem] rounded-full bg-sky/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="label-caps inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs text-sky">
            Trusted Since 2015
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-navy text-balance md:text-5xl lg:text-6xl">
            Your Dream University. Our Proven Path.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal text-pretty">
            Pakistan&apos;s most trusted study abroad consultants — helping
            students reach UK, Canada, Australia, Europe and beyond since 2015.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BrandButton href="/#contact" variant="primary" size="lg">
              Book Free Consultation
              <ArrowRight />
            </BrandButton>
            <BrandButton href="/#destinations" variant="ghost" size="lg">
              Explore Destinations
            </BrandButton>
          </div>
        </div>

        {/* Image with floating stat badges */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/hero-student.png"
              alt="Student with luggage and passport standing in front of a university campus"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-contain"
            />
          </div>

          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`absolute ${stat.position} rounded-[12px] border border-border bg-card px-4 py-3 shadow-soft`}
            >
              <p className="text-xl font-bold text-navy">{stat.value}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
