import { BarChart3, Brain, Recycle } from 'lucide-react'
import HomeSection from '@/pages/Home/components/HomeSection'

const values = [
  {
    icon: Brain,
    title: 'AI-Powered Classification',
    description: 'Identify waste categories from images with computer vision.',
  },
  {
    icon: Recycle,
    title: 'Smart Disposal Guidance',
    description: 'Understand how to handle and dispose of items responsibly.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Waste Insights',
    description: 'Turn classification activity into meaningful patterns over time.',
  },
]

function TrustStripSection() {
  return (
    <HomeSection
      ariaLabelledby="home-trust-heading"
      className="border-b border-border bg-background-subtle py-10 sm:py-12"
    >
      <h2 id="home-trust-heading" className="sr-only">
        Platform value
      </h2>
      <ul className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {values.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-surface shadow-sm ring-1 ring-border">
              <Icon className="size-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-h3 text-foreground">{title}</h3>
            <p className="mt-1 text-body-sm text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  )
}

export default TrustStripSection
