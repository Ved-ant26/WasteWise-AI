import { useState } from 'react'
import PageContainer from '@/components/common/PageContainer'
import PersonalizedGreeting from '@/pages/Dashboard/components/PersonalizedGreeting'
import QuickActions from '@/pages/Dashboard/components/QuickActions'
import OverviewCards from '@/pages/Dashboard/components/OverviewCards'
import RecentActivity from '@/pages/Dashboard/components/RecentActivity'
import InsightsPreview from '@/pages/Dashboard/components/InsightsPreview'
import GetStartedCard from '@/pages/Dashboard/components/GetStartedCard'
import EnvironmentalAwarenessCard from '@/pages/Dashboard/components/EnvironmentalAwarenessCard'

function Dashboard() {
  // Placeholder state, shaped for future Firestore integration.
  // Nothing here is populated with real or invented data yet — every
  // section renders its own intentional empty state until real data
  // is wired up.
  const [stats] = useState({
    totalClassifications: null,
    itemsTracked: null,
    recyclableItems: null,
    currentActivity: null,
  })
  const [recentActivity] = useState([])

  return (
    <PageContainer
      title="Welcome to WasteWise-AI"
      description="Understand your waste, make informed disposal decisions, and track your environmental activity."
    >
      <PersonalizedGreeting />

      <QuickActions />

      <OverviewCards stats={stats} />

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <RecentActivity activity={recentActivity} />
        <InsightsPreview />
      </div>

      <GetStartedCard />

      <EnvironmentalAwarenessCard />
    </PageContainer>
  )
}

export default Dashboard