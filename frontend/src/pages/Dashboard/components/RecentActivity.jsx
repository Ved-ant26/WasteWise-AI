import { Link } from 'react-router-dom'
import { ClipboardList, ScanLine } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

/**
 * activity: array of future classification records, e.g.
 * { id, label, createdAt }. Empty by default — no fake history is generated.
 */
function RecentActivity({ activity = [] }) {
  const hasActivity = activity.length > 0

  return (
    <Card padding="lg" className="flex h-full flex-col">
      <Card.Header>
        <div>
          <Card.Title as="h2">Recent Activity</Card.Title>
          <Card.Description>Your latest waste classifications.</Card.Description>
        </div>
      </Card.Header>

      <Card.Body className="flex-1">
        {hasActivity ? (
          <ul className="space-y-3">
            {activity.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-border bg-surface-muted px-4 py-3 text-body-sm text-foreground"
              >
                {item.label}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-strong bg-surface-muted px-6 py-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary-muted text-primary">
              <ClipboardList className="size-6" aria-hidden="true" />
            </span>
            <p className="text-body-sm font-medium text-foreground">No activity yet</p>
            <p className="max-w-xs text-body-sm text-muted-foreground">
              Your waste classifications will appear here after you start using WasteWise-AI.
            </p>
            <Link to={ROUTES.WASTE_CLASSIFICATION}>
              <Button variant="primary" size="sm" className="mt-1">
                <ScanLine className="size-4" aria-hidden="true" />
                Classify Your First Item
              </Button>
            </Link>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default RecentActivity