import { forwardRef } from 'react'
import Loader from '@/components/ui/Loader'
import { cn } from '@/utils/cn'

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-md hover:bg-primary-hover focus-visible:ring-ring active:bg-primary-active',
  secondary:
    'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary-hover focus-visible:ring-ring active:bg-secondary-active',
  accent:
    'bg-accent text-accent-foreground shadow-md hover:bg-accent-hover focus-visible:ring-ring active:bg-accent',
  outline:
    'border-2 border-primary bg-transparent text-primary shadow-none hover:bg-surface-muted focus-visible:ring-ring active:bg-primary-muted/40 dark:hover:bg-surface-muted',
  ghost:
    'bg-transparent text-primary shadow-none hover:bg-surface-muted focus-visible:ring-ring active:bg-primary-muted/30 dark:hover:bg-surface-muted',
}

const sizes = {
  sm: 'px-3 py-1.5 text-body-sm gap-1.5 rounded-lg',
  md: 'px-4 py-2.5 text-body-sm gap-2 rounded-lg',
  lg: 'px-6 py-3 text-body gap-2.5 rounded-xl',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    loading = false,
    fullWidth = false,
    className = '',
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading && (
        <Loader
          size="sm"
          variant={variant === 'outline' || variant === 'ghost' ? 'primary' : 'white'}
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
})

export default Button
