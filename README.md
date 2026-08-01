# Claude Library

Личен справочник (cheat-sheet библиотека) за работа с **Claude Code** — slash команди, скилове,
клавишни комбинации и добри практики. Съдържанието е на български, командите и техническите
термини остават на английски.

Сайтът е направен с [Blume](https://useblume.dev) — markdown-first docs генератор върху Astro.

## Изисквания

Node.js 22.12 или по-нов и `pnpm`.

## Стартиране

```bash
pnpm install
pnpm dev          # dev сървър с hot reload на http://localhost:4321
```

## Билд

```bash
pnpm build        # статичен HTML в dist/
pnpm preview      # преглед на последния билд
pnpm validate     # проверка за счупени вътрешни връзки
```

Еквивалентните команди без npm scripts са `pnpm exec blume dev`, `pnpm exec blume build` и
`pnpm exec blume validate`.

## Структура

```
content/                     # Markdown/MDX съдържанието — това е сайтът
  index.mdx                  # Начало
  01-spravochnik/            # Справочник (meta.ts задава заглавието в менюто)
    01-komandi.mdx           # Slash команди
    02-skilove.mdx           # Skills
  02-raboten-proces/         # Работен процес
    01-klavishi.mdx          # Клавишни комбинации и трикове
    02-saveti.mdx            # Добри практики
blume.config.ts              # име, описание, тема, търсене
vercel.json                  # статичен deploy към Vercel
```

Навигацията се извежда автоматично от файловата структура. Числовите префикси задават реда и не
влизат в URL-а; заглавията на групите в менюто се задават в `meta.ts` на съответната папка.

## Добавяне на нова страница

Създай `.mdx` файл в подходящата папка с frontmatter:

```mdx
---
title: Заглавие на страницата
description: Кратко описание за SEO и търсачката.
sidebar:
  icon: book
---
```

`pnpm build` пада с грешка при невалиден frontmatter, така че печатните грешки се хващат веднага.

## Deploy

Vercel чете `vercel.json`: `pnpm install` за инсталация, `pnpm exec blume build` за билд, `dist`
като изход.
