import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clearpath Data",
  description: "Data-driven inventory decision infrastructure for retailers.",
};

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-700 hover:text-neutral-950 transition"
    >
      {children}
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7F9FC] text-neutral-950 antialiased">
        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b border-neutral-200 bg-[#F7F9FC]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
            {/* Logo + Name */}
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Clearpath Data"
                className="h-8 w-auto"
              />
              <span className="font-semibold tracking-tight text-neutral-900">
                Clearpath Data
              </span>
            </a>

            {/* Nav - wraps on mobile (no disappearing) */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <NavItem href="#how-it-works">How it works</NavItem>
              <NavItem href="#architecture">Architecture</NavItem>
              <NavItem href="#who-its-for">Who this is for</NavItem>
              <NavItem href="#early-access">Early Access</NavItem>
              <NavItem href="#why-it-matters">Why it matters</NavItem>
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex w-fit rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 transition"
            >
              Contact us
            </a>
          </div>
        </header>

        {/* CONTENT CANVAS */}
        <main className="mx-auto max-w-6xl px-5 py-10">
          <div className="rounded-3xl bg-[#F7F9FC]">{children}</div>
        </main>

        {/* FOOTER (Figma-style) */}
        <footer className="mt-20 bg-[#F7F9FC]/80 border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.svg"
                  alt="Clearpath Data"
                  className="h-8 w-auto"
                />
                <span className="font-semibold text-neutral-900">
                  Clearpath Data
                </span>
              </div>

              <p className="text-sm text-neutral-700 max-w-sm">
                Data-driven inventory analytics for modern retailers.
              </p>

              <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} Clearpath Data. All rights reserved.
              </p>

              <p className="text-sm text-neutral-500">
                Designed and operated as an independent analytics platform.
              </p>
            </div>

            {/* Right */}
            <div className="flex md:justify-end">
              <nav className="flex flex-col gap-2 text-sm text-neutral-800">
                <a href="#how-it-works" className="hover:text-[#4ABFA5] transition">
                  How it works
                </a>
                <a href="#architecture" className="hover:text-[#4ABFA5] transition">
                  Architecture
                </a>
                <a href="#early-access" className="hover:text-[#4ABFA5] transition">
                  Early Access
                </a>
                <a href="#contact" className="hover:text-[#4ABFA5] transition">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
