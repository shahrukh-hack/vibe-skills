---
name: zod-schema-sentinel
description: Runtime Type Safety & Zod Schema Validation Skill. Validates environment variables, API payloads, form inputs, and database records with strict TypeScript inference.
tags: [zod, validation, typescript, schemas, runtime-safety]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🛡️ Zod Schema Sentinel Skill

> **Purpose**: Eliminate runtime crashes by enforcing strict schema validation on environment variables, form inputs, and external API responses.

---

## 🔒 1. Environment Variable Validation at Startup

Never run an application with missing API keys:

```ts
// src/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
```

---

## 📋 2. Strict API Payload Validation

```ts
import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).max(100),
  role: z.enum(['admin', 'member', 'viewer']).default('member'),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
```
