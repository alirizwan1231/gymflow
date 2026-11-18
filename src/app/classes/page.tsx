import AppShell from "@/components/AppShell";
import { classes, days, trainers } from "@/data/schedule";
import { IconClock, IconUsers } from "@/components/icons";

function intensityStyle(i: string) {
  switch (i) {
    case "Extreme":
      return "border-danger/40 bg-danger/10 text-danger";
    case "High":
      return "border-amber/40 bg-amber/10 text-amber";
    case "Medium":
      return "border-volt/40 bg-volt/10 text-volt";
    default:
      return "border-sky/40 bg-sky/10 text-sky";
  }
}

export default function ClassesPage() {
  const totalBooked = classes.reduce((a, c) => a + c.booked, 0);
  const totalCap = classes.reduce((a, c) => a + c.capacity, 0);

  return (
    <AppShell
      title="Trainers & Classes"
      subtitle={`${classes.length} classes this week · ${totalBooked} of ${totalCap} spots booked (${Math.round((totalBooked / totalCap) * 100)}% occupancy).`}
    >
      {/* Trainers strip */}
      <section className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        {trainers.map((t) => (
          <article
            key={t.id}
            className="w-[250px] shrink-0 rounded-3xl border border-line bg-panel p-5 transition hover:border-volt/40"
          >
            <div className={`relative mb-4 h-24 overflow-hidden rounded-2xl bg-gradient-to-br ${t.hue} bg-card`}>
              <div className="dotgrid absolute inset-0 opacity-50" />
              <span className="absolute bottom-2 left-3 font-display text-3xl font-black text-cream/90">{t.initials}</span>
            </div>
            <h3 className="font-display text-lg font-black leading-tight">{t.name}</h3>
            <p className="text-sm font-semibold text-volt">{t.role}</p>
            <p className="mt-1 text-xs text-muted">{t.specialty}</p>
            <div className="mt-4 flex justify-between border-t border-line pt-3 text-center">
              <div>
                <p className="font-display font-black">{t.members}</p>
                <p className="text-[10px] uppercase tracking-wider text-faint">Members</p>
              </div>
              <div>
                <p className="font-display font-black">{t.classesPerWeek}/wk</p>
                <p className="text-[10px] uppercase tracking-wider text-faint">Classes</p>
              </div>
              <div>
                <p className="font-display font-black text-volt">{t.rating.toFixed(1)}</p>
                <p className="text-[10px] uppercase tracking-wider text-faint">Rating</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Weekly grid */}
      <section className="mt-8 overflow-hidden rounded-3xl border border-line bg-panel">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5">
          <h2 className="font-display text-xl font-black">Weekly schedule</h2>
          <div className="flex flex-wrap gap-2 text-[11px] font-bold">
            {["Low", "Medium", "High", "Extreme"].map((i) => (
              <span key={i} className={`rounded-full border px-2.5 py-1 ${intensityStyle(i)}`}>{i}</span>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="grid min-w-[980px] grid-cols-7">
            {days.map((day) => (
              <div key={day} className="border-r border-line/60 last:border-0">
                <p
                  className={`border-b border-line px-4 py-3.5 text-center font-display text-sm font-black uppercase tracking-[0.2em] ${
                    day === "Mon" ? "bg-volt text-base" : "bg-deep/60 text-muted"
                  }`}
                >
                  {day}
                </p>
                <div className="space-y-3 p-3">
                  {classes
                    .filter((c) => c.day === day)
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((c) => {
                      const pct = Math.round((c.booked / c.capacity) * 100);
                      const full = c.booked >= c.capacity;
                      return (
                        <article
                          key={c.id}
                          className="group rounded-2xl border border-line bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-volt/50"
                        >
                          <p className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-volt">
                            <IconClock className="h-3 w-3" /> {c.time} · {c.duration}
                          </p>
                          <h3 className="mt-1.5 font-display text-[15px] font-black leading-tight">{c.name}</h3>
                          <p className="mt-1 text-xs text-muted">{c.trainer}</p>
                          <p className="text-[11px] text-faint">{c.room}</p>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                            <div
                              className={`h-full rounded-full ${full ? "bg-danger" : "bg-volt"}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <p className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-muted">
                            <IconUsers className="h-3 w-3" />
                            {full ? "Waitlist open" : `${c.booked}/${c.capacity} booked`}
                          </p>
                        </article>
                      );
                    })}
                  {classes.filter((c) => c.day === day).length === 0 && (
                    <p className="py-6 text-center text-xs text-faint">Rest day</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="mt-4 text-sm text-faint">
        Occupancy bars update from bookings. Full classes automatically open a waitlist in the member app.
      </p>
    </AppShell>
  );
}
