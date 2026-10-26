import { Info } from 'lucide-react'

export default function DemoDataNotice() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
      <p className="flex items-center gap-1.5 font-semibold">
        <Info aria-hidden="true" className="size-4 shrink-0" />
        Demo data
      </p>
      <p className="mt-1 leading-relaxed text-amber-800">
        Job listings in HireHub are sample data for demonstration, not live or verified postings.
      </p>
    </div>
  )
}
