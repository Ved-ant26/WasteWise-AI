import { Sparkles } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Loader from '@/components/ui/Loader'

/**
 * result: null | {
 *   category: string,
 *   confidence?: number, // 0-1
 *   explanation?: string,
 * }
 */
function ClassificationResult({ result, isAnalyzing }) {
  return (
    <Card padding="lg" className="h-full">
      <Card.Header>
        <div>
          <Card.Title as="h2">Classification Result</Card.Title>
          <Card.Description>What the AI model identifies in your image.</Card.Description>
        </div>
      </Card.Header>

      <Card.Body>
        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-strong bg-surface-muted px-6 py-10 text-center">
            <Loader size="lg" variant="primary" label="Analyzing your image" />
            <p className="text-body-sm font-medium text-foreground">Analyzing your image…</p>
          </div>
        ) : result ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" size="lg">
                {result.category}
              </Badge>
              {typeof result.confidence === 'number' && (
                <Badge variant="neutral" size="sm">
                  {Math.round(result.confidence * 100)}% confidence
                </Badge>
              )}
            </div>
            {result.explanation && (
              <p className="text-body-sm text-muted-foreground">{result.explanation}</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-strong bg-surface-muted px-6 py-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary-muted text-primary">
              <Sparkles className="size-6" aria-hidden="true" />
            </span>
            <p className="text-body-sm font-medium text-foreground">
              Your classification result will appear here.
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default ClassificationResult