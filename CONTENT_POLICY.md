# Content Policy

This document defines what content belongs in Lykky's open-source knowledge base and how it's reviewed.

## What We Accept

### Frameworks & Methodology

- Go-to-market frameworks applicable to early-stage startups
- Marketing and growth strategies with practical steps
- Sales playbooks and processes

### Playbooks

- Region-specific guides (Oulu, Finland, Nordics, EU)
- Ecosystem-specific guides (funding, accelerators, communities)
- Channel-specific guides (LinkedIn, cold outreach, events)

### Case Studies

- Real founder stories with concrete numbers where possible
- Lessons learned — both successes and failures
- Any stage, any industry, any region

### Templates

- Reusable documents, spreadsheets, or interactive tools
- Must be practical and immediately usable
- Examples: ICP worksheets, pitch deck outlines, pricing calculators

### Resources

- Curated lists of tools, funding sources, communities
- Must be relevant to early-stage founders
- Keep recommendations honest — no paid placements

## What We Don't Accept

- Promotional content or thinly-veiled advertising
- Content that requires a paid product to be useful
- Placeholder or low-effort content
- Content that duplicates existing pages without adding value
- Anything that violates our [Code of Conduct](CODE_OF_CONDUCT.md)

## Quality Standards

- **Actionable** — Reader should be able to do something after reading
- **Specific** — Concrete examples over vague advice
- **Honest** — Include what didn't work, not just success stories
- **Structured** — Use headings, lists, and clear formatting
- **Referenced** — Link to sources where applicable

## Content Structure

All content lives in the `/content` directory:

```
content/
├── frameworks/     # Core GTM methodology
├── playbooks/      # Region and channel-specific guides
├── case-studies/   # Real founder stories
├── templates/      # Downloadable/interactive templates
└── resources/      # Curated tools, funding, communities
```

Each content file uses MDX format with frontmatter metadata.

## Review Process

1. **Submit** — Open a PR or use the web form at [lykky.co/contribute](https://lykky.co/contribute)
2. **Review** — A maintainer reviews for quality, accuracy, and fit
3. **Feedback** — We may request changes or suggest improvements
4. **Merge** — Once approved, content is published

## Licensing

All content in `/content` is licensed under [CC BY-SA 4.0](LICENSE-CONTENT). By contributing, you agree that your content will be available under this license.

You retain attribution — your name and link will be credited in the content frontmatter.

## Updating Content

Content should stay current. If you notice outdated information:

1. Open an issue describing what's outdated
2. Or submit a PR with the correction

We periodically review content for accuracy and will mark outdated content as such.
