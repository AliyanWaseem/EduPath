const UNIVERSITIES = [
  'University of Oxford',
  'University of Toronto',
  'University of Melbourne',
  'Imperial College London',
  'McGill University',
  'TU Munich',
  'Monash University',
  'University of Manchester',
]

export function TrustBar() {
  // Duplicate the list so the marquee loops seamlessly.
  const items = [...UNIVERSITIES, ...UNIVERSITIES]

  return (
    <section className="border-y border-border bg-soft-gray py-10">
      <p className="label-caps mb-6 text-center text-xs text-gold">
        Students placed at universities worldwide
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 px-6 hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="cursor-default whitespace-nowrap text-lg font-bold text-muted-foreground/60 grayscale transition-colors duration-300 hover:text-navy hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
