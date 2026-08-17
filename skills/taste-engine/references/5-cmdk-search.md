# 5. cmdk Fast Command Palettes Playbook (12k+ ⭐)

> **Core Philosophy**: *Keyboard-first navigation for power users. Instant in-memory filtering with zero latency.*

---

## ⌨️ 1. Architecture of `cmdk`

A command palette (`⌘K` or `Ctrl+K`) allows users to search pages, trigger actions, and execute agent tasks without touching the mouse:

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const CommandPaletteModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Global ⌘K Key Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { title: 'Deploy Taste Engine', category: 'Skills', icon: <Sparkles className="w-4 h-4 text-primary" /> },
    { title: 'Run OWASP Security Audit', category: 'Security', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
    { title: 'Open AST Symbol Tree', category: 'Memory', icon: <Terminal className="w-4 h-4 text-indigo-500" /> },
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={SPRING_PRESETS.snappy}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 border-b border-border/80">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Type a command or search skills (e.g. taste-engine)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-12 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <span className="text-[10px] font-mono rounded bg-muted px-1.5 py-0.5 text-muted-foreground">ESC</span>
            </div>

            <div className="p-2 max-h-72 overflow-y-auto space-y-1">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">{item.category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
```
