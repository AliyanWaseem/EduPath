import { Section } from '@/components/section'
import {
  GraduationCap,
  FileCheck2,
  BookMarked,
  Award,
  PencilRuler,
  Plane,
  Check,
} from 'lucide-react'

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'University Selection',
    description:
      'Personalized shortlists matched to your profile, budget, and ambitions.',
    features: [
      'One-on-one profile evaluation session',
      'Curated shortlist of 8–10 universities matched to your goals',
      'Comparative breakdown of tuition, rankings, and career outcomes',
      'Ongoing revisions as your preferences evolve',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Application Management',
    description:
      'We craft and submit polished applications, SOPs, and references for you.',
    features: [
      'Personal Statement / SOP writing and editing',
      'Recommendation letter templates and guidance',
      'Application form completion and document checklist',
      'Submission tracking across every university',
    ],
  },
  {
    icon: BookMarked,
    title: 'Visa Guidance',
    description:
      'Complete visa documentation, filing, and interview preparation support.',
    features: [
      'Country-specific visa documentation checklist',
      'Financial and sponsorship letter review',
      'Mock visa interview sessions',
      'Real-time application status support',
    ],
  },
  {
    icon: Award,
    title: 'Scholarship Assistance',
    description:
      'Discover and apply for funding that makes studying abroad affordable.',
    features: [
      'Personalized scholarship and grant matching',
      'Application and essay writing support',
      'Financial aid negotiation guidance',
      'Merit and need-based funding options',
    ],
  },
  {
    icon: PencilRuler,
    title: 'Test Prep Support',
    description:
      'Structured IELTS and TOEFL coaching to hit the scores you need.',
    features: [
      'Diagnostic assessment to set a target band score',
      'Structured IELTS / TOEFL study plan',
      'Weekly practice tests with expert feedback',
      'Speaking mock sessions with certified trainers',
    ],
  },
  {
    icon: Plane,
    title: 'Pre-Departure Briefing',
    description:
      'Accommodation, travel, and settling-in guidance before you fly out.',
    features: [
      'Accommodation search and booking assistance',
      'Travel and visa stamping guidance',
      'Banking, SIM, and local orientation checklist',
      'Alumni network introduction in your destination city',
    ],
  },
]

export function ServicesDetailGrid() {
  return (
    <Section id="all-services">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">What We Offer</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Six Services, One Seamless Journey
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Every service below is included as part of your consultancy
          package — no hidden add-ons, no guessing what comes next.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col rounded-[12px] border border-border bg-card p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-gold/15 text-gold">
                <service.icon className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal">
                  {service.description}
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
