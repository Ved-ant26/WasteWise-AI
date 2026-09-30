import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, ScanLine, UserCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import { ROUTES } from '@/constants/routes'

// Only existing routes are linked here. A dedicated "Waste History" route
// does not exist yet in constants/routes.js, so that action is intentionally
// omitted rather than inventing a new route.
const ACTIONS = [
  {
    label: 'Classify Waste',
    description: 'Identify an item and get disposal guidance.',
    icon: ScanLine,
    to: ROUTES.WASTE_CLASSIFICATION,
  },
  {
    label: 'View Analytics',
    description: 'Review your waste trends and insights.',
    icon: BarChart3,
    to: ROUTES.ANALYTICS,
  },
  {
    label: 'Profile',
    description: 'Manage your account and preferences.',
    icon: UserCircle,
    to: ROUTES.PROFILE,
  },
]

function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="mb-8">
      <h2 id="quick-actions-heading" className="text-h3 text-foreground sm:text-h2">
        Quick Actions
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIONS.map(({ label, description, icon: Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset"
          >
            <Card hover padding="md" className="h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-muted text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-body font-semibold text-foreground">{label}</h3>
              <p className="mt-1 text-body-sm text-muted-foreground">{description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default QuickActions