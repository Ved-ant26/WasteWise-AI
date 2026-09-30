import { Link } from 'react-router-dom'
import { ArrowRight, ImageUp, ScanLine, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import HomeSection from '@/pages/Home/components/HomeSection'
import { ROUTES } from '@/constants/routes'

function AiSpotlightSection() {
  return (
    <HomeSection
      id="ai-spotlight"
      ariaLabelledby="home-ai-heading"
      className="py-page-y sm:py-16 lg:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="home-ai-heading" className="text-h2 sm:text-h1">
            Turn a Waste Image into an Actionable Insight
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            Upload an image of everyday waste and let WasteWise-AI analyze it with computer
            vision. You receive a waste classification and practical disposal guidance—ready
            to act on and track over time.
          </p>
          <Link to={ROUTES.WASTE_CLASSIFICATION} className="mt-8 inline-flex">
            <Button variant="primary" size="lg">
              Try Waste Classification
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div
          className="rounded-2xl border border-border bg-surface-muted p-6 shadow-md sm:p-8"
          aria-hidden="true"
        >
          <p className="ww-label mb-6 text-center">Classification flow</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <div className="flex flex-1 flex-col items-center rounded-xl border border-border bg-surface p-4 text-center">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-accent-muted">
                <ImageUp className="size-6 text-accent-muted-foreground" />
              </div>
              <p className="text-body-sm font-medium text-foreground">Upload</p>
              <p className="mt-1 text-caption text-muted">Photo of waste item</p>
            </div>

            <div className="hidden shrink-0 items-center sm:flex" aria-hidden="true">
              <div className="h-px w-6 bg-border-strong lg:w-8" />
            </div>

            <div className="flex flex-1 flex-col items-center rounded-xl border border-border bg-surface p-4 text-center">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary-muted">
                <ScanLine className="size-6 text-primary-muted-foreground" />
              </div>
              <p className="text-body-sm font-medium text-foreground">AI scan</p>
              <p className="mt-1 text-caption text-muted">Image analysis</p>
            </div>

            <div className="hidden shrink-0 items-center sm:flex" aria-hidden="true">
              <div className="h-px w-6 bg-border-strong lg:w-8" />
            </div>

            <div className="flex flex-1 flex-col items-center rounded-xl border border-border bg-surface p-4 text-center">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-secondary-muted">
                <Sparkles className="size-6 text-secondary-muted-foreground" />
              </div>
              <p className="text-body-sm font-medium text-foreground">Insight</p>
              <p className="mt-1 text-caption text-muted">Category & guidance</p>
            </div>
          </div>
          <p className="mt-6 text-center text-caption text-muted">
            Visual preview only—connect to classification when you are ready.
          </p>
        </div>
      </div>
    </HomeSection>
  )
}

export default AiSpotlightSection
