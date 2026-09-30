import { Link } from 'react-router-dom'
import { BarChart3, PieChart, TrendingUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

const PREVIEW_AREAS = [
  { label: 'Category distribution', icon: PieChart },
  { label: 'Classification trends', icon: TrendingUp },
  { label: 'Disposal guidance activity', icon: BarChart3 },
]

function InsightsPreview() {
  return (
    <Card padding="lg" className="flex h-full flex-col">
      <Card.Header>
        <div>
          <Card.Title as="h2">Waste Insights</Card.Title>
          <Card.Description>A preview of what your analytics will show.</Card.Description>
        </div>
      </Card.Header>

      <Card.Body className="flex flex-1 flex-col">
        <div className="grid flex-1 gap-3 sm:grid-cols-3">
          {PREVIEW_AREAS.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong bg-surface-muted px-4 py-6 text-center"
            >
              <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
              <p className="text-caption font-medium text-muted-foreground">{label}</p>
              <p className="text-caption text-muted">Data will appear here</p>
            </div>
          ))}
        </div>

        <Link to={ROUTES.ANALYTICS} className="mt-4 inline-flex self-start">
          <Button variant="outline" size="sm">
            View Analytics
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default InsightsPreview