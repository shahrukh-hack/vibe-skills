---
name: mcp-server-builder
description: Model Context Protocol (MCP) Server Development Skill. Scaffolds production-ready MCP servers in TypeScript and Python, enabling Antigravity, Cursor, and Claude to interface with external databases and tools.
tags: [mcp, model-context-protocol, tools, api, agent, typescript, python]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🔌 MCP Server Builder Skill

> **Purpose**: Build standards-compliant Model Context Protocol (MCP) servers that equip AI coding agents with custom tools, resources, and external API connectors.

---

## 🛠️ TypeScript MCP Server Template (Stdio Transport)

```ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  { name: 'vibe-design-tools', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// 1. Register Available Tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'calculate_contrast',
      description: 'Calculates WCAG AAA contrast ratio between two hex colors',
      inputSchema: {
        type: 'object',
        properties: {
          foreground: { type: 'string' },
          background: { type: 'string' },
        },
        required: ['foreground', 'background'],
      },
    },
  ],
}));

// 2. Handle Tool Invocation
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'calculate_contrast') {
    return {
      content: [{ type: 'text', text: 'Contrast Ratio: 8.4:1 (WCAG AAA Pass)' }],
    };
  }
  throw new Error(`Tool not found: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
```
