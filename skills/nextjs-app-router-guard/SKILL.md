---
name: nextjs-app-router-guard
description: Architectural auditing skill for React 19 & Next.js App Router applications. Prevents server action race conditions, waterfall fetches, unvalidated mutations, and improper cache invalidation.
tags: [nextjs, react19, server-actions, cache, performance, fullstack]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# Next.js App Router & React 19 Guard Skill

## Overview
Provides guidelines, review heuristics, and patterns for building scalable, high-performance applications using the Next.js App Router, React Server Components (RSC), and Server Actions.

## Audit Rules & Patterns

### 1. Server Action Authentication & Validation
* Server actions are public HTTP POST endpoints. Never assume caller is authenticated.
* Every server action MUST validate inputs (e.g. with Zod) and verify session credentials:
  ```typescript
  'use server';

  import { z } from 'zod';
  import { auth } from '@/lib/auth';
  import { revalidatePath } from 'next/cache';

  const ActionSchema = z.object({
    itemId: z.string().uuid(),
    price: z.number().positive(),
  });

  export async function updateItemPriceAction(formData: unknown) {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const parsed = ActionSchema.safeParse(formData);
    if (!parsed.success) throw new Error("Invalid payload");

    await db.items.update({ where: { id: parsed.data.itemId }, data: { price: parsed.data.price } });
    revalidatePath('/dashboard/inventory');
  }
  ```

### 2. Eliminating Waterfall Data Fetching
* Use `Promise.all` or parallel Server Components rather than sequential `await` calls:
  ```typescript
  // Bad (Sequential Waterfall):
  const user = await getUser();
  const orders = await getOrders(user.id);

  // Good (Parallel Execution):
  const [user, catalog] = await Promise.all([getUser(), getCatalog()]);
  ```

### 3. Granular Cache Invalidation (`revalidateTag` vs `revalidatePath`)
* Prefer `revalidateTag('inventory')` for surgical cache updates over blanket page invalidation.
* Avoid passing sensitive server-side environment variables (`process.env.SECRET`) to Client Components.
