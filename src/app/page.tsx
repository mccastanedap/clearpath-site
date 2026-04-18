import Reveal from "@/components/Reveal";
import WideCard from "@/components/WideCard";
import MiniCard from "@/components/MiniCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div id="top">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          backgroundImage: "url('/Hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left copy */}
            <Reveal>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl leading-tight">
                  Never lose{" "}
                  <span className="text-[#ef9f38]">track</span>
                  <br />
                  of your inventory again
                </h1>

                <p className="mt-6 max-w-md text-base text-white">
                  We help small and mid-sized retailers improve inventory
                  decisions using analytics, automation, and scalable cloud
                  data infrastructure.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#64b8c0] px-7 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    Contact us
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
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
                          backgroundColor: i === 7 ? "#ef9f38" : "#2D5B8A",
                        }}
                      />
                    ))}
                  </div>

                  {/* Alert row */}
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-[#0F2044] px-3 py-2">
                    <span className="text-[11px] text-neutral-400">
                      Product #A1203 · Low stock alert
                    </span>
                    <span className="rounded-full bg-[#ef9f38] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                      Reorder now
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="mt-3 grid grid-cols-3 divide-x divide-white/10">
                    <div className="pr-3">
                      <div className="text-lg font-bold text-white">
                        94 <span className="text-[#64b8c0] text-sm">↑</span>
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
      <section id="who-its-for" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Who is this for</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Built for teams drowning in inventory complexity
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Retail teams",
                desc: "Managing hundreds of SKUs across locations.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                ),
              },
              {
                title: "Lean teams",
                desc: "No dedicated data engineer or analytics team.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Inventory getting harder",
                desc: "More SKUs, seasonality, suppliers, and stockouts.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#112b50] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#64b8c0]">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">How it works</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Three steps from messy data to clear decisions
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              We&apos;re onboarding a limited number of retailers
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Connect your systems",
                body: "We securely ingest sales, inventory, and POS data from your existing tools. No disruption to your operations.",
                label: "Examples:",
                sub: "POS · Inventory · Sales exports",
              },
              {
                title: "Act with confidence",
                body: "You receive clear, actionable insights to improve stock health, optimize reordering, and understand product performance.",
                label: "Outcomes:",
                sub: "Fewer stockouts · Reduced overstock · Better cash flow",
              },
              {
                title: "Clean & analyze",
                body: "We validate, standardize, and model your data using automated analytics pipelines built for accuracy and scale.",
                label: "Keywords:",
                sub: "Validation · Trends · Forecast-ready",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="flex flex-col">
                  <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-7 text-center shadow-sm flex-1">
                    <h3 className="text-base font-semibold text-neutral-900">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{card.body}</p>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-[#64b8c0]">{card.label}</span>
                    <p className="mt-0.5 text-xs text-neutral-500">{card.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────────── */}
      <section id="architecture" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-3xl font-bold text-neutral-900">Architecture</h2>
            <p className="mt-2 text-sm text-[#112b50] italic">
              A modular, cloud-ready analytics architecture designed for reliable inventory decision-making.
            </p>
            <p className="text-sm text-[#112b50] italic">
              The architecture reflects a reusable analytical framework developed to address recurring inventory
              decision challenges across different retail environments
            </p>
          </Reveal>

          {/* Pills + descriptions: cada columna tiene su pill encima y su texto abajo */}
          <Reveal delay={0.1}>
            <div className="mt-10 grid md:grid-cols-4 gap-6">
              {[
                {
                  label: "Data Sources",
                  sub: "POS · Inventory · Sales",
                  desc: "Data ingestion — POS, inventory, and sales data ingested through standardized exports.",
                },
                {
                  label: "Ingestion & Validation",
                  sub: "",
                  desc: "Validation & normalization — Rule-based checks ensure schema consistency and data quality.",
                },
                {
                  label: "Analytics & Modeling",
                  sub: "",
                  desc: "Analytics & modeling — Standardized models support trend analysis, inventory health, and forecasting.",
                },
                {
                  label: "Insights Layer",
                  sub: "",
                  desc: "Insight delivery — Clear outputs for reordering decisions and performance monitoring.",
                },
              ].map((item, i, arr) => (
                <div key={item.label} className="relative flex flex-col">
                  {/* Pill */}
                  <div className={`rounded-full px-5 py-3 text-center ${i === 0 ? "bg-[#112b50]" : "bg-[#1e3a5f]"}`}>
                    <div className="text-sm font-semibold text-white leading-tight">{item.label}</div>
                    {item.sub && <div className="mt-0.5 text-[11px] text-neutral-400">{item.sub}</div>}
                  </div>
                  {/* Arrow between pills (desktop) */}
                  {i < arr.length - 1 && (
                    <span className="hidden md:block absolute -right-4 top-3 text-[#64b8c0] text-lg select-none">→</span>
                  )}
                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EARLY ACCESS ─────────────────────────────────── */}
      <section id="early-access" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Early Access</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Be among the first retailers to pilot Clearpath
            </h2>
            <p className="mt-2 text-sm text-[#112b50] italic">
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
                className="inline-flex rounded-full bg-[#64b8c0] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Request Early Access
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────── */}
      <section id="why-it-matters" className="bg-[#0F2044] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Why it matters</p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Inventory problems are cash-flow problems
            </h2>
            <p className="mt-3 text-sm text-[#64b8c0] italic max-w-2xl">
              Small and mid-sized retailers operate without the data infrastructure that large chains take for granted. Clearpath closes that gap — without needing an internal analytics team.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                stat: "Cash flow",
                body: "Inventory inefficiency is a major source of cash-flow instability for small and mid-sized retailers.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                stat: "Less volatility",
                body: "Data-driven inventory decisions reduce operational volatility without requiring large internal analytics teams.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                stat: "Stronger supply chains",
                body: "More resilient retail operations strengthen local economies and supply-chain reliability.",
              },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-[#162540] px-7 py-8 flex flex-col gap-4 hover:border-[#64b8c0]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#0F2044] border border-[#64b8c0]/30 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{item.stat}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Contact Us</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Interested in piloting Clearpath Data or learning more about our approach? Get in touch.
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Response time: Typically within 12–24 hours ·{" "}
              <a className="text-[#64b8c0] hover:underline" href="mailto:clearpathdata@gmail.com">
                clearpathdata@gmail.com
              </a>
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

    </div>
  );
}
