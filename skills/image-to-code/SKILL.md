---
name: image-to-code
description: Autonomous Image-to-Code Pipeline. Ingests mockups, UI screenshots, or design comps and systematically analyzes spatial layouts, color palettes, typographic hierarchies, and interactive states before generating clean, anti-slop React/Tailwind code.
tags: [design, image-to-code, vision, frontend, react, tailwind]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🖼️ Image-to-Code Pipeline Skill

> **Purpose**: Transform visual screenshots, design mockups, and UI comps into pixel-perfect, accessible, and responsive code with zero generic AI styling.

---

## 🔄 3-Phase Execution Pipeline

When given an image or UI screenshot, execute these 3 phases in order:

### Phase 1: Visual Composition & Spatial Analysis
1. **Grid & Layout Structure**: Identify if the layout uses single-column, 2-column asymmetric, 3-tier bento, or holy grail grid.
2. **Color Matrix Extraction**: Extract primary background canvas (e.g. `#F6F9FC`), heading ink (`#0A2540`), accent blurple (`#635BFF`), and border contrast (`#E3E8EE`).
3. **Typographic Hierarchy**: Identify display serif vs geometric sans vs monospaced kicker tags.
4. **Spacing Units**: Measure padding and margins using the strict 8pt grid scale (`8px`, `16px`, `24px`, `32px`, `64px`).

### Phase 2: Component Breakdown & State Mapping
* Break the visual into atomic Radix/Shadcn primitives (`Header`, `Sidebar`, `Hero`, `CardGrid`, `Modal`).
* Identify interactive states: hover elevation, active button depression (`scale: 0.96`), focus rings, and scroll effects.

### Phase 3: Code Synthesis (100% Executable)
* Output production-grade TypeScript + React + Tailwind CSS code.
* Use `SPRING_PRESETS` for any animated elements.
* Ensure full WCAG AAA contrast compliance.
