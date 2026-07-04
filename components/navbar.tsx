'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { BrandButton } from '@/components/brand-button'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Success Stories', href: '/#success-stories' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        {/* Center nav — desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[8px] px-3.5 py-2 text-sm font-medium text-charcoal transition-colors duration-200 hover:bg-soft-gray hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — desktop */}
        <div className="hidden lg:block">
          <BrandButton href="/#contact" variant="primary" size="md">
            Free Consultation
          </BrandButton>
        </div>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-[8px] text-navy transition-colors duration-200 hover:bg-soft-gray lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-out lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[8px] px-4 py-3 text-sm font-medium text-charcoal transition-colors duration-200 hover:bg-soft-gray hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <BrandButton
            href="/#contact"
            variant="primary"
            size="md"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Free Consultation
          </BrandButton>
        </Container>
      </div>
    </header>
  )
}
