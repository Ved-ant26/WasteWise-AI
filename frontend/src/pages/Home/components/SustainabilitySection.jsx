import { CheckCircle2, Leaf } from 'lucide-react'
import HomeSection from '@/pages/Home/components/HomeSection'

const points = [
  'Understand what you throw away and why it matters',
  'Make better disposal and segregation decisions',
  'Track waste activity over time with structured records',
  'Learn about sustainable practices in everyday contexts',
  'Use data to recognize patterns and improve habits',
]

function SustainabilitySection() {
  return (
    <HomeSection
      id="sustainability"
      ariaLabelledby="home-sustainability-heading"
      className="border-t border-border bg-gradient-to-b from-background to-primary-muted/30 py-page-y sm:py-16 lg:py-20 dark:to-primary-muted/15"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 id="home-sustainability-heading" className="text-h2 sm:text-h1">
            Technology for a More Responsible Waste Future
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            WasteWise-AI supports a circular mindset: less guesswork at the bin, more clarity
            about materials, and a clearer path from individual action to community awareness.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-body-sm text-muted-foreground sm:text-body">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div
            className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-border bg-surface p-8 shadow-lg"
            aria-hidden="true"
          >
            <div className="absolute inset-6 rounded-2xl border border-dashed border-border-strong bg-surface-muted" />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-primary-muted">
                <Leaf className="size-10 text-primary" />
              </div>
              <p className="max-w-[14rem] text-body-sm font-medium text-foreground">
                Responsible waste decisions start with understanding
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

export default SustainabilitySection
