import Badge from '@/components/ui/Badge'
import { useAuth } from '@/hooks/useAuth'

function PersonalizedGreeting() {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return null
  }

  const displayName = currentUser?.displayName?.trim()
  const greeting = displayName
    ? `Welcome back, ${displayName}`
    : currentUser?.email
      ? `Signed in as ${currentUser.email}`
      : 'Welcome back'

  return (
    <Badge variant="primary" pill className="mb-8">
      {greeting}
    </Badge>
  )
}

export default PersonalizedGreeting