import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <main className="pointer-events-none fixed inset-0 z-15 flex select-none flex-col items-center justify-center animate-[fadeIn_2s_ease-out_0.4s_forwards] opacity-0">
      {/* Logo */}
      <h1
        className="font-serif text-[clamp(3rem,8vw,7rem)] font-light italic leading-none tracking-[0.02em] text-[#e8e4df] mix-blend-difference mb-5 sm:mb-5"
        style={{ fontSize: 'clamp(2.2rem, 8vw, 7rem)' }}
      >
        Lykky
      </h1>

      {/* Gradient divider */}
      <div
        className="mb-5 h-px opacity-50"
        style={{
          width: 'clamp(80px, 16vw, 200px)',
          background:
            'linear-gradient(90deg, transparent, #7eb8a2 30%, #7eb8a2 70%, transparent)',
        }}
      />

      {/* Tagline */}
      <p className="mb-11 font-sans text-[clamp(0.6rem,1.4vw,0.85rem)] font-extralight uppercase tracking-[0.35em] text-[rgba(232,228,223,0.4)]">
        GTM Nordic Toolkit
      </p>

      {/* Slogan */}
      <p className="mb-8 max-w-[28ch] text-center font-serif text-[clamp(1rem,2.6vw,1.65rem)] font-light italic leading-relaxed text-[#e8e4df] opacity-[0.72]">
        The open-source GTM playbook built for founders launching from Oulu.
      </p>

      {/* CTA button */}
      <div className="pointer-events-auto mb-8">
        <Button asChild variant="outline" size="lg" className="border-[rgba(126,184,162,0.2)] bg-transparent text-[#e8e4df] hover:border-[#7eb8a2] hover:bg-[rgba(126,184,162,0.08)] hover:text-[#7eb8a2] transition-all duration-300">
          <Link href="/learn">Explore the Knowledge Base</Link>
        </Button>
      </div>

      {/* Signal dot + location */}
      <div className="flex items-center gap-2.5">
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#7eb8a2] animate-[pulse_2.8s_ease-in-out_infinite]"
          style={{
            boxShadow: '0 0 8px #7eb8a2, 0 0 20px rgba(126,184,162,0.35)',
          }}
        />
        <span className="font-sans text-[0.65rem] font-extralight uppercase tracking-[0.2em] text-[rgba(232,228,223,0.4)]">
          Launching from Oulu, Finland
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[bounce_2.4s_ease-in-out_infinite]">
        <span className="font-sans text-[0.6rem] font-extralight uppercase tracking-[0.3em] text-[rgba(232,228,223,0.3)]">
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-[rgba(126,184,162,0.4)]"
        >
          <path
            d="M8 4L8 18M8 18L2 12M8 18L14 12"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </main>
  )
}
