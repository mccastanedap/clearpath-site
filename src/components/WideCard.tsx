"use client";

import { ReactNode } from "react";

interface WideCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function WideCard({ title, subtitle, children }: WideCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-7 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-xs text-neutral-500">{subtitle}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{children}</p>
    </div>
  );
}
