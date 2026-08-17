---
name: ui-ux-pro-max
description: Agency-Grade UI/UX Design Intelligence Database. Covers mathematical 8pt spatial grids, 1.250 modular typographic scales, 60-30-10 color distribution, WCAG AAA contrast mathematics, and 48x48px touch targets.
tags: [ui-ux, design-intelligence, accessibility, wcag-aaa, typography, spatial-grid, design-system]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🌟 UI UX Pro Max — Agency-Grade Design Intelligence Skill

> **Core Philosophy**: *Mathematical rigor over arbitrary guesswork. Equips AI coding agents with the systematic design intuition of a Principal Design Engineer and Product Architect.*

---

## 📐 1. The Strict 8pt Spatial Layout Grid & 4pt Half-Grid

All padding, margins, line-heights, and component dimensions must strictly align with 8pt/4pt mathematical multiples:

| Spatial Token | Value | Tailwind Class | Primary Use Case |
| :--- | :---: | :---: | :--- |
| **`space-1`** | `4px` | `p-1 / gap-1` | Micro-spacing, icon-to-badge gaps, tag borders |
| **`space-2`** | `8px` | `p-2 / gap-2` | Icon-to-text gaps, badge padding, compact list items |
| **`space-3`** | `12px` | `p-3 / gap-3` | Dropdown menu items, toast internal padding |
| **`space-4`** | `16px` | `p-4 / gap-4` | Standard card interior padding, input field padding |
| **`space-6`** | `24px` | `p-6 / gap-6` | Sibling card gaps in grid layouts, modal interior padding |
| **`space-8`** | `32px` | `p-8 / gap-8` | Section header to content grid spacing |
| **`space-12`** | `48px` | `py-12` | Mobile section top/bottom padding |
| **`space-16`** | `64px` | `py-16` | Standard desktop section padding |
| **`space-24`** | `96px` | `py-24` | Hero section top/bottom breathing room |

---

## 🔠 2. Modular Typographic Scale (1.250 Major Third)

Never pick arbitrary font sizes. Use the geometric Major Third scale for unmistakable visual hierarchy:

| Typographic Level | Font Size | Line Height | Tracking | Weight | Target Element |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Display Hero** | `48px – 64px` | `1.1` | `-0.035em` | `300 / 600` | Main Hero H1 (Fraunces Serif) |
| **Section Title** | `32px – 36px` | `1.2` | `-0.025em` | `600 / 700` | Major Section H2 Header |
| **Card Title** | `20px – 24px` | `1.3` | `-0.02em` | `600` | Feature / Product Title H3 |
| **Body Large** | `16px` | `1.5` | `-0.01em` | `400` | Lead paragraph copy |
| **Body Regular** | `14px` | `1.5` | `0em` | `400` | Standard paragraph, table data, inputs |
| **Caption / Mono** | `11px – 12px` | `1.4` | `+0.05em` | `500 / 600` | Kicker tags, code blocks, timestamps |

---

## 🎨 3. The 60-30-10 Color Balance Rule

* **60% Dominant Canvas**: Soft slate `#F6F9FC` (light mode) or deep navy `#0A0F1D` (dark mode).
* **30% Structural Secondary**: Crisp elevated white cards `#FFFFFF` with 1px border `#E3E8EE`, deep navy headings `#0A2540`.
* **10% High-Impact Accent**: Signature blurple/indigo `#635BFF` reserved strictly for primary CTAs, active indicators, and focus rings.

---

## 🔬 4. Mathematical WCAG AAA Accessibility Contract

1. **Contrast Ratio Formula**:
   $$\text{Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$
   * **Normal Text (`< 18pt`)**: Must exceed **7.0:1** contrast ratio.
   * **Large Text (`>= 18pt`)**: Must exceed **4.5:1** contrast ratio.
   * **Interactive Controls & Borders**: Must exceed **3.0:1** contrast ratio against adjacent canvas.
2. **Touch Targets (Mobile & Tablet)**:
   * All clickable buttons, switches, and icon links must have a minimum hitbox of **48x48px** (`min-h-[48px] min-w-[48px]` or padding expansion).
3. **Focus Visible Contract**:
   * Never suppress focus rings. Always provide `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

---

## ⚡ 5. Complete Component Interaction State Machine

Every interactive element must implement all 6 discrete lifecycle states:
1. **Idle**: Pristine resting surface with subtle border.
2. **Hover**: 1.5px elevation lift (`y: -1.5px`), border highlight, cursor pointer.
3. **Active / Pressed**: Tactile depression (`scale: 0.96`), ambient shadow contraction.
4. **Focus-Visible**: High-contrast 2px ring offset for keyboard navigation.
5. **Loading / Pending**: Disabled pointer events with animated spinner or skeleton shimmer.
6. **Disabled**: Reduced opacity (`opacity-50`), `cursor-not-allowed`, zero hover/active reactions.
