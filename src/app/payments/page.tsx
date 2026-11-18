"use client";

import React, { useMemo, useRef, useState } from "react";
import AppShell, { StatCard, StatusPill } from "@/components/AppShell";
import { payments, financeSummary, type PaymentStatus } from "@/data/finance";
import { IconWallet, IconUpload, IconCheck, IconClock, IconAlert, IconCard } from "@/components/icons";

const filters: { key: PaymentStatus | "all"; label: string }[] = [
  { key: "all", label: "All records" },
  { key: "paid", label: "Paid" },
  { key: "pending", label: "Pending" },
  { key: "overdue", label: "Overdue" },
];

export default function PaymentsPage() {
  const [filter, setFilter] = useState<PaymentStatus | "all">("all");
  const [receiptName, setReceiptName] = useState<string | null>(null);
  const [uploadedFor, setUploadedFor] = useState<string>("Ayesha Khan — Pro renewal");
  const fileRef = useRef<HTMLInputElement>(null);

  const rows = useMemo(
    () => (filter === "all" ? payments : payments.filter((p) => p.status === filter)),
    [filter]
  );
  const collected = payments.filter((p) => p.status === "paid").reduce((a, p) => a + p.amount, 0);

  return (
    <AppShell
      title="Payments"
      subtitle="Fee records for November 2026. Manual payment proof is uploaded as a receipt image — no payment gateway or paid API involved."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Collected (shown records)" value={`$${collected.toLocaleString()}`} delta="Card, transfer & cash combined" icon={<IconWallet className="h-6 w-6" />} accent />
        <StatCard label="MRR" value={`$${financeSummary.mrr.toLocaleString()}`} delta={`+${financeSummary.mrrGrowth}% vs last month`} icon={<IconCard className="h-6 w-6" />} />
        <StatCard label="Pending" value={`$${financeSummary.pendingAmount}`} delta="2 renewals awaiting payment" icon={<IconClock className="h-6 w-6" />} />
        <StatCard label="Overdue" value={`$${financeSummary.overdueAmount}`} delta={`${financeSummary.overdueCount} members need a follow-up`} icon={<IconAlert className="h-6 w-6" />} />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* Table */}
        <div className="overflow-hidden rounded-3xl border border-line bg-panel">
          <div className="flex flex-wrap items-center gap-2 border-b border-line px-5 py-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  filter === f.key ? "bg-volt text-base shadow-glow" : "bg-white/5 text-muted hover:text-cream"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto font-mono text-xs text-faint">{rows.length} records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-[11px] uppercase tracking-[0.18em] text-faint">
                  <th className="px-6 py-3.5 font-bold">Member</th>
                  <th className="px-4 py-3.5 font-bold">Plan</th>
                  <th className="px-4 py-3.5 font-bold">Amount</th>
                  <th className="px-4 py-3.5 font-bold">Method</th>
                  <th className="px-4 py-3.5 font-bold">Due</th>
                  <th className="px-4 py-3.5 font-bold">Receipt</th>
                  <th className="px-6 py-3.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="row-hover border-b border-line/60 last:border-0">
                    <td className="px-6 py-4">
                      <span className="font-semibold">{p.member}</span>
                      <span className="ml-2 font-mono text-[11px] text-faint">{p.code}</span>
                    </td>
                    <td className="px-4 py-4 text-muted">{p.plan}</td>
                    <td className="px-4 py-4 font-display font-black">${p.amount}</td>
                    <td className="px-4 py-4 text-muted">{p.method}</td>
                    <td className="px-4 py-4 text-muted">{p.dueDate}</td>
                    <td className="px-4 py-4">
                      {p.receipt ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-volt">
                          <IconCheck className="h-4 w-4" /> On file
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-faint">Missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4"><StatusPill status={p.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Receipt upload placeholder */}
        <div className="h-fit rounded-3xl border border-line bg-panel p-6">
          <h2 className="font-display text-xl font-black">Upload payment receipt</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            Members pay by bank transfer or cash and upload the receipt here. Staff verify it and
            the record flips to paid. (Demo UI — files are not stored.)
          </p>

          <label className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-faint">Receipt for</label>
          <select
            value={uploadedFor}
            onChange={(e) => setUploadedFor(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-card px-4 py-3 text-sm font-semibold text-cream outline-none focus:border-volt/60"
          >
            <option className="bg-card">Ayesha Khan — Pro renewal</option>
            <option className="bg-card">Ali Raza — Starter renewal</option>
            <option className="bg-card">Omar Farooq — Starter (overdue)</option>
            <option className="bg-card">Shayan Mirza — Student (overdue)</option>
          </select>

          <input
            ref={fileRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => setReceiptName(e.target.files?.[0]?.name ?? null)}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="group mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-line bg-card px-6 py-9 text-center transition hover:border-volt/60 hover:bg-volt/5"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt/12 text-volt transition group-hover:bg-volt group-hover:text-base">
              <IconUpload className="h-6 w-6" />
            </span>
            <span className="text-sm font-bold text-cream">
              {receiptName ?? "Drop receipt image or click to browse"}
            </span>
            <span className="text-xs text-faint">JPG, PNG or PDF · max 5 MB</span>
          </button>

          {receiptName && (
            <div className="fade-in mt-4 flex items-center gap-3 rounded-2xl bg-volt/10 px-4 py-3.5 text-sm font-semibold text-volt">
              <IconCheck className="h-5 w-5 shrink-0" />
              Receipt attached for {uploadedFor}. In the live version this lands in Supabase Storage for staff review.
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-line bg-card p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-faint">Collection health</p>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[92%] rounded-full bg-volt" />
            </div>
            <p className="mt-2.5 text-sm text-muted">
              <span className="font-display font-black text-cream">92%</span> of November fees collected — best month this year.
            </p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
