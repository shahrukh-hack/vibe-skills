# 4. Origin UI Input Adornments & Form Controls Playbook (5k+ ⭐)

> **Core Philosophy**: *Inputs are the primary interaction surface of modern SaaS. Elevate form controls with semantic adornments, inline action triggers, character counters, and password reveal states.*

---

## 🔍 1. Precision Form Input with Adornments

Never render naked inputs with generic gray borders. Enrich inputs with left context icons and right interactive clear/copy triggers:

```tsx
import React from 'react';
import { Search, X } from 'lucide-react';
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
            className="absolute right-2.5 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
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

## 👁️ 2. Password Input with Interactive Visibility Toggle

```tsx
import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

export const PasswordInput: React.FC<{
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}> = ({ label = 'Password', value, onChange, placeholder = 'Enter secret password...' }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5 w-full">
      <label className="text-xs font-semibold text-foreground tracking-tight block">
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-3 text-muted-foreground pointer-events-none">
          <Lock className="w-4 h-4" />
        </div>

        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-10 pl-9 pr-10 rounded-xl border border-border/80 bg-background text-foreground text-xs placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2.5 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
        >
          {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
```

---

## 🎛️ 3. Sliding Segmented Switch Controls

Use sliding segmented pills for status filters, billing frequencies, and theme switchers with Framer Motion `layoutId` physics and keyboard arrow support.
