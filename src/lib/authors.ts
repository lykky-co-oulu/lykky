export interface Author {
  name: string
  slug: string
  bio: string
  url: string
  role: string
  location: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

const authors: Author[] = [
  {
    name: 'Risto Holappa',
    slug: 'risto-holappa',
    bio: 'Founder & CTO, AI Solutions Architect and full-stack developer from Oulu. 10+ years of technical leadership, currently building custom AI assistants with on-premise deployment for Nordic B2B companies.',
    url: 'https://www.reipas.io',
    role: 'Founder & CTO',
    location: 'Oulu, Finland',
    social: {
      linkedin: 'https://www.linkedin.com/in/rholappa',
      github: 'https://github.com/ristoholappa',
      twitter: 'https://twitter.com/ristoholappa',
    },
  },
]

const authorsByName = new Map(authors.map((a) => [a.name, a]))
const authorsBySlug = new Map(authors.map((a) => [a.slug, a]))

export function getAuthorByName(name: string) {
  return authorsByName.get(name)
}

export function getAuthorBySlug(slug: string) {
  return authorsBySlug.get(slug)
}

export function getAllAuthors() {
  return authors
}
