-- ============================================================
-- GymFlow — Supabase schema (NOT wired to the frontend yet)
-- Run this in the Supabase SQL Editor when setting up the backend.
-- See BACKEND-SETUP.md for the full step-by-step.
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- Gyms (tenants) ----------
create table if not exists public.gyms (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users (id) on delete set null,
  name text not null,
  slug text unique not null,
  city text,
  created_at timestamptz not null default now()
);

-- ---------- Plans ----------
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  name text not null,                       -- Starter / Pro / Elite / Student
  price_monthly numeric(10, 2) not null default 0,
  duration_days int not null default 30,
  features jsonb not null default '[]'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- Trainers ----------
create table if not exists public.trainers (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  user_id uuid references auth.users (id) on delete set null,
  name text not null,
  role text,
  specialty text,
  phone text,
  rating numeric(2, 1) default 5.0,
  created_at timestamptz not null default now()
);

-- ---------- Members ----------
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  user_id uuid references auth.users (id) on delete set null,
  code text not null,                        -- e.g. GF-1042 (QR payload)
  full_name text not null,
  phone text,
  email text,
  plan_id uuid references public.plans (id) on delete set null,
  trainer_id uuid references public.trainers (id) on delete set null,
  status text not null default 'active'
    check (status in ('active', 'expiring', 'overdue', 'frozen')),
  goal text,
  joined_on date not null default current_date,
  expires_on date,
  workout_plan jsonb not null default '{}'::jsonb,   -- { focus, days: [{day, session}] }
  diet_plan jsonb not null default '{}'::jsonb,      -- { calories, protein, meals: [] }
  created_at timestamptz not null default now(),
  unique (gym_id, code)
);

-- ---------- Member progress ----------
create table if not exists public.member_progress (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members (id) on delete cascade,
  recorded_on date not null default current_date,
  weight_kg numeric(5, 1),
  body_fat_pct numeric(4, 1),
  note text,
  created_at timestamptz not null default now()
);

-- ---------- Classes ----------
create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  trainer_id uuid references public.trainers (id) on delete set null,
  name text not null,
  day_of_week text not null check (day_of_week in ('Mon','Tue','Wed','Thu','Fri','Sat','Sun')),
  start_time time not null,
  duration_min int not null default 60,
  room text,
  capacity int not null default 20,
  intensity text not null default 'Medium'
    check (intensity in ('Low', 'Medium', 'High', 'Extreme')),
  created_at timestamptz not null default now()
);

-- ---------- Class bookings ----------
create table if not exists public.class_bookings (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  member_id uuid not null references public.members (id) on delete cascade,
  booked_for date not null,
  status text not null default 'booked' check (status in ('booked', 'waitlist', 'cancelled')),
  created_at timestamptz not null default now(),
  unique (class_id, member_id, booked_for)
);

-- ---------- Attendance (QR check-ins) ----------
create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  member_id uuid not null references public.members (id) on delete cascade,
  method text not null default 'qr' check (method in ('qr', 'front_desk', 'app')),
  status text not null default 'checked-in' check (status in ('checked-in', 'denied')),
  note text,
  checked_in_at timestamptz not null default now()
);

-- ---------- Payments ----------
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid not null references public.gyms (id) on delete cascade,
  member_id uuid not null references public.members (id) on delete cascade,
  plan_id uuid references public.plans (id) on delete set null,
  amount numeric(10, 2) not null,
  method text check (method in ('card', 'bank_transfer', 'cash')),
  status text not null default 'pending' check (status in ('paid', 'pending', 'overdue')),
  due_date date,
  paid_at timestamptz,
  receipt_path text,                          -- path inside the 'receipts' storage bucket
  created_at timestamptz not null default now()
);

-- ---------- Indexes ----------
create index if not exists idx_members_gym on public.members (gym_id);
create index if not exists idx_members_status on public.members (status);
create index if not exists idx_attendance_member on public.attendance (member_id, checked_in_at desc);
create index if not exists idx_payments_member on public.payments (member_id);
create index if not exists idx_payments_status on public.payments (status);
create index if not exists idx_classes_gym_day on public.classes (gym_id, day_of_week);

-- ---------- Row Level Security ----------
-- Enable RLS on everything. Policies below are a starting point:
-- a signed-in user can only see rows of gyms they own. Tighten before production.
alter table public.gyms enable row level security;
alter table public.plans enable row level security;
alter table public.trainers enable row level security;
alter table public.members enable row level security;
alter table public.member_progress enable row level security;
alter table public.classes enable row level security;
alter table public.class_bookings enable row level security;
alter table public.attendance enable row level security;
alter table public.payments enable row level security;

create policy "owner reads own gym" on public.gyms
  for select using (owner_id = auth.uid());

create policy "owner manages own gym rows" on public.members
  for all using (
    gym_id in (select id from public.gyms where owner_id = auth.uid())
  );

create policy "owner manages own gym payments" on public.payments
  for all using (
    gym_id in (select id from public.gyms where owner_id = auth.uid())
  );

create policy "owner manages own gym attendance" on public.attendance
  for all using (
    gym_id in (select id from public.gyms where owner_id = auth.uid())
  );

-- Storage: create a private bucket named 'receipts' in the dashboard
-- (Storage → New bucket → name: receipts, public: OFF) for receipt images.
