"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#who-its-for", label: "Who is this for" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#architecture", label: "Architecture" },
  { href: "#early-access", label: "Early Access" },
  { href: "#why-it-matters", label: "Why it matters" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-neutral-100 transition"
      >
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[2px] bg-[#112b50] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-[999] shadow-xl transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="leading-[1.2]">
            <div className="text-base font-semibold">
              <span className="text-[#112b50]">Clear</span><span className="text-[#ef9f38]">path</span>
            </div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#64b8c0]">DATA</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#112b50" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-neutral-600 hover:text-[#112b50] border-b border-neutral-100 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-[#64b8c0] px-5 py-3 text-sm font-semibold text-white text-center hover:opacity-90 transition"
          >
            Contact us
          </a>
        </nav>
      </div>
    </div>
  );
}
