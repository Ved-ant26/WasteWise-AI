import {
  BarChart3,
  BookOpen,
  History,
  ScanSearch,
  Trash2,
  Users,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import HomeSection from '@/pages/Home/components/HomeSection'

const features = [
  {
    icon: ScanSearch,
    title: 'AI Waste Classification',
    description:
      'Identify waste categories from uploaded images using computer vision.',
  },
  {
    icon: Trash2,
    title: 'Disposal Recommendations',
    description:
      'Provide guidance on how identified waste should be handled or disposed of.',
  },
  {
    icon: BarChart3,
    title: 'Waste Analytics',
    description:
      'Understand personal and community-level waste patterns through analytics.',
  },
  {
    icon: History,
    title: 'Waste History',
    description: 'Track previously classified waste and build a personal waste record.',
  },
  {
    icon: BookOpen,
    title: 'Environmental Awareness',
    description:
      'Learn practical information about responsible waste management and sustainability.',
  },
  {
    icon: Users,
    title: 'Community Insights',
    description:
      'Understand collective waste-management activity and environmental impact.',
  },
]

function FeaturesSection() {
  return (
    <HomeSection
      id="features"
      ariaLabelledby="home-features-heading"
      className="py-page-y sm:py-16 lg:py-20"
    >
      <header className="mx-auto max-w-2xl text-center">
        <h2 id="home-features-heading" className="text-h2 sm:text-h1">
          Everything You Need for Smarter Waste Management
        </h2>
        <p className="mt-3 text-body text-muted-foreground">
          WasteWise-AI combines AI classification, waste tracking, analytics, and
          environmental awareness in one platform—so individuals and communities can manage
          waste with clarity.
        </p>
      </header>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Card hover padding="md" className="h-full">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary-muted">
                <Icon className="size-5 text-primary-muted-foreground" aria-hidden="true" />
              </div>
              <Card.Title as="h3" className="text-h3">
                {title}
              </Card.Title>
              <Card.Description className="mt-2">{description}</Card.Description>
            </Card>
          </li>
        ))}
      </ul>
    </HomeSection>
  )
}

export default FeaturesSection
