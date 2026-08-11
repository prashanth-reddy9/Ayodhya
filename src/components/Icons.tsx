type IconProps = { className?: string }

export function PhoneIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.766.462 3.493 1.34 5.012L2 22l5.13-1.345A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.191a8.14 8.14 0 0 1-4.15-1.135l-.298-.177-3.08.808.822-3.005-.194-.31A8.15 8.15 0 1 1 20.19 12.04a8.16 8.16 0 0 1-8.15 8.15z"/>
    </svg>
  )
}

export function MapPinIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function MenuIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  )
}

export function CloseIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// Category icons — simple geometric line-art representing each product type
export function TimberIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="24" cy="12" rx="14" ry="6" />
      <line x1="10" y1="12" x2="10" y2="30" />
      <line x1="38" y1="12" x2="38" y2="30" />
      <ellipse cx="24" cy="30" rx="14" ry="6" />
      <circle cx="24" cy="12" r="4" opacity="0.5" />
    </svg>
  )
}

export function PlywoodIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="8" y="10" width="32" height="6" />
      <rect x="8" y="19" width="32" height="6" />
      <rect x="8" y="28" width="32" height="6" />
    </svg>
  )
}

export function DoorIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="6" width="24" height="36" rx="1" />
      <circle cx="30" cy="24" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function WoodIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 32 L20 12 L28 12 L16 32 Z" />
      <path d="M22 32 L34 12 L40 12 L28 32 Z" opacity="0.5" />
    </svg>
  )
}

export function BuildingIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="16" width="14" height="26" />
      <rect x="24" y="8" width="14" height="34" />
      <line x1="14" y1="22" x2="18" y2="22" />
      <line x1="14" y1="28" x2="18" y2="28" />
      <line x1="28" y1="14" x2="34" y2="14" />
      <line x1="28" y1="20" x2="34" y2="20" />
      <line x1="28" y1="26" x2="34" y2="26" />
    </svg>
  )
}

export const categoryIcon = {
  timber: TimberIcon,
  plywood: PlywoodIcon,
  wood: WoodIcon,
  building: BuildingIcon,
}