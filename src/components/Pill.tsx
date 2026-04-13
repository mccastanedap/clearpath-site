"use client";

interface PillProps {
  label: string;
  sublabel?: string;
}

export default function Pill({ label, sublabel }: PillProps) {
  return (
    <div className="flex w-full max-w-xs flex-col items-center rounded-full border border-neutral-200 bg-white px-6 py-3 shadow-sm">
      <span className="text-sm font-semibold text-neutral-900">{label}</span>
      {sublabel && (
        <span className="mt-0.5 text-xs text-neutral-500">{sublabel}</span>
      )}
    </div>
  );
}
