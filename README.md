# Lykky

The open-source GTM toolkit for Nordic founders.

Lykky is two things:

1. **An open-source GTM knowledge base** — frameworks, templates, playbooks, and case studies for taking your product to market
2. **An interactive GTM platform** — wizard-driven tools that turn that knowledge into action

Built by founders in Oulu, Finland. Open to contributions from anywhere.

## Quick Start

```bash
git clone https://github.com/lykky-co/lykky.git
cd lykky
pnpm install
pnpm dev
```

Requires Node.js 22+ and pnpm.

## Project Structure

```
lykky/
├── content/            # The open-source knowledge base (CC BY-SA 4.0)
│   ├── frameworks/     # Core GTM methodology
│   ├── playbooks/      # Region-specific guides (Oulu, Finland, Nordics, EU)
│   ├── case-studies/   # Real founder stories
│   ├── templates/      # Downloadable/interactive templates
│   └── resources/      # Curated tools, funding, communities
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # UI and content components
│   ├── lib/            # Utilities and integrations
│   ├── hooks/          # React hooks
│   └── types/          # TypeScript types
└── public/             # Static assets
```

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Content | MDX + contentlayer2 |
| Styling | Tailwind CSS + shadcn/ui |
| Search | Pagefind |
| Hosting | Vercel |
| CI/CD | GitHub Actions |

## Contributing

We welcome contributions from founders, marketers, and developers. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

**Non-technical?** You can contribute content through our [web form](https://lykky.co/contribute) or by [opening an issue](https://github.com/lykky-co/lykky/issues/new/choose).

**Developer?** Fork the repo, create a feature branch, and open a PR. See the contributing guide for branch naming and commit conventions.

## Customize for Your Region

Lykky is built to be forked and adapted:

1. Fork this repo
2. Add your playbooks in `content/playbooks/your-region/`
3. Deploy to Vercel (free)

## Licenses

- **Code** is licensed under [MIT](LICENSE-CODE)
- **Content** (everything in `/content`) is licensed under [CC BY-SA 4.0](LICENSE-CONTENT)

## Links

- [Content Policy](CONTENT_POLICY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
