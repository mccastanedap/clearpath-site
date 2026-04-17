import Reveal from "@/components/Reveal";
import WideCard from "@/components/WideCard";
import MiniCard from "@/components/MiniCard";

export default function Home() {
  return (
    <div id="top">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0F2044] py-16 md:py-24">
        {/* Decorative wave shape — mirrors logo path, larger */}
        <svg
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-100"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M600 0 C480 80, 320 60, 380 200 C440 340, 600 320, 560 460 C520 580, 380 560, 420 600 L600 600 Z"
            fill="#162B52"
          />
          <path
            d="M600 50 C500 120, 360 100, 420 240 C480 370, 620 350, 590 480 C560 590, 440 580, 470 600 L600 600 Z"
            fill="#1A3260"
            opacity="0.6"
          />
        </svg>

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left copy */}
            <Reveal>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl leading-tight">
                  Never lose{" "}
                  <span className="text-[#F5A623]">track</span>
                  <br />
                  of your inventory again
                </h1>

                <p className="mt-6 max-w-md text-base text-neutral-300">
                  We help small and mid-sized retailers improve inventory
                  decisions using analytics, automation, and scalable cloud
                  data infrastructure.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#4ABFA5] px-7 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    Contact us
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    See How it works
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right — chart card + stats */}
            <Reveal delay={0.1}>
              <div className="w-full">
                {/* Chart card */}
                <div className="rounded-2xl bg-[#162B52] p-5 shadow-lg">
                  <p className="text-xs font-medium text-neutral-400">
                    Inventory health · last 8 weeks
                  </p>
                  <div className="mt-4 flex items-end gap-[6px] h-28">
                    {[38, 52, 44, 60, 55, 68, 62, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === 7 ? "#F5A623" : "#2D5B8A",
                        }}
                      />
                    ))}
                  </div>

                  {/* Alert row */}
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-[#0F2044] px-3 py-2">
                    <span className="text-[11px] text-neutral-400">
                      Product #A1203 · Low stock alert
                    </span>
                    <span className="rounded-full bg-[#F5A623] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                      Reorder now
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="mt-3 grid grid-cols-3 divide-x divide-white/10">
                    <div className="pr-3">
                      <div className="text-lg font-bold text-white">
                        94 <span className="text-[#4ABFA5] text-sm">↑</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">Stock health</div>
                    </div>
                    <div className="px-3">
                      <div className="text-lg font-bold text-white">3</div>
                      <div className="text-[10px] text-neutral-500">Reorder signals</div>
                    </div>
                    <div className="pl-3">
                      <div className="text-lg font-bold text-white">
                        12% <span className="text-red-400 text-sm">↓</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">Overstock</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────── */}
      <section id="who-its-for" className="bg-[#F7F9FC] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900">
              Built for teams drowning in inventory complexity
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.0}>
              <MiniCard
                title="Retail teams"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                }
              >
                Managing hundreds of SKUs across locations.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.08}>
              <MiniCard
                title="Lean teams"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
              >
                No dedicated data engineer or analytics team.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.16}>
              <MiniCard
                title="Inventory getting harder"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                }
              >
                More SKUs, seasonality, suppliers, and stockouts.
              </MiniCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#F7F9FC] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900">
              Three steps from messy data to clear decisions
            </h2>
            <p className="mt-3 text-center text-sm text-neutral-500">
              We&apos;re onboarding a limited number of retailers
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            <Reveal delay={0.0}>
              <WideCard
                title="Connect your systems"
                subtitle="Examples: POS · Inventory · Sales exports"
              >
                We securely ingest sales, inventory, and POS data from your
                existing tools. No disruption to your operations.
              </WideCard>
            </Reveal>

            <Reveal delay={0.08}>
              <WideCard
                title="Act with confidence"
                subtitle="Outcomes: Fewer stockouts · Reduced overstock · Better cash flow"
              >
                You receive clear, actionable insights to improve stock health,
                optimize reordering, and understand product performance.
              </WideCard>
            </Reveal>

            <Reveal delay={0.16}>
              <WideCard
                title="Clean &amp; analyze"
                subtitle="Keywords: Validation · Trends · Forecast-ready"
              >
                We validate, standardize, and model your data using automated
                analytics pipelines built for accuracy and scale.
              </WideCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────────── */}
      <section id="architecture" className="bg-[#1A2E4A] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white">
              Architecture
            </h2>
            <p className="mt-3 text-center text-sm text-neutral-400 max-w-2xl mx-auto">
              A modular, cloud-ready analytics architecture designed for reliable
              inventory decision-making. The architecture reflects a reusable
              analytical framework developed to address recurring inventory
              decision challenges across different retail environments.
            </p>
          </Reveal>

          {/* Horizontal pill flow */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-0">
              {[
                { label: "Data Sources", sub: "POS · Inventory · Sales" },
                { label: "Ingestion & Validation", sub: "Schema normalization · Data quality" },
                { label: "Analytics & Modeling", sub: "Trend analysis · Forecasting" },
                { label: "Insights Layer", sub: "Outputs · Monitoring · Decisions" },
              ].map((pill, i, arr) => (
                <div key={pill.label} className="flex flex-col md:flex-row items-center">
                  <div className="rounded-full bg-[#2D5B8A] border border-[#4ABFA5]/30 px-6 py-3 text-center min-w-[160px]">
                    <div className="text-sm font-semibold text-white whitespace-nowrap">
                      {pill.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-neutral-400">
                      {pill.sub}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="text-[#4ABFA5] text-xl px-3 py-2 md:py-0 rotate-90 md:rotate-0">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Descriptions */}
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Data Sources",
                desc: "POS, Inventory, and Sales data is ingested and tagged through standardized exports.",
              },
              {
                title: "Ingestion & Validation",
                desc: "Table-based schema ensures accurate data, ensuring data quality and consistency.",
              },
              {
                title: "Analytics & Modeling",
                desc: "Standardized models support trend analysis, inventory health, and forecasting.",
              },
              {
                title: "Insights Layer",
                desc: "Clear outputs for monitoring decisions and performance-tracking data.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div>
                  <h3 className="text-sm font-semibold text-[#4ABFA5]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS ─────────────────────────────────── */}
      <section id="early-access" className="bg-[#F7F9FC] py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Be among the first retailers to pilot Clearpath
            </h2>
            <p className="mt-4 text-base text-neutral-600 max-w-xl mx-auto">
              We&apos;re onboarding a limited number of retailers to validate the MVP
              in real environments and shape the product roadmap.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            <Reveal delay={0.0}>
              <MiniCard title="Pilot participants">
                Work directly with us to implement and validate the MVP in a
                real retail environment.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.08}>
              <MiniCard title="Lean teams">
                No dedicated data engineer or analytics team required to get
                started.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.16}>
              <MiniCard title="Inventory getting harder">
                More SKUs, seasonality, suppliers, and stockouts — we handle
                the complexity.
              </MiniCard>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-[#4ABFA5] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Request Early Access
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────── */}
      <section id="why-it-matters" className="bg-[#1A2E4A] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white">
              Inventory problems are cash-flow problems
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal delay={0.0}>
              <MiniCard dark title="">
                Inventory inefficiency is a major source of cash-flow
                instability for small and mid-sized retailers.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.08}>
              <MiniCard dark title="">
                Data-driven inventory decisions reduce operational volatility
                without requiring large internal analytics teams.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.16}>
              <MiniCard dark title="">
                More resilient retail operations strengthen local economies and
                supply-chain reliability.
              </MiniCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="bg-[#F7F9FC] py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Contact Us
            </h2>
            <p className="mt-6 text-base text-neutral-700">
              Interested in piloting Clearpath Data or learning more about our
              approach? Get in touch.
            </p>

            <div className="mt-8 text-base text-neutral-900">
              <div>
                Email:{" "}
                <a
                  className="text-[#1F3A5F] underline hover:text-[#4ABFA5] transition"
                  href="mailto:clearpathdata@gmail.com"
                >
                  clearpathdata@gmail.com
                </a>
              </div>
              <div className="mt-1 text-sm text-neutral-500">
                Response time: Typically within 12–24 hours
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
