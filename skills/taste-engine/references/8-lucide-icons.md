# 8. Lucide Icons Visual Hierarchy Playbook (17k+ ⭐)

> **Core Philosophy**: *Icons are functional semantic anchors, not decorative wallpaper. Every icon must serve a distinct navigational or cognitive purpose.*

---

## 📐 1. The 3 Stroke-Width Hierarchy Rules

Never render all icons with arbitrary sizes or generic black/gray colors. Follow the calibrated 3-tier hierarchy:

| Tier | Size | Stroke Width | Color Token | Context |
| :--- | :---: | :---: | :---: | :--- |
| **Primary Actions** | `18px – 20px` (`w-4.5 h-4.5`) | `2px` | `text-primary` | Main CTAs, active tab headers, hero action buttons. |
| **Secondary Controls** | `14px – 16px` (`w-3.5 h-3.5`) | `1.75px` | `text-foreground` | Input adornments, menu list items, copy triggers. |
| **Tertiary Hints** | `12px – 14px` (`w-3 h-3`) | `1.5px` | `text-muted-foreground` | External link badges, timestamp icons, keyboard shortcuts. |

---

## 🚫 2. Banned Clichés: Icon Overuse & Bento Clutter

* ❌ **Never put random 3D icons inside every bento box**: Icons should never replace actual UI mockups or data previews.
* ❌ **Never mix icon libraries**: Do not mix Heroicons, FontAwesome, and Lucide in the same project. Maintain a uniform 24x24 grid coordinate system.
* ❌ **Always align icons with text baselines**: Use `inline-flex items-center gap-1.5` for perfect optical alignment.
