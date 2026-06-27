import Link from 'next/link'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Container } from '@/components/container'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Success Stories', href: '/#success-stories' },
  { label: 'Contact', href: '/#contact' },
]

const COUNTRIES = [
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Germany',
  'Turkey',
]

const WHATSAPP_NUMBER = '923001234567'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-4">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Your trusted partner in Pakistan for studying abroad. We guide
            students through admissions, visas, and scholarships every step of
            the way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="label-caps text-sm text-gold">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries We Cover */}
        <div className="flex flex-col gap-4">
          <h3 className="label-caps text-sm text-gold">Countries We Cover</h3>
          <ul className="flex flex-col gap-2.5">
            {COUNTRIES.map((country) => (
              <li key={country} className="text-sm text-white/70">
                {country}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="label-caps text-sm text-gold">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>Gulberg III, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-sky" />
              <a
                href="tel:+923001234567"
                className="transition-colors duration-200 hover:text-white"
              >
                +92 300 1234567
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-sky" />
              <a
                href="mailto:hello@edupathglobal.pk"
                className="transition-colors duration-200 hover:text-white"
              >
                hello@edupathglobal.pk
              </a>
            </li>
          </ul>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-success px-5 text-sm font-medium text-white transition-all duration-200 hover:brightness-110"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} EduPath Global. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/#"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
