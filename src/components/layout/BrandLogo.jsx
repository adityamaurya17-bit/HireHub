import { Link } from 'react-router'

export default function BrandLogo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5 rounded-lg">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 shrink-0">
        <rect width="32" height="32" rx="8" className="fill-brand-600" />
        <path
          d="M11 9v14M21 9v14M11 16h10"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-slate-900">HireHub</span>
    </Link>
  )
}
