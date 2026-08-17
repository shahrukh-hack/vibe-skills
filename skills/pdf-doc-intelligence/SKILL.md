---
name: pdf-doc-intelligence
description: PDF & Document Extraction Intelligence Skill. Ingests complex PDFs, invoices, financial spreadsheets, and scanned documents, extracting clean tabular data, markdown hierarchies, and structured JSON.
tags: [pdf, document-ai, extraction, invoices, tables, parser]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 📄 PDF & Document Intelligence Skill

> **Purpose**: Extract high-fidelity structured data, markdown tables, and key-value attributes from complex multi-page PDFs, technical whitepapers, and financial statements.

---

## 🛠️ Extraction Heuristics

1. **Table Extraction**: Detect row/column borders and extract data into standard GitHub-flavored markdown tables or JSON matrices.
2. **Key-Value Isolation**: Extract critical entities (Invoice ID, Due Date, Total Amount, Tax Breakdown, Vendor Metadata).
3. **Hierarchy Preservation**: Maintain section titles (`#`, `##`, `###`), footnotes, and bullet hierarchies without text mangling.
