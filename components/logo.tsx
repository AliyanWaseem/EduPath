import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Use light text for dark backgrounds (e.g. footer). */
  inverted?: boolean
  className?: string
}

export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="EduPath Global home"
    >
      <span className="flex size-9 items-center justify-center rounded-[8px] bg-gold text-navy">
        <GraduationCap className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-lg font-bold',
            inverted ? 'text-white' : 'text-navy',
          )}
        >
          EduPath{' '}
          <span className={inverted ? 'text-gold' : 'text-sky'}>Global</span>
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.18em]',
            inverted ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Study Abroad Experts
        </span>
      </span>
    </Link>
  )
}
