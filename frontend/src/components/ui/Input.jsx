import { forwardRef, useId } from 'react'
import { cn } from '@/utils/cn'

const sizes = {
  sm: 'px-3 py-2 text-body-sm',
  md: 'px-4 py-2.5 text-body-sm',
  lg: 'px-4 py-3 text-body',
}

const Input = forwardRef(function Input(
  {
    id: idProp,
    label,
    helperText,
    error,
    size = 'md',
    fullWidth = true,
    disabled = false,
    className = '',
    inputClassName = '',
    endAdornment,
    ...props
  },
  ref,
) {
  const generatedId = useId()
  const inputId = idProp ?? generatedId
  const helperId = helperText ? `${inputId}-helper` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  const inputElement = (
    <input
      ref={ref}
      id={inputId}
      disabled={disabled}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={describedBy}
      className={cn(
        'rounded-lg border bg-surface text-foreground shadow-sm transition-colors duration-200',
        'placeholder:text-muted',
        'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-ring-offset',
        error
          ? 'border-error focus:border-error focus:ring-error/40'
          : 'border-border focus:border-border-focus focus:ring-ring/30',
        'disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60',
        sizes[size] ?? sizes.md,
        fullWidth && 'w-full',
        endAdornment && 'pr-11',
        inputClassName,
      )}
      {...props}
    />
  )

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', className)}>
      {label && (
        <label htmlFor={inputId} className="ww-label">
          {label}
        </label>
      )}

      {endAdornment ? (
        <div className="relative flex items-center">
          {inputElement}
          <div className="absolute right-1.5 flex items-center">{endAdornment}</div>
        </div>
      ) : (
        inputElement
      )}

      {error && (
        <p id={errorId} className="text-body-sm text-error" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={helperId} className="ww-caption">
          {helperText}
        </p>
      )}
    </div>
  )
})

export default Input