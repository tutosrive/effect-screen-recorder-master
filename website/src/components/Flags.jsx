// SVG Flag components for language selector
// Using simple, clean flag representations

export const FlagES419 = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="24" fill="#AA151B"/>
    <rect y="6" width="32" height="12" fill="#F1BF00"/>
  </svg>
)

export const FlagGB = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="24" fill="#012169"/>
    <path d="M0 0L32 24M32 0L0 24" stroke="#fff" strokeWidth="4"/>
    <path d="M0 0L32 24M32 0L0 24" stroke="#C8102E" strokeWidth="2.5"/>
    <path d="M16 0V24M0 12H32" stroke="#fff" strokeWidth="6"/>
    <path d="M16 0V24M0 12H32" stroke="#C8102E" strokeWidth="4"/>
  </svg>
)

export const FlagPT = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="24" fill="#FF0000"/>
    <rect width="12" height="24" fill="#006600"/>
    <circle cx="12" cy="12" r="4" fill="#FFCC00"/>
  </svg>
)

export const FlagFR = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="10.67" height="24" fill="#002654"/>
    <rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/>
    <rect x="21.34" width="10.67" height="24" fill="#ED2939"/>
  </svg>
)

export const FlagAR = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="24" fill="#006C35"/>
    <rect x="8" y="8" width="16" height="8" fill="#FFFFFF"/>
  </svg>
)

export const FlagDE = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="8" fill="#000000"/>
    <rect y="8" width="32" height="8" fill="#DD0000"/>
    <rect y="16" width="32" height="8" fill="#FFCC00"/>
  </svg>
)

export const FlagRU = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0039A6"/>
    <rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>
)

export const FlagCN = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
    <rect width="32" height="24" fill="#DE2910"/>
    <g fill="#FFDE00">
      <polygon points="5,3 6.2,6.7 3,4.8 7,4.8 3.8,6.7"/>
      <polygon points="9,1 9.4,2.5 8,1.7 10,1.7 8.6,2.5"/>
      <polygon points="11,3 11.4,4.5 10,3.7 12,3.7 10.6,4.5"/>
      <polygon points="11,6 11.4,7.5 10,6.7 12,6.7 10.6,7.5"/>
      <polygon points="9,8 9.4,9.5 8,8.7 10,8.7 8.6,9.5"/>
    </g>
  </svg>
)

const flags = {
  es419: FlagES419,
  gb: FlagGB,
  pt: FlagPT,
  fr: FlagFR,
  ar: FlagAR,
  de: FlagDE,
  ru: FlagRU,
  cn: FlagCN,
}

export const Flag = ({ code, className }) => {
  const FlagComponent = flags[code]
  if (!FlagComponent) return null
  return <FlagComponent className={className} />
}

export default Flag
