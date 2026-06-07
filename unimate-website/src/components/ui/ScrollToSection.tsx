'use client'

export function ScrollToSection({ targetId, children, className }: { targetId: string; children: React.ReactNode; className?: string }) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
