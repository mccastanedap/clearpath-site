"use client";

import { ReactNode } from "react";

interface MiniCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
}

export default function MiniCard({ title, children, icon, dark = false }: MiniCardProps) {
  if (dark) {
    return (
      <div className="rounded-2xl bg-[#162540] px-6 py-6">
        {icon && <div className="mb-3 text-[#4ABFA5]">{icon}</div>}
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{children}</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm">
      {icon && <div className="mb-3 text-[#1F3A5F]">{icon}</div>}
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{children}</p>
    </div>
  );
}
