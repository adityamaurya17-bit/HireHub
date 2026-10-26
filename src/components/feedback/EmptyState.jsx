import { cn } from '../../utils/cn.js'

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  titleAs: Title = 'h2',
  className,
}) {
  return (
    <div className={cn('flex flex-col items-center px-6 py-12 text-center', className)}>
      {Icon && (
        <span className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Icon aria-hidden="true" className="size-6" />
        </span>
      )}
      <Title className="mt-4 text-base font-semibold text-slate-900">{title}</Title>
      {description && <p className="mt-1 max-w-md text-sm text-slate-600">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
