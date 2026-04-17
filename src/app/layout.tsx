import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

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
      className="text-sm text-neutral-300 hover:text-white transition"
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} min-h-screen bg-[#0F2044] text-neutral-950 antialiased`}>
        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0F2044]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
            {/* Logo + Name */}
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Clearpath Data" className="h-10 w-auto" />
              <div className="leading-[1.2]">
                <div className="text-base font-semibold">
                  <span className="text-white">Clear</span><span className="text-[#ef9f38]">path</span>
                </div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
              </div>
            </a>

            {/* Nav */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <NavItem href="#who-its-for">Who is this for</NavItem>
              <NavItem href="#how-it-works">How it works</NavItem>
              <NavItem href="#architecture">Architecture</NavItem>
              <NavItem href="#early-access">Early Access</NavItem>
              <NavItem href="#why-it-matters">Why it matters</NavItem>
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-[#64b8c0] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Contact us
            </a>
          </div>
        </header>

        {/* CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#0F2044] border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Clearpath Data" className="h-10 w-auto" />
                <div className="leading-[1.2]">
                  <div className="text-base font-semibold">
                    <span className="text-white">Clear</span><span className="text-[#ef9f38]">path</span>
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
                </div>
              </div>

              <p className="text-sm text-neutral-400 max-w-sm">
                Data-driven inventory analytics for modern retailers.
              </p>

              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Clearpath Data. All rights reserved.
              </p>

              <p className="text-sm text-neutral-600">
                Designed and operated as an independent analytics platform.
              </p>
            </div>

            {/* Right */}
            <div className="flex md:justify-end">
              <nav className="flex flex-col gap-2 text-sm text-neutral-400">
                <a href="#who-its-for" className="hover:text-[#64b8c0] transition">
                  Who is this for
                </a>
                <a href="#how-it-works" className="hover:text-[#64b8c0] transition">
                  How it works
                </a>
                <a href="#architecture" className="hover:text-[#64b8c0] transition">
                  Architecture
                </a>
                <a href="#early-access" className="hover:text-[#64b8c0] transition">
                  Early Access
                </a>
                <a href="#contact" className="hover:text-[#64b8c0] transition">
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
