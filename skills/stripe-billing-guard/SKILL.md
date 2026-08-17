---
name: stripe-billing-guard
description: Stripe Checkout & Webhook Security Skill. Implements resilient Stripe subscription checkouts, Customer Portal redirects, and cryptographically verified webhook event listeners (stripe.webhooks.constructEvent).
tags: [stripe, billing, saas, webhooks, payments, checkout]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 💳 Stripe Billing & Webhook Guard Skill

> **Purpose**: Build bulletproof SaaS monetization pipelines with cryptographically verified webhooks and secure customer portals.

---

## 🔒 1. Cryptographically Verified Webhook Listener (Next.js / Express)

Never trust unverified webhook payloads. Always verify the `stripe-signature` header:

```ts
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle discrete billing events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`✅ Subscription created for customer ${session.customer}`);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`⚠️ Subscription cancelled for customer ${subscription.customer}`);
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
```
