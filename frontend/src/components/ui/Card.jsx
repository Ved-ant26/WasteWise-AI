import { cn } from '@/utils/cn'

function CardRoot({ children, className = '', hover = false, padding = 'md', ...props }) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <article
      className={cn(
        'rounded-xl border border-border bg-surface shadow-md',
        paddingStyles[padding] ?? paddingStyles.md,
        hover && 'transition-shadow duration-200 hover:shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </article>
  )
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <header
      className={cn('mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between', className)}
      {...props}
    >
      {children}
    </header>
  )
}

function CardTitle({ children, className = '', as: Tag = 'h3', ...props }) {
  return (
    <Tag className={cn('text-h3 text-foreground sm:text-h2', className)} {...props}>
      {children}
    </Tag>
  )
}

function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={cn('text-body-sm text-muted-foreground sm:text-body', className)} {...props}>
      {children}
    </p>
  )
}

function CardBody({ children, className = '', ...props }) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <footer
      className={cn(
        'mt-6 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-end',
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  )
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
})

export default Card
