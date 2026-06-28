import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Introduction } from '@/components/introduction'
import { Requirements } from '@/components/requirements'
import { TeamStructure } from '@/components/team-structure'
import { Budget } from '@/components/budget'
import { Timeline } from '@/components/timeline'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Introduction />
      <Requirements />
      <TeamStructure />
      <Timeline />
      <Budget />
      <Footer />
    </div>
  )
}
