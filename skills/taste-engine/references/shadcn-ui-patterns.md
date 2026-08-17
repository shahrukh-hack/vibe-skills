# Shadcn UI & Radix Primitives Heuristic Guide

## 1. Composition Over Configuration
* Never use complex monolithic wrapper components with 50 props.
* Use compound Radix primitives with flexible slots:
  ```tsx
  import * as Dialog from '@radix-ui/react-dialog';
  import { cn } from '@/lib/utils';

  export const Modal = ({ open, onOpenChange, children }) => (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-lg">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
  ```

## 2. Accessible Keyboard & Screen Reader Contract (WCAG AAA)
* Every interactive element MUST support `Tab`, `Shift+Tab`, `Space`, `Enter`, and `Escape`.
* Modals must trap focus while open and restore focus to trigger element upon dismissal.
* Use `aria-describedby` and `aria-labelledby` for accessible dialog announcements.

## 3. Tailwind Merge & Class Variance Authority
* Always combine conditional classes using `cn(...)` (wrapping `clsx` and `tailwind-merge`):
  ```typescript
  import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
