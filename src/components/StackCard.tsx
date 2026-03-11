import React from "react";

export default function StackCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-[#1F3A5F] bg-white px-6 py-5 text-center shadow-sm">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
