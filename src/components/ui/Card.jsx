import { cn } from '../../utils/cn.js'

export function Card({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={cn('rounded-xl border border-slate-200 bg-white shadow-sm', className)}
      {...props}
    />
  )
}

export function CardHeader({ title, titleId, action }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
      <h2 id={titleId} className="text-base font-semibold text-slate-900">
        {title}
      </h2>
      {action}
    </div>
  )
}
