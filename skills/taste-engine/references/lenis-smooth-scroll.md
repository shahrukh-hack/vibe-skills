# Lenis Smooth Scroll & Momentum Heuristics

## 1. Passive Smooth Scrolling
* Native-safe implementation without blocking hydration or requestAnimationFrame loops:
```typescript
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);
}
```

## 2. Momentum Wheel Acceleration
* For desktop momentum inertia scrolling, configure passive wheel dampening.
