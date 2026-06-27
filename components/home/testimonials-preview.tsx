import Image from 'next/image'
import { Star } from 'lucide-react'
import { Section } from '@/components/section'

const TESTIMONIALS = [
  {
    image: '/images/student-1.png',
    quote:
      'EduPath made the impossible feel easy. From my SOP to my visa interview, they were with me at every step.',
    name: 'Ahmed Raza',
    placement: 'Now studying at University of Manchester, UK',
  },
  {
    image: '/images/student-2.png',
    quote:
      'I secured a scholarship I never thought I could get. Their team genuinely cares about your future.',
    name: 'Fatima Khan',
    placement: 'Now studying at University of Toronto, Canada',
  },
  {
    image: '/images/student-3.png',
    quote:
      'Professional, responsive, and honest. My Australia student visa was approved on the first try.',
    name: 'Bilal Ahmed',
    placement: 'Now studying at University of Melbourne, Australia',
  },
]

export function TestimonialsPreview() {
  return (
    <Section muted>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="label-caps text-sm text-gold">Testimonials</span>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl text-balance">
          Real Students. Real Results.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-[12px] border border-border bg-card p-7 shadow-soft"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-charcoal">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-xs font-medium text-sky">{t.placement}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
