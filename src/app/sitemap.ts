import type { MetadataRoute } from 'next'
import { getAllContent } from '@/lib/content'
import { getAllAuthors } from '@/lib/authors'

const BASE_URL = 'https://www.lykky.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const content = getAllContent().map((item) => ({
    url: `${BASE_URL}${item.href}`,
    lastModified: new Date(item.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const authors = getAllAuthors().map((a) => ({
    url: `${BASE_URL}/author/${a.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const collections = ['frameworks', 'playbooks', 'templates', 'resources', 'case-studies'].map(
    (c) => ({
      url: `${BASE_URL}/learn/${c}`,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })
  )

  return [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/learn`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contribute`, changeFrequency: 'monthly', priority: 0.5 },
    ...collections,
    ...content,
    ...authors,
  ]
}
