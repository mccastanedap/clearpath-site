"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your inventory challenges..."
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#64b8c0] focus:ring-2 focus:ring-[#64b8c0]/20 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="rounded-full bg-[#64b8c0] px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent ✓" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:clearpathdata@gmail.com" className="underline">
            clearpathdata@gmail.com
          </a>
        </p>
      )}
    </form>
  );
}
