import Link from "next/link";
import AppShell, { StatCard, StatusPill } from "@/components/AppShell";
import { RevenueChart, WeeklyBars } from "@/components/Charts";
import { dashboardStats, expiringSoon } from "@/data/gym";
import { peakHeatmap, heatmapHours } from "@/data/finance";
import { todaysCheckIns } from "@/data/schedule";
import { classes } from "@/data/schedule";
import {
  IconUsers,
  IconWallet,
  IconQr,
  IconAlert,
  IconArrowUpRight,
  IconActivity,
  IconClock,
} from "@/components/icons";

const icons = [
  <IconUsers key="u" className="h-6 w-6" />,
  <IconWallet key="w" className="h-6 w-6" />,
  <IconQr key="q" className="h-6 w-6" />,
  <IconAlert key="a" className="h-6 w-6" />,
];

export default function DashboardPage() {
  const liveClasses = classes.filter((c) => c.day === "Mon").slice(0, 4);

  return (
    <AppShell
      title="Dashboard"
      subtitle="IronWorks Studio at a glance — Tuesday, Nov 18, 2026. Everything below is live demo data."
    >
      {/* Stats */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} delta={s.delta} icon={icons[i]} accent={i === 1} />
        ))}
      </section>

      {/* Revenue + weekly */}
      <section className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-black">
                <IconActivity className="h-5 w-5 text-volt" /> Revenue growth
              </h2>
              <p className="mt-1 text-sm text-muted">Membership revenue, trailing 12 months</p>
            </div>
            <span className="rounded-full bg-volt/12 px-3 py-1.5 font-mono text-xs font-bold text-volt">MRR $18,640</span>
          </div>
          <RevenueChart />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-line bg-panel p-6 sm:p-7">
            <h2 className="font-display text-xl font-black">Check-ins this week</h2>
            <p className="mb-5 mt-1 text-sm text-muted">Saturday is your biggest day — 164 visits.</p>
            <WeeklyBars />
          </div>
          <div className="rounded-3xl border border-amber/25 bg-amber/5 p-6 sm:p-7">
            <h2 className="flex items-center gap-2 font-display text-xl font-black">
              <IconAlert className="h-5 w-5 text-amber" /> Expiring soon
            </h2>
            <ul className="mt-4 space-y-3">
              {expiringSoon.map((m) => (
                <li key={m.name} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-muted">{m.plan}</span>
                  <span className="font-mono text-xs font-bold text-amber">{m.days} days left</span>
                </li>
              ))}
            </ul>
            <Link href="/members" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-volt">
              Open member list <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Heatmap + today's classes */}
      <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
          <h2 className="font-display text-xl font-black">Peak-hour heatmap</h2>
          <p className="mt-1 text-sm text-muted">Floor density by day and hour — roster coaches where it glows.</p>
          <div className="mt-6 space-y-1.5">
            <div className="grid grid-cols-[44px_repeat(7,1fr)] gap-1.5 text-center font-mono text-[10px] uppercase text-faint">
              <span />
              {heatmapHours.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {peakHeatmap.map((row) => (
              <div key={row.day} className="grid grid-cols-[44px_repeat(7,1fr)] items-center gap-1.5">
                <span className="text-xs font-bold text-muted">{row.day}</span>
                {row.cells.map((v, i) => (
                  <div
                    key={i}
                    title={`${row.day} ${heatmapHours[i]} — ${Math.round(v * 100)}% capacity`}
                    className="h-8 rounded-md transition-transform duration-300 hover:scale-110"
                    style={{ background: `rgba(200,255,46,${0.06 + v * 0.9})` }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-4 text-xs text-faint">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-volt/15" /> Quiet</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-volt/60" /> Busy</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-volt" /> Peak</span>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-black">Today on the floor</h2>
            <Link href="/classes" className="inline-flex items-center gap-1 text-sm font-bold text-volt">
              Full schedule <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-5 space-y-3">
            {liveClasses.map((c) => {
              const pct = Math.round((c.booked / c.capacity) * 100);
              return (
                <li key={c.id} className="rounded-2xl border border-line bg-card p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display font-black">{c.name}</p>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                      <IconClock className="h-3.5 w-3.5 text-volt" /> {c.time} · {c.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{c.trainer} · {c.room}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full rounded-full bg-volt" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="font-mono text-xs text-muted">{c.booked}/{c.capacity}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Recent check-ins */}
      <section className="mt-6 rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-black">Latest check-ins</h2>
          <Link href="/attendance" className="inline-flex items-center gap-1 text-sm font-bold text-volt">
            Attendance screen <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-[0.18em] text-faint">
                <th className="pb-3 pr-4 font-bold">Member</th>
                <th className="pb-3 pr-4 font-bold">Code</th>
                <th className="pb-3 pr-4 font-bold">Time</th>
                <th className="pb-3 pr-4 font-bold">Method</th>
                <th className="pb-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {todaysCheckIns.slice(0, 6).map((c) => (
                <tr key={c.id} className="row-hover border-b border-line/60">
                  <td className="py-3.5 pr-4 font-semibold">{c.member}</td>
                  <td className="py-3.5 pr-4 font-mono text-xs text-muted">{c.code}</td>
                  <td className="py-3.5 pr-4 font-mono text-xs text-muted">{c.time}</td>
                  <td className="py-3.5 pr-4 text-muted">{c.method}</td>
                  <td className="py-3.5"><StatusPill status={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
