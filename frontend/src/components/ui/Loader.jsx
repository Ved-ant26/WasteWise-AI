import { cn } from '@/utils/cn'

const sizes = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
  xl: 'h-12 w-12 border-[3px]',
}

const variants = {
  primary: 'border-primary border-t-transparent',
  secondary: 'border-secondary border-t-transparent',
  accent: 'border-accent border-t-transparent',
  white: 'border-primary-foreground border-t-transparent',
  muted: 'border-border-strong border-t-transparent',
}

function Loader({
  size = 'md',
  variant = 'primary',
  label = 'Loading',
  className = '',
  ...props
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'animate-spin rounded-full',
          sizes[size] ?? sizes.md,
          variants[variant] ?? variants.primary,
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default Loader
