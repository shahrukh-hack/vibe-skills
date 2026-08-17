# 6. Aceternity UI & Magic UI Playbook (40k+ ⭐)

> **Core Philosophy**: *Dynamic light and cursor interactivity. Illumination that follows user focus without heavy three.js WebGL dependencies.*

---

## ✨ 1. GPU-Accelerated Mouse Spotlight Card

Tracks cursor coordinates inside the card container and paints a radial gradient light beam across the border and background:

```tsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const SpotlightCard: React.FC<{
  title: string;
  description: string;
  badge?: string;
}> = ({ title, description, badge }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-sm overflow-hidden"
    >
      {/* Radial Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10 space-y-3">
        {badge && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
            {badge}
          </span>
        )}
        <h3 className="font-serif text-xl font-medium text-foreground tracking-tight">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
```

---

## 🔁 2. Seamless Infinite Marquee Ribbon

Use CSS transforms with hardware GPU acceleration to render infinite partner badges or metric counters:

```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```
