import { useCallback, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import MobileNav from './MobileNav.jsx'
import Sidebar from './Sidebar.jsx'
import TopBar from './TopBar.jsx'

export default function AppLayout() {
  const { pathname } = useLocation()
  // The mobile menu remembers the path it was opened on, so any navigation —
  // including browser back/forward — closes it.
  const [mobileNavPath, setMobileNavPath] = useState(null)
  const isMobileNavOpen = mobileNavPath === pathname
  const closeMobileNav = useCallback(() => setMobileNavPath(null), [])

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-700 focus:shadow"
      >
        Skip to main content
      </a>
      <Sidebar />
      <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
      <div className="flex min-h-screen flex-col lg:pl-64">
        <TopBar onOpenMobileNav={() => setMobileNavPath(pathname)} />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 px-4 py-6 focus:outline-none sm:px-6 lg:px-8 lg:py-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
