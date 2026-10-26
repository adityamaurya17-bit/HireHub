import BrandLogo from './BrandLogo.jsx'
import DemoDataNotice from './DemoDataNotice.jsx'
import PrimaryNav from './PrimaryNav.jsx'

// Desktop navigation (lg and up). Smaller screens use MobileNav instead.
export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-16 shrink-0 items-center px-5">
        <BrandLogo />
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <PrimaryNav />
      </div>
      <div className="p-4">
        <DemoDataNotice />
      </div>
    </div>
  )
}
