import { Bookmark, LayoutDashboard, Search } from 'lucide-react'

export const primaryNavItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/jobs', label: 'Discover Jobs', icon: Search },
  { to: '/saved', label: 'Saved Jobs', icon: Bookmark },
]
