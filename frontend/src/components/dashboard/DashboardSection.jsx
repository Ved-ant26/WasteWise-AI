import { cn } from '@/utils/cn'

function DashboardSection({ title, description, children, className }) {
  return (
    <section
      className={cn(
        'rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8',
        className,
      )}
    >
      <header className="mb-4">
        <h2 className="text-h3 text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-body-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  )
}

export default DashboardSection
