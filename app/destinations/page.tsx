import type { Metadata } from 'next'
import { DestinationsHero } from '@/components/destinations/destinations-hero'
import { DestinationsGrid } from '@/components/destinations/destinations-grid'
import { DestinationsStatsBar } from '@/components/destinations/destinations-stats-bar'
import { DestinationsCta } from '@/components/destinations/destinations-cta'

export const metadata: Metadata = {
  title: 'Study Destinations — EduPath Global',
  description:
    'Compare study abroad destinations \u2014 UK, Canada, Australia, Europe, USA, and New Zealand \u2014 including tuition ranges, visa success rates, and intake months.',
}

export default function DestinationsPage() {
  return (
    <>
      <DestinationsHero />
      <DestinationsGrid />
      <DestinationsStatsBar />
      <DestinationsCta />
    </>
  )
}
