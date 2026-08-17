# 2. Framer Motion & Spring Physics Playbook (27k+ ⭐)

> **Core Philosophy**: *Physics over linear curves. In the real world, physical objects have mass, momentum, and damping. Web interfaces must feel tactile and human.*

---

## ⚡ 1. The Mathematical Spring Constant System

Never use `transition: all 0.3s ease` or standard CSS cubic-bezier curves for interactive micro-animations. Use calibrated spring physics:

```ts
export const SPRING_PRESETS = {
  // Snappy, tactile response for buttons, toggles, and switches
  snappy: { type: 'spring', stiffness: 500, damping: 30, mass: 0.5 },
  
  // Standard tactile curve for cards, drawers, and modal entries
  tactile: { type: 'spring', stiffness: 420, damping: 28, mass: 0.6 },
  
  // Gentle, floating curve for tooltips, toasts, and ambient reveals
  gentle: { type: 'spring', stiffness: 260, damping: 22, mass: 0.8 },
  
  // High-inertia bouncy curve for badges and celebration micro-interactions
  bouncy: { type: 'spring', stiffness: 450, damping: 15, mass: 0.7 },
} as const;
```

---

## 🔄 2. Shared Layout Morphing (`layoutId`)

Use `layoutId` to morph elements seamlessly across different states (e.g., active navigation pills, tab indicator sliders):

```tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';

interface TabItem {
  id: string;
  label: string;
}

export const SlidingPillTabs: React.FC<{ tabs: TabItem[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex items-center gap-1 rounded-xl bg-muted/60 p-1 border border-border/80">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-1.5 text-xs font-medium transition-colors"
          >
            {isActive && (
              <motion.div
                layoutId="active-pill-indicator"
                className="absolute inset-0 rounded-lg bg-card shadow-sm border border-border/60"
                transition={SPRING_PRESETS.snappy}
              />
            )}
            <span className={`relative z-10 ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
```

---

## 🎴 3. Staggered Container & Child Reveal Variants

When revealing lists, cards, or dashboards, stagger entries to create visual rhythm:

```tsx
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_PRESETS.tactile,
  },
};
```

---

## 🚫 Anti-Patterns to Avoid

* ❌ **Janky Layout Shifts**: Avoid animating `width` or `height` directly with CSS. Use Framer Motion's `layout` prop with GPU transform acceleration (`transform: translate3d`).
* ❌ **Over-Animation**: Never animate every single element simultaneously. Animation must guide the user's eye to primary focal points.
* ❌ **Ignoring `prefers-reduced-motion`**: Always support accessibility query `@media (prefers-reduced-motion)` or Framer Motion's `useReducedMotion()`.
