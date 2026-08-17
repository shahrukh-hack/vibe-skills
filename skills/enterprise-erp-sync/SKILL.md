---
name: enterprise-erp-sync
description: Automated ERP Pricing & Inventory Synchronization Protocol. Use when integrating accounting APIs (MYOB, Xero), headless price scrapers, and relational databases with OAuth2 token rotation and rate-limit queuing.
---

# 🏢 Enterprise ERP Sync — Business Automation Protocol Skill

## 🎯 Purpose
Guides agents in building resilient, enterprise-grade data pipelines that bridge web scrapers, relational databases, and Cloud ERP APIs.

## 📐 Architecture Rules:
1. **OAuth2 Token Rotation**: ERP API tokens expire frequently (e.g. 20-min MYOB cycles). Always wrap calls in an automatic refresh token interceptor.
2. **Rate Limit Throttling**: Implement exponential backoff queueing to avoid 429 errors during bulk price updates.
3. **Data Normalization & Audit**: Never push unvalidated prices directly to ERP. Always run through a delta margin analyzer before webhook commit.
