import { Menu } from 'lucide-react'
import { IconButton } from '../ui/IconButton.jsx'
import BrandLogo from './BrandLogo.jsx'
import NotificationsMenu from './NotificationsMenu.jsx'
import UserSummary from './UserSummary.jsx'

export default function TopBar({ onOpenMobileNav }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <IconButton
        icon={Menu}
        label="Open navigation menu"
        aria-haspopup="dialog"
        onClick={onOpenMobileNav}
        className="-ml-2 lg:hidden"
      />
      <div className="lg:hidden">
        <BrandLogo />
      </div>
      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <NotificationsMenu />
        <span aria-hidden="true" className="hidden h-6 w-px bg-slate-200 sm:block" />
        <UserSummary />
      </div>
    </header>
  )
}
