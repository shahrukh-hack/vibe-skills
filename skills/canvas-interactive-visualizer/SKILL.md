---
name: canvas-interactive-visualizer
description: Architecture Diagrams & Interactive Canvas Visualizer Skill. Formats complex software architectures, state machines, and API flows into Mermaid, Excalidraw, and SVG diagrams for effortless visual comprehension.
tags: [mermaid, excalidraw, visualizer, architecture, diagrams, canvas]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 📊 Canvas & Architecture Visualizer Skill

> **Purpose**: Generate clear, publication-ready Mermaid diagrams, system flowcharts, and sequence maps that illustrate complex multi-agent and full-stack software architectures.

---

## 📐 Supported Visual Formats

### 1. System Architecture Flow (Mermaid Graph)
```mermaid
graph TD
    Client[Next.js App Router] -->|REST / GraphQL| API[FastAPI / Edge Gateway]
    API -->|AST Token Query| Memory[Vibe Memory AST Engine]
    API -->|RPC Queue| Agents[Vibe Agency Multi-Agent Mesh]
    Agents -->|PostgreSQL Query| DB[(Supabase Database)]
```

### 2. State Machine Transitions
* Visualizes active, idle, error, and recovery states with clear directional arrows and event labels.
