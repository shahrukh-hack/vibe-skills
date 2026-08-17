---
name: owasp-security-sentinel
description: Automated security auditing skill for detecting OWASP Top 10 vulnerabilities, leaked API keys/secrets, SQL injections, and broken access controls in AI-generated code.
tags: [security, owasp, secrets, auth, auditing, vulnerability]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# OWASP Security Sentinel & Secrets Auditor Skill

## Overview
A critical safety skill designed to audit pull requests and AI-generated source code for security vulnerabilities, unauthorized database exposures, and hardcoded credentials before deploying to production.

## 5 Security Audit Checkpoints

### 1. Secret & Credential Leak Detection
* Audit code for hardcoded API keys, JWT secrets, OAuth tokens, and private keys.
* Flags regex patterns matching:
  - `ghp_[A-Za-z0-9_]{36}` (GitHub Personal Access Tokens)
  - `sk_live_[0-9a-zA-Z]{24}` (Stripe API Keys)
  - `AIza[0-9A-Za-z-_]{35}` (Google API Keys)
  - Raw connection strings: `postgres://user:password@host`
* **Remediation**: Force migration to environment variables (`process.env.VAR` or `.env.local`).

### 2. SQL / NoSQL Injection Prevention
* Ensure all database queries use parameterized prepared statements.
* **Bad**: `db.query(f"SELECT * FROM users WHERE id = '{user_id}'")`
* **Good**: `db.query("SELECT * FROM users WHERE id = ?", (user_id,))`

### 3. Broken Object Level Authorization (BOLA)
* Verify that user IDs in query parameters match the authenticated session:
  ```typescript
  // Verify ownership before modifying entity
  if (record.organizationId !== session.user.organizationId) {
    throw new ForbiddenError("Unauthorized access to tenant record");
  }
  ```

### 4. Cross-Site Scripting (XSS) & InnerHTML Checks
* Flag unescaped `dangerouslySetInnerHTML` in React/Next.js.
* Require DOMPurify sanitization on all raw markup injection.

### 5. CORS & Strict Transport Security
* Verify that CORS headers do not use wildcard `*` with `Access-Control-Allow-Credentials: true`.
* Enforce HTTPS redirect middleware and Content Security Policies (CSP).
