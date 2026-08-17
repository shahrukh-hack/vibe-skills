---
name: better-auth-rbac
description: Modern Type-Safe Authentication & Multi-Tenant RBAC Skill. Scaffolds Better Auth and Auth.js with Passkeys/WebAuthn, OAuth2 (Google/GitHub), Magic Links, 2FA, session cookies, and organization role-based access control (RBAC).
tags: [auth, better-auth, passkeys, oauth, rbac, multi-tenancy, security]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🔐 Better Auth & Multi-Tenant RBAC Skill

> **Purpose**: Implement modern, lightweight, type-safe authentication with Passkeys, social logins, and multi-tenant organization access controls.

---

## ⚡ 1. Better Auth Server Setup (Next.js / Node)

```ts
// src/lib/auth.ts
import { betterAuth } from 'better-auth';
import { passkey } from 'better-auth/plugins/passkey';
import { organization } from 'better-auth/plugins/organization';
import { twoFactor } from 'better-auth/plugins/two-factor';
import { Pool } from 'pg';

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL!,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [
    passkey(),
    twoFactor(),
    organization({
      allowUserToCreateOrganization: true,
    }),
  ],
});
```

---

## 🛡️ 2. Client-Side Auth Hook & Session State

```tsx
// src/components/UserProfile.tsx
'use client';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();

export function UserProfile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="animate-pulse h-8 w-24 bg-muted rounded" />;
  if (!session) {
    return (
      <button
        onClick={() => authClient.signIn.social({ provider: 'github' })}
        className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-semibold"
      >
        Sign in with GitHub
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-foreground">{session.user.name}</span>
      <button
        onClick={() => authClient.signOut()}
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        Sign Out
      </button>
    </div>
  );
}
```
