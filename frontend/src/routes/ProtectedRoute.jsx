import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Loader from '@/components/ui/Loader'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/constants/routes'

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader size="lg" label="Checking your session" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  }

  return <Outlet />
}

export default ProtectedRoute