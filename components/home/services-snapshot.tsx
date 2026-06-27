import Link from 'next/link'
import { Section } from '@/components/section'
import {
  GraduationCap,
  FileCheck2,
  BookMarked,
  Award,
  PencilRuler,
  Plane,
  ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'University Selection',
    description: 'Personalized shortlists matched to your profile, budget, and ambitions.',
  },
  {
    icon: FileCheck2,
    title: 'Application Management',
    description: 'We craft and submit polished applications, SOPs, and references for you.',
  },
  {
    icon: BookMarked,
    title: 'Visa Guidance',
    description: 'Complete visa documentation, filing, and interview preparation support.',
  },
  {
    icon: Award,
    title: 'Scholarship Assistance',
    description: 'Discover and apply for funding that makes studying abroad affordable.',
  },
  {
    icon: PencilRuler,
    title: 'Test Prep Support',
    description: 'Structured IELTS and TOEFL coaching to hit the scores you need.',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Briefing',
    description: 'Accommodation, travel, and settling-in guidance before you fly out.',
  },
]

export function ServicesSnapshot() {
  return (
    <Section muted id="services">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Our Services</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Everything You Need, Under One Roof
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col rounded-[12px] border border-border bg-card p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex size-12 items-center justify-center rounded-[12px] bg-gold/15 text-gold">
              <service.icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">
              {service.description}
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all hover:gap-2.5"
            >
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
