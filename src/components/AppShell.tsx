"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconDashboard,
  IconUsers,
  IconCalendar,
  IconQr,
  IconCard,
  IconDumbbell,
  IconBell,
  IconSettings,
  IconArrowUpRight,
} from "./icons";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { href: "/members", label: "Members", icon: IconUsers },
  { href: "/classes", label: "Trainers & Classes", icon: IconCalendar },
  { href: "/attendance", label: "QR Attendance", icon: IconQr },
  { href: "/payments", label: "Payments", icon: IconCard },
];

export default function AppShell({
  title,
  subtitle,
  children,
  action,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-base text-cream">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-line bg-deep/90 backdrop-blur lg:flex">
        <div className="flex items-center gap-3 px-6 pb-6 pt-7">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-volt text-base shadow-glow">
            <IconDumbbell className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <div>
            <p className="font-display text-lg font-black leading-none tracking-tight">
              GYM<span className="text-volt">FLOW</span>
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-faint">IronWorks Studio</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-volt text-base shadow-glow"
                    : "text-muted hover:bg-white/5 hover:text-cream"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-base" />}
              </Link>
            );
          })}
        </nav>

        <div className="mx-3 mb-3 rounded-2xl border border-volt/25 bg-volt/5 p-4">
          <p className="text-sm font-bold text-cream">Peak hour tonight</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">6–8 PM is forecast at 96% capacity. Two coaches on floor.</p>
          <Link href="/classes" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-volt">
            View schedule <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 border-t border-line px-6 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-raise font-display text-xs font-black text-volt">OW</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Olivia Warren</p>
            <p className="text-xs text-faint">Gym Owner · Admin</p>
          </div>
          <IconSettings className="ml-auto h-5 w-5 text-faint" />
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 border-b border-line bg-base/85 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-volt text-base">
            <IconDumbbell className="h-5 w-5" />
          </span>
          <p className="font-display text-base font-black tracking-tight">
            GYM<span className="text-volt">FLOW</span>
          </p>
          <IconBell className="ml-auto h-5 w-5 text-muted" />
        </div>
        <nav className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-3">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold ${
                  active ? "bg-volt text-base" : "bg-white/5 text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main */}
      <main className="lg:pl-64">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
          <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-volt">
                <span className="h-1.5 w-1.5 animate-pulsedot rounded-full bg-volt" />
                Live demo workspace
              </p>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              {action}
              <Link
                href="/"
                className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-muted transition hover:border-volt/50 hover:text-cream"
              >
                View landing page
              </Link>
            </div>
          </header>
          {children}
          <footer className="mt-14 border-t border-line pt-6 text-xs text-faint">
            GymFlow demo — all data on this page is sample data stored locally in the project. Backend scaffolding lives in
            <span className="font-mono text-muted"> /supabase </span>
            and <span className="font-mono text-muted">src/lib/supabase.ts</span>.
          </footer>
        </div>
      </main>
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon,
  accent = false,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
        accent ? "border-volt/40 bg-volt text-base shadow-glow" : "border-line bg-panel hover:border-volt/30"
      }`}
    >
      <div className="flex items-start justify-between">
        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${accent ? "text-base/70" : "text-faint"}`}>{label}</p>
        <span className={accent ? "text-base" : "text-volt"}>{icon}</span>
      </div>
      <p className="mt-4 font-display text-4xl font-black tracking-tight sm:text-[42px]">{value}</p>
      <p className={`mt-2 text-sm font-medium ${accent ? "text-base/75" : "text-muted"}`}>{delta}</p>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    active: "bg-volt/15 text-volt border-volt/30",
    paid: "bg-volt/15 text-volt border-volt/30",
    "checked-in": "bg-volt/15 text-volt border-volt/30",
    expiring: "bg-amber/15 text-amber border-amber/30",
    pending: "bg-amber/15 text-amber border-amber/30",
    overdue: "bg-danger/15 text-danger border-danger/30",
    denied: "bg-danger/15 text-danger border-danger/30",
    frozen: "bg-sky/15 text-sky border-sky/30",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold capitalize ${map[status] ?? "bg-white/10 text-muted border-line"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
