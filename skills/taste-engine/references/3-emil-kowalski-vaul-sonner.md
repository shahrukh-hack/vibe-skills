# 3. Emil Kowalski Primitives: Vaul & Sonner Playbook (20k+ ⭐)

> **Core Philosophy**: *Tactile feedback, physical resistance, and zero visual friction. Micro-interactions should feel like high-end mechanical hardware.*

---

## 🔘 1. Physical Hardware Button Resistance

Buttons must depress under pressure and push back with spring momentum:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const TactileButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ y: -1.5, transition: SPRING_PRESETS.snappy }}
      whileTap={{ scale: 0.96, y: 1, transition: SPRING_PRESETS.snappy }}
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-tactile-md hover:shadow-tactile-lg active:shadow-tactile-sm transition-shadow"
    >
      {children}
    </motion.button>
  );
};
```

---

## 📱 2. Vaul-Style Physics Bottom-Sheet Drawer

Drawers must have velocity-aware drag dismissals, a tactile drag handle, and smooth backdrop blurs:

```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';
import { X } from 'lucide-react';

export const BottomSheetDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Surface */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={SPRING_PRESETS.tactile}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className="relative z-10 w-full max-w-xl rounded-t-3xl border-t border-border bg-card p-6 shadow-2xl"
          >
            {/* Tactile Drag Handle */}
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-muted-foreground/30" />

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-medium text-foreground">{title}</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
```

---

## 🍞 3. Sonner-Grade Stacked Toast Queues

Toast notifications must stack gracefully, expand on hover, and dismiss with fluid physics without blocking user interactions.
* **Duration**: 4000ms standard.
* **Dismissal**: Drag right / swipe or click close button.
* **Styling**: `1px` subtle border with high-contrast badge icon and clean typographic hierarchy.
