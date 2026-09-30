import { cn } from '@/utils/cn'

const variants = {
  primary: 'bg-primary-muted text-primary-muted-foreground ring-primary/15',
  secondary: 'bg-secondary-muted text-secondary-muted-foreground ring-secondary/15',
  accent: 'bg-accent-muted text-accent-muted-foreground ring-accent/15',
  neutral: 'bg-surface-muted text-muted-foreground ring-border-strong/30',
  success: 'bg-success-muted text-success-foreground ring-success/15',
  warning: 'bg-warning-muted text-warning-foreground ring-warning/15',
  danger: 'bg-error-muted text-error-foreground ring-error/15',
  info: 'bg-info-muted text-info-foreground ring-info/15',
}

const sizes = {
  sm: 'px-2 py-0.5 text-caption',
  md: 'px-2.5 py-1 text-caption sm:text-body-sm',
  lg: 'px-3 py-1.5 text-body-sm',
}

function Badge({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  className = '',
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-medium shadow-sm ring-1 ring-inset',
        pill ? 'rounded-full' : 'rounded-lg',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
