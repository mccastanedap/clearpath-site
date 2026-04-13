"use client";

import { ReactNode } from "react";

interface MiniCardProps {
  title: string;
  children: ReactNode;
}

export default function MiniCard({ title, children }: MiniCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm">
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{children}</p>
    </div>
  );
}
