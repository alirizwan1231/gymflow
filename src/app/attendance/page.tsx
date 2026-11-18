"use client";

import React, { useMemo, useState } from "react";
import AppShell, { StatCard, StatusPill } from "@/components/AppShell";
import QrPattern from "@/components/QrPattern";
import { members } from "@/data/members";
import { todaysCheckIns, type CheckIn } from "@/data/schedule";
import { IconQr, IconCheck, IconX, IconUsers, IconAlert } from "@/components/icons";

export default function AttendancePage() {
  const [log, setLog] = useState<CheckIn[]>(todaysCheckIns);
  const [activeCode, setActiveCode] = useState(members[0].code);
  const [flash, setFlash] = useState<"ok" | "denied" | null>(null);

  const activeMember = useMemo(
    () => members.find((m) => m.code === activeCode) ?? members[0],
    [activeCode]
  );

  const checkedInCount = log.filter((l) => l.status === "checked-in").length;
  const deniedCount = log.filter((l) => l.status === "denied").length;

  function simulateScan(memberCode: string) {
    const member = members.find((m) => m.code === memberCode);
    if (!member) return;
    setActiveCode(memberCode);
    const denied = member.status === "overdue" || member.status === "frozen";
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const entry: CheckIn = {
      id: `scan-${Date.now()}`,
      member: member.name,
      code: member.code,
      time,
      method: "QR Scan",
      status: denied ? "denied" : "checked-in",
      note: denied
        ? member.status === "frozen"
          ? "Membership frozen"
          : `Membership expired ${member.expiry}`
        : undefined,
    };
    setLog((prev) => [entry, ...prev]);
    setFlash(denied ? "denied" : "ok");
    window.setTimeout(() => setFlash(null), 2400);
  }

  return (
    <AppShell
      title="QR Attendance"
      subtitle="Every member carries a personal GymFlow QR. One scan checks them in, logs the visit and flags expired or frozen memberships instantly."
    >
      <section className="grid gap-5 sm:grid-cols-3">
        <StatCard label="Checked in today" value={String(checkedInCount + 122)} delta="Across QR, app and front desk" icon={<IconQr className="h-6 w-6" />} />
        <StatCard label="Scans this hour" value="18" delta="Peak expected 6–8 PM" icon={<IconUsers className="h-6 w-6" />} />
        <StatCard label="Denied today" value={String(deniedCount)} delta="Expired or frozen memberships" icon={<IconAlert className="h-6 w-6" />} />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[420px_1fr]">
        {/* QR card + simulator */}
        <div className="space-y-6">
          <div
            className={`relative overflow-hidden rounded-[28px] border bg-panel p-6 shadow-card transition-colors duration-500 ${
              flash === "ok" ? "border-volt shadow-glow" : flash === "denied" ? "border-danger" : "border-line"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-display text-xl font-black">{activeMember.name}</p>
                <p className="font-mono text-xs text-faint">{activeMember.code} · {activeMember.plan.toUpperCase()}</p>
              </div>
              <StatusPill status={activeMember.status} />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <QrPattern seed={`${activeMember.code}-${activeMember.name}`} className="w-full" />
              <div className="absolute left-[6%] right-[6%] h-0.5 animate-scan bg-volt shadow-glow" />
            </div>
            {flash && (
              <div
                className={`fade-in mt-5 flex items-center gap-3 rounded-2xl px-4 py-3.5 font-display text-sm font-black uppercase tracking-wide ${
                  flash === "ok" ? "bg-volt text-base" : "bg-danger text-white"
                }`}
              >
                {flash === "ok" ? <IconCheck className="h-5 w-5" /> : <IconX className="h-5 w-5" />}
                {flash === "ok" ? "Checked in — welcome back" : "Denied — membership not active"}
              </div>
            )}
            <p className="mt-5 text-center font-mono text-[11px] tracking-[0.3em] text-faint">MEMBER PASS · SCAN AT DOOR</p>
          </div>

          <div className="rounded-3xl border border-line bg-panel p-6">
            <h2 className="font-display text-lg font-black">Try a scan</h2>
            <p className="mt-1 text-sm text-muted">Pick a member to simulate their door scan — try an overdue one.</p>
            <div className="mt-4 grid max-h-64 gap-2 overflow-y-auto pr-1">
              {members.map((m) => (
                <button
                  key={m.id}
                  onClick={() => simulateScan(m.code)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                    activeCode === m.code
                      ? "border-volt/60 bg-volt/8"
                      : "border-line bg-card hover:border-volt/30"
                  }`}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-raise font-display text-xs font-black text-volt">
                    {m.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{m.name}</span>
                    <span className="block font-mono text-[11px] text-faint">{m.code}</span>
                  </span>
                  <StatusPill status={m.status} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Log */}
        <div className="overflow-hidden rounded-3xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <h2 className="font-display text-xl font-black">Today's check-in log</h2>
            <span className="flex items-center gap-2 rounded-full bg-volt/12 px-3 py-1.5 text-xs font-bold text-volt">
              <span className="h-1.5 w-1.5 animate-pulsedot rounded-full bg-volt" /> LIVE FEED
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-[11px] uppercase tracking-[0.18em] text-faint">
                  <th className="px-6 py-3.5 font-bold">Member</th>
                  <th className="px-4 py-3.5 font-bold">Time</th>
                  <th className="px-4 py-3.5 font-bold">Method</th>
                  <th className="px-4 py-3.5 font-bold">Status</th>
                  <th className="px-6 py-3.5 font-bold">Note</th>
                </tr>
              </thead>
              <tbody>
                {log.map((c) => (
                  <tr key={c.id} className="row-hover border-b border-line/60 last:border-0">
                    <td className="px-6 py-3.5">
                      <span className="font-semibold">{c.member}</span>
                      <span className="ml-2 font-mono text-[11px] text-faint">{c.code}</span>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-xs text-muted">{c.time}</td>
                    <td className="px-4 py-3.5 text-muted">{c.method}</td>
                    <td className="px-4 py-3.5"><StatusPill status={c.status} /></td>
                    <td className="px-6 py-3.5 text-muted">{c.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
