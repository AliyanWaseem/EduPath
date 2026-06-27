import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { Container } from '@/components/container'

interface SectionProps {
  id?: string
  className?: string
  /** Apply the soft gray background instead of white. */
  muted?: boolean
  /** Render children full-bleed without the inner Container. */
  bleed?: boolean
  children: ReactNode
}

/**
 * Standard page section. 48px vertical padding on mobile, 80px on desktop.
 */
export function Section({
  id,
  className,
  muted = false,
  bleed = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-12 md:py-20',
        muted ? 'bg-soft-gray' : 'bg-background',
        className,
      )}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  )
}
