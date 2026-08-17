# 3. Emil Kowalski Primitives: Vaul & Sonner Playbook (20k+ ⭐)

> **Core Philosophy**: *Tactile feedback, physical resistance, velocity awareness, and zero visual friction. Micro-interactions should feel like high-end mechanical hardware.*

---

## 🔘 1. Physical Hardware Button Resistance

Buttons must depress under pressure and push back with spring momentum:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const TactileButton: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  onClick?: () => void;
}> = ({ children, variant = 'primary', onClick }) => {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
    outline: 'border border-border/80 bg-card hover:bg-muted/60 text-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  };

  return (
    <motion.button
      whileHover={{ y: -1.5, transition: SPRING_PRESETS.snappy }}
      whileTap={{ scale: 0.96, y: 1, transition: SPRING_PRESETS.snappy }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold cursor-pointer transition-colors ${variantStyles[variant]}`}
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
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';
import { X } from 'lucide-react';

export const BottomSheetDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, description, children }) => {
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Surface with Drag Physics */}
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
            className="relative z-10 w-full max-w-xl rounded-t-3xl border-t border-border bg-card p-6 shadow-2xl space-y-4"
          >
            {/* Tactile Drag Handle */}
            <div className="mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30" />

            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">{title}</h3>
                {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
```

---

## 🍞 3. Sonner-Grade Native Toast Notification Dispatcher

Toast notifications must stack gracefully, expand on hover, and dismiss with fluid physics without blocking user interactions:

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface ToastItem {
  id: string;
  type: 'success' | 'alert';
  title: string;
  description: string;
}

const toastListeners = new Set<(toast: ToastItem) => void>();

export const toast = {
  success: (title: string, description?: string) => {
    const item: ToastItem = {
      id: Math.random().toString(36).substring(2, 9),
      type: 'success',
      title,
      description: description || 'Operation completed with high-taste standards.',
    };
    toastListeners.forEach((fn) => fn(item));
  },
  info: (title: string, description?: string) => {
    const item: ToastItem = {
      id: Math.random().toString(36).substring(2, 9),
      type: 'alert',
      title,
      description: description || 'Notice applied.',
    };
    toastListeners.forEach((fn) => fn(item));
  },
};

export const TasteToaster: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const addToast = (t: ToastItem) => {
      setToasts((prev) => [...prev.slice(-3), t]); // Keep last 4 toasts
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== t.id));
      }, 4000);
    };

    toastListeners.add(addToast);
    return () => {
      toastListeners.delete(addToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={SPRING_PRESETS.tactile}
            className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl text-card-foreground"
          >
            <div className="p-2 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0">
              {t.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-foreground leading-tight">{t.title}</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{t.description}</p>
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
```
