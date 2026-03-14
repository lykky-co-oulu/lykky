import SceneWrapper from '@/components/three/scene-wrapper'
import { Hero } from '@/components/landing/hero'
import { Corners } from '@/components/landing/corners'
import { Grain } from '@/components/landing/grain'
import { LatestContent } from '@/components/landing/latest-content'

export default function LandingPage() {
  return (
    <>
      <SceneWrapper />
      <Grain />
      <Corners />
      <Hero />

      {/* Spacer for the fixed hero viewport */}
      <div className="h-screen" />

      <LatestContent />
    </>
  )
}
