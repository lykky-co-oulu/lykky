import Link from 'next/link'
import { getAllContent } from '@/lib/content'

const hotTakes = [
  'Small angel investor tickets do not provide validation.',
]

export function LatestContent() {
  const content = getAllContent()
    .sort(
      (a, b) =>
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    )
    .slice(0, 6)

  return (
    <section className="relative z-30 border-t border-[rgba(126,184,162,0.12)] bg-[#050508]">
      <div className="mx-auto max-w-4xl px-6 py-28 sm:px-8 sm:py-36">
        {/* Hot Takes */}
        <div className="mb-28">
          <h2 className="mb-10 font-sans text-xs font-extralight uppercase tracking-[0.35em] text-[rgba(232,228,223,0.4)]">
            Hot Takes
          </h2>
          <ul className="space-y-6">
            {hotTakes.map((take) => (
              <li key={take} className="flex gap-4">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#7eb8a2]" />
                <span className="font-serif text-2xl font-light italic leading-relaxed text-[#e8e4df] sm:text-3xl">
                  {take}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Content */}
        {content.length > 0 && (
          <div>
            <h2 className="mb-10 font-sans text-xs font-extralight uppercase tracking-[0.35em] text-[rgba(232,228,223,0.4)]">
              Latest from the Knowledge Base
            </h2>
            <ul className="space-y-10">
              {content.map((item) => (
                <li
                  key={item.href}
                  className="border-l border-[rgba(126,184,162,0.15)] pl-6 transition-colors duration-200 hover:border-[#7eb8a2]"
                >
                  <Link
                    href={item.href}
                    className="group block"
                  >
                    <span className="mb-2 inline-block font-sans text-[0.65rem] font-extralight uppercase tracking-[0.25em] text-[#7eb8a2] opacity-50">
                      {item.collection}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#e8e4df] transition-colors duration-200 group-hover:text-[#7eb8a2] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-base font-extralight leading-relaxed text-[rgba(232,228,223,0.45)] sm:text-lg">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-16">
              <Link
                href="/learn"
                className="font-sans text-base font-extralight tracking-wide text-[#7eb8a2] opacity-60 transition-opacity duration-200 hover:opacity-100"
              >
                Browse all content &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
