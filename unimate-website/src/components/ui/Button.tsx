import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  children,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'brand-gradient text-white hover:opacity-90 focus-visible:ring-brand-magenta',
    secondary:
      'border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white focus-visible:ring-brand-magenta',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
