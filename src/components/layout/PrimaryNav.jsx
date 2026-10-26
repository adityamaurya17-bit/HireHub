import { NavLink } from 'react-router'
import { cn } from '../../utils/cn.js'
import { primaryNavItems } from './navigation.js'

function linkClassName({ isActive }) {
  return cn(
    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  )
}

// Shared by the desktop sidebar and the mobile menu.
export default function PrimaryNav({ onNavigate }) {
  return (
    <nav aria-label="Primary">
      <ul className="space-y-1">
        {primaryNavItems.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink to={to} end={end} onClick={onNavigate} className={linkClassName}>
              {({ isActive }) => (
                <>
                  <Icon
                    aria-hidden="true"
                    className={cn('size-5 shrink-0', isActive ? 'text-brand-600' : 'text-slate-400')}
                  />
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
