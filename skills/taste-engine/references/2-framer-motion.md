# 2. Framer Motion Physics & Layout Morphing (27k+ ⭐)

## 1. Calibrated Spring Presets
```typescript
export const SPRING_PRESETS = {
  snappy: { type: "spring", stiffness: 500, damping: 35, mass: 0.8 },
  tactile: { type: "spring", stiffness: 420, damping: 30, mass: 1 },
  gentle: { type: "spring", stiffness: 300, damping: 28, mass: 1.2 },
  bouncy: { type: "spring", stiffness: 400, damping: 18, mass: 1 },
};
```

## 2. Layout Transitions (`layoutId`)
* Use `layoutId="active-pill"` for tab indicators and navigation underlines to seamlessly animate position shifts across the DOM.
