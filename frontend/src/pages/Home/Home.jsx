import HeroSection from '@/pages/Home/components/HeroSection'
import TrustStripSection from '@/pages/Home/components/TrustStripSection'
import FeaturesSection from '@/pages/Home/components/FeaturesSection'
import HowItWorksSection from '@/pages/Home/components/HowItWorksSection'
import AiSpotlightSection from '@/pages/Home/components/AiSpotlightSection'
import SustainabilitySection from '@/pages/Home/components/SustainabilitySection'
import FinalCtaSection from '@/pages/Home/components/FinalCtaSection'

function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustStripSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AiSpotlightSection />
      <SustainabilitySection />
      <FinalCtaSection />
    </div>
  )
}

export default Home
