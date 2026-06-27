import { HeroSection } from '@/components/home/hero-section'
import { TrustBar } from '@/components/home/trust-bar'
import { HowItWorks } from '@/components/home/how-it-works'
import { ServicesSnapshot } from '@/components/home/services-snapshot'
import { DestinationsTeaser } from '@/components/home/destinations-teaser'
import { StatsSection } from '@/components/home/stats-section'
import { TestimonialsPreview } from '@/components/home/testimonials-preview'
import { CtaBanner } from '@/components/home/cta-banner'

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <ServicesSnapshot />
      <DestinationsTeaser />
      <StatsSection />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  )
}
