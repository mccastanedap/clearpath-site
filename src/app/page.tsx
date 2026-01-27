import Reveal from "@/components/Reveal"; // ✅ NEW

export default function Home() {
  return (
    <div id="top" className="bg-[#F7F9FC]">
      {/* HERO */}
      <Reveal> {/* ✅ NEW */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              {/* Left copy */}
              <div>
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Data-driven inventory
                  <br />
                  optimization for modern
                  <br />
                  retailers
                </h1>

                <p className="mt-8 max-w-xl text-base text-neutral-800">
                  We help small and mid-sized retailers improve inventory decisions using analytics,
                  automation, and scalable cloud data infrastructure.
                </p>

                <p className="mt-8 max-w-xl text-base text-neutral-800">
                  Designed to support more resilient and data-driven inventory decisions for small and
                  mid-sized U.S. retailers.
                </p>
              </div>

              {/* Right diagram */}
              <div className="flex flex-col items-center md:items-end">
                <div className="w-full max-w-md">
                  {/* ✅ NEW: stagger each block for nicer motion */}
                  <Reveal delay={0.05}>
                    <StackCard title="Data Sources">
                      <div className="text-xs text-neutral-600">POS · Inventory · Sales</div>
                    </StackCard>
                  </Reveal>

                  <ArrowDownLg />

                  <Reveal delay={0.12}>
                    <StackCard title="Analytics Engine">
                      <div className="text-xs text-neutral-600">Ingest · Transform · Validate</div>
                    </StackCard>
                  </Reveal>

                  <ArrowDownLg />

                  <Reveal delay={0.19}>
                    <StackCard title="Inventory Insights">
                      <div className="mt-2 space-y-1 text-xs text-neutral-700">
                        <div>Stock health</div>
                        <div>Reorder signals</div>
                        <div>Product performance</div>
                        <div className="mt-2 text-[11px] text-neutral-500">
                          → Fewer stockouts, better cash flow
                        </div>
                      </div>
                    </StackCard>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* HOW IT WORKS */}
      <Reveal> {/* ✅ NEW */}
        <section id="how-it-works" className="py-14">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-semibold tracking-tight">How it works</h2>

            <div className="mt-10 space-y-7">
              <Reveal delay={0.0}> {/* ✅ NEW */}
                <WideCard title="Connect your systems" subtitle="Examples: POS · Inventory · Sales exports">
                  We securely ingest sales, inventory, and POS data from your existing tools. No disruption
                  to your operations.
                </WideCard>
              </Reveal>

              <Reveal delay={0.08}> {/* ✅ NEW */}
                <WideCard title="Clean & analyze" subtitle="Keywords: Validation · Trends · Forecast-ready">
                  We validate, standardize, and model your data using automated analytics pipelines built for
                  accuracy and scale..
                </WideCard>
              </Reveal>

              <Reveal delay={0.16}> {/* ✅ NEW */}
                <WideCard title="Act with confidence" subtitle="Outcomes: Fewer stockouts · Reduced overstock · Better cash flow">
                  You receive clear, actionable insights to improve stock health, optimize reordering, and
                  understand product performance.
                </WideCard>
              </Reveal>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#early-access"
                className="rounded-xl bg-[#4ABFA5] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Request early access
              </a>
            </div>

            <p className="mt-3 text-center text-sm text-neutral-600">
              We’re onboarding a limited number of retailers
            </p>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* ARCHITECTURE */}
      <Reveal> {/* ✅ NEW */}
        <section id="architecture" className="py-16">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Architecture</h2>

            <p className="mt-4 text-base text-neutral-800">
              A modular, cloud-ready analytics architecture designed for reliable inventory decision-making.
            </p>

            <p className="mt-2 text-base text-neutral-800">
              The architecture reflects a reusable analytical framework developed to address recurring inventory
              decision challenges across different retail environments
            </p>

            <div className="mt-10 flex flex-col items-center">
              {/* ✅ NEW: stagger each pill */}
              <Reveal delay={0.0}><Pill label="Data Sources" sublabel="POS · Inventory · Sales" /></Reveal>
              <ArrowDown />
              <Reveal delay={0.08}><Pill label="Ingestion & Validation" /></Reveal>
              <ArrowDown />
              <Reveal delay={0.16}><Pill label="Analytics & Modeling" /></Reveal>
              <ArrowDown />
              <Reveal delay={0.24}><Pill label="Insights Layer" /></Reveal>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl px-5 text-left">
            <h3 className="text-lg font-semibold text-neutral-900">Key architectural components</h3>

            {/* Optional: animate list as it enters */}
            <Reveal delay={0.05}> {/* ✅ NEW */}
              <ul className="mt-6 space-y-4">
                {/* your list items unchanged */}
                ...
              </ul>
            </Reveal>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* WHO THIS IS FOR */}
      <Reveal> {/* ✅ NEW */}
        <section id="who-its-for" className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-semibold tracking-tight">Who this is for</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* ✅ NEW: stagger cards */}
              <Reveal delay={0.0}>
                <MiniCard title="Small & mid-sized retailers">
                  $1M–$50M revenue, multi-SKU, multi-location.
                </MiniCard>
              </Reveal>

              <Reveal delay={0.08}>
                <MiniCard title="Lean teams">
                  No dedicated data engineer or analytics team.
                </MiniCard>
              </Reveal>

              <Reveal delay={0.16}>
                <MiniCard title="Inventory getting harder">
                  More SKUs, seasonality, suppliers, and stockouts.
                </MiniCard>
              </Reveal>
            </div>

            <p className="mt-8 text-center text-sm text-neutral-700">
              Not sure if you’re a fit? We’ll tell you in a 15-minute call.
            </p>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* EARLY ACCESS */}
      <Reveal> {/* ✅ NEW */}
        <section id="early-access" className="py-16">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Early Access</h2>

            <p className="mt-5 text-base text-neutral-800">
              We’re onboarding a limited number of retailers to pilot Clearpath Data and help shape the product.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
              {/* ✅ NEW: stagger cards */}
              <Reveal delay={0.0}>
                <MiniCard title="Pilot customers">
                  Work directly with us to implement and validate the MVP in a real retail environment.
                </MiniCard>
              </Reveal>

              <Reveal delay={0.08}>
                <MiniCard title="Low-risk, high-touch">
                  No long-term commitment. Hands-on support during setup and analysis.
                </MiniCard>
              </Reveal>

              <Reveal delay={0.16}>
                <MiniCard title="Influence the roadmap">
                  Early users help define features and workflows before broader rollout.
                </MiniCard>
              </Reveal>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex rounded-xl bg-[#4ABFA5] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Request early access
              </a>
            </div>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* WHY IT MATTERS */}
      <Reveal> {/* ✅ NEW */}
        <section id="why-it-matters" className="py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="text-center text-3xl font-semibold tracking-tight">Why it matters</h2>

            {/* Optional: stagger bullets */}
            <div className="mt-10 space-y-6">
              <Reveal delay={0.0}>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                  <p className="text-neutral-900">
                    Inventory inefficiency is a major source of cash-flow instability for small and mid-sized retailers
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                  <p className="text-neutral-900">
                    Data-driven inventory decisions reduce operational volatility without requiring large internal analytics teams
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                  <p className="text-neutral-900">
                    More resilient retail operations strengthen local economies and supply-chain reliability
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}

      {/* CONTACT */}
      <Reveal> {/* ✅ NEW */}
        <section id="contact" className="py-16">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Contact us</h2>

            <p className="mt-6 text-base text-neutral-800">
              Interested in piloting Clearpath Data or learning more about our approach? Get in touch.
            </p>

            <div className="mt-8 text-base text-neutral-900">
              <div>
                Email:{" "}
                <a className="text-[#1F3A5F] underline" href="mailto:clearpathdata@gmail.com">
                  clearpathdata@gmail.com
                </a>
              </div>
              <div className="mt-1 text-neutral-800">
                Response time: Typically within 12–24 hours
              </div>
            </div>
          </div>
        </section>
      </Reveal> {/* ✅ NEW */}
    </div>
  );
}
