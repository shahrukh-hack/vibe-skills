---
name: tanstack-query-sync
description: TanStack Query & Async State Management Skill. Implements resilient server-state caching, stale-while-revalidate fetching, optimistic mutations, and infinite scroll query pipelines.
tags: [tanstack-query, react-query, cache, async-state, optimistic-ui]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# ⚡ TanStack Query & Server-State Skill

> **Purpose**: Build responsive, cache-first user interfaces with optimistic UI mutations, automatic background refetching, and error rollback guards.

---

## 🔄 Optimistic Mutation Pattern

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodoOnServer,
    // When mutate is called:
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);

      // Optimistically update cache immediately
      queryClient.setQueryData(['todos'], (old: any[]) =>
        old ? old.map((t) => (t.id === newTodo.id ? { ...t, ...newTodo } : t)) : []
      );

      return { previousTodos };
    },
    // Roll back if error occurs:
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    // Always refetch on success or error:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
```
