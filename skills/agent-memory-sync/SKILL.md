---
name: agent-memory-sync
description: Universal Long-Term Memory & Cross-Agent Handoff Protocol. Use to recall past architectural decisions, persist bug fix patterns, and generate seamless handoff snapshots between Antigravity, Cursor, Claude Code, and Codex.
---

# 🧠 Agent Memory Sync — Cross-Tool Handoff & Memory Protocol

## 🎯 Purpose
Prevents AI agent context loss across conversation resets and enables seamless handoffs between different AI coding tools.

## 📋 Workflows:
1. **Recall Context**: Reads `AGENT_MEMORY.md` to load past decisions, user preferences, and bug fix history.
2. **Commit Insight**: When discovering an unexpected API constraint or edge case, appends a record under Section 2 (`Bug Discoveries`).
3. **Session Handoff Snapshot**:
   When switching from Antigravity to Cursor or Claude Code, generate the standard snapshot:
   ```markdown
   <!-- AGENT_HANDOFF_SNAPSHOT: SOURCE_AGENT ➔ TARGET_AGENT -->
   # 🔄 Context Handoff (ISO Timestamp)
   ## 🎯 Active Objective
   ## ✅ Accomplished So Far
   ## 🚀 Immediate Next Actions
   <!-- END_AGENT_HANDOFF -->
   ```
