// Original SVG illustrations representing timber/wood — used in place of stock photography
// so nothing implies products or scenes that aren't confirmed.

export function LogStackArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="ring" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E4C99A" />
          <stop offset="60%" stopColor="#CDA968" />
          <stop offset="100%" stopColor="#8B5E34" />
        </radialGradient>
      </defs>
      <rect width="480" height="360" fill="#3A2313" />
      {[...Array(4)].map((_, row) =>
        [...Array(6)].map((_, col) => {
          const cx = 46 + col * 78 + (row % 2 === 1 ? 39 : 0)
          const cy = 44 + row * 78
          if (cx > 460) return null
          return (
            <g key={`${row}-${col}`}>
              <circle cx={cx} cy={cy} r="36" fill="url(#ring)" stroke="#54341C" strokeWidth="2" />
              <circle cx={cx} cy={cy} r="26" fill="none" stroke="#B4834B" strokeWidth="1.5" opacity="0.6" />
              <circle cx={cx} cy={cy} r="16" fill="none" stroke="#B4834B" strokeWidth="1.5" opacity="0.6" />
              <circle cx={cx} cy={cy} r="6" fill="#54341C" opacity="0.6" />
            </g>
          )
        })
      )}
    </svg>
  )
}

export function PlankArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 260" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="260" fill="#54341C" />
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          <rect x="0" y={i * 44} width="480" height="38" fill={i % 2 === 0 ? '#B4834B' : '#8B5E34'} />
          <line x1="0" y1={i * 44 + 8} x2="480" y2={i * 44 + 6} stroke="#3A2313" strokeWidth="1" opacity="0.4" />
          <line x1="0" y1={i * 44 + 20} x2="480" y2={i * 44 + 24} stroke="#3A2313" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1={i * 44 + 30} x2="480" y2={i * 44 + 28} stroke="#3A2313" strokeWidth="1" opacity="0.25" />
        </g>
      ))}
    </svg>
  )
}

export function DoorArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#F3E8D6" />
      <rect x="60" y="30" width="180" height="340" rx="2" fill="#8B5E34" stroke="#54341C" strokeWidth="3" />
      <rect x="80" y="55" width="140" height="120" rx="2" fill="none" stroke="#3A2313" strokeWidth="2" opacity="0.5" />
      <rect x="80" y="200" width="140" height="120" rx="2" fill="none" stroke="#3A2313" strokeWidth="2" opacity="0.5" />
      <circle cx="212" cy="205" r="4" fill="#C99A3D" />
    </svg>
  )
}

export function BeamArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 300" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="300" fill="#221408" />
      {[...Array(5)].map((_, i) => (
        <g key={i} transform={`translate(${i * 20}, 0)`}>
          <polygon
            points={`${20},${240 - i * 30} ${420},${210 - i * 30} ${440},${230 - i * 30} ${40},${260 - i * 30}`}
            fill={i % 2 === 0 ? '#B4834B' : '#6E4726'}
            stroke="#3A2313"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  )
}
