import { Recycle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

/**
 * disposal: null | {
 *   action: string,
 *   category: string,
 *   guidance: string,
 *   caution?: string,
 * }
 */
function DisposalRecommendation({ disposal }) {
  return (
    <Card padding="lg" className="h-full">
      <Card.Header>
        <div>
          <Card.Title as="h2">Disposal Recommendation</Card.Title>
          <Card.Description>How to responsibly handle this item.</Card.Description>
        </div>
      </Card.Header>

      <Card.Body>
        {disposal ? (
          <div className="space-y-3">
            <Badge variant="secondary" size="lg">
              {disposal.category}
            </Badge>
            <p className="text-body-sm font-medium text-foreground">{disposal.action}</p>
            <p className="text-body-sm text-muted-foreground">{disposal.guidance}</p>
            {disposal.caution && (
              <p className="rounded-lg bg-warning-muted px-3 py-2 text-body-sm text-warning-foreground">
                {disposal.caution}
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-strong bg-surface-muted px-6 py-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary-muted text-secondary">
              <Recycle className="size-6" aria-hidden="true" />
            </span>
            <p className="text-body-sm font-medium text-foreground">
              Disposal guidance will appear after classification.
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default DisposalRecommendation