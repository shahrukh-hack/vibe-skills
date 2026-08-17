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

```tsx
import React from 'react';

export const InfiniteMarquee: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden border-y border-border/60 py-3 bg-muted/20">
      {/* Left/Right Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-3"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </div>
  );
};
```

---

## 🌟 3. Moving Border Beam Glow

Animate an SVG path offset along the card perimeter to highlight key enterprise pricing cards.
