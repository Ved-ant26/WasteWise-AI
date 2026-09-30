import { Moon, Sun } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useTheme } from '@/contexts/ThemeContext'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="min-w-9 shadow-none"
    >
      {isDark ? <Sun className="size-5 shrink-0" /> : <Moon className="size-5 shrink-0" />}
    </Button>
  )
}

export default ThemeToggle
