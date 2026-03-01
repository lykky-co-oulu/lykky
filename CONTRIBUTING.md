# Contributing to Lykky

Thank you for your interest in contributing to Lykky! Whether you're a founder sharing your experience, a marketer improving frameworks, or a developer building tools — there's a place for you.

## Ways to Contribute

### Share Knowledge (No Code Required)

- **Web form** — Submit content through [lykky.co/contribute](https://lykky.co/contribute). We'll format and review it.
- **GitHub issue** — [Open an issue](https://github.com/lykky-co/lykky/issues/new/choose) using one of our templates.
- **Case study** — Share your founder story. Use the case study issue template.
- **Regional playbook** — Know your local startup ecosystem? Help us document it.

### Improve Content (Light Technical)

1. Fork this repository
2. Edit MDX files in the `content/` directory
3. Open a pull request

Content uses MDX (Markdown with components). If you know Markdown, you can contribute. See [CONTENT_POLICY.md](CONTENT_POLICY.md) for guidelines on what we accept.

### Build Features (Developer)

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Open a pull request

## Development Setup

```bash
git clone https://github.com/lykky-co/lykky.git
cd lykky
pnpm install
pnpm dev
```

Requires Node.js 22+ and pnpm.

## Branch Naming

We use GitHub Flow. All branches are created from `main` and merged back via PR.

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feat/description` | `feat/icp-wizard` |
| Bug fix | `fix/description` | `fix/sidebar-scroll` |
| Content | `content/description` | `content/oulu-funding-guide` |
| Chore | `chore/description` | `chore/update-deps` |
| Docs | `docs/description` | `docs/api-reference` |

## Commit Messages

Use clear, descriptive commit messages:

```
feat: add channel scorer tool
fix: correct sidebar navigation on mobile
content: add Oulu funding guide
chore: update dependencies
docs: improve contributing guide
```

## Pull Request Process

1. Fill out the PR template completely
2. Ensure CI checks pass (lint, typecheck, build)
3. A maintainer will review your PR
4. Once approved, a maintainer will merge it

## Content Contributions

All content in `/content` is licensed under [CC BY-SA 4.0](LICENSE-CONTENT). By contributing content, you agree to this license.

See [CONTENT_POLICY.md](CONTENT_POLICY.md) for:
- What content we accept
- Quality standards
- Review process

## Code Contributions

All code is licensed under [MIT](LICENSE-CODE). By contributing code, you agree to this license.

### Code Style

- TypeScript for all code
- ESLint + Prettier for formatting (runs automatically via pre-commit hook)
- Follow existing patterns in the codebase

## Questions?

Open a [discussion](https://github.com/lykky-co/lykky/discussions) or reach out to the maintainers.
