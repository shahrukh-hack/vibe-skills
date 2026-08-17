# 7. Lenis Smooth Inertia Scroll Playbook (13k+ ⭐)

> **Core Philosophy**: *Fluid momentum scrolling without hijacking native browser touch gestures or breaking accessibility.*

---

## 🌊 1. Philosophy of Non-Destructive Inertia

Unlike legacy smooth-scroll libraries that break native browser behavior, **Lenis (by Darkroom Engineering)** synchronizes with the browser's `requestAnimationFrame` loop, normalizing wheel delta across macOS trackpads and Windows mousewheels.

### Standard Setup Pattern:
```ts
import Lenis from 'lenis';

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
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
import { useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function ParallaxHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div style={{ y, opacity }}>
      {/* Hero content synced with smooth inertia scroll */}
    </div>
  );
}
```
