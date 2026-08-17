# 21st.dev Component Architecture & Awesome Cursorrules

## 1. 21st.dev Copy-Paste Registry Standards
* Components must be 100% self-contained.
* Dependencies must be clearly declared (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).
* Clean generic props (`interface Props { ... }`) with safe fallback defaults.

## 2. Universal Agent Cursorrules
* Strictly forbid:
  - Neon purple gradients on dark backgrounds
  - Pulsing badge pills above headers
  - Gradient keywords in headlines
  - Over-nested cards (3+ levels)
* Enforce:
  - Stripe Enterprise color palettes (`#F6F9FC`, `#635BFF`, `#0A2540`)
  - Emil Kowalski spring physics (`stiffness: 420, damping: 30`)
  - 8pt spatial padding
