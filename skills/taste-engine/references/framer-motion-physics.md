# Framer Motion & Emil Kowalski Spring Physics Guide

## 1. The 4 Calibrated Spring Presets
Never use mechanical `transition: all 0.3s ease` in interactive UI. Use spring dynamics:

```typescript
export const SPRING_PRESETS = {
  // Snappy / Micro-interactions (Buttons, Toggles, Checkboxes)
  snappy: {
    type: "spring",
    stiffness: 500,
    damping: 35,
    mass: 0.8,
  },
  
  // Tactile / Standard Interactive (Cards, Modals, Dropdowns)
  tactile: {
    type: "spring",
    stiffness: 420,
    damping: 30,
    mass: 1,
  },
  
  // Gentle / Page Transitions & Sheet Drawers
  gentle: {
    type: "spring",
    stiffness: 300,
    damping: 28,
    mass: 1.2,
  },
  
  // Bouncy / Playful Feedback
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 18,
    mass: 1,
  },
};
```

## 2. Tactile Press States
Simulate physical button depression on mobile and desktop:
```tsx
<motion.button
  whileHover={{ scale: 1.02, y: -1 }}
  whileTap={{ scale: 0.96 }}
  transition={SPRING_PRESETS.snappy}
  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold"
>
  {children}
</motion.button>
```

## 3. Shared Layout Morphing (`layoutId`)
Use `layoutId` on tab pills, segmented switches, and active indicators so they fluidly glide between items without layout jumps.
