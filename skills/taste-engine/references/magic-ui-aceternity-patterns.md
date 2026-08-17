# Magic UI & Aceternity Visual Patterns Guide

## 1. Radial Mouse-Following Spotlight Cards
* Track cursor coordinates (`e.clientX - rect.left`, `e.clientY - rect.top`) on mouse move.
* Render a subtle radial gradient overlay (`background: radial-gradient(400px circle at Xpx Ypx, rgba(99, 91, 255, 0.12), transparent 80%)`).
* Eliminates the need for heavy canvas shaders or CPU-intensive 3D libraries.

## 2. Moving Border Beams
* Animate a 1px border gradient mask around high-priority CTA cards.

## 3. Seamless Marquee Tickers
* Render double items array with infinite linear CSS translate to avoid stutter on high-refresh displays.

## 4. Kinetic Typography Reveals
* Stagger text reveals word-by-word with subtle translateY and opacity transitions (`staggerChildren: 0.04`).
