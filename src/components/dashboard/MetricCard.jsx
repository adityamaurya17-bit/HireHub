import { Card } from '../ui/Card.jsx'

// `value` stays null until it can be computed from real job data; metrics are never hardcoded.
export default function MetricCard({ label, value = null, icon: Icon }) {
  const hasValue = value !== null

  return (
    <Card className="flex h-full items-start justify-between gap-4 p-4 sm:p-5">
      <div>
        <p className="text-sm font-medium text-slate-600">{label}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {hasValue ? value : <span aria-hidden="true">—</span>}
        </p>
        {!hasValue && <p className="mt-1 text-xs text-slate-500">No data yet</p>}
      </div>
      <span className="hidden rounded-lg bg-brand-50 p-2 text-brand-600 sm:block">
        <Icon aria-hidden="true" className="size-5" />
      </span>
    </Card>
  )
}
