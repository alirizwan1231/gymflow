import Link from "next/link";
import Reveal from "@/components/Reveal";
import QrPattern from "@/components/QrPattern";
import { RevenueChart } from "@/components/Charts";
import { trainers, classes, todaysCheckIns } from "@/data/schedule";
import { plans, landingStats } from "@/data/gym";
import {
  IconDumbbell,
  IconArrowRight,
  IconArrowUpRight,
  IconUsers,
  IconQr,
  IconCard,
  IconActivity,
  IconFlame,
  IconCheck,
  IconZap,
  IconTimer,
  IconTrending,
  IconCalendar,
} from "@/components/icons";

const ticker = [
  "TRAIN WITH PURPOSE",
  "BUILD LASTING STRENGTH",
  "MOVE BETTER EVERY DAY",
  "QR CHECK-IN IN 2 SECONDS",
  "REVENUE MADE VISIBLE",
  "NO MORE SPREADSHEETS",
];

const goalCards = [
  {
    title: "Personalized plans",
    text: "Workout and diet plans built inside every member profile, tailored to their level, goals and available time.",
    cta: "Explore members",
    href: "/members",
    art: "plans" as const,
  },
  {
    title: "Track every second",
    text: "Attendance, class bookings and peak hours logged the moment they happen — no register, no guesswork.",
    cta: "View attendance",
    href: "/attendance",
    art: "track" as const,
  },
  {
    title: "Expert-led classes",
    text: "A timetable your coaches actually fill — capacities, waitlists and intensity levels visible at a glance.",
    cta: "See the schedule",
    href: "/classes",
    art: "classes" as const,
  },
];

const programs = [
  { n: "01", name: "Strength Training", count: "18 classes / wk", active: false },
  { n: "02", name: "HIIT & Cardio", count: "12 classes / wk", active: true },
  { n: "03", name: "Mobility & Recovery", count: "9 classes / wk", active: false },
  { n: "04", name: "Home & PT Studios", count: "22 coaches", active: false },
];

const hiitTags = ["Fat Burning", "High Energy", "Full Body", "Beginner Friendly", "30–45 Min"];

/* ---------------- Phone mockup of the GymFlow app ---------------- */
function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[280px] shrink-0 rounded-[38px] border border-white/20 bg-[#0B0D0F] p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="overflow-hidden rounded-[30px] bg-[#101216] text-cream">
        <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-semibold text-faint">
          <span className="font-mono">9:41</span>
          <span className="h-4 w-16 rounded-full bg-black" />
          <span className="font-mono">5G</span>
        </div>
        <div className="flex items-center justify-between px-5 pt-4">
          <p className="font-display text-lg font-black tracking-tight">HOME</p>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-volt font-display text-[11px] font-black text-ink">
            HT
          </span>
        </div>

        <div className="mx-4 mt-4 rounded-2xl bg-gradient-to-br from-volt to-emerald-500 p-4 text-ink">
          <p className="text-[10px] font-black uppercase tracking-[0.18em]">Next class · 18:00</p>
          <p className="mt-1 font-display text-xl font-black leading-none">INFERNO HIIT</p>
          <p className="mt-1 text-[11px] font-semibold text-ink/70">Main Floor · Daniyal Reyes</p>
          <span className="mt-3 inline-block rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-volt">
            22 / 24 booked
          </span>
        </div>

        <div className="px-5 pt-5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-faint">Today&apos;s check-ins</p>
            <span className="rounded-full bg-volt/15 px-2 py-0.5 text-[10px] font-bold text-volt">132</span>
          </div>
          <ul className="mt-2.5 space-y-2.5">
            {todaysCheckIns.slice(0, 3).map((c) => (
              <li key={c.id} className="flex items-center justify-between text-[12px]">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-volt/15 text-volt">
                    <IconCheck className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {c.member}
                </span>
                <span className="font-mono text-[11px] text-faint">{c.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 pb-3 pt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-faint">Up next</p>
          <div className="mt-2.5 space-y-2.5">
            {classes.slice(3, 5).map((c) => {
              const pct = Math.round((c.booked / c.capacity) * 100);
              return (
                <div key={c.id} className="rounded-xl bg-white/5 p-3">
                  <div className="flex items-center justify-between text-[12px] font-semibold">
                    <span>{c.name}</span>
                    <span className="font-mono text-[11px] text-volt">{c.time}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-volt" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 pb-5 pt-1">
          <span className="w-11 shrink-0 overflow-hidden rounded-lg">
            <QrPattern seed="GF-1042-HAMZA" className="w-full" />
          </span>
          <div>
            <p className="text-[11px] font-bold leading-tight">Member pass</p>
            <p className="font-mono text-[10px] text-faint">GF-1042 · ELITE</p>
          </div>
          <IconQr className="ml-auto h-5 w-5 text-volt" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Rotating circular badge ---------------- */
function SpinBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
      <svg viewBox="0 0 100 100" className={`h-full w-full animate-spinslow ${dark ? "text-paper" : "text-ink"}`}>
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="9" letterSpacing="2.6" fill="currentColor" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
          <textPath href="#badge-circle">RUN YOUR GYM • GYMFLOW • EST. 2026 •</textPath>
        </text>
      </svg>
      <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-volt text-ink shadow-glow">
        <IconArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
      </span>
    </div>
  );
}

/* ---------------- Oval art for the goal cards ---------------- */
function OvalArt({ kind }: { kind: "plans" | "track" | "classes" }) {
  if (kind === "plans") {
    return (
      <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-[999px] bg-gradient-to-br from-volt via-emerald-400 to-teal-600">
        <div className="dotgrid absolute inset-0 opacity-50" />
        <IconDumbbell className="relative h-24 w-24 text-ink" strokeWidth={1.4} />
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-volt">
          PUSH · PULL · LEGS
        </span>
      </div>
    );
  }
  if (kind === "track") {
    return (
      <div className="relative flex h-52 items-end justify-center gap-2.5 overflow-hidden rounded-[999px] bg-ink px-10 pb-9">
        <div className="blueprint absolute inset-0" />
        {[38, 62, 48, 84, 100, 70, 92].map((h, i) => (
          <span
            key={i}
            className={`bar-grow relative w-5 rounded-t-md ${i === 4 ? "bg-volt shadow-glow" : "bg-white/25"}`}
            style={{ height: `${h * 0.9}px`, animationDelay: `${i * 90}ms` }}
          />
        ))}
        <span className="absolute right-6 top-5 grid h-9 w-9 place-items-center rounded-full bg-volt text-ink">
          <IconTimer className="h-4.5 w-4.5" strokeWidth={2.2} />
        </span>
      </div>
    );
  }
  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-[999px] bg-gradient-to-br from-zinc-700 via-zinc-900 to-black">
      <div className="dotgrid absolute inset-0 opacity-60" />
      <div className="relative flex -space-x-4">
        {trainers.slice(0, 4).map((t) => (
          <span
            key={t.id}
            className={`grid h-16 w-16 place-items-center rounded-full border-2 border-paper bg-gradient-to-br font-display text-base font-black text-paper ${t.hue}`}
          >
            <span className="grid h-full w-full place-items-center rounded-full bg-ink/45">{t.initials}</span>
          </span>
        ))}
      </div>
      <span className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-volt px-3 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-ink">
        <IconFlame className="h-3 w-3" /> 18 CLASSES / WEEK
      </span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-mist font-sans text-ink">
      <div className="mx-auto max-w-[1440px] space-y-3 px-2 py-3 sm:px-3">
        {/* ================= HERO — BLACK POSTER PANEL ================= */}
        <section className="relative z-10 overflow-visible rounded-[28px] bg-ink text-paper">
          <div className="blueprint pointer-events-none absolute inset-0 rounded-[28px]" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-volt/15 blur-[130px]" />
          <span className="pointer-events-none absolute left-6 top-24 font-mono text-white/30">+</span>
          <span className="pointer-events-none absolute right-6 top-24 font-mono text-white/30">+</span>
          <span className="pointer-events-none absolute bottom-40 left-6 font-mono text-white/30">+</span>
          <span className="pointer-events-none absolute bottom-40 right-6 font-mono text-white/30">+</span>

          {/* micro-nav */}
          <header className="relative flex items-center justify-between gap-4 px-5 pt-6 sm:px-8">
            <p className="hidden max-w-[210px] text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-paper/60 lg:block">
              Your gym&apos;s operating system
              <br />
              <span className="text-paper/35">// Built for every floor</span>
            </p>
            <nav className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-paper/70 sm:gap-8">
              <a href="#features" className="transition hover:text-volt">Features</a>
              <a href="#programs" className="hidden transition hover:text-volt sm:block">Programs</a>
              <a href="#trainers" className="hidden transition hover:text-volt md:block">Trainers</a>
              <a href="#pricing" className="transition hover:text-volt">Pricing</a>
            </nav>
            <Link
              href="/dashboard"
              className="rounded-full bg-volt px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-glow transition hover:brightness-110"
            >
              Get started
            </Link>
          </header>

          {/* giant word */}
          <Reveal className="relative">
            <h1 className="mt-8 whitespace-nowrap text-center font-poster uppercase leading-[0.82] tracking-[0.01em] text-paper text-[clamp(4.2rem,14.2vw,13.8rem)]">
              Gym<span className="text-volt">flow</span>
            </h1>
          </Reveal>

          <div className="relative flex items-end justify-between px-5 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-paper/60">
              Progress
              <br />
              in motion
            </p>
            <span className="mb-1 hidden h-11 w-11 place-items-center rounded-full border border-volt/50 text-volt sm:grid">
              <IconArrowRight className="h-4 w-4 rotate-90" />
            </span>
            <p className="text-right text-[10px] font-bold uppercase tracking-[0.22em] text-paper/60">
              Your gym.
              <br />
              Tracked daily.
            </p>
          </div>

          {/* centre visual — phone overlapping into the next panel */}
          <Reveal delay={150} className="relative z-20">
            <div className="relative mx-auto -mb-28 mt-8 flex w-fit justify-center">
              <div className="animate-floaty">
                <PhoneMockup />
              </div>
              <div className="absolute -left-44 top-10 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-md lg:flex">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt text-ink">
                  <IconQr className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block font-display text-base font-black leading-none">132</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-paper/60">Check-ins today</span>
                </span>
              </div>
              <div className="absolute -right-48 top-24 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-md lg:flex">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt text-ink">
                  <IconTrending className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block font-display text-base font-black leading-none">+12.4%</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-paper/60">Revenue growth</span>
                </span>
              </div>
              <div className="absolute -left-40 bottom-16 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-md lg:flex">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt text-ink">
                  <IconFlame className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block font-display text-base font-black leading-none">92% full</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-paper/60">Inferno HIIT · 18:00</span>
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= STATEMENT — LIGHT PANEL ================= */}
        <section className="paper-grid relative overflow-hidden rounded-[28px] bg-paper pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <h2 className="font-poster uppercase leading-[0.9] text-[clamp(2.6rem,7.2vw,6.2rem)]">
                Build strength.
                <br />
                <span className="text-stroke-ink">Find your</span> form<span className="text-volt">.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
              <div>
                <Reveal>
                  <p className="max-w-2xl text-[26px] font-bold uppercase leading-[1.28] tracking-tight sm:text-[32px]">
                    We believe a gym should run on systems,{" "}
                    <span className="text-smoke">not spreadsheets. GymFlow combines</span> member management,{" "}
                    <span className="text-smoke">expert coaching,</span> QR attendance{" "}
                    <span className="text-smoke">and live progress —</span> so the whole floor moves as one.
                  </p>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-14 flex flex-wrap items-end gap-x-14 gap-y-8 border-t border-ink/10 pt-10">
                    <div>
                      <p className="font-poster leading-none text-[clamp(3.4rem,7vw,5.6rem)]">
                        486<span className="text-volt">+</span>
                      </p>
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-smoke">
                        Active members
                        <br />
                        tracked daily
                      </p>
                    </div>
                    <div className="pb-1">
                      <div className="flex -space-x-3">
                        {trainers.slice(0, 4).map((t) => (
                          <span
                            key={t.id}
                            className={`grid h-12 w-12 place-items-center rounded-full border-[3px] border-paper bg-gradient-to-br font-display text-xs font-black text-paper ${t.hue}`}
                          >
                            <span className="grid h-full w-full place-items-center rounded-full bg-ink/45">{t.initials}</span>
                          </span>
                        ))}
                        <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-paper bg-ink font-display text-xs font-black text-volt">
                          +38
                        </span>
                      </div>
                      <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-smoke">
                        New members joined this month alone — every one onboarded in minutes.
                      </p>
                      <Link
                        href="/dashboard"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-volt px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-glow transition hover:brightness-110"
                      >
                        Discover the demo
                        <IconArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={200} className="hidden justify-center lg:flex">
                <PhoneMockup className="rotate-2 scale-[0.92]" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= GOALS — WHITE PANEL ================= */}
        <section id="features" className="relative overflow-hidden rounded-[28px] bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <div className="flex flex-wrap items-start justify-between gap-8">
                <h2 className="max-w-3xl font-poster uppercase leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
                  Your members. Your coaches. Your revenue.
                </h2>
                <SpinBadge />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-md text-sm font-semibold uppercase tracking-[0.14em] text-smoke">
                // Optimised for high-intensity gyms, boutique studios &amp; PT floors
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {goalCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <article className="group h-full rounded-[26px] bg-mist/70 p-4 pb-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-mist">
                    <OvalArt kind={card.art} />
                    <h3 className="mt-6 px-2 font-display text-[22px] font-black uppercase leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 px-2 text-sm leading-relaxed text-smoke">{card.text}</p>
                    <Link
                      href={card.href}
                      className="ml-2 mt-5 inline-flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition group-hover:border-ink hover:bg-ink hover:text-volt"
                    >
                      {card.cta}
                      <IconArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-10">
                <p className="font-poster leading-none text-[clamp(2.6rem,5vw,4.2rem)]">
                  18<span className="text-volt">+</span>
                  <span className="ml-4 align-middle font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-smoke">
                    Classes every
                    <br />
                    single week
                  </span>
                </p>
                <p className="font-poster leading-none text-[clamp(2.6rem,5vw,4.2rem)]">
                  98.2<span className="text-volt">%</span>
                  <span className="ml-4 align-middle font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-smoke">
                    Payments collected
                    <br />
                    on time
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= PROGRAMS — BLACK PANEL ================= */}
        <section id="programs" className="relative overflow-hidden rounded-[28px] bg-ink py-24 text-paper">
          <div className="blueprint pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <div className="flex flex-wrap items-start justify-between gap-8">
                <h2 className="max-w-xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
                  One system. Every kind of strong, every step of the way.
                </h2>
                <p className="max-w-xs text-sm leading-relaxed text-paper/50">
                  Pick a training style — GymFlow schedules it, staffs it, fills it and tracks every
                  member who walks through the door.
                </p>
                <span className="grid h-16 w-16 place-items-center rounded-full border border-paper/30 font-poster text-xl text-paper/80">
                  GF
                </span>
              </div>
            </Reveal>

            <div className="mt-16">
              {programs.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <div
                    className={`group flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 py-7 ${
                      p.active ? "" : "opacity-45 transition hover:opacity-75"
                    }`}
                  >
                    <span className={`font-mono text-sm font-bold ${p.active ? "text-volt" : "text-paper/50"}`}>{p.n}</span>
                    <h3 className="font-poster uppercase leading-none text-[clamp(1.9rem,4.6vw,3.9rem)]">{p.name}</h3>
                    {p.active ? (
                      <>
                        <span className="flex items-center gap-3">
                          <span className="flex h-12 w-24 items-center justify-center rounded-full bg-gradient-to-br from-volt to-emerald-600">
                            <IconFlame className="h-5 w-5 text-ink" />
                          </span>
                          <span className="flex h-12 w-24 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900">
                            <IconActivity className="h-5 w-5 text-volt" />
                          </span>
                        </span>
                        <span className="flex max-w-sm flex-wrap gap-2">
                          {hiitTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-paper/75"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                        <span className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-volt text-ink transition group-hover:rotate-45">
                          <IconArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
                        </span>
                      </>
                    ) : (
                      <span className="ml-auto font-mono text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                        {p.count}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <p className="mt-10 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-paper/35">
                QR check-in &nbsp;|&nbsp; Live revenue &nbsp;|&nbsp; Expiry alerts &nbsp;|&nbsp; Coach plans
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= PROGRESS — LIGHT PANEL ================= */}
        <section className="paper-grid relative overflow-hidden rounded-[28px] bg-paper py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <h2 className="text-center font-poster uppercase leading-[0.92] text-[clamp(2.6rem,6.6vw,5.6rem)]">
                Your revenue
                <br />
                made <span className="text-stroke-ink">visible.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-smoke">
                From daily check-ins to long-term growth, get a clearer picture of how far your gym
                has come — and exactly what to work on next.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/dashboard"
                  className="rounded-full bg-volt px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-glow transition hover:brightness-110"
                >
                  Open dashboard
                </Link>
                <Link
                  href="/payments"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-paper transition hover:bg-zinc-900"
                >
                  Track payments
                  <IconArrowRight className="h-3.5 w-3.5 text-volt transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-14 grid items-start gap-5 lg:grid-cols-[1.5fr_1fr]">
              <Reveal delay={120}>
                <div className="overflow-hidden rounded-[26px] bg-ink p-6 text-paper shadow-card sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-black uppercase tracking-tight">Your revenue overview</p>
                      <p className="mt-1 font-mono text-[11px] text-paper/45">JAN 2026 – DEC 2026 · ALL BRANCHES</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-paper/45">Growth vs last year</p>
                      <p className="font-poster text-4xl leading-none text-volt">+12.4%</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <RevenueChart />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-center">
                    <div>
                      <p className="font-display text-xl font-black">$18,640</p>
                      <p className="text-[11px] text-paper/45">Revenue this month</p>
                    </div>
                    <div>
                      <p className="font-display text-xl font-black">486</p>
                      <p className="text-[11px] text-paper/45">Active members</p>
                    </div>
                    <div>
                      <p className="font-display text-xl font-black text-volt">17</p>
                      <p className="text-[11px] text-paper/45">Expiring in 14 days</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="space-y-5">
                <Reveal delay={200}>
                  <div className="grid grid-cols-2 gap-5">
                    {landingStats.map((s) => (
                      <div key={s.label} className="rounded-[22px] border border-ink/8 bg-white p-5">
                        <p className="font-poster text-[34px] leading-none">{s.value}</p>
                        <p className="mt-2 text-[11px] font-semibold leading-snug text-smoke">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={280}>
                  <Link href="/attendance" className="group flex items-center gap-5 rounded-[22px] bg-ink p-5 text-paper transition hover:bg-zinc-900">
                    <span className="w-20 shrink-0 overflow-hidden rounded-xl transition group-hover:scale-[1.03]">
                      <QrPattern seed="GF-1042-HAMZA" className="w-full" />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-display text-lg font-black leading-tight">
                        Scan. Green light. Train.
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-paper/55">
                        Every member carries a personal QR pass. Try the live attendance screen.
                      </span>
                      <span className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-volt">
                        Open attendance
                        <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MINT MARQUEE ================= */}
        <div className="overflow-hidden rounded-[28px] bg-volt py-3.5 text-ink">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {ticker.map((t) => (
                  <span key={`${copy}-${t}`} className="flex items-center text-[13px] font-black uppercase tracking-[0.14em]">
                    <span className="px-5">{t}</span>
                    <IconZap className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= TRAINERS RAIL — LIGHT PANEL ================= */}
        <section id="trainers" className="relative overflow-hidden rounded-[28px] bg-paper py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="mb-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-smoke">
                    <IconUsers className="h-4 w-4 text-emerald-600" /> The coaching team
                  </p>
                  <h2 className="font-poster uppercase leading-[0.92] text-[clamp(2.4rem,6vw,4.8rem)]">
                    Coaches who <span className="text-stroke-ink">fill rooms.</span>
                  </h2>
                </div>
                <p className="flex items-center gap-2 pb-2 text-sm font-semibold text-smoke">
                  Scroll sideways <IconArrowRight className="h-4 w-4 text-emerald-600" />
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:-mx-10 lg:px-10">
                {trainers.map((t) => (
                  <article
                    key={t.id}
                    className="group w-[290px] shrink-0 snap-start overflow-hidden rounded-[26px] border border-ink/8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                  >
                    <div className={`relative flex h-44 items-end bg-gradient-to-br ${t.hue} bg-zinc-200 p-5`}>
                      <div className="paper-grid absolute inset-0 opacity-70" />
                      <span className="relative font-poster text-6xl leading-none text-ink/85">{t.initials}</span>
                      <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-[11px] font-bold text-volt">
                        {t.rating.toFixed(1)} rating
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-black tracking-tight">{t.name}</h3>
                      <p className="mt-0.5 text-sm font-bold text-emerald-600">{t.role}</p>
                      <p className="mt-2 text-sm text-smoke">{t.specialty}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-center">
                        <div>
                          <p className="font-display text-lg font-black">{t.members}</p>
                          <p className="text-[11px] text-smoke">Members</p>
                        </div>
                        <div>
                          <p className="font-display text-lg font-black">{t.classesPerWeek}</p>
                          <p className="text-[11px] text-smoke">Classes / wk</p>
                        </div>
                        <Link href="/classes" className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                          Schedule <IconArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="no-scrollbar -mx-5 mt-2 flex snap-x gap-4 overflow-x-auto px-5 pb-2 lg:-mx-10 lg:px-10">
                {classes.slice(0, 8).map((c) => {
                  const pct = Math.round((c.booked / c.capacity) * 100);
                  return (
                    <div key={c.id} className="w-[240px] shrink-0 snap-start rounded-2xl border border-ink/8 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-xs font-bold text-emerald-700">{c.day} · {c.time}</p>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            c.intensity === "Extreme"
                              ? "bg-red-100 text-red-600"
                              : c.intensity === "High"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {c.intensity}
                        </span>
                      </div>
                      <p className="mt-3 font-display text-lg font-black leading-tight">{c.name}</p>
                      <p className="mt-1 text-xs text-smoke">{c.trainer} · {c.room}</p>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/8">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${pct}%` }} />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-smoke">{c.booked}/{c.capacity} booked · {pct}% full</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= PRICING — LIGHT PANEL ================= */}
        <section id="pricing" className="relative overflow-hidden rounded-[28px] bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <p className="mb-4 text-center text-[11px] font-black uppercase tracking-[0.24em] text-smoke">Pricing</p>
              <h2 className="text-center font-poster uppercase leading-[0.92] text-[clamp(2.4rem,6vw,5rem)]">
                Pays for itself in
                <br />
                one <span className="text-stroke-ink">saved member.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 120} className="h-full">
                  <article
                    className={`flex h-full flex-col rounded-[26px] border p-8 ${
                      plan.highlighted
                        ? "border-ink bg-ink text-paper shadow-card lg:-translate-y-3"
                        : "border-ink/10 bg-paper"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-black uppercase tracking-wide">{plan.name}</h3>
                      {plan.highlighted && (
                        <span className="rounded-full bg-volt px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className={`mt-1 text-sm ${plan.highlighted ? "text-paper/55" : "text-smoke"}`}>{plan.tagline}</p>
                    <p className="mt-7 font-poster text-6xl leading-none">
                      ${plan.monthly}
                      <span className={`font-sans text-sm font-semibold ${plan.highlighted ? "text-paper/45" : "text-smoke"}`}> /month</span>
                    </p>
                    <ul className="mt-8 flex-1 space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm font-medium">
                          <span
                            className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                              plan.highlighted ? "bg-volt text-ink" : "bg-ink text-volt"
                            }`}
                          >
                            <IconCheck className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/dashboard"
                      className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.14em] transition ${
                        plan.highlighted
                          ? "bg-volt text-ink shadow-glow hover:brightness-110"
                          : "bg-ink text-paper hover:bg-zinc-900"
                      }`}
                    >
                      Start with {plan.name}
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-smoke">
                <IconCard className="h-4 w-4" />
                Prices in USD, cancel anytime. Every plan starts with the full live demo — no card, no sales call.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= FINAL CTA — BLACK PANEL ================= */}
        <section className="relative overflow-hidden rounded-[28px] bg-ink py-20 text-paper">
          <div className="blueprint pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-volt/20 blur-[110px]" />
          <p className="text-stroke-paper pointer-events-none absolute -bottom-7 left-0 whitespace-nowrap font-poster uppercase leading-none text-[9rem] opacity-60">
            Gymflow
          </p>
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-volt text-ink shadow-glow">
                <IconCalendar className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h2 className="mt-7 font-poster uppercase leading-[0.92] text-[clamp(2.6rem,6.6vw,5.4rem)]">
                Build strength.
                <br />
                Stay consistent<span className="text-volt">.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-paper/55">
                Walk the whole product right now — dashboard, members, classes, QR attendance and
                payments, all running on live demo data.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 rounded-full bg-volt px-8 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-glow transition hover:brightness-110"
                >
                  Open the live demo
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/attendance"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-paper transition hover:border-volt hover:text-volt"
                >
                  <IconQr className="h-4 w-4" />
                  Try QR check-in
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= FOOTER — LIGHT ================= */}
        <footer className="rounded-[28px] bg-paper px-5 pb-10 pt-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 border-b border-ink/10 pb-12 md:grid-cols-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-smoke">Get in touch</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  GymFlow Studio
                  <br />
                  123 Wellness Avenue
                  <br />
                  Mon–Sat · 5 AM – 11 PM
                </p>
                <p className="mt-3 font-mono text-xs font-bold text-emerald-700">hello@gymflow.demo</p>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-smoke">Our philosophy</p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/75">
                  We believe fitness is more than a routine. It is about showing up, tracking the
                  work, and making progress that lasts — for members and the gyms that serve them.
                </p>
                <div className="mt-5 flex gap-2.5">
                  {["IG", "X", "IN"].map((s) => (
                    <span
                      key={s}
                      className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-ink/12 font-mono text-[11px] font-black transition hover:border-ink hover:bg-ink hover:text-volt"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-smoke">Active members</p>
                <p className="mt-3 font-poster leading-none text-[clamp(3.4rem,6vw,5.4rem)]">
                  486<span className="text-volt">+</span>
                </p>
                <div className="mt-4 flex -space-x-3">
                  {trainers.slice(0, 5).map((t) => (
                    <span
                      key={t.id}
                      className={`grid h-11 w-11 place-items-center rounded-full border-[3px] border-paper bg-gradient-to-br font-display text-[11px] font-black text-paper ${t.hue}`}
                    >
                      <span className="grid h-full w-full place-items-center rounded-full bg-ink/45">{t.initials}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 pt-8">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-volt">
                  <IconDumbbell className="h-4.5 w-4.5" />
                </span>
                <p className="font-poster text-lg uppercase leading-none tracking-wide">
                  Gym<span className="text-emerald-600">flow</span>
                </p>
              </div>
              <nav className="flex flex-wrap gap-6 text-[12px] font-black uppercase tracking-[0.14em] text-smoke">
                <Link href="/dashboard" className="transition hover:text-ink">Dashboard</Link>
                <Link href="/members" className="transition hover:text-ink">Members</Link>
                <Link href="/classes" className="transition hover:text-ink">Classes</Link>
                <Link href="/attendance" className="transition hover:text-ink">Attendance</Link>
                <Link href="/payments" className="transition hover:text-ink">Payments</Link>
              </nav>
              <p className="font-mono text-[11px] text-smoke">GYMFLOW © 2026 · FRONTEND DEMO</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
