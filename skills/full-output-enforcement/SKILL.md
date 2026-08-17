---
name: full-output-enforcement
description: Anti-Truncation & Full-Output Enforcement Skill. Overrides default AI token economization habits, strictly prohibiting lazy placeholders, partial snippets, or truncated code comments.
tags: [output, complete-code, anti-truncation, developer-experience]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 📜 Full-Output Enforcement Skill

> **Purpose**: Guarantee that AI coding agents output 100% complete, fully implemented, and production-ready source code with zero lazy placeholders.

---

## 🚫 Banned AI Truncation Habits (Zero Tolerance)

1. ❌ **No Placeholder Comments**:
   * Banned: `// ... rest of the component remains the same`
   * Banned: `/* implement other methods here */`
   * Banned: `// TODO: add remaining fields`
2. ❌ **No Truncated Imports**: All imports must be explicitly written out with proper paths.
3. ❌ **No Omitted Types**: All TypeScript props and return types must be fully defined.

---

## ✅ Enforced Output Contract

* **Exhaustive Code**: Every file generated or modified must be completely written from line 1 to the final export.
* **Drop-in Replaceable**: The user or agent can copy the entire output directly into their file without manual stitching.
