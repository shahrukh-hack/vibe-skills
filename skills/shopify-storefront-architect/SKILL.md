---
name: shopify-storefront-architect
description: Shopify Storefront GraphQL & Headless Architecture Skill. Scaffolds high-speed custom storefronts using Shopify Storefront API, optimistic cart lines, buyer identity passes, and checkout redirects.
tags: [shopify, storefront-api, graphql, ecommerce, headless, hydrogen]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🛍️ Shopify Storefront & Headless Architecture Skill

> **Purpose**: Build blazing-fast custom headless e-commerce storefronts powered by Shopify's GraphQL Storefront API.

---

## ⚡ 1. GraphQL Storefront Client & Cart Mutation

```ts
// src/lib/shopify.ts
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<T> {
  const res = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await res.json();
  if (errors) throw new Error(errors[0].message);
  return data;
}

export const ADD_TO_CART_MUTATION = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
```

---

## 🛒 2. Headless Checkout Redirect Strategy
* When user clicks "Proceed to Checkout", redirect directly to `cart.checkoutUrl` provided by Shopify Storefront API.
* Preserve buyer identity and discount codes by passing them during cart creation mutations.
