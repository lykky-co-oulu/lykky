import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAuthorBySlug, getAllAuthors } from '@/lib/authors'
import { getAllContent } from '@/lib/content'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return {}

  return {
    title: `${author.name} — Lykky`,
    description: author.bio,
    openGraph: {
      title: `${author.name} — Lykky`,
      description: author.bio,
      type: 'profile',
      siteName: 'Lykky',
    },
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const articles = getAllContent().filter(
    (item) => 'author' in item && item.author === author.name
  )

  // JSON-LD Person schema — data sourced from our own authors.ts, fully trusted
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: author.url,
    jobTitle: author.role,
    address: { '@type': 'PostalAddress', addressLocality: author.location },
    sameAs: [
      author.social.linkedin,
      author.social.github,
      author.social.twitter,
    ].filter(Boolean),
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs />

      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {author.role} &middot; {author.location}
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {author.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {author.url.replace('https://www.', '')}
          </a>
          {author.social.linkedin && (
            <a
              href={author.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          )}
          {author.social.github && (
            <a
              href={author.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          )}
          {author.social.twitter && (
            <a
              href={author.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          )}
        </div>

        {articles.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-semibold">Articles</h2>
            <ul className="space-y-6">
              {articles.map((item) => (
                <li key={item.href} className="border-l-2 border-muted pl-4">
                  <Link href={item.href} className="group block">
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
