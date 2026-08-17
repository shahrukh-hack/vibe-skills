# 4. Origin UI Input Adornments & Form Controls Playbook (5k+ ⭐)

> **Core Philosophy**: *Inputs are the primary interaction surface of enterprise web applications. Elevate form controls with semantic icon adornments, inline action triggers, and tactile states.*

---

## 🔍 1. Precision Input with Semantic Adornments

Never render naked inputs with basic gray borders. Enrich inputs with left icon context and right interactive triggers:

```tsx
import React, { useState } from 'react';
import { Search, X, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AdornedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  onClear?: () => void;
}

export const AdornedInput: React.FC<AdornedInputProps> = ({
  label,
  hint,
  value,
  onChange,
  onClear,
  className,
  ...props
}) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="text-xs font-semibold text-foreground tracking-tight block">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {/* Left Semantic Icon */}
        <div className="absolute left-3 text-muted-foreground pointer-events-none">
          <Search className="w-4 h-4" />
        </div>

        {/* Core Input Field */}
        <input
          value={value}
          onChange={onChange}
          className={cn(
            'w-full h-10 pl-9 pr-10 rounded-xl border border-border/80 bg-background text-foreground text-xs placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none',
            className
          )}
          {...props}
        />

        {/* Right Interactive Action (Clear / Copy) */}
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
};
```

---

## 🎛️ 2. Sliding Segmented Controls

Use sliding segmented pills for status filters, billing frequencies, and theme switchers:
* Use Framer Motion's `layoutId` on the active pill background for hardware-smooth sliding.
* Include keyboard arrow key navigation (`ArrowLeft` / `ArrowRight`).

---

## 📂 3. Spring Accordions with Icon Rotation

Disclosures and FAQ accordions must have smooth height expansion (`framer-motion`) and an animated 180° chevron rotation with spring damping.
