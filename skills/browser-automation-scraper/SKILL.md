---
name: browser-automation-scraper
description: Autonomous headless Playwright & Puppeteer browser scraper for dynamic SPAs, price monitoring, screenshot capture, and resilient DOM extraction.
tags: [scraping, playwright, automation, ecommerce, arbitrage, headless]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# Browser Automation & Dynamic Scraper Skill

## Overview
Equips AI agents with structured strategies and code patterns to scrape modern JavaScript-heavy SPAs, bypass client-side hydration delays, extract structured data (prices, catalogs, stock levels), and store outputs into relational databases.

## 4-Phase Scraping Protocol

### 1. Headless Session Initialization
* Configure stealth headers (`User-Agent`, `Accept-Language`, `Sec-Ch-Ua`).
* Set viewport resolution dynamically to prevent bot detection:
  ```python
  from playwright.async_api import async_playwright

  async with async_playwright() as p:
      browser = await p.chromium.launch(headless=True)
      context = await browser.new_context(
          user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          viewport={"width": 1920, "height": 1080}
      )
      page = await context.new_page()
  ```

### 2. Resilient DOM Selection & Hydration Wait
* NEVER rely on brittle CSS classes (e.g. `.css-19akd8`).
* Use semantic attributes or text anchors:
  ```python
  # Wait for price element hydration
  await page.wait_for_selector('div[data-testid="product-price"], span.price', timeout=10000)
  price_text = await page.locator('span.price').first.inner_text()
  ```

### 3. Automated Error Recovery & Exponential Backoff
* When rate-limited (HTTP 429) or Cloudflare challenged:
  1. Exponential backoff delay (2s ➔ 4s ➔ 8s).
  2. Rotate proxy endpoints or session cookies.
  3. Capture debug screenshot to `.agency/logs/debug-scrape.png`.

### 4. Structured SQLite / JSON Export
* Validate numerical prices, currencies, and SKUs before writing:
  ```python
  import sqlite3

  def save_price(sku, retailer, price):
      conn = sqlite3.connect("price_tracker.db")
      cur = conn.cursor()
      cur.execute("""
          INSERT INTO price_logs (sku, retailer, price, logged_at)
          VALUES (?, ?, ?, datetime('now'))
      """, (sku, retailer, price))
      conn.commit()
  ```
