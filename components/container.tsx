import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/**
 * Centered content wrapper. Max width 1200px with responsive gutters.
 */
export function Container({
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1200px] px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
