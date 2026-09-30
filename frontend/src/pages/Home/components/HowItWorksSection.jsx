import { ClipboardCheck, Upload, Zap } from 'lucide-react'
import HomeSection from '@/pages/Home/components/HomeSection'

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload',
    description: 'Upload an image of the waste item.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Classify',
    description: 'AI analyzes the image and identifies the waste category.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Act',
    description: 'Receive disposal guidance and track the result.',
  },
]

function HowItWorksSection() {
  return (
    <HomeSection
      id="how-it-works"
      ariaLabelledby="home-how-heading"
      className="border-y border-border bg-surface-muted/50 py-page-y sm:py-16 lg:py-20"
    >
      <header className="mx-auto max-w-2xl text-center">
        <h2 id="home-how-heading" className="text-h2 sm:text-h1">
          How It Works
        </h2>
        <p className="mt-3 text-body text-muted-foreground">
          Three straightforward steps from photo to actionable guidance.
        </p>
      </header>

      <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <li key={step} className="relative flex flex-col items-center text-center">
            {index < steps.length - 1 ? (
              <span
                className="pointer-events-none absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-border lg:block"
                aria-hidden="true"
              />
            ) : null}
            <span className="ww-caption mb-2 font-semibold tracking-wider text-primary">
              {step}
            </span>
            <div className="relative z-10 mb-4 flex size-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-md">
              <Icon className="size-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-h3 text-foreground">{title}</h3>
            <p className="mt-2 max-w-xs text-body-sm text-muted-foreground">{description}</p>
          </li>
        ))}
      </ol>
    </HomeSection>
  )
}

export default HowItWorksSection
