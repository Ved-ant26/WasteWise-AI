import { Link } from 'react-router-dom'
import { ArrowRight, ScanLine, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-2xl dark:from-primary/20 dark:via-secondary/15 dark:to-accent/10" />

      <motion.div
        className="relative space-y-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-lg">
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className="ww-label">Image input</span>
            <ScanLine className="size-5 text-primary" />
          </div>
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border-strong bg-surface-muted">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary-muted">
              <Sparkles className="size-7 text-primary" />
            </div>
            <p className="text-body-sm font-medium text-muted-foreground">
              Computer vision ready
            </p>
          </div>
        </div>

        <div className="ml-auto w-[88%] rounded-2xl border border-border bg-surface-raised p-4 shadow-md">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-muted">
              <Sparkles className="size-5 text-secondary" />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <p className="text-body-sm font-semibold text-foreground">AI analysis</p>
              <div className="space-y-1.5">
                <div className="h-2 w-full rounded-full bg-surface-muted" />
                <div className="h-2 w-4/5 rounded-full bg-surface-muted" />
                <div className="h-2 w-3/5 rounded-full bg-primary-muted" />
              </div>
              <p className="text-caption text-muted">
                Classification and disposal guidance
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary-muted/50 via-background to-background py-12 sm:py-16 lg:py-20 dark:from-primary-muted/25"
    >
      <div className="ww-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Badge pill variant="primary" className="mb-4">
              AI-Powered Waste Management
            </Badge>
            <h1
              id="home-hero-heading"
              className="text-h1 tracking-tight text-foreground sm:text-display"
            >
              Smarter Waste Management with AI
            </h1>
            <p className="mt-4 max-w-xl text-body text-muted-foreground sm:text-body sm:leading-relaxed">
              WasteWise-AI uses artificial intelligence and computer vision to help identify
              waste, understand disposal options, and turn waste data into meaningful
              environmental insights.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to={ROUTES.WASTE_CLASSIFICATION} className="sm:inline-flex">
                <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                  Classify Waste
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link to={ROUTES.DASHBOARD} className="sm:inline-flex">
                <Button variant="outline" size="lg" fullWidth className="sm:w-auto">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
