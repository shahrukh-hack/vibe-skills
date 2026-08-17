---
name: instant-product-search-filters
description: Instant E-Commerce Product Search & Faceted Filter Skill. Builds sub-50ms product search with multi-faceted filtering (price range sliders, color/size swatches, category trees, and stock toggles) using Algolia and Meilisearch.
tags: [search, meilisearch, algolia, ecommerce, filters, faceting]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🔍 Instant Product Search & Faceted Filters Skill

> **Purpose**: Implement sub-50ms instant product search with multi-attribute faceted filtering and URL query state synchronization.

---

## 🎛️ 1. Faceted Filtering Architecture (Meilisearch / In-Memory)

```tsx
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Check } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  color: string;
}

export function useProductFilters(products: Product[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesPrice = p.price <= maxPrice;
      const matchesStock = !inStockOnly || p.inStock;
      return matchesQuery && matchesCategory && matchesPrice && matchesStock;
    });
  }, [products, searchQuery, selectedCategory, maxPrice, inStockOnly]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    inStockOnly,
    setInStockOnly,
    filteredProducts,
  };
}
```
