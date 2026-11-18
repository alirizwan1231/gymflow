"use client";

import React, { useMemo, useState } from "react";
import AppShell, { StatusPill } from "@/components/AppShell";
import { ProgressRing } from "@/components/Charts";
import { members, type Member } from "@/data/members";
import { IconSearch, IconX, IconCheck, IconFlame, IconUsers } from "@/components/icons";

const planFilters = ["All plans", "Starter", "Pro", "Elite", "Student"];
const statusFilters = ["All statuses", "active", "expiring", "overdue", "frozen"];

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState("All plans");
  const [status, setStatus] = useState("All statuses");
  const [selected, setSelected] = useState<Member | null>(null);

  const filtered = useMemo(
    () =>
      members.filter((m) => {
        const q = query.toLowerCase();
        const matchesQ =
          m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q) || m.trainer.toLowerCase().includes(q);
        const matchesPlan = plan === "All plans" || m.plan === plan;
        const matchesStatus = status === "All statuses" || m.status === status;
        return matchesQ && matchesPlan && matchesStatus;
      }),
    [query, plan, status]
  );

  return (
    <AppShell
      title="Members"
      subtitle="Search, filter and open any member to see their assigned workout plan, diet plan and progress history."
      action={
        <span className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-muted sm:inline-flex">
          <IconUsers className="h-4 w-4 text-volt" /> {filtered.length} of {members.length} shown
        </span>
      }
    >
      {/* Controls */}
      <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-line bg-panel p-4 sm:p-5 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, member code or trainer…"
            className="w-full rounded-2xl border border-line bg-card py-3.5 pl-12 pr-4 text-sm font-medium text-cream outline-none transition placeholder:text-faint focus:border-volt/60 focus:ring-2 focus:ring-volt/20"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {planFilters.map((p) => (
            <button
              key={p}
              onClick={() => setPlan(p)}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${
                plan === p ? "bg-volt text-base shadow-glow" : "bg-white/5 text-muted hover:text-cream"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-full border border-line bg-card px-4 py-2.5 text-xs font-bold text-cream outline-none focus:border-volt/60"
        >
          {statusFilters.map((s) => (
            <option key={s} value={s} className="bg-card capitalize">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-line bg-panel">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-deep/60 text-[11px] uppercase tracking-[0.18em] text-faint">
                <th className="px-6 py-4 font-bold">Member</th>
                <th className="px-4 py-4 font-bold">Plan</th>
                <th className="px-4 py-4 font-bold">Trainer</th>
                <th className="px-4 py-4 font-bold">Attendance</th>
                <th className="px-4 py-4 font-bold">Expires</th>
                <th className="px-4 py-4 font-bold">Status</th>
                <th className="px-6 py-4 text-right font-bold">Profile</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => setSelected(m)}
                  className="row-hover cursor-pointer border-b border-line/60 last:border-0"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-raise font-display text-sm font-black text-volt">
                        {m.initials}
                      </span>
                      <div>
                        <p className="font-semibold text-cream">{m.name}</p>
                        <p className="font-mono text-[11px] text-faint">{m.code} · since {m.joined}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-lg bg-white/6 px-2.5 py-1 font-mono text-xs font-bold">{m.plan}</span>
                  </td>
                  <td className="px-4 py-4 text-muted">{m.trainer}</td>
                  <td className="px-4 py-4">
                    <span className={`font-mono text-sm font-bold ${m.attendanceRate >= 85 ? "text-volt" : m.attendanceRate >= 60 ? "text-amber" : "text-danger"}`}>
                      {m.attendanceRate}%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-muted">
                    {m.expiry}
                    <span className={`ml-2 font-mono text-[11px] font-bold ${m.daysLeft < 0 ? "text-danger" : m.daysLeft <= 14 ? "text-amber" : "text-faint"}`}>
                      {m.daysLeft < 0 ? `${Math.abs(m.daysLeft)}d ago` : `${m.daysLeft}d left`}
                    </span>
                  </td>
                  <td className="px-4 py-4"><StatusPill status={m.status} /></td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full border border-volt/40 px-3.5 py-1.5 text-xs font-bold text-volt transition hover:bg-volt hover:text-base">
                      Open
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-14 text-center text-muted">
                    No members match this search. Try a different name, plan or status.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-sm text-faint">Tip: click any row to open the full member profile.</p>

      {/* ---------- Member detail modal ---------- */}
      {selected && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button aria-label="Close" onClick={() => setSelected(null)} className="fade-in absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <div className="modal-in relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] border border-line bg-panel shadow-card sm:rounded-[28px]">
            {/* header */}
            <div className="blueprint relative overflow-hidden border-b border-line p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-volt/15 blur-3xl" />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/8 text-cream transition hover:bg-volt hover:text-base"
                aria-label="Close profile"
              >
                <IconX className="h-4.5 w-4.5" />
              </button>
              <div className="relative flex flex-wrap items-center gap-5">
                <span className="grid h-20 w-20 place-items-center rounded-3xl bg-volt font-display text-2xl font-black text-base shadow-glow">
                  {selected.initials}
                </span>
                <div className="min-w-[220px] flex-1">
                  <h3 className="font-display text-3xl font-black tracking-tight">{selected.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {selected.code} · {selected.email} · {selected.phone}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <StatusPill status={selected.status} />
                    <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-bold text-muted">{selected.plan} plan</span>
                    <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-bold text-muted">Coach: {selected.trainer}</span>
                  </div>
                </div>
                <div className="relative grid place-items-center">
                  <ProgressRing value={selected.attendanceRate} size={76} stroke={7} />
                  <span className="absolute font-display text-sm font-black">{selected.attendanceRate}%</span>
                  <span className="absolute -bottom-5 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-faint">Attendance</span>
                </div>
              </div>
              <p className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-cream/90">
                <IconFlame className="h-4 w-4 text-volt" /> Goal: {selected.goal}
                <span className="ml-auto font-mono text-xs text-muted">Expires {selected.expiry}</span>
              </p>
            </div>

            <div className="grid gap-6 p-7 sm:grid-cols-2 sm:p-8">
              {/* workout */}
              <section className="rounded-3xl border border-line bg-card p-6">
                <h4 className="font-display text-lg font-black">Workout plan</h4>
                <p className="mt-1 text-sm font-medium text-volt">{selected.workoutPlan.focus}</p>
                <ul className="mt-4 space-y-3">
                  {selected.workoutPlan.days.map((d) => (
                    <li key={d.day} className="flex gap-3 text-sm">
                      <span className="w-10 shrink-0 font-mono text-xs font-bold text-volt">{d.day}</span>
                      <span className="text-muted">{d.session}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {/* diet */}
              <section className="rounded-3xl border border-line bg-card p-6">
                <h4 className="font-display text-lg font-black">Diet plan</h4>
                <p className="mt-1 text-sm font-medium text-volt">
                  {selected.dietPlan.calories} · {selected.dietPlan.protein}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {selected.dietPlan.meals.map((meal) => (
                    <li key={meal} className="flex items-start gap-2.5 text-sm text-muted">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-volt" /> {meal}
                    </li>
                  ))}
                </ul>
              </section>
              {/* progress */}
              <section className="rounded-3xl border border-line bg-card p-6 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-black">Progress history</h4>
                  <span className="font-mono text-xs text-muted">
                    {selected.progress[0].weightKg} kg → {selected.progress[selected.progress.length - 1].weightKg} kg
                  </span>
                </div>
                <div className="mt-5 flex h-28 items-end gap-3">
                  {selected.progress.map((p) => {
                    const min = Math.min(...selected.progress.map((x) => x.weightKg)) - 2;
                    const max = Math.max(...selected.progress.map((x) => x.weightKg)) + 2;
                    const height = 30 + ((p.weightKg - min) / (max - min)) * 70;
                    return (
                      <div key={p.date} className="flex flex-1 flex-col items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-cream">{p.weightKg}</span>
                        <div className="w-full rounded-t-lg bg-volt/80" style={{ height: `${height}%` }} />
                        <span className="text-[11px] font-semibold text-faint">{p.date.split(" ")[0]}</span>
                      </div>
                    );
                  })}
                </div>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {selected.progress.slice().reverse().map((p) => (
                    <li key={p.date} className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <span className="font-mono text-xs font-bold text-volt">{p.date}</span>
                      <span className="font-semibold">{p.weightKg} kg · {p.bodyFat}% body fat</span>
                      <span className="text-muted">{p.note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
