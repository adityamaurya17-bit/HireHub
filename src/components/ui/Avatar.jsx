import { cn } from '../../utils/cn.js'

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

// Decorative initials avatar: render the person's name as visible or screen-reader text next to it.
export function Avatar({ name, className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700',
        className,
      )}
    >
      {getInitials(name)}
    </span>
  )
}
