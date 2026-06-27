import { Section } from '@/components/section'
import { MessageCircle, ClipboardCheck, FileText, PlaneTakeoff } from 'lucide-react'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    description: 'Sit down with our advisors to map your goals and options.',
  },
  {
    icon: ClipboardCheck,
    title: 'Profile Assessment',
    description: 'We evaluate your academics to shortlist the best-fit universities.',
  },
  {
    icon: FileText,
    title: 'Application & Visa',
    description: 'We handle applications, documents, and visa filing end to end.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Pre-Departure Support',
    description: 'Travel, accommodation, and briefing so you land ready to thrive.',
  },
]

export function HowItWorks() {
  return (
    <Section>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Simple Process</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          From Confused to Confirmed in 4 Steps
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connecting dotted line (desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-border lg:block"
        />

        {STEPS.map((step, i) => (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            <div className="relative">
              <span className="flex size-16 items-center justify-center rounded-full border border-border bg-card text-navy shadow-soft">
                <step.icon className="size-7" />
              </span>
              <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
            <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-charcoal">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
