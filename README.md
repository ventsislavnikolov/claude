# Claude Library

A personal cheat-sheet library for **Claude Code** — slash commands, skills, keyboard shortcuts, and
best practices. English is the default language; the Bulgarian translation is served under `/bg`.

The site is built with [Blume](https://useblume.dev) — a markdown-first docs generator on top of
Astro.

## Requirements

Node.js 22.12 or newer and `pnpm`.

## Running

```bash
pnpm install
pnpm dev          # dev server with hot reload on http://localhost:4321
```

## Build

```bash
pnpm build        # static HTML in dist/
pnpm preview      # preview the last build
pnpm validate     # check for broken internal links
```

The equivalents without npm scripts are `pnpm exec blume dev`, `pnpm exec blume build`, and
`pnpm exec blume validate`.

## Structure

```
content/                     # the Markdown/MDX content — this is the site
  index.mdx                  # Home (English, default locale)
  01-reference/              # Reference (meta.ts sets the sidebar title)
    01-commands.mdx          # Slash commands
    02-skills.mdx            # Skills
  02-workflow/               # Workflow
    01-shortcuts.mdx         # Keyboard shortcuts and tricks
    02-tips.mdx              # Best practices
  bg/                        # Bulgarian locale, mirroring the tree above
    index.mdx
    01-reference/
    02-workflow/
blume.config.ts              # title, description, i18n locales, theme, search
vercel.json                  # static deploy to Vercel
```

Navigation is derived from the file structure. Numeric prefixes set the order and don't appear in
URLs; sidebar group titles come from each folder's `meta.ts`.

## Languages

`blume.config.ts` declares the locales:

```ts
i18n: {
  defaultLocale: "en",
  locales: [
    { code: "en", label: "English" },
    { code: "bg", label: "Български" },
  ],
}
```

English lives at the content root and is served unprefixed (`/`, `/reference/commands`). Bulgarian
lives in `content/bg/`, mirrors the same file names, and is served under `/bg/…`. A language
switcher appears in the header automatically, and untranslated pages fall back to English.

## Adding a page

Create an `.mdx` file in the right folder with frontmatter:

```mdx
---
title: Page title
description: A short description for SEO and search.
sidebar:
  icon: book
---
```

Add the same file name under `content/bg/` for the Bulgarian version, and list the slug in the
folder's `meta.ts` in both locales.

`pnpm build` fails on invalid frontmatter, so typos surface immediately.

## Deploy

Vercel reads `vercel.json`: `pnpm install` to install, `pnpm exec blume build` to build, `dist` as
the output.
