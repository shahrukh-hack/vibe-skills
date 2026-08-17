---
name: supabase-architect
description: Supabase & PostgreSQL Architecture Skill. Generates secure database schemas, strict Row-Level Security (RLS) policies, PostgreSQL triggers, and Auth webhook integration for vibe coders.
tags: [supabase, postgres, rls, database, auth, backend]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 🗄️ Supabase Architect Skill

> **Purpose**: Design robust, production-ready PostgreSQL database schemas with airtight Row-Level Security (RLS) policies and authentication lifecycle triggers.

---

## 🛡️ 1. Row-Level Security (RLS) Golden Rules

Never deploy a Supabase table without enabling and defining RLS:

```sql
-- 1. Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 2. Select Policy: Users can only read their own profile
CREATE POLICY "Users can view own profile" 
ON public.user_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- 3. Insert Policy: Users can only create their own profile
CREATE POLICY "Users can insert own profile" 
ON public.user_profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 4. Update Policy: Users can only update their own profile
CREATE POLICY "Users can update own profile" 
ON public.user_profiles 
FOR UPDATE 
USING (auth.uid() = user_id);
```

---

## ⚡ 2. Automated User Profile Creation Trigger

Automatically initialize a user profile record in `public.user_profiles` when a user registers in `auth.users`:

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, email, full_name, created_at)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    now()
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```
