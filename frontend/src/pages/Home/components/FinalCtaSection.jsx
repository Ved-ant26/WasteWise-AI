import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import HomeSection from '@/pages/Home/components/HomeSection'
import { ROUTES } from '@/constants/routes'

function FinalCtaSection() {
  return (
    <HomeSection
      ariaLabelledby="home-final-cta-heading"
      className="pb-page-y pt-4 sm:pb-16 lg:pb-20"
      innerClassName="mx-auto max-w-3xl"
    >
      <div className="rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12">
        <h2 id="home-final-cta-heading" className="text-h2 sm:text-h1">
          Start Making Smarter Waste Decisions
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-body text-muted-foreground">
          Use AI-powered waste classification and data-driven insights to better understand
          and manage waste.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={ROUTES.REGISTER} className="w-full sm:w-auto">
            <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
              Get Started
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link to={ROUTES.DASHBOARD} className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" fullWidth className="sm:w-auto">
              Explore Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </HomeSection>
  )
}

export default FinalCtaSection
