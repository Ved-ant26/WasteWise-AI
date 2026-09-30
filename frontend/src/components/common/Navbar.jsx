import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LogOut, Menu, Recycle, User, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/common/ThemeToggle'
import { NAV_LINKS } from '@/constants/navigation'
import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/utils/cn'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { currentUser, isAuthenticated, loading, logout } = useAuth()
  const navigate = useNavigate()

  function closeMenu() {
    setMenuOpen(false)
  }

  async function handleLogout() {
    closeMenu()
    await logout()
    navigate(ROUTES.HOME)
  }

  const displayName = currentUser?.displayName || currentUser?.email || ''

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-overlay shadow-sm backdrop-blur-sm">
      <nav className="ww-container flex items-center justify-between py-4" aria-label="Main navigation">
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 rounded-lg text-h3 text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset"
        >
          <Recycle className="size-6 shrink-0" aria-hidden="true" />
          <span>WasteWise-AI</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-1 py-0.5 text-body-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          {!loading && isAuthenticated && (
            <>
              <span className="hidden max-w-[10rem] items-center gap-1.5 truncate rounded-lg bg-surface-muted px-3 py-1.5 text-body-sm font-medium text-foreground lg:flex">
                <User className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate">{displayName}</span>
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="size-4" aria-hidden="true" />
                Log out
              </Button>
            </>
          )}

          {!loading && !isAuthenticated && (
            <>
              <Link to={ROUTES.LOGIN}>
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to={ROUTES.REGISTER}>
                <Button variant="primary" size="sm">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-border bg-surface md:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-3 py-2 text-body-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-muted text-primary-muted-foreground'
                      : 'text-muted-foreground hover:bg-surface-muted hover:text-primary',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {!loading && isAuthenticated && (
            <li className="flex flex-col gap-2 pt-2">
              <span className="flex items-center gap-1.5 truncate rounded-lg bg-surface-muted px-3 py-2 text-body-sm font-medium text-foreground">
                <User className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate">{displayName}</span>
              </span>
              <Button variant="outline" size="md" fullWidth onClick={handleLogout}>
                <LogOut className="size-4" aria-hidden="true" />
                Log out
              </Button>
            </li>
          )}

          {!loading && !isAuthenticated && (
            <li className="grid gap-2 pt-2 sm:grid-cols-2">
              <Link to={ROUTES.LOGIN} onClick={closeMenu}>
                <Button variant="outline" size="md" fullWidth>
                  Log in
                </Button>
              </Link>
              <Link to={ROUTES.REGISTER} onClick={closeMenu}>
                <Button variant="primary" size="md" fullWidth>
                  Sign up
                </Button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Navbar