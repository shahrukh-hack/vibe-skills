# 7. Lenis Smooth Inertia Scroll Playbook (13k+ ⭐)

> **Core Philosophy**: *Fluid momentum scrolling without hijacking native browser touch gestures or breaking accessibility.*

---

## 🌊 1. Philosophy of Non-Destructive Inertia

Unlike legacy smooth-scroll libraries that break native browser behavior, **Lenis (by Darkroom Engineering)** synchronizes with the browser's `requestAnimationFrame` loop, normalizing wheel delta across macOS trackpads and Windows mousewheels.

### Standard Setup Pattern:
```ts
import Lenis from 'lenis';

export function initSmoothScroll(): Lenis {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration formula
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 2.0,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}
```

---

## ⚡ 2. Integration with Framer Motion `useScroll`

Bind Lenis scroll progress directly to Framer Motion values for parallax reveals and sticky headers:

```tsx
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ParallaxHero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.div style={{ y, opacity }} className="relative z-10 text-center py-24 space-y-4">
      <h1 className="font-serif text-5xl font-light text-foreground tracking-tight">
        Next-Generation Design Engineering
      </h1>
      <p className="text-sm text-muted-foreground max-w-xl mx-auto">
        Synchronized inertia scrolling with zero frame drops and accessible reduced-motion support.
      </p>
    </motion.div>
  );
};
```
