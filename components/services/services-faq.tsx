import { Section } from '@/components/section'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'How long does the entire process take?',
    answer:
      'Most students start 8–12 months before their intended intake. University selection and applications take 4–6 weeks, with visa processing adding another 4–8 weeks depending on the destination country.',
  },
  {
    question: 'Do you guarantee admission or visa approval?',
    answer:
      'No consultancy can guarantee a decision made by a university or embassy. What we guarantee is a complete, error-free application and the strongest possible case for your profile — our 98% visa success rate reflects that process.',
  },
  {
    question: 'Which countries do you support?',
    answer:
      'We specialize in the UK, Canada, Australia, and Europe, with growing support for the USA and New Zealand. Your consultant will confirm the best-fit destinations during your free consultation.',
  },
  {
    question: 'Can I apply to multiple countries at the same time?',
    answer:
      'Yes. Our Premium and Elite packages are built for students applying to several countries in parallel, so you can compare offers and choose the best outcome before committing.',
  },
  {
    question: "What if I don't have my IELTS or TOEFL score yet?",
    answer:
      'That is completely fine. Our Test Prep Support service can start immediately, and we structure your application timeline around your expected test date.',
  },
]

export function ServicesFaq() {
  return (
    <Section id="faq">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">FAQ</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Questions, Answered
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[12px] border border-border bg-card px-6 py-4 shadow-soft open:pb-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-base font-semibold text-navy marker:content-none">
              {faq.question}
              <ChevronDown className="size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-charcoal">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
