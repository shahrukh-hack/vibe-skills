---
name: docker-cloud-deployer
description: Multi-Stage Production Docker & Cloud Deployment Skill. Generates secure, minimal multi-stage Dockerfiles and container configurations for Railway, Fly.io, Vercel, and Cloudflare Pages.
tags: [docker, deployment, cloud, railway, fly-io, vercel, devops]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🐳 Docker & Cloud Deployment Skill

> **Purpose**: Containerize web applications with secure multi-stage builds, non-root user execution, and sub-50MB production images.

---

## ⚡ Production Multi-Stage Dockerfile (Next.js / Node.js)

```dockerfile
# 1. Base Stage
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# 2. Dependencies Stage
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Builder Stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 4. Production Runner Stage
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```
