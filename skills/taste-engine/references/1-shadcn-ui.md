# 1. Shadcn UI & Radix Primitives Heuristic Guide (80k+ ⭐)

## 1. Composition Over Monolithic Props
* Use compound Radix primitives (`Dialog`, `DropdownMenu`, `Tooltip`, `Popover`) with flexible slots.
* Encapsulate styling via Tailwind CSS classes instead of CSS-in-JS.

## 2. Accessible Keyboard & Screen Reader Contract (WCAG AAA)
* Modals must trap keyboard focus (`Tab` / `Shift+Tab`) and close on `Escape`.
* Provide descriptive `aria-labelledby` and `aria-describedby` announcements.

## 3. Class Variance Authority & `cn()` Merge
* Always combine conditional classes using `cn(...)` wrapping `clsx` and `tailwind-merge`.
