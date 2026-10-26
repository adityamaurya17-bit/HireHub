import { Avatar } from '../ui/Avatar.jsx'

// HireHub has no accounts; the top bar shows a fixed demo profile.
const demoUser = { name: 'Guest User', role: 'Demo account' }

export default function UserSummary() {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={demoUser.name} />
      <div className="sr-only text-sm leading-tight sm:not-sr-only">
        <p className="font-medium text-slate-900">{demoUser.name}</p>
        <p className="text-xs text-slate-500">{demoUser.role}</p>
      </div>
    </div>
  )
}
