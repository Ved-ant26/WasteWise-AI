import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import PageContainer from '@/components/common/PageContainer'
import { ROUTES } from '@/constants/routes'

function NotFound() {
  return (
    <PageContainer title="Page not found" description="The page you requested does not exist.">
      <Link to={ROUTES.HOME}>
        <Button variant="primary">Back to home</Button>
      </Link>
    </PageContainer>
  )
}

export default NotFound
