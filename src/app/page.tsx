import Link from "next/link";
import Reveal from "@/components/Reveal";
import QrPattern from "@/components/QrPattern";
import { RevenueChart } from "@/components/Charts";
import { trainers, classes } from "@/data/schedule";
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
  IconHeart,
  IconCalendar,
} from "@/components/icons";

const ticker = [
  "MEMBERS",
  "QR ATTENDANCE",
  "CLASS SCHEDULES",
  "PAYMENTS",
  "TRAINER PLANS",
  "REVENUE ANALYTICS",
  "EXPIRY ALERTS",
  "PROGRESS TRACKING",
];

const features = [
  {
    icon: IconUsers,
    title: "Member command centre",
    text: "Every member, plan, expiry and coach assignment in one searchable directory — with workout and diet plans attached to each profile.",
    span: "lg:col-span-2",
  },
  {
    icon: IconQr,
    title: "QR attendance in 2 seconds",
    text: "Members scan their personal QR at the door. Expired memberships are flagged instantly — no register, no queue, no arguments.",
    span: "",
  },
  {
    icon: IconCard,
    title: "Payments without the chase",
    text: "Fee records, pending and overdue states, receipt uploads and a collection rate you can actually see.",
    span: "",
  },
  {
    icon: IconActivity,
    title: "Revenue you can read",
    text: "Monthly revenue, growth and peak-hour heatmaps drawn live from your data — know exactly when your floor earns.",
    span: "lg:col-span-2",
  },
];

const steps = [
  { n: "01", title: "Add your members", text: "Import or add members, assign a plan and a coach. Each member gets a personal QR code automatically." },
  { n: "02", title: "Run the floor", text: "Schedule classes, watch bookings fill, scan members in at the door and track attendance in real time." },
  { n: "03", title: "Collect & grow", text: "Track every payment, spot expiries before they lapse and read the analytics that tell you what to do next." },
];

const quotes = [
  {
    quote: "We replaced three spreadsheets and a paper register with GymFlow. Check-in used to take ten minutes at peak — now it is a two-second scan.",
    name: "IronWorks Studio",
    role: "Strength gym · demo story",
  },
  {
    quote: "The expiry list alone paid for the year. We can see exactly who is about to lapse and call them before they disappear.",
    name: "PulseFit Collective",
    role: "Boutique studio · demo story",
  },
  {
    quote: "Coaches build workout and diet plans right inside the member profile. Our members finally feel like the plan is personal.",
    name: "NorthPeak Athletics",
    role: "CrossFit box · demo story",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-base text-cream">
      {/* ---------- NAV ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-volt text-base shadow-glow">
              <IconDumbbell className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-black tracking-tight">
              GYM<span className="text-volt">FLOW</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
            <a href="#features" className="transition hover:text-cream">Features</a>
            <a href="#trainers" className="transition hover:text-cream">Trainers</a>
            <a href="#how" className="transition hover:text-cream">How it works</a>
            <a href="#pricing" className="transition hover:text-cream">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="hidden text-sm font-semibold text-muted transition hover:text-cream sm:block">
              Live demo
            </Link>
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-volt px-5 py-2.5 text-sm font-bold text-base transition hover:shadow-glow"
            >
              Open dashboard
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="blueprint relative overflow-hidden pb-20 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-volt/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-volt">
              <span className="h-1.5 w-1.5 animate-pulsedot rounded-full bg-volt" />
              Gym management, minus the chaos
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-[13.5vw] font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[104px]">
              Run your gym
              <br />
              <span className="text-stroke">like a</span>{" "}
              <span className="italic text-volt">machine.</span>
            </h1>
          </Reveal>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_420px]">
            <Reveal delay={200}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                GymFlow is the operating system for gyms and fitness studios — members, trainers,
                class schedules, QR attendance, payments and revenue analytics in one fast,
                dark, data-dense dashboard.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-display text-sm font-black uppercase tracking-wide text-base transition hover:shadow-glow"
                >
                  Explore the live demo
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#pricing"
                  className="rounded-full border border-line px-7 py-3.5 font-display text-sm font-black uppercase tracking-wide text-cream transition hover:border-volt/50"
                >
                  See pricing
                </a>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {landingStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-black text-cream">{s.value}</p>
                    <p className="mt-1 text-xs font-medium leading-snug text-faint">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* hero dashboard card */}
            <Reveal delay={300} className="animate-floaty">
              <div className="rounded-3xl border border-line bg-panel/90 p-5 shadow-card backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-faint">Revenue · last 12 months</p>
                  <span className="rounded-full bg-volt/15 px-2.5 py-1 text-[11px] font-bold text-volt">+12.4%</span>
                </div>
                <RevenueChart />
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
                  <div>
                    <p className="font-display text-lg font-black">486</p>
                    <p className="text-[11px] text-faint">Members</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-black">132</p>
                    <p className="text-[11px] text-faint">Check-ins today</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-black text-volt">17</p>
                    <p className="text-[11px] text-faint">Expiring soon</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TICKER ---------- */}
      <div className="stripes h-3 w-full opacity-80" />
      <div className="overflow-hidden border-y border-line bg-deep py-4">
        <div className="flex w-max animate-marquee gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {ticker.map((t) => (
                <span key={`${copy}-${t}`} className="flex items-center font-display text-sm font-black uppercase tracking-[0.25em] text-muted">
                  <span className="px-6">{t}</span>
                  <IconZap className="h-4 w-4 text-volt" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- STORY / PROBLEM ---------- */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-volt">The old way</p>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
              Registers. Spreadsheets.
              <br />
              <span className="text-stroke">Forgotten renewals.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Most gyms still run on paper registers and a spreadsheet nobody trusts. Members slip
              away when plans expire unnoticed, the front desk drowns at peak hour, and the owner
              finds out about revenue at the end of the month — if at all.
            </p>
          </Reveal>
          <div className="space-y-4">
            {[
              { stat: "23%", text: "of members quietly never renew — nobody called them because nobody saw the expiry coming." },
              { stat: "10 min", text: "of front-desk queue at peak hour when every check-in is written into a paper register by hand." },
              { stat: "3 tools", text: "on average — one for payments, one for schedules, one for member lists — none of them talking to each other." },
            ].map((row, i) => (
              <Reveal key={row.stat} delay={i * 120}>
                <div className="flex items-center gap-6 rounded-3xl border border-line bg-panel p-6 transition hover:border-danger/40">
                  <p className="w-24 shrink-0 font-display text-3xl font-black text-danger">{row.stat}</p>
                  <p className="text-sm leading-relaxed text-muted">{row.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES BENTO ---------- */}
      <section id="features" className="border-y border-line bg-deep">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-volt">Everything in one place</p>
            <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              One dashboard.
              <br />
              The <span className="italic text-volt">whole gym.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} className={f.span}>
                <article className="group h-full rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-volt/40">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-volt/12 text-volt transition group-hover:bg-volt group-hover:text-base">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-black tracking-tight">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-volt p-8 text-base shadow-glow">
                <IconFlame className="h-8 w-8" />
                <div>
                  <p className="font-display text-3xl font-black leading-tight">Peak-hour heatmaps included.</p>
                  <p className="mt-2 text-sm font-medium text-base/70">Know your floor's busiest blocks before you roster a single coach.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- HORIZONTAL RAIL: TRAINERS + CLASSES ---------- */}
      <section id="trainers" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-volt">The team & the timetable</p>
              <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                Coaches who <span className="text-stroke">fill rooms.</span>
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm font-semibold text-muted">
              Scroll sideways <IconArrowRight className="h-4 w-4 text-volt" />
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:-mx-10 lg:px-10">
            {trainers.map((t) => (
              <article
                key={t.id}
                className="group relative w-[290px] shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-panel transition-all duration-500 hover:-translate-y-2 hover:border-volt/40"
              >
                <div className={`relative h-44 bg-gradient-to-br ${t.hue} bg-card`}>
                  <div className="dotgrid absolute inset-0 opacity-60" />
                  <span className="absolute bottom-4 left-5 font-display text-6xl font-black text-cream/90">{t.initials}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-base/70 px-3 py-1 text-[11px] font-bold text-volt backdrop-blur">
                    {t.rating.toFixed(1)} rating
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-black">{t.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-volt">{t.role}</p>
                  <p className="mt-2 text-sm text-muted">{t.specialty}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-center">
                    <div>
                      <p className="font-display text-lg font-black">{t.members}</p>
                      <p className="text-[11px] text-faint">Members</p>
                    </div>
                    <div>
                      <p className="font-display text-lg font-black">{t.classesPerWeek}</p>
                      <p className="text-[11px] text-faint">Classes / wk</p>
                    </div>
                    <Link href="/classes" className="inline-flex items-center gap-1 text-xs font-bold text-volt">
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
                <div key={c.id} className="w-[240px] shrink-0 snap-start rounded-2xl border border-line bg-panel p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-bold text-volt">{c.day} · {c.time}</p>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${c.intensity === "Extreme" ? "bg-danger/15 text-danger" : c.intensity === "High" ? "bg-amber/15 text-amber" : "bg-volt/15 text-volt"}`}>
                      {c.intensity}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-lg font-black leading-tight">{c.name}</p>
                  <p className="mt-1 text-xs text-muted">{c.trainer} · {c.room}</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full rounded-full bg-volt" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-faint">{c.booked}/{c.capacity} booked · {pct}% full</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ---------- QR SPOTLIGHT ---------- */}
      <section className="border-y border-line bg-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-volt">Front desk, reinvented</p>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
              Scan. Green light.
              <br />
              <span className="italic text-volt">Train.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Every member carries a personal GymFlow QR. One scan at the door checks them in,
              logs attendance and — if the membership has expired — tells the front desk politely
              but instantly. Try the live attendance screen in the demo.
            </p>
            <Link
              href="/attendance"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 font-display text-sm font-black uppercase tracking-wide text-base transition hover:shadow-glow"
            >
              See QR attendance
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-6 rounded-[40px] bg-volt/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-volt/30 bg-panel p-6 shadow-card">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-black">Hamza Tariq</p>
                    <p className="font-mono text-xs text-faint">GF-1042 · ELITE</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-volt/15 px-3 py-1 text-[11px] font-bold text-volt">
                    <IconCheck className="h-3.5 w-3.5" /> ACTIVE
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <QrPattern seed="GF-1042-HAMZA" className="w-full" />
                  <div className="absolute left-[6%] right-[6%] h-0.5 animate-scan bg-volt shadow-glow" />
                </div>
                <p className="mt-5 text-center font-mono text-xs tracking-[0.3em] text-muted">SCAN AT FRONT DESK</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-volt">How it works</p>
          <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            Live in <span className="text-stroke">three steps.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <article className="h-full rounded-3xl border border-line bg-panel p-8">
                <p className="font-display text-6xl font-black text-stroke-volt">{s.n}</p>
                <h3 className="mt-6 font-display text-2xl font-black">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- QUOTES ---------- */}
      <section className="border-y border-line bg-deep">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
              <IconHeart className="h-8 w-8 text-volt" /> Gyms that switched, in their words
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={q.name} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-panel p-7">
                  <blockquote className="flex-1 leading-relaxed text-cream/90">“{q.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-display font-black">{q.name}</p>
                    <p className="text-xs text-faint">{q.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-volt">Pricing</p>
          <h2 className="text-center font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            Pays for itself in
            <br />
            <span className="italic text-volt">one saved member.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <article
                className={`flex h-full flex-col rounded-[28px] border p-8 ${
                  plan.highlighted
                    ? "border-volt bg-volt text-base shadow-glow lg:-translate-y-3"
                    : "border-line bg-panel"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-black uppercase tracking-wide">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-base px-3 py-1 text-[11px] font-bold text-volt">MOST POPULAR</span>
                  )}
                </div>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-base/70" : "text-muted"}`}>{plan.tagline}</p>
                <p className="mt-7 font-display text-6xl font-black tracking-tight">
                  ${plan.monthly}
                  <span className={`text-base font-semibold ${plan.highlighted ? "text-base/60" : "text-faint"}`}> /month</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium">
                      <IconCheck className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-base" : "text-volt"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-black uppercase tracking-wide transition ${
                    plan.highlighted
                      ? "bg-base text-cream hover:opacity-90"
                      : "bg-volt text-base hover:shadow-glow"
                  }`}
                >
                  Start with {plan.name}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-8 text-center text-sm text-faint">
            Prices in USD, cancel anytime. Every plan starts with the full live demo — no card, no sales call.
          </p>
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="blueprint relative overflow-hidden rounded-[32px] border border-volt/30 bg-panel px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-volt/20 blur-[110px]" />
            <IconCalendar className="relative mx-auto h-10 w-10 text-volt" />
            <h2 className="relative mx-auto mt-6 max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              Your gym, on <span className="italic text-volt">autopilot.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-muted">
              Walk the whole product right now — dashboard, members, classes, QR attendance and
              payments, all running on live demo data.
            </p>
            <Link
              href="/dashboard"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-volt px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-base transition hover:shadow-glow"
            >
              Open the live demo
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-volt text-base">
              <IconDumbbell className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="font-display font-black leading-none">
                GYM<span className="text-volt">FLOW</span>
              </p>
              <p className="mt-1 text-xs text-faint">Gym & fitness studio management SaaS — demo build</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm font-semibold text-muted">
            <Link href="/dashboard" className="transition hover:text-volt">Dashboard</Link>
            <Link href="/members" className="transition hover:text-volt">Members</Link>
            <Link href="/classes" className="transition hover:text-volt">Classes</Link>
            <Link href="/attendance" className="transition hover:text-volt">Attendance</Link>
            <Link href="/payments" className="transition hover:text-volt">Payments</Link>
          </nav>
          <p className="font-mono text-xs text-faint">GYMFLOW © 2026 · FRONTEND DEMO</p>
        </div>
      </footer>
    </div>
  );
}
