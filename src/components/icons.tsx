type IconProps = {
  className?: string
}

const commonProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: '1em',
  height: '1em',
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} {...commonProps} aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  )
}

export function IconArrowLeft({ className }: IconProps) {
  return (
    <svg className={className} {...commonProps} aria-hidden="true">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" />
    </svg>
  )
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg className={className} {...commonProps} aria-hidden="true">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
    </svg>
  )
}
