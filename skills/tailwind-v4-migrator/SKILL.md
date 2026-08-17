---
name: tailwind-v4-migrator
description: Tailwind CSS v4 Modern Theme & Architecture Skill. Manages modern Tailwind CSS v4 `@theme` block directives, CSS variable color schemes, container queries, and performance optimizations.
tags: [tailwind, css, tailwind-v4, theme, design-tokens]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🎨 Tailwind CSS v4 Architecture Skill

> **Purpose**: Configure modern Tailwind CSS v4 CSS-first design systems using the new `@theme` engine and native container queries.

---

## 🏛️ 1. CSS-First `@theme` Token Architecture

In Tailwind CSS v4, configure tokens directly in your main CSS file without a cumbersome `tailwind.config.js`:

```css
@import "tailwindcss";

@theme {
  --font-serif: "Fraunces", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Stripe & Tailwind UI Palette Tokens */
  --color-canvas: #F6F9FC;
  --color-ink-primary: #0A2540;
  --color-blurple: #635BFF;
  --color-slate-card: #FFFFFF;
  --color-border-subtle: #E3E8EE;

  /* 8pt Spatial Matrix */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
}
```
