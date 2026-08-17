---
name: ast-token-optimizer
description: 97% Context Token Optimizer & AST Symbol Lookup. Use when exploring large codebases to query functions, call graphs, and type definitions without dumping full source files into LLM context.
---

# ⚡ AST Token Optimizer — Codebase Knowledge Graph Skill

## 🎯 Purpose
Prevents burning 15,000+ tokens reading raw code files by querying symbol-level AST nodes and component dependencies.

## 🛠️ Operating Instructions:
1. **Targeted Symbol Lookup**: Instead of reading full files, query function signatures, export maps, and interfaces.
2. **Call Graph Navigation**: Inspect caller/callee trees to verify state flows.
3. **Context Optimization**: Keep prompt payloads under 200 tokens per symbol instead of 5,000 tokens per file.
