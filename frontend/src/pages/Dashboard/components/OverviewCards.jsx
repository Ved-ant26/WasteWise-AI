import { Activity, ListChecks, Recycle, Sparkles } from 'lucide-react'
import Card from '@/components/ui/Card'

const METRICS = [
  { key: 'totalClassifications', label: 'Total Classifications', icon: Sparkles },
  { key: 'itemsTracked', label: 'Waste Items Tracked', icon: ListChecks },
  { key: 'recyclableItems', label: 'Recycling-related Items', icon: Recycle },
  { key: 'currentActivity', label: 'Current Activity', icon: Activity },
]

/**
 * stats: { totalClassifications, itemsTracked, recyclableItems, currentActivity }
 * Each value is expected to be a number once real data (e.g. Firestore) is
 * connected. Until then, every value is null/undefined and the card renders
 * an intentional empty-state placeholder — never an invented number.
 */
function OverviewCards({ stats = {} }) {
  return (
    <section aria-labelledby="overview-heading" className="mb-8">
      <h2 id="overview-heading" className="text-h3 text-foreground sm:text-h2">
        Overview
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map(({ key, label, icon: Icon }) => {
          const value = stats[key]

          return (
            <Card key={key} padding="md">
              <div className="flex items-center justify-between gap-2">
                <span className="ww-label">{label}</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-muted-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-h2 font-semibold text-foreground sm:text-h1">
                {value ?? '—'}
              </p>
              <p className="mt-1 text-caption text-muted">Data will appear here</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default OverviewCards