import { ScanLine, Sparkles, UploadCloud } from 'lucide-react'
import Card from '@/components/ui/Card'

const STEPS = [
  {
    number: '01',
    title: 'Upload',
    description: 'Upload an image of the waste item.',
    icon: UploadCloud,
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'AI analyzes the image and identifies its category.',
    icon: ScanLine,
  },
  {
    number: '03',
    title: 'Act',
    description: 'Receive disposal guidance based on the classification.',
    icon: Sparkles,
  },
]

function ClassificationSteps() {
  return (
    <section aria-labelledby="how-it-works-heading" className="mb-8">
      <h2 id="how-it-works-heading" className="text-h3 text-foreground sm:text-h2">
        How It Works
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {STEPS.map(({ number, title, description, icon: Icon }) => (
          <Card key={number} padding="md">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-caption font-semibold tracking-wide text-muted">
                {number}
              </span>
            </div>
            <h3 className="mt-3 text-body font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-body-sm text-muted-foreground">{description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ClassificationSteps