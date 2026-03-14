import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXContent } from '@/components/content/mdx-content'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { TableOfContents } from '@/components/layout/table-of-contents'
import { getAllContent, getContentBySlug, getCollectionBySlug } from '@/lib/content'
import { Badge } from '@/components/ui/badge'

interface ContentPageProps {
  params: Promise<{ slug: string[] }>
}

export function generateStaticParams() {
  return getAllContent().map((item) => ({
    slug: item.href.replace('/learn/', '').split('/'),
  }))
}

export async function generateMetadata({
  params,
}: ContentPageProps): Promise<Metadata> {
  const { slug } = await params

  // Collection index page (e.g. /learn/playbooks)
  if (slug.length === 1) {
    const collection = getCollectionBySlug(slug[0])
    if (collection) {
      const title = `${collection.label} — Lykky`
      return { title, description: `Browse all ${collection.label.toLowerCase()} on Lykky.` }
    }
  }

  const content = getContentBySlug(slug)
  if (!content) return {}

  const title = `${content.title} — Lykky`
  const tags = 'tags' in content ? (content.tags as string[]) : []
  const author = 'author' in content ? (content.author as string) : 'Lykky'

  return {
    title,
    description: content.description,
    keywords: tags,
    authors: [{ name: author }],
    openGraph: {
      title,
      description: content.description,
      type: 'article',
      siteName: 'Lykky',
      ...(('lastUpdated' in content && content.lastUpdated) && {
        modifiedTime: content.lastUpdated as string,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.description,
    },
  }
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug } = await params

  // Collection index page (e.g. /learn/playbooks)
  if (slug.length === 1) {
    const collection = getCollectionBySlug(slug[0])
    if (collection) {
      return (
        <div>
          <Breadcrumbs />
          <h1 className="mb-2 text-3xl font-bold">{collection.label}</h1>
          {collection.items.length === 0 ? (
            <p className="text-muted-foreground">No content yet. Check back soon.</p>
          ) : (
            <ul className="mt-8 space-y-6">
              {collection.items.map((item) => (
                <li key={item.href} className="border-l-2 border-muted pl-4">
                  <Link href={item.href} className="group block">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    }
  }

  const content = getContentBySlug(slug)
  if (!content) notFound()

  return (
    <div className="flex gap-8">
      <article className="min-w-0 flex-1" data-pagefind-body>
        <Breadcrumbs />

        <header className="mb-8">
          <h1
            className="mb-2 text-3xl font-bold"
            data-pagefind-meta="title"
          >
            {content.title}
          </h1>
          <p className="text-muted-foreground">{content.description}</p>

          {/* Tags */}
          {'tags' in content && content.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {content.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Framework-specific metadata */}
          {'difficulty' in content && (
            <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
              <span>Difficulty: {content.difficulty}</span>
              {'stage' in content && <span>Stage: {content.stage}</span>}
              {'estimatedTime' in content && content.estimatedTime && (
                <span>{content.estimatedTime}</span>
              )}
            </div>
          )}
        </header>

        <MDXContent code={content.body} />

        <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {'author' in content && content.author && (
              <span>By {content.author}</span>
            )}
            <span>
              Last updated:{' '}
              {new Date(content.lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </footer>
      </article>

      {'toc' in content && content.toc.length > 0 && (
        <aside className="hidden w-56 shrink-0 xl:block">
          <TableOfContents toc={content.toc} />
        </aside>
      )}
    </div>
  )
}
