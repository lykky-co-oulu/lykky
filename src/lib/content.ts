import {
  frameworks,
  playbooks,
  templates,
  resources,
  caseStudies,
} from '#site/content'

export type CollectionType =
  | 'frameworks'
  | 'playbooks'
  | 'templates'
  | 'resources'
  | 'case-studies'

/** Returns all content items with collection type and href. */
export function getAllContent() {
  return [
    ...frameworks.map((item) => ({
      ...item,
      collection: 'frameworks' as CollectionType,
      href: `/learn/frameworks/${item.slug}`,
    })),
    ...playbooks.map((item) => ({
      ...item,
      collection: 'playbooks' as CollectionType,
      href: `/learn/playbooks/${item.slug}`,
    })),
    ...templates.map((item) => ({
      ...item,
      collection: 'templates' as CollectionType,
      href: `/learn/templates/${item.slug}`,
    })),
    ...resources.map((item) => ({
      ...item,
      collection: 'resources' as CollectionType,
      href: `/learn/resources/${item.slug}`,
    })),
    ...caseStudies.map((item) => ({
      ...item,
      collection: 'case-studies' as CollectionType,
      href: `/learn/case-studies/${item.slug}`,
    })),
  ]
}

/** Look up a single content item by slug segments from the URL. */
export function getContentBySlug(slugSegments: string[]) {
  const [collection, ...rest] = slugSegments
  const slug = rest.join('/')

  switch (collection) {
    case 'frameworks':
      return frameworks.find((f) => f.slug === slug)
    case 'playbooks':
      return playbooks.find((p) => p.slug === slug)
    case 'templates':
      return templates.find((t) => t.slug === slug)
    case 'resources':
      return resources.find((r) => r.slug === slug)
    case 'case-studies':
      return caseStudies.find((c) => c.slug === slug)
    default:
      return undefined
  }
}

const collectionLabels: Record<CollectionType, string> = {
  frameworks: 'Frameworks',
  playbooks: 'Playbooks',
  templates: 'Templates',
  resources: 'Resources',
  'case-studies': 'Case Studies',
}

/** Get collection info if the slug is just a collection name. */
export function getCollectionBySlug(slug: string) {
  if (!(slug in collectionLabels) && slug !== 'case-studies') return undefined
  const type = slug as CollectionType
  const items = getAllContent().filter((item) => item.collection === type)
  return { type, label: collectionLabels[type], items }
}
