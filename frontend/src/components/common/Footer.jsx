import { Link } from 'react-router-dom'
import { Recycle } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="ww-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to={ROUTES.HOME}
            className="flex items-center gap-2 text-h3 text-primary transition-colors hover:text-primary-hover"
          >
            <Recycle className="size-5 shrink-0" aria-hidden="true" />
            <span>WasteWise-AI</span>
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 text-body-sm text-muted-foreground">
              <li>
                <Link to={ROUTES.DASHBOARD} className="transition-colors hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PROFILE} className="transition-colors hover:text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="ww-caption mt-6">&copy; {currentYear} WasteWise-AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
