<div align="center">

# ⚡ Vibe Skills (v2.5)
### The Definitive Mega-Library of 50 Standard Agent Skills & Anti-AI Slop Playbooks

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v2.5.0-635BFF?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Skills Standard](https://img.shields.io/badge/agentskills.io-Compliant-success?style=flat-square)](https://agentskills.io)
[![Skills Count](https://img.shields.io/badge/Total%20Skills-50%20Standard%20Skills-purple?style=flat-square)](skills/)
[![Frameworks Bundled](https://img.shields.io/badge/UI%20Playbooks-10%20High--Star%20Frameworks-635BFF?style=flat-square)](skills/taste-engine/references/)

<br />

> **The ultimate skill ecosystem for AI coding agents.**  
> Equips **Antigravity**, **Cursor**, **Claude Code**, **Codex**, and **Windsurf** with 77k+ ⭐ taste dials, 10 UI framework playbooks, 20+ language code reviews, OWASP security sentinels, Supabase RLS, Stripe billing, Shopify headless e-commerce, Better Auth, Expo React Native, and autonomous web scrapers.

</div>

---

## 📑 Table of Contents

- [⚡ 1-Command CLI Installation](#-1-command-cli-installation)
- [🎛️ The 1–10 Taste Dials (Leonxlnx Architecture)](#️-the-110-taste-dials-leonxlnx-architecture)
- [🎨 10 Bundled UI/UX Framework Playbooks](#-10-bundled-uiux-framework-playbooks)
- [📦 Complete Roster of 50 Standard Skills](#-complete-roster-of-50-standard-skills)
- [🤖 Real-World Usage & Prompt Templates](#-real-world-usage--prompt-templates)
- [🚫 Anti-AI Slop Heuristic Matrix](#-anti-ai-slop-heuristic-matrix)
- [📁 Repository Blueprint](#-repository-blueprint)
- [🤝 Part of The Vibe Coder's Power Suite](#-part-of-the-vibe-coders-power-suite)
- [👤 Author & License](#-author)

---

## ⚡ 1-Command CLI Installation

Install any of the 50 skills directly into your workspace's `.antigravity/skills/` or `.cursor/skills/` directory with zero manual configuration:

```bash
# 1. List all 50 available skills
npx vibe-skills list

# 2. Install the flagship Taste Engine (Includes all 10 UI playbooks & dials)
npx vibe-skills add taste-engine

# 3. Install Full-Stack & E-Commerce Superpowers
npx vibe-skills add better-auth-rbac
npx vibe-skills add shopify-storefront-architect
npx vibe-skills add cart-checkout-orchestrator
npx vibe-skills add supabase-architect
npx vibe-skills add stripe-billing-guard
npx vibe-skills add expo-react-native-architect
npx vibe-skills add browser-automation-scraper
npx vibe-skills add code-review
```

*(Universal [agentskills.io](https://agentskills.io) standard compatible: `npx skills add https://github.com/shahrukh-hack/vibe-skills --skill <skill-name>`)*

---

## 🎛️ The 1–10 Taste Dials (Leonxlnx Architecture)

`taste-engine` incorporates the configurable parameter architecture from **Leonxlnx's `taste-skill` (77k+ ⭐)**. Adjust these three numerical dials at the top of your prompt to fine-tune the agent's aesthetic output:

```markdown
# Configuration Dials
DESIGN_VARIANCE = 7
MOTION_INTENSITY = 8
VISUAL_DENSITY = 6
```

### 1. `DESIGN_VARIANCE` (1 to 10)
* **`1 – 3` (Minimal & Safe):** Centered single-column layouts, strict Swiss grid, monochrome typography. Ideal for documentation and technical blogs.
* **`4 – 6` (Modern Clean SaaS):** Linear / Tailwind UI structure, balanced two-column hero, card bento with subtle 1px borders.
* **`7 – 8` (Stripe Press & Editorial):** Asymmetric magazine layouts, Fraunces serif accent typography, custom paper noise grain textures.
* **`9 – 10` (Avant-Garde & Experimental):** Dynamic viewport morphing, non-traditional typography scales, interactive canvas experiences.

### 2. `MOTION_INTENSITY` (1 to 10)
* **`1 – 3` (Static & Fast):** Zero animations, instant state changes, pure CSS hover color transitions.
* **`4 – 6` (Functional Feedback):** 200ms ease-out transitions on buttons, subtle modal fades, tooltip springs.
* **`7 – 8` (Emil Kowalski Hardware Physics):** Physics-based spring curves (`stiffness: 420, damping: 30`), active press depression (`scale: 0.96`), magnetic cursor attraction, Vaul drag-dismiss drawers.
* **`9 – 10` (High Kinetic & Scroll):** Kinetic typography reveals, mouse-following radial spotlight borders, infinite marquees, Lenis inertia smooth scrolling.

### 3. `VISUAL_DENSITY` (1 to 10)
* **`1 – 3` (Spacious & Breathable):** Large whitespace padding (`py-24`), oversized display typography, consumer marketing landing pages.
* **`4 – 6` (Standard Product UI):** Balanced padding (`p-6`), standard form controls, typical B2B SaaS applications.
* **`7 – 9` (Linear / Developer Workspace):** High information density, compact tabular rows, keyboard shortcuts (`⌘K`), multi-pane sidebars.
* **`10` (Terminal / Bloomberg):** Monospaced high-frequency telemetry, dense grid matrices, zero wasted pixels.

---

## 🎨 10 Bundled UI/UX Framework Playbooks

Inside **`skills/taste-engine/references/`**, AI agents have instant access to 10 dedicated framework reference playbooks:

| Playbook | Framework | Community Stars | What It Equips Your AI Agent With |
| :--- | :--- | :---: | :--- |
| **[`1-shadcn-ui.md`](skills/taste-engine/references/1-shadcn-ui.md)** | **Shadcn UI** | **80k+ ⭐** | Accessible compound Radix primitives, keyboard focus rings, Slot `asChild` composition, and `cn()` utility conventions. |
| **[`2-framer-motion.md`](skills/taste-engine/references/2-framer-motion.md)** | **Framer Motion** | **27k+ ⭐** | 420Hz spring physics constants (`stiffness: 420, damping: 30`), magnetic cursor pull (`useMotionValue`), and `layoutId` layout morphing. |
| **[`3-emil-kowalski-vaul-sonner.md`](skills/taste-engine/references/3-emil-kowalski-vaul-sonner.md)** | **Vaul & Sonner** | **20k+ ⭐** | Bottom-sheet drawers, stacked physics toast queues, and tactile press-down states (`scale: 0.96`). |
| **[`4-origin-ui.md`](skills/taste-engine/references/4-origin-ui.md)** | **Origin UI** | **5k+ ⭐** | Precision input adornments, password visibility toggles, and sliding segmented pill controls. |
| **[`5-cmdk-search.md`](skills/taste-engine/references/5-cmdk-search.md)** | **cmdk** | **12k+ ⭐** | Fast in-memory `⌘K` command palette traversal and instant keyboard filtering. |
| **[`6-magic-ui-aceternity.md`](skills/taste-engine/references/6-magic-ui-aceternity.md)** | **Aceternity & Magic UI** | **40k+ ⭐** | Mouse-following radial spotlight cards, moving border beams, and infinite marquees. |
| **[`7-lenis-smooth-scroll.md`](skills/taste-engine/references/7-lenis-smooth-scroll.md)** | **Lenis** | **13k+ ⭐** | Inertia momentum smooth scroll heuristics and high-performance passive rendering. |
| **[`8-lucide-icons.md`](skills/taste-engine/references/8-lucide-icons.md)** | **Lucide Icons** | **17k+ ⭐** | 24x24 SVG stroke-width standards and visual hierarchy rules. |
| **[`9-ui-ux-pro-max.md`](skills/taste-engine/references/9-ui-ux-pro-max.md)** | **UI UX Pro Max** | **5k+ ⭐** | 8pt spatial grid, modular typographic scales (1.250 Major Third), and WCAG AAA contrast math. |
| **[`10-21st-dev-and-cursorrules.md`](skills/taste-engine/references/10-21st-dev-and-cursorrules.md)** | **21st.dev & Cursorrules** | **30k+ ⭐** | Open copy-paste component architecture and universal anti-AI slop guardrails. |

---

## 📦 Complete Roster of 50 Standard Skills

### 🎨 1. Design, UI & Vision (13 Skills)
| Skill ID | Description |
| :--- | :--- |
| **`taste-engine`** | Flagship anti-slop design engine combining 77k+ ⭐ dials and 10 UI framework playbooks. |
| **`ui-ux-pro-max`** | Agency-grade design intelligence database: 8pt spatial grid, 1.250 typography scale, and WCAG AAA math. |
| **`gpt-taste`** | Strict GPT & Codex motion and layout override skill (forces asymmetric layouts and spring physics). |
| **`full-output-enforcement`** | Anti-truncation skill guaranteeing complete, working code with zero placeholders (`// TODO`). |
| **`stitch-design-taste`** | Multi-surface semantic design token and theme stitcher. |
| **`brandkit`** | Comprehensive brand identity, color matrix, and typography token creator. |
| **`imagegen-frontend-web`** | Web layout composition prompt generator for image models (ChatGPT Images, Midjourney). |
| **`imagegen-frontend-mobile`** | Mobile UI composition prompt generator for iOS/Android screen generation. |
| **`image-to-code`** | 3-phase autonomous vision pipeline converting UI screenshots and mockups into clean code. |
| **`redesign-existing-projects`** | Safely refactor legacy/ugly codebases to Stripe/Tailwind UI without breaking backend props. |
| **`minimalist-ui`** | Swiss precision & Dieter Rams minimalist design principles (*"Less, but better"*). |
| **`industrial-brutalist-ui`** | Hardware engineering, tactile mechanical controls, and telemetry badges. |
| **`high-end-visual-design`** | Stripe Press & Kinfolk luxury editorial aesthetics with warm palettes. |

---

### 🛍️ 2. E-Commerce, Auth, Fullstack & Cloud (16 Skills)
| Skill ID | Description |
| :--- | :--- |
| **`shopify-storefront-architect`** | Shopify GraphQL Storefront API integration, optimistic cart lines, and checkout redirects. |
| **`instant-product-search-filters`** | Sub-50ms product search with multi-faceted filtering, price sliders, and swatch facets. |
| **`cart-checkout-orchestrator`** | Persistent cross-device shopping carts (Zustand), slide-over drawers, and Stripe checkout. |
| **`better-auth-rbac`** | Modern type-safe authentication, Passkeys/WebAuthn, OAuth2, and multi-tenant organization RBAC. |
| **`expo-react-native-architect`** | Universal iOS, Android & Web mobile applications with Expo Router v4 and native gestures. |
| **`supabase-architect`** | PostgreSQL schemas, Row-Level Security (RLS) policies, and Auth triggers. |
| **`stripe-billing-guard`** | Cryptographically verified Stripe webhook listeners and checkout sessions. |
| **`seo-meta-optimizer`** | Dynamic OpenGraph images, sitemaps, robots.txt, and JSON-LD structured schema. |
| **`tailwind-v4-migrator`** | Tailwind CSS v4 `@theme` directive block and container query architecture. |
| **`mcp-server-builder`** | Model Context Protocol (MCP) server development in TypeScript and Python. |
| **`docker-cloud-deployer`** | Multi-stage production Dockerfiles for Railway, Fly.io, Vercel, and Cloudflare. |
| **`pdf-doc-intelligence`** | Document parsing, table extraction, and structured JSON isolation from complex PDFs. |
| **`tanstack-query-sync`** | Server-state caching, stale-while-revalidate fetching, and optimistic UI mutations. |
| **`zod-schema-sentinel`** | Runtime type safety, environment variable parsing, and API schema validation. |
| **`owasp-security-sentinel`** | OWASP Top 10 vulnerability and secret leak auditor. |
| **`nextjs-app-router-guard`** | React 19 Server Action validator and cache invalidation audit. |
| **`database-migration-verifier`** | Zero-downtime schema migration checker for PostgreSQL and SQLite. |
| **`enterprise-erp-sync`** | MYOB Cloud ERP REST API sync pipeline with automated OAuth2 token rotation. |

---

### 🧠 3. Memory & Architecture (3 Skills)
| Skill ID | Description |
| :--- | :--- |
| **`ast-token-optimizer`** | AST symbol tree queries reducing LLM token consumption by 97% vs raw file dumps. |
| **`agent-memory-sync`** | Seamless cross-agent handoff contracts between Antigravity, Cursor, and Claude Code. |
| **`codebase-knowledge-graph`** | Semantic codebase dependency mapper and module interaction graphs. |
| **`canvas-interactive-visualizer`** | Publication-ready Mermaid diagrams, system flowcharts, and sequence maps. |

---

### 🤖 4. Multi-Agent Orchestration & Review (17 Skills)
| Skill ID | Description |
| :--- | :--- |
| **`code-review`** | 4-phase structured code reviews across 20+ languages with 30+ dedicated reference guides. |
| **`browser-automation-scraper`** | Autonomous headless Playwright & Puppeteer scraper for SPAs and price tracking. |
| **`agency-messaging`** | Standard JSON-RPC inter-agent message queuing and inbox routing protocol. |
| **`task-management`** | Autonomous task prioritization, queue assignment, and state machine transitions. |
| **`agencycli-usage`** | Autonomous command invocation guidelines for multi-agent teams. |
| **`clarify-confirm-continue`** | 3-phase alignment protocol to eliminate AI assumptions before editing code. |
| **`anti-slop-pr-audit`** | Static pull request auditor that catches generic AI code bloat. |
| **`github-pr-triage`** | Automated GitHub PR triage, semantic categorization, and changelog generation. |
| **`pr-loop`** | Continuous automated PR refinement and test runner execution loop. |
| **`deslop-duplication-audit`** | AST audit tool detecting duplicate utility functions across large codebases. |
| **`distilling-strategies-interactively`** | Interactive requirement clarification protocol for complex refactors. |
| **`sidequest`** | Isolated branching for exploratory side features without polluting main branch. |
| **`new-worktree`** | Git worktree isolation manager for concurrent parallel agent tasks. |
| **`sem-semantic-diff`** | AST-aware semantic diff viewer for clean, distraction-free code reviews. |
| **`quick-question`** | Fast context lookup for lightweight inquiries without bloating agent history. |

---

## 🤖 Real-World Usage & Prompt Templates

Copy and paste these prompts into **Antigravity**, **Cursor**, **Claude Code**, or **Windsurf**:

### 🌟 1. Stripe-Style SaaS Landing Page
```markdown
"Build a landing page for our developer API using the taste-engine skill.
Dials:
- DESIGN_VARIANCE = 8
- MOTION_INTENSITY = 8
- VISUAL_DENSITY = 5

Enforce:
- Stripe Enterprise color palette (#F6F9FC canvas, #0A2540 navy headings, #635BFF blurple CTA)
- Emil Kowalski spring button physics (scale: 0.96 on click)
- Mouse-following spotlight card for our feature matrix"
```

---

### 🛍️ 2. Headless E-Commerce Store with Persistent Cart
```markdown
"Scaffold a high-speed e-commerce storefront using shopify-storefront-architect and cart-checkout-orchestrator.
Include:
- Sub-50ms instant product search with price and category filters
- Slide-over cart drawer with Zustand persistent storage and quantity steppers
- Direct checkout redirect to Shopify Storefront API checkoutUrl"
```

---

### 🔐 3. Modern Type-Safe Authentication with Passkeys & RBAC
```markdown
"Implement user authentication and organization multi-tenancy using better-auth-rbac.
Configure:
- Passkeys/WebAuthn and GitHub OAuth
- PostgreSQL session store with connection pooling
- Organization role-based access control (Admin, Member, Viewer)"
```

---

### 📱 4. Universal iOS & Android Mobile App
```markdown
"Build a mobile companion app for our SaaS using expo-react-native-architect.
Implement:
- Expo Router v4 file-based tabs navigation
- Tactile haptic feedback on button clicks (expo-haptics)
- Native-feeling spring bottom sheet modal"
```

---

## 🚫 Anti-AI Slop Heuristic Matrix

| Cliché AI Slop Pattern (Banned) | High-Taste Standard (Enforced) |
| :--- | :--- |
| **Neon purple glowing card borders** on dark backgrounds | Subtle 1px crisp borders (`#E3E8EE`) with tactile inner ambient shadow |
| **Pill badges with sparkle emojis** (`✨ Next-Gen AI`) above every title | Structured mono tags (`[ 01 / ARCHITECTURE ]`) or subtle category kickers |
| **CSS gradient text across headline keywords** | High-contrast monochrome typography with intentional italicized serif accents |
| **Generic un-tracked `Inter` font** on everything | Expressive serif (`Fraunces`) paired with a geometric sans (`Plus Jakarta Sans`) |
| **Icon-stuffed bento box cards** with 3D spheres | Clean asymmetric architecture grids with live interactive previews |
| **Linear CSS transitions** (`transition: all 0.3s ease`) | Physics-based spring animations (`stiffness: 420, damping: 30`) |
| **Lazy code truncation** (`// TODO: add rest of code`) | 100% complete, executable, and tested production code |

---

## 📁 Repository Blueprint

```
vibe-skills/
├── registry.json                            # Machine-readable skill catalog (50 skills)
├── package.json                             # 1-click CLI installer packaging
├── bin/
│   └── vibe-skills.js                      # `npx vibe-skills add <skill>` CLI runner
└── skills/
    ├── taste-engine/
    │   ├── SKILL.md                         # Flagship Taste Engine (77k+ ⭐ Dials)
    │   └── references/                      # 10 UI Framework Reference Playbooks
    │       ├── 1-shadcn-ui.md
    │       ├── 2-framer-motion.md
    │       ├── 3-emil-kowalski-vaul-sonner.md
    │       ├── 4-origin-ui.md
    │       ├── 5-cmdk-search.md
    │       ├── 6-magic-ui-aceternity.md
    │       ├── 7-lenis-smooth-scroll.md
    │       ├── 8-lucide-icons.md
    │       ├── 9-ui-ux-pro-max.md
    │       └── 10-21st-dev-and-cursorrules.md
    ├── shopify-storefront-architect/
    │   └── SKILL.md
    ├── better-auth-rbac/
    │   └── SKILL.md
    ├── expo-react-native-architect/
    │   └── SKILL.md
    ├── cart-checkout-orchestrator/
    │   └── SKILL.md
    ├── instant-product-search-filters/
    │   └── SKILL.md
    ├── supabase-architect/
    │   └── SKILL.md
    ├── stripe-billing-guard/
    │   └── SKILL.md
    └── ... (50 Standard Skills Total)
```

---

## 🤝 Part of The Vibe Coder's Power Suite

1. 🪄 **[`vibe-superkit`](https://github.com/shahrukh-hack/vibe-superkit):** Anti-AI Slop & Stripe/Tailwind UI Design Engine ([Live Demo](https://shahrukh-hack.github.io/vibe-superkit/))
2. 🧠 **[`vibe-memory`](https://github.com/shahrukh-hack/vibe-memory):** Universal Long-Term Memory & Codebase AST Intelligence ([Live Demo](https://shahrukh-hack.github.io/vibe-memory/))
3. ⚡ **[`vibe-skills`](https://github.com/shahrukh-hack/vibe-skills):** Mega-Library of 50 Standard Agent Skills with 1-Command CLI (`npx vibe-skills add <skill>`)
4. 🤖 **[`vibe-agency`](https://github.com/shahrukh-hack/vibe-agency):** Autonomous Multi-Agent Team Orchestrator with 200+ Agents & Vibe Kanban ([Live Demo](https://shahrukh-hack.github.io/vibe-agency/))

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
