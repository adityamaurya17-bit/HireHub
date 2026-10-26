import { Bell } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { IconButton } from '../ui/IconButton.jsx'

// Disclosure panel for notifications. HireHub has no notification source yet,
// so the panel shows its empty state.
export default function NotificationsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const panelId = useId()
  const headingId = useId()

  useEffect(() => {
    if (!isOpen) return undefined

    function handlePointerDown(event) {
      if (!containerRef.current.contains(event.target)) setIsOpen(false)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className="relative">
      <IconButton
        ref={buttonRef}
        icon={Bell}
        label="Notifications"
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && (
        <section
          id={panelId}
          aria-labelledby={headingId}
          className="fixed inset-x-4 top-18 z-40 rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:mt-2 sm:w-80"
        >
          <h2 id={headingId} className="text-sm font-semibold text-slate-900">
            Notifications
          </h2>
          <p className="mt-2 text-sm text-slate-600">You have no new notifications.</p>
        </section>
      )}
    </div>
  )
}
