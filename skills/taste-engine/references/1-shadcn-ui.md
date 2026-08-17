# 1. Shadcn UI & Radix Primitives Playbook (80k+ ⭐)

> **Core Philosophy**: *Copy-paste ownership over monolithic NPM dependencies. Unstyled, accessible Radix primitives styled with pure Tailwind CSS.*

---

## 🏛️ 1. Architecture & Component Structure

Shadcn UI components are built using Radix UI primitives as headless state machines, combined with `tailwind-merge` and `class-variance-authority` (cva).

### The Universal `cn()` Utility
Never concatenate Tailwind classes with plain template literals. Always merge conflicting classes:

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 📐 2. Class Variance Authority (CVA) Pattern

Define component variants cleanly with strict TypeScript types:

```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-border/80 bg-background hover:bg-muted/60 text-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-muted/60 text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-[11px]',
        lg: 'h-10 rounded-xl px-6 text-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
```

---

## ♿ 3. Accessibility & Keyboard Navigation Contract (WCAG AAA)

1. **Focus Rings**: Never use `outline: none` without providing an accessible `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` alternative.
2. **Keyboard Trap**: Modals and Dialogs must trap `Tab` / `Shift+Tab` cycles and dismiss on `Escape`.
3. **Screen Readers**: Always provide `aria-labelledby`, `aria-describedby`, and `sr-only` descriptions for icon-only action triggers.
4. **Portal Rendering**: Floating elements (`DropdownMenu`, `Tooltip`, `Popover`, `Dialog`) must render into `document.body` via Radix `Portal` to prevent parent `overflow: hidden` clipping.

---

## 🚫 Anti-Patterns & Common AI Mistakes

* ❌ **Hardcoded Hex Values**: Never use `bg-[#6366F1]` inside components. Always use semantic design tokens: `bg-primary`, `text-foreground`, `border-border`.
* ❌ **Monolithic Props Explosion**: Avoid `<Card hasAvatar isHighlighted badgeCount={3} ... />`. Use compound composition:
  ```tsx
  <Card>
    <CardHeader>
      <CardTitle>Title</CardTitle>
      <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>...</CardContent>
    <CardFooter>...</CardFooter>
  </Card>
  ```
* ❌ **Missing `displayName`**: Always declare `.displayName` on `React.forwardRef` components for debugging clarity.
