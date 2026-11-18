/**
 * GymFlow — Supabase client placeholder.
 *
 * The frontend currently runs 100% on local demo data (src/data/*.ts) and
 * does NOT need any environment variables. When the backend is set up
 * (see BACKEND-SETUP.md), install @supabase/supabase-js and use the
 * factory below to create a client:
 *
 *   npm install @supabase/supabase-js
 *
 *   import { createClient } from "@supabase/supabase-js";
 *   export const supabase = createClient(
 *     process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
 *   );
 */

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  /** true once real env vars are present — pages can branch on this later */
  get isConfigured() {
    return Boolean(this.url && this.anonKey);
  },
};

export type DatabaseTables =
  | "gyms"
  | "plans"
  | "trainers"
  | "members"
  | "member_progress"
  | "classes"
  | "class_bookings"
  | "attendance"
  | "payments";
