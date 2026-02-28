export function FloatingBooks({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="35" height="50" rx="4" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" />
      <rect x="25" y="35" width="25" height="3" rx="1.5" fill="#818CF8" />
      <rect x="25" y="42" width="18" height="2" rx="1" fill="#C4B5FD" />
      <rect x="25" y="48" width="20" height="2" rx="1" fill="#C4B5FD" />
      <rect x="65" y="20" width="35" height="55" rx="4" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="1.5" />
      <rect x="70" y="25" width="25" height="3" rx="1.5" fill="#2DD4BF" />
      <rect x="70" y="32" width="18" height="2" rx="1" fill="#99F6E4" />
      <rect x="70" y="38" width="22" height="2" rx="1" fill="#99F6E4" />
      <circle cx="82" cy="60" r="8" fill="#99F6E4" opacity="0.5" />
      <rect x="40" y="55" width="30" height="45" rx="4" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="1.5" />
      <rect x="45" y="60" width="20" height="3" rx="1.5" fill="#A78BFA" />
      <rect x="45" y="67" width="15" height="2" rx="1" fill="#C4B5FD" />
    </svg>
  )
}

export function FloatingAtom({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="#818CF8" strokeWidth="1.5" transform="rotate(0 50 50)" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="#2DD4BF" strokeWidth="1.5" transform="rotate(60 50 50)" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="#A78BFA" strokeWidth="1.5" transform="rotate(-60 50 50)" opacity="0.6" />
      <circle cx="50" cy="50" r="5" fill="#312E81" opacity="0.7" />
      <circle cx="85" cy="50" r="3" fill="#2DD4BF" />
      <circle cx="33" cy="27" r="3" fill="#818CF8" />
      <circle cx="33" cy="73" r="3" fill="#A78BFA" />
    </svg>
  )
}

export function FloatingRocket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10C50 10 35 40 35 70C35 85 42 95 50 100C58 95 65 85 65 70C65 40 50 10 50 10Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="50" cy="55" r="8" fill="#F5F3FF" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="50" cy="55" r="3" fill="#312E81" />
      <path d="M35 70L22 80L30 72Z" fill="#CCFBF1" stroke="#2DD4BF" strokeWidth="1" />
      <path d="M65 70L78 80L70 72Z" fill="#CCFBF1" stroke="#2DD4BF" strokeWidth="1" />
      <path d="M44 100L50 110L56 100" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" opacity="0.7" />
    </svg>
  )
}

export function FloatingGear({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 15L44 22L52 20L50 28L58 30L52 36L56 43L48 42L46 50L40 44L34 50L32 42L24 43L28 36L22 30L30 28L28 20L36 22Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="40" cy="33" r="8" fill="#F5F3FF" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="20" cy="60" r="10" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="1.5" />
      <circle cx="20" cy="60" r="4" fill="#F0FDFA" stroke="#2DD4BF" strokeWidth="1" />
      <circle cx="60" cy="62" r="7" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" />
      <circle cx="60" cy="62" r="3" fill="#F5F3FF" stroke="#818CF8" strokeWidth="1" />
    </svg>
  )
}

export function FloatingChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="100" height="80" rx="8" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1.5" />
      <rect x="25" y="55" width="12" height="25" rx="3" fill="#EDE9FE" />
      <rect x="42" y="40" width="12" height="40" rx="3" fill="#CCFBF1" />
      <rect x="59" y="30" width="12" height="50" rx="3" fill="#DDD6FE" />
      <rect x="76" y="20" width="12" height="60" rx="3" fill="#2DD4BF" opacity="0.5" />
      <line x1="20" y1="82" x2="100" y2="82" stroke="#DDD6FE" strokeWidth="1.5" />
      <circle cx="31" cy="50" r="3" fill="#312E81" opacity="0.6" />
      <circle cx="48" cy="35" r="3" fill="#2DD4BF" opacity="0.6" />
      <circle cx="65" cy="25" r="3" fill="#312E81" opacity="0.6" />
      <circle cx="82" cy="15" r="3" fill="#2DD4BF" opacity="0.6" />
      <polyline points="31,50 48,35 65,25 82,15" stroke="#312E81" strokeWidth="1.5" opacity="0.3" fill="none" />
    </svg>
  )
}

export function FloatingGradCap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 95,30 50,50 5,30" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5" />
      <polygon points="50,10 95,30 50,50 5,30" fill="#312E81" opacity="0.1" />
      <line x1="50" y1="50" x2="50" y2="70" stroke="#A78BFA" strokeWidth="1.5" />
      <rect x="44" y="68" width="12" height="4" rx="2" fill="#A78BFA" />
      <path d="M25 35L25 55C25 55 37 65 50 65C63 65 75 55 75 55L75 35" stroke="#2DD4BF" strokeWidth="1.5" fill="#CCFBF1" opacity="0.4" />
      <circle cx="90" cy="35" r="3" fill="#2DD4BF" />
      <line x1="90" y1="30" x2="90" y2="55" stroke="#2DD4BF" strokeWidth="1.5" />
    </svg>
  )
}

export function FloatingLightbulb({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 10C24 10 14 24 14 36C14 48 24 54 28 62L52 62C56 54 66 48 66 36C66 24 56 10 40 10Z" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="1.5" />
      <rect x="28" y="66" width="24" height="4" rx="2" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="1" />
      <rect x="30" y="74" width="20" height="4" rx="2" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="1" />
      <rect x="34" y="82" width="12" height="4" rx="2" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1" />
      <path d="M40 22V40" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 30L40 40L48 30" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function FloatingBrain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C35 20 25 32 25 45C25 55 30 58 30 65C30 75 40 80 50 80C60 80 70 75 70 65C70 58 75 55 75 45C75 32 65 20 50 20Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5" />
      <path d="M50 30V70" stroke="#C4B5FD" strokeWidth="1.5" />
      <path d="M35 40C40 40 45 45 50 45" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 40C60 40 55 45 50 45" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M35 55C40 55 45 50 50 50" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 55C60 55 55 50 50 50" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="35" cy="40" r="3" fill="#818CF8" opacity="0.5" />
      <circle cx="65" cy="40" r="3" fill="#2DD4BF" opacity="0.5" />
      <circle cx="50" cy="60" r="3" fill="#A78BFA" opacity="0.5" />
    </svg>
  )
}

export function DottedGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="1.5" fill="#C4B5FD" opacity="0.35" />
        ))
      )}
    </svg>
  )
}

export function WavyLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30 Q1050 60 1200 30" stroke="#DDD6FE" strokeWidth="2" fill="none" />
      <path d="M0 35 Q150 5 300 35 Q450 65 600 35 Q750 5 900 35 Q1050 65 1200 35" stroke="#99F6E4" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  )
}
