import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesDetailGrid } from '@/components/services/services-detail-grid'
import { PricingPackages } from '@/components/services/pricing-packages'
import { ServicesFaq } from '@/components/services/services-faq'
import { ServicesCta } from '@/components/services/services-cta'

export const metadata: Metadata = {
  title: 'Our Services — EduPath Global',
  description:
    'University selection, application management, visa guidance, scholarships, test prep, and pre-departure support — everything you need to study abroad, handled by EduPath Global.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetailGrid />
      <PricingPackages />
      <ServicesFaq />
      <ServicesCta />
    </>
  )
}
