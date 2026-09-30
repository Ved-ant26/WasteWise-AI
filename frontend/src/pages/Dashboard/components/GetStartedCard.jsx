import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ScanLine } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

function GetStartedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="mb-8"
    >
      <Card
        padding="lg"
        className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary-muted via-surface to-surface"
      >
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <ScanLine className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-h3 text-foreground sm:text-h2">
                Start with Your First Waste Classification
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                Upload a photo of a waste item, receive an AI classification, and get clear
                disposal guidance in seconds.
              </p>
            </div>
          </div>

          <Link to={ROUTES.WASTE_CLASSIFICATION} className="sm:shrink-0">
            <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
              Classify Waste
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

export default GetStartedCard