<div align="center">

# ⚡ Vibe Skills (v2.5)
### Mega-Library of 23 Standard Agent Skills & Anti-AI Slop Playbooks

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v2.5.0-635BFF?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Skills Standard](https://img.shields.io/badge/agentskills.io-Compliant-success?style=flat-square)](https://agentskills.io)
[![Skills Count](https://img.shields.io/badge/Total%20Skills-45%20Standard%20Skills-purple?style=flat-square)](skills/)
[![Frameworks Bundled](https://img.shields.io/badge/UI%20Playbooks-10%20High--Star%20Frameworks-635BFF?style=flat-square)](skills/taste-engine/references/)

<br />

> **The definitive skill ecosystem for AI coding agents.**  
> Equips **Antigravity**, **Cursor**, **Claude Code**, **Codex**, and **Windsurf** with 77k+ ⭐ taste dials, 10 UI framework playbooks, 20+ language code reviews, OWASP security sentinels, AST memory optimizers, and autonomous Playwright web scrapers.

</div>

---

## 📑 Table of Contents

- [⚡ 1-Command CLI Installation](#-1-command-cli-installation)
- [🎛️ The 1–10 Taste Dials (Leonxlnx Architecture)](#️-the-110-taste-dials-leonxlnx-architecture)
- [🎨 10 Bundled UI/UX Framework Playbooks](#-10-bundled-uiux-framework-playbooks)
- [📦 Complete Roster of 23 Standard Skills](#-complete-roster-of-23-standard-skills)
- [🤖 Real-World Usage & Prompt Templates](#-real-world-usage--prompt-templates)
- [🚫 Anti-AI Slop Heuristic Matrix](#-anti-ai-slop-heuristic-matrix)
- [📁 Repository Blueprint](#-repository-blueprint)
- [🤝 Part of The Vibe Coder's Power Suite](#-part-of-the-vibe-coders-power-suite)
- [👤 Author & License](#-author)

---

## ⚡ 1-Command CLI Installation

Install any skill directly into your workspace's `.antigravity/skills/` or `.cursor/skills/` directory with zero manual configuration:

```bash
# 1. List all 23 available skills
npx vibe-skills list

# 2. Install the flagship Taste Engine (Includes all 10 UI playbooks & dials)
npx vibe-skills add taste-engine

# 3. Install other enterprise skills
npx vibe-skills add code-review
npx vibe-skills add browser-automation-scraper
npx vibe-skills add owasp-security-sentinel
npx vibe-skills add nextjs-app-router-guard
npx vibe-skills add database-migration-verifier
```

*(Alternatively, you can use the universal [agentskills.io](https://agentskills.io) standard: `npx skills add https://github.com/shahrukh-hack/vibe-skills --skill taste-engine`)*

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
* **`9 – 10` (Avant-Garde & Experimental):** Dynamic viewport morphing, non-traditional typography scales, interactive full-screen canvas experiences.

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
| **[`1-shadcn-ui.md`](skills/taste-engine/references/1-shadcn-ui.md)** | **Shadcn UI** | **80k+ ⭐** | Accessible compound Radix primitives, keyboard focus rings, and `cn()` utility conventions. |
| **[`2-framer-motion.md`](skills/taste-engine/references/2-framer-motion.md)** | **Framer Motion** | **27k+ ⭐** | 420Hz spring physics constants (`stiffness: 420, damping: 30`) and `layoutId` layout morphing. |
| **[`3-emil-kowalski-vaul-sonner.md`](skills/taste-engine/references/3-emil-kowalski-vaul-sonner.md)** | **Vaul & Sonner** | **20k+ ⭐** | Bottom-sheet drawers, stacked physics toast queues, and tactile press-down states (`scale: 0.96`). |
| **[`4-origin-ui.md`](skills/taste-engine/references/4-origin-ui.md)** | **Origin UI** | **5k+ ⭐** | Precision input adornments, shortcut search inputs, and sliding segmented pill controls. |
| **[`5-cmdk-search.md`](skills/taste-engine/references/5-cmdk-search.md)** | **cmdk** | **12k+ ⭐** | Fast in-memory `⌘K` command palette traversal and instant keyboard filtering. |
| **[`6-magic-ui-aceternity.md`](skills/taste-engine/references/6-magic-ui-aceternity.md)** | **Aceternity & Magic UI** | **40k+ ⭐** | Mouse-following radial spotlight cards, moving border beams, and infinite marquees. |
| **[`7-lenis-smooth-scroll.md`](skills/taste-engine/references/7-lenis-smooth-scroll.md)** | **Lenis** | **13k+ ⭐** | Inertia momentum smooth scroll heuristics and high-performance passive rendering. |
| **[`8-lucide-icons.md`](skills/taste-engine/references/8-lucide-icons.md)** | **Lucide Icons** | **17k+ ⭐** | 24x24 SVG stroke-width standards and visual hierarchy rules. |
| **[`9-ui-ux-pro-max.md`](skills/taste-engine/references/9-ui-ux-pro-max.md)** | **UI UX Pro Max** | **5k+ ⭐** | 8pt spatial grid, modular typographic scales (1.250 Major Third), and WCAG AAA contrast math. |
| **[`10-21st-dev-and-cursorrules.md`](skills/taste-engine/references/10-21st-dev-and-cursorrules.md)** | **21st.dev & Cursorrules** | **30k+ ⭐** | Open copy-paste component architecture and universal anti-AI slop guardrails. |

---

## 📦 Complete Roster of 23 Standard Skills

| Skill ID | Category | Description & Capabilities |
| :--- | :---: | :--- |
| **`taste-engine`** 🪄 | **Design & UI** | Flagship anti-slop design engine combining 77k+ ⭐ dials and 10 UI framework playbooks. |
| **`browser-automation-scraper`** 🕷️ | **Automation** | Autonomous headless Playwright & Puppeteer scraper for SPAs, competitor price tracking, and DOM extraction. |
| **`owasp-security-sentinel`** 🛡️ | **Security & QA** | Automated scanner for leaked API secrets (`ghp_`, `sk_live_`), SQL injections, and broken object authorization. |
| **`nextjs-app-router-guard`** ⚡ | **Fullstack** | React 19 Server Action validator, cache invalidation auditor, and waterfall bottleneck remover. |
| **`database-migration-verifier`** 🗄️ | **DevOps & DB** | Zero-downtime expand-and-contract schema migration checker for PostgreSQL and SQLite. |
| **`ui-ux-pro-max`** 🎨 | **Design & UI** | 8pt spatial grid, modular typographic scales (1.250 Major Third), and WCAG AAA contrast mathematics. |
| **`code-review`** 🛡️ | **Engineering** | 4-phase structured code reviews across 20+ languages with 30+ dedicated reference guides. |
| **`ast-token-optimizer`** 🧠 | **Memory & AST** | AST symbol tree queries reducing LLM token consumption by 97% vs raw file dumps. |
| **`agent-memory-sync`** 🔄 | **Memory & AST** | Seamless cross-agent handoff contracts between Antigravity, Cursor, and Claude Code. |
| **`enterprise-erp-sync`** 💼 | **Operations** | MYOB Cloud ERP REST API sync pipeline with automated OAuth2 token rotation. |
| **`agency-messaging`** 📬 | **Agency** | Standard JSON-RPC inter-agent message queuing and inbox routing protocol. |
| **`task-management`** 📋 | **Agency** | Autonomous task prioritization, queue assignment, and state machine transitions. |
| **`agencycli-usage`** 💻 | **Agency** | Autonomous command invocation guidelines for multi-agent teams. |
| **`clarify-confirm-continue`** 🤝 | **Productivity** | 3-phase alignment protocol to eliminate AI assumptions before modifying critical code. |
| **`anti-slop-pr-audit`** 🧹 | **Review** | Static pull request auditor that catches generic AI code bloat and boilerplate. |
| **`github-pr-triage`** 🏷️ | **Productivity** | Automated GitHub PR triage, semantic categorization, and changelog generation. |
| **`pr-loop`** 🔁 | **Productivity** | Continuous automated PR refinement and test runner execution loop. |
| **`deslop-duplication-audit`** ✂️ | **Review** | AST audit tool detecting duplicate utility functions across large codebases. |
| **`distilling-strategies-interactively`** 💡 | **Productivity** | Interactive requirement clarification protocol for complex refactors. |
| **`sidequest`** 🌿 | **Productivity** | Isolated branching for exploratory side features without polluting main branch. |
| **`new-worktree`** 🌳 | **Productivity** | Git worktree isolation manager for concurrent parallel agent tasks. |
| **`sem-semantic-diff`** 🔍 | **Review** | AST-aware semantic diff viewer for clean, distraction-free code reviews. |
| **`quick-question`** ❓ | **Productivity** | Fast context lookup for lightweight inquiries without bloating agent history. |

---

## 🤖 Real-World Usage & Prompt Templates

Copy and paste these prompts into **Antigravity**, **Cursor**, **Claude Code**, or **Windsurf**:

### 🌟 1. Landing Page with Stripe Taste Standards
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

### 📊 2. High-Density Telemetry Dashboard
```markdown
"Build a server telemetry console using the taste-engine skill.
Dials:
- DESIGN_VARIANCE = 4
- MOTION_INTENSITY = 5
- VISUAL_DENSITY = 9

Include:
- ⌘K search command palette
- Hardware-grade animated SVG circular progress gauges for CPU / Memory
- Clean tabular view with monospace font and subtle 1px dividers"
```

---

### 🕷️ 3. Autonomous Web Scraper Pipeline
```markdown
"Extract the latest GPU pricing from the target e-commerce store using the browser-automation-scraper skill.
Execute:
- Launch headless Playwright with stealth user-agent headers
- Wait for client-side hydration and extract product titles, prices, and stock status
- Format output as clean JSON and export to SQLite"
```

---

### 🛡️ 4. OWASP Secret & Security Audit
```markdown
"Run a comprehensive security audit on this repository using the owasp-security-sentinel skill.
Check for:
- Leaked API keys (ghp_, sk_live_, AWS credentials)
- SQL injection vulnerabilities in raw database queries
- Broken access controls or unauthenticated public endpoints"
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
├── registry.json                            # Machine-readable skill catalog
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
    ├── browser-automation-scraper/
    │   └── SKILL.md
    ├── owasp-security-sentinel/
    │   └── SKILL.md
    ├── nextjs-app-router-guard/
    │   └── SKILL.md
    ├── database-migration-verifier/
    │   └── SKILL.md
    └── code-review/
        ├── SKILL.md
        └── reference/                       # 30+ deep language heuristics (Go, Rust, Python, etc.)
```

---

## 🤝 Part of The Vibe Coder's Power Suite

1. 🪄 **[`vibe-superkit`](https://github.com/shahrukh-hack/vibe-superkit):** Anti-AI Slop & Stripe/Tailwind UI Design Engine ([Live Demo](https://shahrukh-hack.github.io/vibe-superkit/))
2. 🧠 **[`vibe-memory`](https://github.com/shahrukh-hack/vibe-memory):** Universal Long-Term Memory & Codebase AST Intelligence ([Live Demo](https://shahrukh-hack.github.io/vibe-memory/))
3. ⚡ **[`vibe-skills`](https://github.com/shahrukh-hack/vibe-skills):** Mega-Library of 23 Standard Agent Skills with 1-Command CLI (`npx vibe-skills add <skill>`)
4. 🤖 **[`vibe-agency`](https://github.com/shahrukh-hack/vibe-agency):** Autonomous Multi-Agent Team Orchestrator with 200+ Agents & Vibe Kanban ([Live Demo](https://shahrukh-hack.github.io/vibe-agency/))

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
