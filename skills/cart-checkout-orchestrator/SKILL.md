---
name: cart-checkout-orchestrator
description: Persistent E-Commerce Shopping Cart & Checkout Orchestration Skill. Manages persistent cross-device shopping carts, slide-over cart drawers, promo code discount engines, and unified Stripe/Apple Pay checkout flows.
tags: [cart, checkout, ecommerce, zustand, stripe, payments, shopping-cart]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🛒 Cart & Checkout Orchestration Skill

> **Purpose**: Build persistent, zero-flicker shopping carts with slide-over drawers, promo code calculations, and instant checkout processing.

---

## ⚡ 1. Persistent Zustand Cart Store (Local Storage Sync)

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalAmount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: quantity <= 0
            ? state.items.filter((i) => i.id !== id)
            : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      clearCart: () => set({ items: [] }),
      totalAmount: () =>
        get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    { name: 'vibe-cart-storage' }
  )
);
```
