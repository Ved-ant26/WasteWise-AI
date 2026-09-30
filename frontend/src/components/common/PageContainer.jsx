import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

function PageContainer({ title, description, children }) {
  return (
    <motion.section className="ww-container py-page-y sm:py-12 lg:py-16" {...fadeIn}>
      <header className="mb-8">
        <h1 className="text-h1 tracking-tight text-foreground sm:text-display">{title}</h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-body text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children}
    </motion.section>
  )
}

export default PageContainer
