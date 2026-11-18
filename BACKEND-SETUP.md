# GymFlow — Backend Setup (for later)

The app currently runs entirely on **local demo data** in `src/data/*.ts`.
No environment variables are needed. When you are ready to make it live,
follow these steps — everything uses free tiers only, no paid APIs.

## 1. Create the Supabase project

1. Go to supabase.com → New project (free plan).
2. Pick a region close to your users and set a database password (save it in a password manager).

## 2. Create the tables

1. Open **SQL Editor** in the Supabase dashboard.
2. Paste the full contents of `supabase/schema.sql` and run it.
   It creates: `gyms`, `plans`, `trainers`, `members`, `member_progress`,
   `classes`, `class_bookings`, `attendance`, `payments` — plus indexes
   and starter Row Level Security policies.

## 3. Create the receipts storage bucket

1. **Storage → New bucket** → name it `receipts`, keep it **private**.
2. Receipt images uploaded from the Payments page will live here
   (the `payments.receipt_path` column stores the file path).

## 4. Connect the app

1. In Supabase: **Settings → API** — copy the Project URL and the `anon` public key.
2. Copy `.env.example` to `.env.local` and fill in:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Install the client library:

   ```
   npm install @supabase/supabase-js
   ```

4. Uncomment the client factory in `src/lib/supabase.ts`.

## 5. Swap demo data for queries (page by page)

| Page | Demo source today | Live query later |
| --- | --- | --- |
| Dashboard stats | `src/data/gym.ts` | aggregates over `members`, `payments`, `attendance` |
| Members | `src/data/members.ts` | `members` + join `plans`, `trainers`, `member_progress` |
| Classes | `src/data/schedule.ts` | `classes` + `class_bookings` counts |
| Attendance | `src/data/schedule.ts` | insert into `attendance` on QR scan, read today's rows |
| Payments | `src/data/finance.ts` | `payments` + upload to `receipts` bucket |

## 6. Auth plan

- Gym owners sign in with Supabase Auth (email/password).
- `gyms.owner_id` ties every tenant row to its owner; the RLS policies in
  `schema.sql` already restrict reads/writes to the owner's gym.
- Members do not need accounts for the demo; later they can get a magic-link
  login to see their own plan, QR pass and progress.

## 7. Before production

- Tighten RLS policies per role (owner / trainer / member).
- Add a server-side check-in endpoint so a scanned QR cannot be forged.
- Turn on Supabase email confirmations and set the site URL in Auth settings.
