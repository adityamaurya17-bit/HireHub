import { Link, NavLink, Outlet } from 'react-router'

const navItems = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/jobs', label: 'Discover Jobs' },
  { to: '/saved', label: 'Saved Jobs' },
]

function navLinkClassName({ isActive }) {
  const base = 'block rounded-md px-3 py-2 text-sm font-medium transition-colors'
  return isActive
    ? `${base} bg-indigo-50 text-indigo-700`
    : `${base} text-slate-600 hover:bg-slate-100 hover:text-slate-900`
}

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-indigo-700 focus:shadow"
      >
        Skip to main content
      </a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="rounded-md text-lg font-semibold text-indigo-700">
            HireHub
          </Link>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} className={navLinkClassName}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-8 focus:outline-none sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
