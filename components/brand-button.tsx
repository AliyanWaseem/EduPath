import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const brandButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[8px] font-medium whitespace-nowrap transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[18px] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Gold with navy text
        primary: 'bg-gold text-navy shadow-soft hover:brightness-105 hover:-translate-y-0.5',
        // Navy with white text
        secondary: 'bg-navy text-white hover:bg-navy/90 hover:-translate-y-0.5',
        // Outlined navy
        ghost: 'border border-navy/30 text-navy hover:bg-navy hover:text-white',
        // Green WhatsApp / success
        success: 'bg-success text-white hover:brightness-105',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type BrandButtonVariants = VariantProps<typeof brandButtonVariants>

type ButtonAsButton = ComponentProps<'button'> &
  BrandButtonVariants & { href?: undefined }

type ButtonAsLink = ComponentProps<typeof Link> &
  BrandButtonVariants & { href: string }

export type BrandButtonProps = ButtonAsButton | ButtonAsLink

export function BrandButton({
  className,
  variant,
  size,
  ...props
}: BrandButtonProps) {
  const classes = cn(brandButtonVariants({ variant, size, className }))

  if (typeof props.href === 'string') {
    return <Link className={classes} {...(props as ButtonAsLink)} />
  }

  return <button className={classes} {...(props as ButtonAsButton)} />
}

export { brandButtonVariants }
