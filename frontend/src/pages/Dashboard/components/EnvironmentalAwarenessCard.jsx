import { Leaf } from 'lucide-react'
import Card from '@/components/ui/Card'

function EnvironmentalAwarenessCard() {
  return (
    <Card padding="md" className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-muted text-secondary">
        <Leaf className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-body font-semibold text-foreground">Why Waste Sorting Matters</h2>
        <p className="mt-1 text-body-sm text-muted-foreground">
          Correctly sorting waste reduces contamination in recycling streams and helps more
          material get a second life. Small, consistent choices add up over time.
        </p>
      </div>
    </Card>
  )
}

export default EnvironmentalAwarenessCard