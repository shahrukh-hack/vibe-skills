---
name: seo-meta-optimizer
description: Full-Spectrum Technical SEO & OpenGraph Meta Skill. Generates dynamic social share cards (OG images), sitemap.xml, robots.txt, canonical URLs, and JSON-LD structured schema for maximum Google ranking.
tags: [seo, metadata, opengraph, sitemap, json-ld, ranking]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🚀 Technical SEO & OpenGraph Meta Optimizer Skill

> **Purpose**: Supercharge website discoverability, search engine indexing, and social share previews across Google, Twitter, LinkedIn, and Discord.

---

## 🏷️ 1. Dynamic OpenGraph & Twitter Card Metadata (Next.js App Router)

```ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vibe Superkit — Stripe Enterprise Design Engine for Vibe Coders',
  description: 'Anti-AI-slop design system and 26-component arsenal for modern AI coding agents.',
  keywords: ['vibe coding', 'design engine', 'antigravity', 'cursor', 'stripe ui'],
  authors: [{ name: 'Yogeshkumar Patel', url: 'https://github.com/shahrukh-hack' }],
  metadataBase: new URL('https://shahrukh-hack.github.io/vibe-superkit/'),
  openGraph: {
    title: 'Vibe Superkit (v2.5)',
    description: 'Bespoke UI/UX design engine eliminating generic AI styling.',
    url: 'https://shahrukh-hack.github.io/vibe-superkit/',
    siteName: 'Vibe Superkit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vibe Superkit Live Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Superkit (v2.5)',
    description: 'Anti-AI slop design system with Emil Kowalski spring physics.',
    images: ['/og-image.png'],
  },
};
```

---

## 🗺️ 2. Dynamic `sitemap.xml` Generation

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shahrukh-hack.github.io/vibe-superkit';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
```
