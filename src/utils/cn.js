// Joins class names, skipping falsy values so classes can be added conditionally.
export function cn(...classNames) {
  return classNames.filter(Boolean).join(' ')
}
