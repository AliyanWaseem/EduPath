import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '923001234567'
const PREFILLED = encodeURIComponent(
  "Hi EduPath Global! I'd like a free consultation about studying abroad.",
)

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="animate-whatsapp-pulse fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-success text-white shadow-soft transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
