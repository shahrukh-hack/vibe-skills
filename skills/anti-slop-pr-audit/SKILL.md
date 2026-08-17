---
name: anti-slop-pr-audit
description: Autonomous Code Review & Anti-Slop PR Auditor. Use when performing pull request reviews, refactoring sessions, or quality audits to catch AI code duplication, unhandled null states, and design slop before merging.
---

# 🛡️ Anti-Slop PR Audit — Autonomous Code Quality Review Skill

## 🎯 Purpose
Performs deep automated code reviews to catch AI-generated boilerplate, fragile assumptions, and design regressions.

## 🔍 Checklist Items:
1. **Design Slop Audit**: Check for hardcoded purple gradients, over-nested cards, and un-tracked typography.
2. **Duplication Audit**: Detect copy-pasted helper functions and consolidate into modular utilities.
3. **Null & Error Safety**: Verify all event listeners, API responses, and array mappings have proper null guards.
4. **Encoding & Cleanliness**: Ensure all files use clean UTF-8 without mojibake artifacts.
