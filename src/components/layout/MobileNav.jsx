import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { IconButton } from '../ui/IconButton.jsx'
import BrandLogo from './BrandLogo.jsx'
import DemoDataNotice from './DemoDataNotice.jsx'
import PrimaryNav from './PrimaryNav.jsx'

// Matches Tailwind's `lg` breakpoint, where the sidebar takes over.
const desktopQuery = '(min-width: 64rem)'

// Slide-over menu for screens below `lg`, built on a native modal <dialog> so the
// browser handles focus containment, Escape, and making the page behind it inert.
export default function MobileNav({ isOpen, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  // An open modal would block the page invisibly once the drawer is hidden at
  // desktop widths, so close it when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!isOpen || !window.matchMedia) return undefined
    const mediaQuery = window.matchMedia(desktopQuery)
    function handleChange(event) {
      if (event.matches) onClose()
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isOpen, onClose])

  function handleCancel(event) {
    // Escape: keep React state in charge of closing.
    event.preventDefault()
    onClose()
  }

  function handleBackdropClick(event) {
    // Clicks on the content land on child elements; only the backdrop targets the dialog itself.
    if (event.target === event.currentTarget) onClose()
  }

  return (
    // Backdrop clicks are a pointer convenience; keyboard users close with Escape or the close button.
    // eslint-disable-next-line jsx-a11y-x/click-events-have-key-events, jsx-a11y-x/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      aria-label="Navigation menu"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="m-0 h-dvh max-h-dvh w-72 max-w-[85vw] border-0 bg-white p-0 shadow-xl backdrop:bg-slate-900/50 lg:hidden"
    >
      {isOpen && (
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-slate-200 px-4">
            <BrandLogo onClick={onClose} />
            <IconButton icon={X} label="Close navigation menu" onClick={onClose} />
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <PrimaryNav onNavigate={onClose} />
          </div>
          <div className="p-4">
            <DemoDataNotice />
          </div>
        </div>
      )}
    </dialog>
  )
}
