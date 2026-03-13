import Link from 'next/link'
import type { Metadata } from 'next'
import {
  frameworks,
  playbooks,
  templates,
  resources,
  caseStudies,
} from '#site/content'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'GTM Knowledge Base — Lykky',
  description:
    'Frameworks, playbooks, templates, and resources to help tech founders build and execute a Go-to-Market strategy.',
}

const collections = [
  {
    name: 'Frameworks',
    description:
      'Step-by-step GTM frameworks covering discovery, positioning, and channel selection.',
    items: frameworks,
    href: '/learn/frameworks',
    slugPrefix: '/learn/frameworks/',
  },
  {
    name: 'Playbooks',
    description:
      'Region-specific playbooks with practical tactics for local markets.',
    items: playbooks,
    href: '/learn/playbooks',
    slugPrefix: '/learn/playbooks/',
  },
  {
    name: 'Templates',
    description:
      'Ready-to-use worksheets and canvases for your GTM planning.',
    items: templates,
    href: '/learn/templates',
    slugPrefix: '/learn/templates/',
  },
  {
    name: 'Resources',
    description:
      'Curated tools, reading lists, and reference material for founders.',
    items: resources,
    href: '/learn/resources',
    slugPrefix: '/learn/resources/',
  },
  {
    name: 'Case Studies',
    description:
      'Real founder stories and GTM lessons from the field.',
    items: caseStudies,
    href: '/learn/case-studies',
    slugPrefix: '/learn/case-studies/',
  },
] as const

export default function LearnPage() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-3">GTM Knowledge Base</h1>
        <p className="text-muted-foreground max-w-2xl">
          Everything you need to build and execute a Go-to-Market strategy.
          Browse our frameworks, playbooks, templates, and resources — all
          written for early-stage tech founders.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.filter((c) => c.items.length > 0).map((collection) => {
          const count = collection.items.length
          const firstItem = collection.items[0]
          const firstHref = firstItem
            ? `${collection.slugPrefix}${firstItem.slug}`
            : collection.href

          return (
            <Card key={collection.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{collection.name}</CardTitle>
                  <Badge variant="secondary">
                    {count} {count === 1 ? 'item' : 'items'}
                  </Badge>
                </div>
                <CardDescription>{collection.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1 text-sm">
                  {collection.items.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`${collection.slugPrefix}${item.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  {count > 4 && (
                    <li className="text-muted-foreground text-xs">
                      and {count - 4} more...
                    </li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={firstHref}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Start reading &rarr;
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
